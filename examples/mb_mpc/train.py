import time

import hydra
import numpy as np
import torch
import tqdm
from torchrl._utils import logger as torchrl_logger

from torchrl.envs import set_gym_backend
from torchrl.envs.utils import ExplorationType, set_exploration_type
from torchrl.record.loggers import generate_exp_name, get_logger

from utils import (
    make_collector,
    make_environment,
    make_planner,
    make_replay_buffer,
    make_world_model,
)


@hydra.main(config_path=".", config_name="config")
def main(cfg: "DictConfig"):  # noqa: F821
    set_gym_backend(cfg.env.backend).set()

    # Create logger
    exp_name = generate_exp_name("MB-MPC", cfg.logger.exp_name)
    logger = None
    if cfg.logger.backend:
        logger = get_logger(
            logger_type=cfg.logger.backend,
            logger_name="mb_mpc_logging",
            experiment_name=exp_name,
            wandb_kwargs={
                "mode": cfg.logger.mode,
                "config": dict(cfg),
                "project": cfg.logger.project_name,
                "group": cfg.logger.group_name,
            },
        )

    # Set seeds
    torch.manual_seed(cfg.env.seed)
    np.random.seed(cfg.env.seed)
    device = torch.device(cfg.optim.device)

    # Create environments
    train_env, eval_env = make_environment(
        cfg,
        cfg.env.train_num_envs,
        cfg.env.eval_num_envs,
    )

    # Create replay buffer
    replay_buffer = make_replay_buffer(
        batch_size=cfg.optim.batch_size,
        prb=cfg.replay_buffer.prb,
        buffer_size=cfg.replay_buffer.size,
        device="cpu",
    )

    # Create model
    mb_env = make_world_model(cfg, train_env, device)

    # Create planner
    # make we want to create a action noise wrapper for collector?
    planner = make_planner(cfg, mb_env, device)

    # Create collector
    collector = make_collector(cfg, train_env, actor_model_explore=planner)

    # Create loss
    # loss_module, target_net_updater = make_loss(cfg.loss, model)

    # # Create optimizer
    # optimizer_actor, optimizer_critic, optimizer_value = make_iql_optimizer(
    #     cfg.optim, loss_module
    # )

    # Main loop
    collected_frames = 0
    pbar = tqdm.tqdm(total=cfg.collector.total_frames)

    init_random_frames = cfg.collector.init_random_frames
    num_updates = int(
        cfg.collector.env_per_collector
        * cfg.collector.frames_per_batch
        * cfg.optim.utd_ratio
    )
    prb = cfg.replay_buffer.prb
    eval_iter = cfg.logger.eval_iter
    frames_per_batch = cfg.collector.frames_per_batch
    eval_rollout_steps = cfg.collector.max_frames_per_traj
    sampling_start = start_time = time.time()
    for tensordict in collector:
        sampling_time = time.time() - sampling_start
        pbar.update(tensordict.numel())
        # update weights of the inference policy
        collector.update_policy_weights_()

        tensordict = tensordict.view(-1)
        current_frames = tensordict.numel()
        # add to replay buffer
        replay_buffer.extend(tensordict.cpu())
        collected_frames += current_frames

        # optimization steps
        training_start = time.time()
        if collected_frames >= init_random_frames:
            for _ in range(num_updates):
                # sample from replay buffer
                sampled_tensordict = replay_buffer.sample().clone()
                if sampled_tensordict.device != device:
                    sampled_tensordict = sampled_tensordict.to(
                        device, non_blocking=True
                    )
                else:
                    sampled_tensordict = sampled_tensordict
                # compute losses
                # loss_info = loss_module(sampled_tensordict)
                loss_info = {}
                actor_loss = loss_info["loss_actor"]
                value_loss = loss_info["loss_value"]
                q_loss = loss_info["loss_qvalue"]

                # optimizer_actor.zero_grad()
                # actor_loss.backward()
                # optimizer_actor.step()

                # optimizer_value.zero_grad()
                # value_loss.backward()
                # optimizer_value.step()

                # optimizer_critic.zero_grad()
                # q_loss.backward()
                # optimizer_critic.step()

                # # update qnet_target params
                # target_net_updater.step()

                # update priority
                if prb:
                    replay_buffer.update_priority(sampled_tensordict)
        training_time = time.time() - training_start
        episode_rewards = tensordict["next", "episode_reward"][
            tensordict["next", "done"]
        ]

        # Logging
        metrics_to_log = {}
        if len(episode_rewards) > 0:
            episode_length = tensordict["next", "step_count"][
                tensordict["next", "done"]
            ]
            metrics_to_log["train/reward"] = episode_rewards.mean().item()
            metrics_to_log["train/episode_length"] = episode_length.sum().item() / len(
                episode_length
            )
        if collected_frames >= init_random_frames:
            metrics_to_log["train/q_loss"] = q_loss.detach()
            metrics_to_log["train/actor_loss"] = actor_loss.detach()
            metrics_to_log["train/value_loss"] = value_loss.detach()
            metrics_to_log["train/entropy"] = loss_info.get("entropy").detach()
            metrics_to_log["train/sampling_time"] = sampling_time
            metrics_to_log["train/training_time"] = training_time

        # Evaluation
        if abs(collected_frames % eval_iter) < frames_per_batch:
            with set_exploration_type(ExplorationType.MODE), torch.no_grad():
                eval_start = time.time()
                eval_rollout = eval_env.rollout(
                    eval_rollout_steps,
                    planner,
                    auto_cast_to_device=True,
                    break_when_any_done=True,
                )
                eval_time = time.time() - eval_start
                eval_reward = eval_rollout["next", "reward"].sum(-2).mean().item()
                metrics_to_log["eval/reward"] = eval_reward
                metrics_to_log["eval/time"] = eval_time
        if logger is not None:
            pass
            # log_metrics(logger, metrics_to_log, collected_frames)
        sampling_start = time.time()

    collector.shutdown()
    end_time = time.time()
    execution_time = end_time - start_time
    torchrl_logger.info(f"Training took {execution_time:.2f} seconds to finish")


if __name__ == "__main__":
    main()
