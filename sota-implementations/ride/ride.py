# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

"""PPO with RIDE intrinsic motivation on MiniGrid.

Implements `RIDE: Rewarding Impact-Driven Exploration for Procedurally-Generated
Environments <https://arxiv.org/abs/2002.12292>`_ (Raileanu & Rocktäschel, 2020).

The RIDE intrinsic reward (:class:`~torchrl.envs.transforms.RIDEReward`) augments the
extrinsic reward of a PPO agent; the embedding network it relies on is trained with the
ICM forward + inverse dynamics losses (:class:`~torchrl.objectives.ICMLoss`). Set
``intrinsic.enabled=false`` to recover the vanilla PPO baseline.
"""
from __future__ import annotations

import hydra
from torchrl._utils import get_available_device


@hydra.main(config_path="", config_name="config", version_base="1.1")
def main(cfg: DictConfig):  # noqa: F821
    import torch.optim
    import tqdm

    from tensordict import TensorDict
    from torchrl._utils import timeit
    from torchrl.collectors import SyncDataCollector
    from torchrl.data import LazyTensorStorage, TensorDictReplayBuffer
    from torchrl.data.replay_buffers.samplers import SamplerWithoutReplacement
    from torchrl.envs import ExplorationType, RIDEReward, set_exploration_type
    from torchrl.objectives import ClipPPOLoss, ICMLoss
    from torchrl.objectives.value.advantages import GAE
    from torchrl.record.loggers import generate_exp_name, get_logger
    from utils import eval_model, make_curiosity_models, make_env, make_ppo_models

    torch.set_float32_matmul_precision("high")

    device = (
        torch.device(cfg.optim.device) if cfg.optim.device else get_available_device()
    )

    total_frames = cfg.collector.total_frames
    frames_per_batch = cfg.collector.frames_per_batch
    mini_batch_size = cfg.loss.mini_batch_size
    test_interval = cfg.logger.test_interval

    # Create proof environment and models. The environments run on CPU (cheap MiniGrid
    # steps); only the networks and training live on ``device``. The collector casts the
    # collected batch to ``device`` for the policy.
    serial = cfg.env.serial
    env_device = cfg.env.device
    proof_env = make_env(
        cfg.env.env_name, 1, env_device, cfg.env.backend, serial=serial
    )
    actor, critic = make_ppo_models(proof_env, device=device)

    intrinsic_enabled = cfg.intrinsic.enabled
    ride_transform = icm_loss = icm_optim = None
    if intrinsic_enabled:
        feature_network, forward_model, inverse_model = make_curiosity_models(
            proof_env, device=device, embedding_dim=cfg.intrinsic.embedding_dim
        )
        icm_loss = ICMLoss(
            feature_network,
            forward_model,
            inverse_model,
            action_space="categorical",
            forward_loss_weight=cfg.intrinsic.forward_loss_weight,
            inverse_loss_weight=cfg.intrinsic.inverse_loss_weight,
        )
        icm_optim = torch.optim.Adam(icm_loss.parameters(), lr=cfg.intrinsic.lr)
        # The transform shares the embedding network with the loss, so the intrinsic
        # reward always uses the freshly trained representation.
        ride_transform = RIDEReward(
            feature_network,
            coef=cfg.intrinsic.coef,
            episodic=cfg.intrinsic.episodic,
            in_keys=["pixels"],
            count_key="image",
        )
    del proof_env

    collector = SyncDataCollector(
        create_env_fn=make_env(
            cfg.env.env_name,
            cfg.env.num_envs,
            env_device,
            cfg.env.backend,
            serial=serial,
        ),
        policy=actor,
        policy_device=device,
        env_device=env_device,
        storing_device=env_device,
        frames_per_batch=frames_per_batch,
        total_frames=total_frames,
        max_frames_per_traj=-1,
    )

    # On-policy data buffer
    data_buffer = TensorDictReplayBuffer(
        storage=LazyTensorStorage(frames_per_batch, device=device),
        sampler=SamplerWithoutReplacement(),
        batch_size=mini_batch_size,
    )

    # Advantage and PPO loss (operate on the augmented reward)
    adv_module = GAE(
        gamma=cfg.loss.gamma,
        lmbda=cfg.loss.gae_lambda,
        value_network=critic,
        average_gae=False,
        device=device,
    )
    loss_module = ClipPPOLoss(
        actor_network=actor,
        critic_network=critic,
        clip_epsilon=cfg.loss.clip_epsilon,
        loss_critic_type=cfg.loss.loss_critic_type,
        entropy_coeff=cfg.loss.entropy_coeff,
        critic_coeff=cfg.loss.critic_coeff,
        normalize_advantage=True,
    )
    optim = torch.optim.Adam(
        loss_module.parameters(), lr=cfg.optim.lr, eps=cfg.optim.eps
    )

    # Logger
    logger = None
    if cfg.logger.backend:
        exp_name = generate_exp_name(
            "RIDE", f"{cfg.logger.exp_name}_{cfg.env.env_name}"
        )
        logger = get_logger(
            cfg.logger.backend,
            logger_name="ride",
            experiment_name=exp_name,
            wandb_kwargs={
                "config": dict(cfg),
                "project": cfg.logger.project_name,
                "group": cfg.logger.group_name,
            },
        )

    test_env = make_env(
        cfg.env.env_name, 1, env_device, cfg.env.backend, is_test=True, serial=serial
    )
    test_env.eval()
    # Evaluation runs on the env device with a matching copy of the policy (the training
    # policy may live on a different device, e.g. GPU, than the CPU environments).
    from copy import deepcopy

    eval_actor = deepcopy(actor).to(env_device)

    # Main loop
    collected_frames = 0
    pbar = tqdm.tqdm(total=total_frames)
    num_mini_batches = frames_per_batch // mini_batch_size
    cfg_loss_ppo_epochs = cfg.loss.ppo_epochs
    losses = TensorDict(batch_size=[cfg_loss_ppo_epochs, num_mini_batches])

    collector_iter = iter(collector)
    total_iter = len(collector)
    for i in range(total_iter):
        timeit.printevery(1000, total_iter, erase=True)
        with timeit("collecting"):
            data = next(collector_iter)
        # Move the whole batch to the compute device once (envs collect on CPU).
        data = data.to(device)

        metrics_to_log = {}
        frames_in_batch = data.numel()
        collected_frames += frames_in_batch
        pbar.update(frames_in_batch)

        # Log *extrinsic* training reward (before augmentation)
        episode_rewards = data["next", "episode_reward"][data["next", "done"]]
        if len(episode_rewards) > 0:
            episode_length = data["next", "step_count"][data["next", "done"]]
            metrics_to_log.update(
                {
                    "train/extrinsic_return": episode_rewards.mean().item(),
                    "train/episode_length": episode_length.sum().item()
                    / len(episode_length),
                    "train/success_rate": (episode_rewards > 0).float().mean().item(),
                }
            )

        # RIDE: compute the intrinsic reward over whole trajectories and augment reward.
        if intrinsic_enabled:
            with timeit("intrinsic"):
                data = ride_transform(data)
                metrics_to_log["train/intrinsic_reward_mean"] = (
                    data["next", "intrinsic_reward"].mean().item()
                )

        with timeit("training"):
            for j in range(cfg_loss_ppo_epochs):
                with torch.no_grad(), timeit("adv"):
                    data = adv_module(data)
                data_reshape = data.reshape(-1)
                data_buffer.extend(data_reshape)

                for k, batch in enumerate(data_buffer):
                    batch = batch.to(device)

                    # PPO update (uses the RIDE-augmented reward through the advantage)
                    optim.zero_grad(set_to_none=True)
                    loss = loss_module(batch)
                    loss_sum = (
                        loss["loss_critic"]
                        + loss["loss_objective"]
                        + loss["loss_entropy"]
                    )
                    loss_sum.backward()
                    torch.nn.utils.clip_grad_norm_(
                        loss_module.parameters(), max_norm=cfg.optim.max_grad_norm
                    )
                    optim.step()
                    losses[j, k] = loss.select(
                        "loss_critic", "loss_entropy", "loss_objective"
                    ).detach()

                    # ICM update: train embedding / forward / inverse dynamics models
                    if intrinsic_enabled:
                        icm_optim.zero_grad(set_to_none=True)
                        icm_out = icm_loss(batch)
                        (icm_out["loss_forward"] + icm_out["loss_inverse"]).backward()
                        icm_optim.step()

        losses_mean = losses.apply(lambda x: x.float().mean(), batch_size=[])
        for key, value in losses_mean.items():
            metrics_to_log[f"train/{key}"] = value.item()
        if intrinsic_enabled:
            metrics_to_log["train/loss_forward"] = icm_out["loss_forward"].item()
            metrics_to_log["train/loss_inverse"] = icm_out["loss_inverse"].item()

        # Evaluation
        with (
            torch.no_grad(),
            set_exploration_type(ExplorationType.DETERMINISTIC),
            timeit("eval"),
        ):
            prev = (i - 1) * frames_in_batch
            if prev // test_interval < (i * frames_in_batch) // test_interval:
                eval_actor.load_state_dict(actor.state_dict())
                eval_actor.eval()
                test_reward = eval_model(
                    eval_actor, test_env, num_episodes=cfg.logger.num_test_episodes
                )
                metrics_to_log["eval/reward"] = test_reward.item()

        if logger:
            metrics_to_log.update(timeit.todict(prefix="time"))
            metrics_to_log["time/speed"] = pbar.format_dict["rate"]
            for key, value in metrics_to_log.items():
                logger.log_scalar(key, value, collected_frames)

        collector.update_policy_weights_()

    collector.shutdown()
    if not test_env.is_closed:
        test_env.close()


if __name__ == "__main__":
    main()
