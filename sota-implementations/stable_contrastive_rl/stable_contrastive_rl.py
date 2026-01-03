# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

"""
Stable Contrastive RL for Goal-Conditioned Reinforcement Learning.

This script implements the contrastive RL algorithm from:
"Stabilizing Contrastive RL: Techniques for Robotic Goal Reaching from Offline Data"
https://arxiv.org/abs/2306.03346

The algorithm uses InfoNCE contrastive learning to learn a goal-conditioned
Q-function, with stabilization techniques including:
- Shallow and wide MLP architecture
- Layer normalization
- Cold initialization
- Large batch sizes
"""
from __future__ import annotations

import warnings

import hydra


@hydra.main(config_path="", config_name="config", version_base="1.1")
def main(cfg):  # noqa: C901

    import torch
    import torch.optim
    import tqdm

    from tensordict import TensorDict
    from tensordict.nn import CudaGraphModule

    from torchrl._utils import timeit
    from torchrl.collectors import SyncDataCollector
    from torchrl.data import LazyTensorStorage, TensorDictReplayBuffer
    from torchrl.envs import ExplorationType, set_exploration_type
    from torchrl.objectives import SoftUpdate, StableContrastiveRLLoss
    from torchrl.record.loggers import generate_exp_name, get_logger

    from utils import eval_model, make_contrastive_rl_models, make_parallel_env

    torch.set_float32_matmul_precision("high")

    # Set device
    device = cfg.optim.device
    if device in ("", None):
        if torch.cuda.is_available():
            device = "cuda:0"
        else:
            device = "cpu"
    device = torch.device(device)

    # Extract configuration
    total_frames = cfg.collector.total_frames
    frames_per_batch = cfg.collector.frames_per_batch
    init_random_frames = cfg.collector.init_random_frames
    batch_size = cfg.buffer.batch_size
    test_interval = cfg.logger.test_interval

    # Compile settings
    compile_mode = None
    if cfg.compile.compile:
        compile_mode = cfg.compile.compile_mode
        if compile_mode in ("", None):
            if cfg.compile.cudagraphs:
                compile_mode = "default"
            else:
                compile_mode = "reduce-overhead"

    # Create environments
    train_env = make_parallel_env(
        cfg.env.env_name,
        num_envs=cfg.env.num_envs,
        device=device,
        gym_backend=cfg.env.backend,
        max_steps=cfg.env.max_steps,
        is_test=False,
    )

    test_env = make_parallel_env(
        cfg.env.env_name,
        num_envs=1,
        device=device,
        gym_backend=cfg.env.backend,
        max_steps=cfg.env.max_steps,
        is_test=True,
    )

    # Create models
    actor, sa_encoder, goal_encoder = make_contrastive_rl_models(
        train_env,
        device=device,
        embed_dim=cfg.model.embed_dim,
        hidden_dim=cfg.model.hidden_dim,
        num_layers=cfg.model.num_layers,
        use_layer_norm=cfg.model.use_layer_norm,
        cold_init=cfg.model.cold_init,
    )

    # Create loss module
    loss_module = StableContrastiveRLLoss(
        actor_network=actor,
        sa_encoder=sa_encoder,
        goal_encoder=goal_encoder,
        gamma=cfg.loss.gamma,
        actor_coeff=cfg.loss.actor_coeff,
        entropy_coeff=cfg.loss.entropy_coeff,
        use_log_softmax=cfg.loss.use_log_softmax,
    )

    # Note: For contrastive RL, target networks are optional.
    # The SoftUpdate updater will handle target params if needed.
    # Uncomment below if using target networks:
    # target_sa_encoder = sa_encoder.clone()
    # target_goal_encoder = goal_encoder.clone()

    # Create collector
    collector = SyncDataCollector(
        create_env_fn=train_env,
        policy=actor,
        frames_per_batch=frames_per_batch,
        total_frames=total_frames,
        device=device,
        max_frames_per_traj=-1,
        init_random_frames=init_random_frames,
        compile_policy={"mode": compile_mode, "warmup": 1} if compile_mode else False,
        cudagraph_policy={"warmup": 10} if cfg.compile.cudagraphs else False,
    )

    # Create replay buffer
    replay_buffer = TensorDictReplayBuffer(
        storage=LazyTensorStorage(cfg.buffer.size, device=device),
        batch_size=batch_size,
    )

    # Create optimizer
    optimizer = torch.optim.Adam(
        list(actor.parameters())
        + list(sa_encoder.parameters())
        + list(goal_encoder.parameters()),
        lr=cfg.optim.lr,
        weight_decay=cfg.optim.weight_decay,
        eps=cfg.optim.eps,
    )

    # Create target network updater
    target_updater = SoftUpdate(
        loss_module,
        tau=cfg.optim.tau,
    )

    # Create logger
    logger = None
    if cfg.logger.backend:
        exp_name = generate_exp_name(
            "StableContrastiveRL", f"{cfg.logger.exp_name}_{cfg.env.env_name}"
        )
        logger = get_logger(
            cfg.logger.backend,
            logger_name="stable_contrastive_rl",
            experiment_name=exp_name,
            wandb_kwargs={
                "config": dict(cfg),
                "project": cfg.logger.project_name,
                "group": cfg.logger.group_name,
            },
        )

    # Compile if requested
    if compile_mode:
        loss_module = torch.compile(loss_module, mode=compile_mode)

    if cfg.compile.cudagraphs:
        warnings.warn(
            "CudaGraphModule is experimental and may lead to issues. "
            "Use at your own risk.",
            category=UserWarning,
        )
        loss_module = CudaGraphModule(loss_module, warmup=5)

    # Training loop
    collected_frames = 0
    pbar = tqdm.tqdm(total=total_frames)

    sampling_start = None
    updates_per_batch = frames_per_batch // batch_size

    for i, data in enumerate(collector):
        log_info = {}
        sampling_time = timeit.get_elapsed() if sampling_start else 0
        frames_in_batch = data.numel()
        collected_frames += frames_in_batch
        pbar.update(frames_in_batch)

        # Get training episode info
        episode_rewards = data["next", "episode_reward"][data["next", "done"]]
        if len(episode_rewards) > 0:
            episode_length = data["next", "step_count"][data["next", "done"]]
            log_info.update(
                {
                    "train/reward": episode_rewards.mean().item(),
                    "train/episode_length": episode_length.float().mean().item(),
                }
            )

        # Add data to replay buffer
        # For contrastive RL, we use next observation as the goal
        data_to_store = data.clone()
        if "goal" not in data_to_store.keys():
            data_to_store.set("goal", data_to_store.get(("next", "observation")))

        replay_buffer.extend(data_to_store.reshape(-1))

        # Skip training if not enough data
        if collected_frames < init_random_frames:
            sampling_start = timeit.get_elapsed()
            continue

        # Training updates
        losses = TensorDict(batch_size=[updates_per_batch])

        with timeit("training"):
            for update_idx in range(updates_per_batch):
                batch = replay_buffer.sample()

                # Ensure goal is set (use next observation if not present)
                if "goal" not in batch.keys():
                    batch.set("goal", batch.get(("next", "observation")))

                # Forward pass
                optimizer.zero_grad()
                loss_td = loss_module(batch)

                # Total loss
                total_loss = loss_td["loss_critic"] + loss_td["loss_actor"]
                total_loss.backward()

                # Gradient clipping
                torch.nn.utils.clip_grad_norm_(
                    list(actor.parameters())
                    + list(sa_encoder.parameters())
                    + list(goal_encoder.parameters()),
                    cfg.optim.max_grad_norm,
                )

                optimizer.step()

                # Soft update target networks
                target_updater.step()

                losses[update_idx] = loss_td.select(
                    "loss_critic", "loss_actor"
                ).detach()

        # Log training info
        losses = losses.mean()
        log_info.update(
            {
                "train/loss_critic": losses["loss_critic"].item(),
                "train/loss_actor": losses["loss_actor"].item(),
                "train/lr": optimizer.param_groups[0]["lr"],
                "train/sampling_time": sampling_time,
                "train/training_time": timeit.get_elapsed("training"),
            }
        )

        # Evaluation
        with torch.no_grad(), set_exploration_type(
            ExplorationType.DETERMINISTIC
        ), timeit("eval"):
            if ((i - 1) * frames_in_batch) // test_interval < (
                i * frames_in_batch
            ) // test_interval:
                actor.eval()
                mean_reward, success_rate = eval_model(
                    actor, test_env, num_episodes=cfg.logger.num_test_episodes
                )
                log_info.update(
                    {
                        "eval/reward": mean_reward,
                        "eval/success_rate": success_rate,
                    }
                )
                actor.train()

        if logger:
            for key, value in log_info.items():
                logger.log_scalar(key, value, collected_frames)

        sampling_start = timeit.get_elapsed()

    collector.shutdown()
    train_env.close()
    test_env.close()


if __name__ == "__main__":
    main()
