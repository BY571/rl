# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

"""
This script implements Cross-Trajectory Representation Learning (CTRL)
combined with PPO for the Procgen benchmark.

CTRL is a self-supervised representation learning method that improves
zero-shot generalization by training encoders to recognize behavioral
similarity across trajectories.

Reference: "Cross-Trajectory Representation Learning for Zero-Shot Generalization in RL"
https://arxiv.org/abs/2106.02193
"""
from __future__ import annotations

import warnings

import hydra


@hydra.main(config_path="", config_name="config", version_base="1.1")
def main(cfg: DictConfig):  # noqa: F821

    import torch
    import torch.optim
    import tqdm

    from tensordict import TensorDict
    from tensordict.nn import CudaGraphModule

    from torchrl._utils import timeit
    from torchrl.collectors import SyncDataCollector
    from torchrl.data import LazyTensorStorage, TensorDictReplayBuffer
    from torchrl.data.replay_buffers.samplers import SamplerWithoutReplacement
    from torchrl.envs import ExplorationType, set_exploration_type
    from torchrl.objectives import ClipPPOLoss
    from torchrl.objectives.ctrl import CTRLLoss
    from torchrl.objectives.value.advantages import GAE
    from torchrl.record import VideoRecorder
    from torchrl.record.loggers import generate_exp_name, get_logger

    from utils import eval_model, make_ctrl_ppo_models, make_parallel_env

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
    mini_batch_size = cfg.loss.mini_batch_size
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

    # Create models
    encoder, actor, critic = make_ctrl_ppo_models(
        cfg.env.env_name,
        device=device,
        gym_backend=cfg.env.backend,
        embedding_dim=cfg.model.embedding_dim,
        num_levels=cfg.env.num_levels,
        distribution_mode=cfg.env.distribution_mode,
    )

    # Create collector
    collector = SyncDataCollector(
        create_env_fn=make_parallel_env(
            cfg.env.env_name,
            num_envs=cfg.env.num_envs,
            device=device,
            gym_backend=cfg.env.backend,
            num_levels=cfg.env.num_levels,
            distribution_mode=cfg.env.distribution_mode,
        ),
        policy=actor,
        frames_per_batch=frames_per_batch,
        total_frames=total_frames,
        device=device,
        max_frames_per_traj=-1,
        compile_policy={"mode": compile_mode, "warmup": 1} if compile_mode else False,
        cudagraph_policy={"warmup": 10} if cfg.compile.cudagraphs else False,
    )

    # Create data buffer
    sampler = SamplerWithoutReplacement()
    data_buffer = TensorDictReplayBuffer(
        storage=LazyTensorStorage(
            frames_per_batch, compilable=cfg.compile.compile, device=device
        ),
        sampler=sampler,
        batch_size=mini_batch_size,
        compilable=cfg.compile.compile,
    )

    # Create GAE advantage module
    adv_module = GAE(
        gamma=cfg.loss.gamma,
        lmbda=cfg.loss.gae_lambda,
        value_network=critic,
        average_gae=False,
        device=device,
        vectorized=not cfg.compile.compile,
    )

    # Create PPO loss module
    ppo_loss = ClipPPOLoss(
        actor_network=actor,
        critic_network=critic,
        clip_epsilon=cfg.loss.clip_epsilon,
        loss_critic_type=cfg.loss.loss_critic_type,
        entropy_coeff=cfg.loss.entropy_coeff,
        critic_coeff=cfg.loss.critic_coeff,
        normalize_advantage=True,
    )

    # Create CTRL loss module
    ctrl_loss = CTRLLoss(
        encoder_network=encoder,
        embedding_dim=cfg.model.embedding_dim,
        projection_dim=cfg.ctrl.projection_dim,
        num_prototypes=cfg.ctrl.num_prototypes,
        sinkhorn_iters=cfg.ctrl.sinkhorn_iters,
        temperature=cfg.ctrl.temperature,
        window_len=cfg.ctrl.window_len,
        myow_k=cfg.ctrl.myow_k,
        myow_coeff=cfg.ctrl.myow_coeff,
    )

    # Create optimizers
    # PPO optimizer (actor + critic)
    ppo_optim = torch.optim.Adam(
        ppo_loss.parameters(),
        lr=cfg.optim.lr,
        weight_decay=cfg.optim.weight_decay,
        eps=cfg.optim.eps,
    )

    # CTRL optimizer (encoder + projection + prototypes)
    ctrl_optim = torch.optim.Adam(
        ctrl_loss.parameters(),
        lr=cfg.optim.ctrl_lr,
        weight_decay=cfg.optim.weight_decay,
        eps=cfg.optim.eps,
    )

    # Create logger
    logger = None
    if cfg.logger.backend:
        exp_name = generate_exp_name(
            "CTRL-PPO", f"{cfg.logger.exp_name}_{cfg.env.env_name}"
        )
        logger = get_logger(
            cfg.logger.backend,
            logger_name="ctrl_ppo",
            experiment_name=exp_name,
            wandb_kwargs={
                "config": dict(cfg),
                "project": cfg.logger.project_name,
                "group": cfg.logger.group_name,
            },
        )
        logger_video = cfg.logger.video
    else:
        logger_video = False

    # Create test environment (unseen levels for generalization testing)
    test_env = make_parallel_env(
        cfg.env.env_name,
        1,
        device,
        is_test=True,
        gym_backend=cfg.env.backend,
        num_levels=cfg.env.num_levels,
        distribution_mode=cfg.env.distribution_mode,
    )
    if logger_video:
        test_env = test_env.insert_transform(
            0,
            VideoRecorder(logger, tag="rendering/test", in_keys=["pixels"], skip=4),
        )
    test_env.eval()

    # Compile if requested
    if compile_mode:
        adv_module = torch.compile(adv_module, mode=compile_mode)
        ppo_loss = torch.compile(ppo_loss, mode=compile_mode)
        ctrl_loss = torch.compile(ctrl_loss, mode=compile_mode)

    if cfg.compile.cudagraphs:
        warnings.warn(
            "CudaGraphModule is experimental and may lead to issues. "
            "Use at your own risk.",
            category=UserWarning,
        )
        adv_module = CudaGraphModule(adv_module, warmup=5)
        ppo_loss = CudaGraphModule(ppo_loss, warmup=5)
        ctrl_loss = CudaGraphModule(ctrl_loss, warmup=5)

    # Training loop
    collected_frames = 0
    pbar = tqdm.tqdm(total=total_frames)

    sampling_start = None
    num_mini_batches = frames_per_batch // mini_batch_size
    total_network_updates = (
        (total_frames // frames_per_batch) * cfg.loss.ppo_epochs * num_mini_batches
    )

    # Learning rate scheduling
    if cfg.optim.anneal_lr:
        lr_scheduler = torch.optim.lr_scheduler.LinearLR(
            ppo_optim,
            start_factor=1.0,
            end_factor=0.0,
            total_iters=total_network_updates,
        )
        ctrl_lr_scheduler = torch.optim.lr_scheduler.LinearLR(
            ctrl_optim,
            start_factor=1.0,
            end_factor=0.0,
            total_iters=total_network_updates,
        )

    for i, data in enumerate(collector):
        log_info = {}
        sampling_time = timeit.get_elapsed() if sampling_start else 0
        frames_in_batch = data.numel()
        collected_frames += frames_in_batch
        pbar.update(frames_in_batch)

        # Get training rewards
        episode_rewards = data["next", "episode_reward"][data["next", "done"]]
        if len(episode_rewards) > 0:
            episode_length = data["next", "step_count"][data["next", "done"]]
            log_info.update(
                {
                    "train/reward": episode_rewards.mean().item(),
                    "train/episode_length": episode_length.sum().item()
                    / len(episode_length),
                }
            )

        # Compute advantages
        with torch.no_grad(), timeit("advantage"):
            adv_module(data)
        data_reshape = data.reshape(-1)

        # PPO + CTRL training epochs
        losses = TensorDict(batch_size=[cfg.loss.ppo_epochs, num_mini_batches])

        with timeit("training"):
            for epoch in range(cfg.loss.ppo_epochs):
                data_buffer.extend(data_reshape)

                for mb_idx, batch in enumerate(data_buffer):
                    # PPO forward and backward
                    ppo_optim.zero_grad()
                    loss_td = ppo_loss(batch)

                    # Backward PPO losses
                    loss_ppo = (
                        loss_td["loss_objective"]
                        + loss_td["loss_entropy"]
                        + loss_td["loss_critic"]
                    )
                    loss_ppo.backward()
                    torch.nn.utils.clip_grad_norm_(
                        ppo_loss.parameters(), cfg.optim.max_grad_norm
                    )
                    ppo_optim.step()

                    # CTRL forward and backward
                    ctrl_optim.zero_grad()
                    ctrl_td = ctrl_loss(batch)
                    loss_ctrl = ctrl_td["loss_ctrl"] * cfg.ctrl.ctrl_coeff
                    loss_ctrl.backward()
                    torch.nn.utils.clip_grad_norm_(
                        ctrl_loss.parameters(), cfg.optim.max_grad_norm
                    )
                    ctrl_optim.step()

                    # Combine loss info
                    loss_td.update(ctrl_td)
                    losses[epoch, mb_idx] = loss_td.select(
                        "loss_objective",
                        "loss_critic",
                        "loss_entropy",
                        "loss_ctrl",
                        "loss_proto",
                        "loss_myow",
                        "entropy",
                        "clip_fraction",
                        "ESS",
                    ).detach()

                    if cfg.optim.anneal_lr:
                        lr_scheduler.step()
                        ctrl_lr_scheduler.step()

        # Log training info
        losses = losses.mean()
        log_info.update(
            {
                "train/loss_objective": losses["loss_objective"].item(),
                "train/loss_critic": losses["loss_critic"].item(),
                "train/loss_entropy": losses["loss_entropy"].item(),
                "train/loss_ctrl": losses["loss_ctrl"].item(),
                "train/loss_proto": losses["loss_proto"].item(),
                "train/loss_myow": losses["loss_myow"].item(),
                "train/entropy": losses["entropy"].item(),
                "train/clip_fraction": losses["clip_fraction"].item(),
                "train/ESS": losses["ESS"].item(),
                "train/lr": ppo_optim.param_groups[0]["lr"],
                "train/ctrl_lr": ctrl_optim.param_groups[0]["lr"],
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
                test_reward = eval_model(
                    actor, test_env, num_episodes=cfg.logger.num_test_episodes
                )
                log_info.update({"eval/reward": test_reward})
                actor.train()

        if logger:
            for key, value in log_info.items():
                logger.log_scalar(key, value, collected_frames)

        sampling_start = timeit.get_elapsed()

    collector.shutdown()
    test_env.close()


if __name__ == "__main__":
    main()
