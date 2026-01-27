# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
"""
QR-DQN: Quantile Regression DQN for CartPole (fast convergence test).

This is a simplified version for testing convergence quickly.
For Atari experiments, use qrdqn_atari.py.
"""
from __future__ import annotations

import hydra
import torch
import torch.nn as nn
import tqdm
from omegaconf import DictConfig
from tensordict.nn import TensorDictSequential
from torchrl._utils import get_available_device
from torchrl.collectors import SyncDataCollector
from torchrl.data import LazyTensorStorage, TensorDictReplayBuffer
from torchrl.envs import ExplorationType, GymEnv, set_exploration_type, TransformedEnv
from torchrl.envs.transforms import DoubleToFloat, RewardSum, StepCounter
from torchrl.modules import EGreedyModule, MLP, QRDQNActor
from torchrl.objectives import HardUpdate
from torchrl.objectives.qrdqn import QRDQNLoss
from torchrl.record.loggers import generate_exp_name, get_logger


def make_env(env_name, device):
    """Create CartPole environment with standard transforms."""
    env = GymEnv(env_name, device=device)  # Use default one-hot encoding
    env = TransformedEnv(env)
    env.append_transform(DoubleToFloat())
    env.append_transform(RewardSum())
    env.append_transform(StepCounter())
    return env


class QRNetwork(nn.Module):
    """Network that outputs quantile values for each action."""

    def __init__(self, obs_dim, num_actions, num_quantiles, hidden_dim=128):
        super().__init__()
        self.net = MLP(
            in_features=obs_dim,
            out_features=num_quantiles * num_actions,
            num_cells=[hidden_dim, hidden_dim],
            activation_class=nn.ReLU,
        )
        self.num_quantiles = num_quantiles
        self.num_actions = num_actions

    def forward(self, x):
        out = self.net(x)
        return out.view(*x.shape[:-1], self.num_quantiles, self.num_actions)


def make_qrdqn_model(env, num_quantiles, device):
    """Create QR-DQN model for the environment."""
    from torchrl.data import Composite

    obs_dim = env.observation_spec["observation"].shape[-1]
    num_actions = env.action_spec.space.n
    action_spec = env.action_spec

    net = QRNetwork(obs_dim, num_actions, num_quantiles).to(device)

    actor = QRDQNActor(
        module=net,
        spec=Composite(action=action_spec).to(device),
        in_keys=["observation"],
    )
    return actor


def eval_model(actor, env, num_episodes=10):
    """Evaluate the model for a number of episodes."""
    rewards = []
    for _ in range(num_episodes):
        td = env.rollout(
            policy=actor,
            auto_reset=True,
            auto_cast_to_device=True,
            break_when_any_done=True,
            max_steps=500,
        )
        rewards.append(td["next", "episode_reward"][td["next", "done"]].sum().item())
    return sum(rewards) / len(rewards)


@hydra.main(config_path="", config_name="config_cartpole", version_base="1.1")
def main(cfg: DictConfig):
    device = torch.device(cfg.device) if cfg.device else get_available_device()
    tqdm.tqdm.write(f"Using device: {device}")

    # Create environment
    env = make_env(cfg.env.env_name, device)
    test_env = make_env(cfg.env.env_name, device)

    # Create model
    model = make_qrdqn_model(env, cfg.loss.num_quantiles, device)

    # Exploration module
    greedy_module = EGreedyModule(
        annealing_num_steps=cfg.collector.annealing_frames,
        eps_init=cfg.collector.eps_start,
        eps_end=cfg.collector.eps_end,
        spec=model.spec,
        device=device,
    )
    model_explore = TensorDictSequential(model, greedy_module)

    # Replay buffer
    replay_buffer = TensorDictReplayBuffer(
        storage=LazyTensorStorage(cfg.buffer.buffer_size, device=device),
        batch_size=cfg.buffer.batch_size,
    )

    # Loss module
    loss_module = QRDQNLoss(
        value_network=model,
        num_quantiles=cfg.loss.num_quantiles,
        huber_kappa=cfg.loss.huber_kappa,
        delay_value=True,
        double_qrdqn=cfg.loss.double_qrdqn,
    )
    loss_module.make_value_estimator(gamma=cfg.loss.gamma, device=device)
    loss_module = loss_module.to(device)

    # Target network updater
    target_updater = HardUpdate(
        loss_module, value_network_update_interval=cfg.loss.hard_update_freq
    )

    # Optimizer
    optimizer = torch.optim.Adam(loss_module.parameters(), lr=cfg.optim.lr)

    # Logger
    logger = None
    if cfg.logger.backend:
        exp_name = generate_exp_name("QR-DQN", cfg.env.env_name)
        logger = get_logger(
            cfg.logger.backend, logger_name="qrdqn", experiment_name=exp_name
        )

    # Collector
    collector = SyncDataCollector(
        create_env_fn=lambda: make_env(cfg.env.env_name, device),
        policy=model_explore,
        frames_per_batch=cfg.collector.frames_per_batch,
        total_frames=cfg.collector.total_frames,
        device=device,
        storing_device=device,
        init_random_frames=cfg.collector.init_random_frames,
    )

    # Training loop
    collected_frames = 0
    pbar = tqdm.tqdm(total=cfg.collector.total_frames)

    for data in collector:
        pbar.update(data.numel())
        data = data.reshape(-1)
        collected_frames += data.numel()
        greedy_module.step(data.numel())

        # Add to replay buffer
        replay_buffer.extend(data)

        # Skip training during random exploration
        if collected_frames < cfg.collector.init_random_frames:
            continue

        # Training
        for _ in range(cfg.loss.num_updates):
            batch = replay_buffer.sample()
            loss_td = loss_module(batch)
            loss = loss_td["loss"]

            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            target_updater.step()

        # Logging
        episode_rewards = data["next", "episode_reward"][data["next", "done"]]
        if len(episode_rewards) > 0:
            train_reward = episode_rewards.mean().item()
            pbar.set_description(
                f"reward: {train_reward:.1f}, eps: {greedy_module.eps:.2f}"
            )

            if logger:
                logger.log_scalar("train/reward", train_reward, collected_frames)
                logger.log_scalar("train/loss", loss.item(), collected_frames)
                logger.log_scalar("train/epsilon", greedy_module.eps, collected_frames)

        # Evaluation
        if collected_frames % cfg.logger.test_interval < cfg.collector.frames_per_batch:
            with torch.no_grad(), set_exploration_type(ExplorationType.DETERMINISTIC):
                model.eval()
                eval_reward = eval_model(model, test_env, cfg.logger.num_test_episodes)
                model.train()
                tqdm.tqdm.write(f"Eval reward @ {collected_frames}: {eval_reward:.1f}")
                if logger:
                    logger.log_scalar("eval/reward", eval_reward, collected_frames)

        collector.update_policy_weights_()

    # Final evaluation
    with torch.no_grad(), set_exploration_type(ExplorationType.DETERMINISTIC):
        model.eval()
        final_reward = eval_model(model, test_env, 20)
        tqdm.tqdm.write(f"Final eval reward: {final_reward:.1f}")

    collector.shutdown()
    env.close()
    test_env.close()


if __name__ == "__main__":
    main()
