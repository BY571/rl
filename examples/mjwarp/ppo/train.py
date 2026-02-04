# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

"""PPO training on MjWarpEnv (GPU-batched MuJoCo via MuJoCo Warp).

This script uses direct ``step_and_maybe_reset`` for data collection rather
than ``SyncDataCollector``.  Since MjWarpEnv already runs batched on the same
GPU as the policy, the collector's per-iteration bookkeeping adds overhead
without providing a device-transfer benefit.  Benchmarks (see
``bench_collector_vs_direct.py``) show ~20% higher FPS with direct stepping at
the rollout length used here (16 steps/env).

Usage::

    # Run with defaults (no logger)
    python examples/mjwarp/ppo/train.py

    # Override config values
    python examples/mjwarp/ppo/train.py env.num_envs=2048 collector.total_frames=10_000_000

    # With tensorboard
    python examples/mjwarp/ppo/train.py logger.backend=tensorboard

    # With wandb
    python examples/mjwarp/ppo/train.py logger.backend=wandb

Requirements::

    pip install mujoco mujoco-warp warp-lang hydra-core
"""
from __future__ import annotations

import hydra
from torchrl._utils import get_available_device


@hydra.main(config_path="", config_name="config", version_base="1.1")
def main(cfg: DictConfig):  # noqa: F821

    import time

    import torch
    import torch.nn
    import tqdm

    from tensordict import TensorDict
    from torchrl.data import LazyTensorStorage, TensorDictReplayBuffer
    from torchrl.data.replay_buffers.samplers import SamplerWithoutReplacement
    from torchrl.envs import ExplorationType, set_exploration_type
    from torchrl.objectives import ClipPPOLoss, group_optimizers
    from torchrl.objectives.value.advantages import GAE
    from torchrl.record.loggers import generate_exp_name, get_logger
    from utils import eval_model, make_env, make_ppo_models

    torch.set_float32_matmul_precision("high")

    device = (
        torch.device(cfg.optim.device) if cfg.optim.device else get_available_device()
    )

    # Derived constants
    frames_per_batch = cfg.collector.frames_per_batch
    total_frames = cfg.collector.total_frames
    mini_batch_size = cfg.loss.mini_batch_size
    ppo_epochs = cfg.loss.ppo_epochs
    steps_per_env = frames_per_batch // cfg.env.num_envs
    num_batches = total_frames // frames_per_batch
    num_mini_batches = frames_per_batch // mini_batch_size
    total_network_updates = num_batches * ppo_epochs * num_mini_batches

    # --- Environment ---
    env = make_env(cfg, device)

    # --- Eval environment (single env for deterministic eval) ---
    eval_env = make_env(cfg, device, num_envs=1)
    eval_env.eval()

    # --- Models ---
    actor, critic = make_ppo_models(env, cfg, device)

    # --- GAE advantage estimator ---
    adv_module = GAE(
        gamma=cfg.loss.gamma,
        lmbda=cfg.loss.gae_lambda,
        value_network=critic,
        average_gae=False,
        device=device,
    )

    # --- PPO loss ---
    loss_module = ClipPPOLoss(
        actor_network=actor,
        critic_network=critic,
        clip_epsilon=cfg.loss.clip_epsilon,
        entropy_coeff=cfg.loss.entropy_coef,
        critic_coeff=cfg.loss.critic_coef,
        normalize_advantage=True,
    )

    # --- Optimizers (grouped, following SOTA pattern) ---
    actor_optim = torch.optim.Adam(
        actor.parameters(), lr=torch.tensor(cfg.optim.lr, device=device), eps=1e-5
    )
    critic_optim = torch.optim.Adam(
        critic.parameters(), lr=torch.tensor(cfg.optim.lr, device=device), eps=1e-5
    )
    optimizer = group_optimizers(actor_optim, critic_optim)
    del actor_optim, critic_optim

    # --- Data buffer for PPO mini-batch sampling ---
    data_buffer = TensorDictReplayBuffer(
        storage=LazyTensorStorage(frames_per_batch, device=device),
        sampler=SamplerWithoutReplacement(),
        batch_size=mini_batch_size,
    )

    # --- Logger ---
    logger = None
    if cfg.logger.backend:
        exp_name = generate_exp_name("PPO", cfg.logger.exp_name)
        logger = get_logger(
            cfg.logger.backend,
            logger_name="ppo",
            experiment_name=exp_name,
            wandb_kwargs={
                "config": dict(cfg),
                "project": cfg.logger.project_name,
                "group": cfg.logger.group_name,
            },
        )

    # --- LR annealing state ---
    cfg_optim_lr = torch.tensor(cfg.optim.lr, device=device)
    cfg_optim_anneal_lr = cfg.optim.anneal_lr
    max_grad_norm = cfg.loss.max_grad_norm
    num_network_updates = 0

    # --- Loss tracking ---
    losses = TensorDict(batch_size=[ppo_epochs, num_mini_batches])

    # --- Print config ---
    print(f"Device: {device}")
    print(f"Num envs: {cfg.env.num_envs}")
    print(f"Frames per batch: {frames_per_batch}")
    print(f"Total frames: {total_frames}")
    print(f"Logger: {cfg.logger.backend or 'none'}")
    print()

    # --- Training loop ---
    collected_frames = 0
    td = env.reset()

    pbar = tqdm.tqdm(total=total_frames, unit="frames", unit_scale=True)
    t_start = time.perf_counter()

    for _ in range(num_batches):
        t_collect_start = time.perf_counter()

        # ----- Collect rollout by stepping env directly -----
        rollout_tds = []
        for _ in range(steps_per_env):
            with torch.no_grad():
                td = actor(td)
            transition_td, td = env.step_and_maybe_reset(td)
            rollout_tds.append(transition_td.clone())

        # Stack into (num_envs, steps_per_env)
        data = torch.stack(rollout_tds, dim=1)
        frames_in_batch = data.numel()
        collected_frames += frames_in_batch

        t_collect_end = time.perf_counter()
        collect_time = t_collect_end - t_collect_start

        # ----- Metrics dict -----
        metrics_to_log = {}

        # Training rewards
        episode_end = data["next", "done"].squeeze(-1)
        if episode_end.any():
            episode_rewards = data["next", "episode_reward"][episode_end]
            episode_lengths = data["next", "step_count"][episode_end].float()
            metrics_to_log["train/reward"] = episode_rewards.mean().item()
            metrics_to_log["train/episode_length"] = episode_lengths.mean().item()

        # ----- PPO update -----
        t_train_start = time.perf_counter()

        for j in range(ppo_epochs):
            with torch.no_grad():
                data = adv_module(data)

            data_buffer.extend(data.reshape(-1))

            for k, batch in enumerate(data_buffer):
                # LR annealing
                alpha = 1.0
                if cfg_optim_anneal_lr:
                    alpha = 1.0 - (num_network_updates / total_network_updates)
                    for group in optimizer.param_groups:
                        group["lr"] = cfg_optim_lr * alpha
                num_network_updates += 1

                optimizer.zero_grad(set_to_none=True)
                loss = loss_module(batch)
                total_loss = (
                    loss["loss_objective"] + loss["loss_entropy"] + loss["loss_critic"]
                )
                total_loss.backward()
                torch.nn.utils.clip_grad_norm_(loss_module.parameters(), max_grad_norm)
                optimizer.step()

                losses[j, k] = loss.select(
                    "loss_critic", "loss_entropy", "loss_objective"
                ).detach()

        t_train_end = time.perf_counter()
        train_time = t_train_end - t_train_start

        # ----- Loss metrics -----
        losses_mean = losses.apply(lambda x: x.float().mean(), batch_size=[])
        for key, value in losses_mean.items():
            metrics_to_log[f"train/{key}"] = value.item()
        metrics_to_log["train/lr"] = alpha * cfg_optim_lr.item()
        metrics_to_log["train/clip_epsilon"] = cfg.loss.clip_epsilon

        # ----- Timing metrics -----
        elapsed = time.perf_counter() - t_start
        fps = collected_frames / elapsed
        metrics_to_log["time/fps"] = fps
        metrics_to_log["time/collect"] = collect_time
        metrics_to_log["time/train"] = train_time

        # ----- Evaluation -----
        prev_frames = collected_frames - frames_in_batch
        if (prev_frames // cfg.logger.test_interval) < (
            collected_frames // cfg.logger.test_interval
        ):
            with torch.no_grad(), set_exploration_type(ExplorationType.DETERMINISTIC):
                actor.eval()
                eval_reward = eval_model(actor, eval_env, cfg.logger.num_test_episodes)
                metrics_to_log["eval/reward"] = eval_reward.item()
                actor.train()
            print(
                f"\n  [Eval @ {collected_frames:,} frames] "
                f"reward: {eval_reward.item():.2f}"
            )

        # ----- Log to backend -----
        if logger:
            for key, value in metrics_to_log.items():
                logger.log_scalar(key, value, collected_frames)

        # ----- Progress bar -----
        desc = f"FPS: {fps:,.0f}"
        if "train/reward" in metrics_to_log:
            desc += f" | reward: {metrics_to_log['train/reward']:.2f}"
        if "eval/reward" in metrics_to_log:
            desc += f" | eval: {metrics_to_log['eval/reward']:.2f}"
        pbar.set_description(desc)
        pbar.update(frames_in_batch)

    pbar.close()
    elapsed = time.perf_counter() - t_start
    print(f"\nTraining complete: {collected_frames:,} frames in {elapsed:.1f}s")
    print(f"Average FPS: {collected_frames / elapsed:,.0f}")

    eval_env.close()
    env.close()


if __name__ == "__main__":
    main()
