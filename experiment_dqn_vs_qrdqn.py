"""
Comparison experiment: DQN vs QR-DQN on CartPole-v1

This script runs both algorithms with comparable settings and plots learning curves.
"""
from collections import defaultdict

import matplotlib.pyplot as plt
import numpy as np
import torch
import torch.nn as nn
import tqdm

from tensordict.nn import TensorDictSequential
from torchrl._utils import get_available_device
from torchrl.collectors import SyncDataCollector
from torchrl.data import Composite, LazyTensorStorage, TensorDictReplayBuffer
from torchrl.envs import ExplorationType, GymEnv, set_exploration_type, TransformedEnv
from torchrl.envs.transforms import DoubleToFloat, RewardSum, StepCounter
from torchrl.modules import EGreedyModule, MLP, QValueActor
from torchrl.modules.tensordict_module.qrdqn import QRDQNActor
from torchrl.objectives import DQNLoss, HardUpdate
from torchrl.objectives.qrdqn import QRDQNLoss


def make_env(env_name, device):
    """Create CartPole environment with standard transforms."""
    env = GymEnv(env_name, device=device)
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


def run_dqn(device, total_frames=100_000, seed=0):
    """Run DQN training and return metrics."""
    torch.manual_seed(seed)
    np.random.seed(seed)

    env = make_env("CartPole-v1", device)
    test_env = make_env("CartPole-v1", device)

    # Create DQN model
    obs_dim = env.observation_spec["observation"].shape[-1]
    num_actions = env.action_spec.space.n
    action_spec = env.action_spec

    mlp = MLP(
        in_features=obs_dim,
        out_features=num_actions,
        num_cells=[128, 128],
        activation_class=nn.ReLU,
        device=device,
    )

    model = QValueActor(
        module=mlp,
        spec=Composite(action=action_spec).to(device),
        in_keys=["observation"],
    )

    greedy_module = EGreedyModule(
        annealing_num_steps=50_000,
        eps_init=1.0,
        eps_end=0.05,
        spec=model.spec,
        device=device,
    )
    model_explore = TensorDictSequential(model, greedy_module)

    replay_buffer = TensorDictReplayBuffer(
        storage=LazyTensorStorage(10_000, device=device),
        batch_size=128,
    )

    loss_module = DQNLoss(
        value_network=model,
        loss_function="l2",
        delay_value=True,
    )
    loss_module.make_value_estimator(gamma=0.99, device=device)
    loss_module = loss_module.to(device)

    target_updater = HardUpdate(loss_module, value_network_update_interval=50)
    optimizer = torch.optim.Adam(loss_module.parameters(), lr=2.5e-4)

    collector = SyncDataCollector(
        create_env_fn=lambda: make_env("CartPole-v1", device),
        policy=model_explore,
        frames_per_batch=128,
        total_frames=total_frames,
        device=device,
        storing_device=device,
        init_random_frames=5_000,
    )

    # Training
    metrics = defaultdict(list)
    collected_frames = 0

    for data in tqdm.tqdm(
        collector, desc=f"DQN (seed={seed})", total=total_frames // 128
    ):
        data = data.reshape(-1)
        collected_frames += data.numel()
        greedy_module.step(data.numel())
        replay_buffer.extend(data)

        if collected_frames < 5_000:
            continue

        for _ in range(10):
            batch = replay_buffer.sample()
            loss_td = loss_module(batch)
            optimizer.zero_grad()
            loss_td["loss"].backward()
            optimizer.step()
            target_updater.step()

        # Log training rewards
        episode_rewards = data["next", "episode_reward"][data["next", "done"]]
        if len(episode_rewards) > 0:
            metrics["train_reward"].append(
                (collected_frames, episode_rewards.mean().item())
            )

        # Evaluation every 10k frames
        if collected_frames % 10_000 < 128:
            with torch.no_grad(), set_exploration_type(ExplorationType.DETERMINISTIC):
                model.eval()
                eval_reward = eval_model(model, test_env, 10)
                model.train()
                metrics["eval_reward"].append((collected_frames, eval_reward))

        collector.update_policy_weights_()

    collector.shutdown()
    env.close()
    test_env.close()

    return metrics


def run_qrdqn(device, total_frames=100_000, seed=0):
    """Run QR-DQN training and return metrics."""
    torch.manual_seed(seed)
    np.random.seed(seed)

    env = make_env("CartPole-v1", device)
    test_env = make_env("CartPole-v1", device)

    obs_dim = env.observation_spec["observation"].shape[-1]
    num_actions = env.action_spec.space.n
    action_spec = env.action_spec
    num_quantiles = 51

    net = QRNetwork(obs_dim, num_actions, num_quantiles).to(device)

    model = QRDQNActor(
        module=net,
        spec=Composite(action=action_spec).to(device),
        in_keys=["observation"],
    )

    greedy_module = EGreedyModule(
        annealing_num_steps=50_000,
        eps_init=1.0,
        eps_end=0.05,
        spec=model.spec,
        device=device,
    )
    model_explore = TensorDictSequential(model, greedy_module)

    replay_buffer = TensorDictReplayBuffer(
        storage=LazyTensorStorage(10_000, device=device),
        batch_size=128,
    )

    loss_module = QRDQNLoss(
        value_network=model,
        num_quantiles=num_quantiles,
        huber_kappa=1.0,
        delay_value=True,
    )
    loss_module.make_value_estimator(gamma=0.99, device=device)
    loss_module = loss_module.to(device)

    target_updater = HardUpdate(loss_module, value_network_update_interval=50)
    optimizer = torch.optim.Adam(loss_module.parameters(), lr=2.5e-4)

    collector = SyncDataCollector(
        create_env_fn=lambda: make_env("CartPole-v1", device),
        policy=model_explore,
        frames_per_batch=128,
        total_frames=total_frames,
        device=device,
        storing_device=device,
        init_random_frames=5_000,
    )

    # Training
    metrics = defaultdict(list)
    collected_frames = 0

    for data in tqdm.tqdm(
        collector, desc=f"QR-DQN (seed={seed})", total=total_frames // 128
    ):
        data = data.reshape(-1)
        collected_frames += data.numel()
        greedy_module.step(data.numel())
        replay_buffer.extend(data)

        if collected_frames < 5_000:
            continue

        for _ in range(10):
            batch = replay_buffer.sample()
            loss_td = loss_module(batch)
            optimizer.zero_grad()
            loss_td["loss"].backward()
            optimizer.step()
            target_updater.step()

        # Log training rewards
        episode_rewards = data["next", "episode_reward"][data["next", "done"]]
        if len(episode_rewards) > 0:
            metrics["train_reward"].append(
                (collected_frames, episode_rewards.mean().item())
            )

        # Evaluation every 10k frames
        if collected_frames % 10_000 < 128:
            with torch.no_grad(), set_exploration_type(ExplorationType.DETERMINISTIC):
                model.eval()
                eval_reward = eval_model(model, test_env, 10)
                model.train()
                metrics["eval_reward"].append((collected_frames, eval_reward))

        collector.update_policy_weights_()

    collector.shutdown()
    env.close()
    test_env.close()

    return metrics


def aggregate_metrics(all_metrics):
    """Aggregate metrics from multiple seeds."""
    # Get all unique frames
    all_frames = set()
    for metrics in all_metrics:
        for frame, _ in metrics["eval_reward"]:
            all_frames.add(frame)
    frames = sorted(all_frames)

    # Interpolate rewards at common frames
    rewards_per_seed = []
    for metrics in all_metrics:
        frames_m = [x[0] for x in metrics["eval_reward"]]
        rewards_m = [x[1] for x in metrics["eval_reward"]]
        # Simple: use rewards at matching frames
        rewards_interp = []
        for f in frames:
            # Find closest frame
            idx = min(range(len(frames_m)), key=lambda i: abs(frames_m[i] - f))
            if abs(frames_m[idx] - f) < 2000:  # Allow some tolerance
                rewards_interp.append(rewards_m[idx])
            else:
                rewards_interp.append(np.nan)
        rewards_per_seed.append(rewards_interp)

    rewards_array = np.array(rewards_per_seed)
    mean_rewards = np.nanmean(rewards_array, axis=0)
    std_rewards = np.nanstd(rewards_array, axis=0)

    return frames, mean_rewards, std_rewards


def plot_comparison(
    dqn_all_metrics, qrdqn_all_metrics, seeds, save_path="dqn_vs_qrdqn_cartpole.png"
):
    """Plot comparison of DQN vs QR-DQN with multiple seeds."""
    fig, ax = plt.subplots(1, 1, figsize=(10, 6))

    # Aggregate DQN metrics
    dqn_frames, dqn_mean, dqn_std = aggregate_metrics(dqn_all_metrics)
    qrdqn_frames, qrdqn_mean, qrdqn_std = aggregate_metrics(qrdqn_all_metrics)

    # Plot DQN
    ax.plot(dqn_frames, dqn_mean, "b-", label="DQN", linewidth=2)
    ax.fill_between(
        dqn_frames, dqn_mean - dqn_std, dqn_mean + dqn_std, alpha=0.2, color="blue"
    )

    # Plot QR-DQN
    ax.plot(qrdqn_frames, qrdqn_mean, "r-", label="QR-DQN", linewidth=2)
    ax.fill_between(
        qrdqn_frames,
        qrdqn_mean - qrdqn_std,
        qrdqn_mean + qrdqn_std,
        alpha=0.2,
        color="red",
    )

    ax.set_xlabel("Frames", fontsize=12)
    ax.set_ylabel("Evaluation Reward", fontsize=12)
    ax.set_title(f"DQN vs QR-DQN on CartPole-v1 ({len(seeds)} seeds)", fontsize=14)
    ax.legend(fontsize=11)
    ax.grid(True, alpha=0.3)
    ax.set_ylim(0, 550)

    plt.tight_layout()
    plt.savefig(save_path, dpi=150, bbox_inches="tight")
    tqdm.tqdm.write(f"Plot saved to {save_path}")
    plt.close()

    return save_path


def main():
    device = get_available_device()
    tqdm.tqdm.write(f"Using device: {device}")

    total_frames = 100_000
    seeds = [42, 123, 456]

    dqn_all_metrics = []
    qrdqn_all_metrics = []

    for seed in seeds:
        tqdm.tqdm.write(f"\n{'='*50}")
        tqdm.tqdm.write(f"Running seed {seed}")
        tqdm.tqdm.write("=" * 50)

        tqdm.tqdm.write("\nRunning DQN...")
        dqn_metrics = run_dqn(device, total_frames=total_frames, seed=seed)
        dqn_all_metrics.append(dqn_metrics)

        tqdm.tqdm.write("\nRunning QR-DQN...")
        qrdqn_metrics = run_qrdqn(device, total_frames=total_frames, seed=seed)
        qrdqn_all_metrics.append(qrdqn_metrics)

    # Print final results
    tqdm.tqdm.write(f"\n{'='*50}")
    tqdm.tqdm.write("RESULTS")
    tqdm.tqdm.write("=" * 50)

    dqn_finals = [m["eval_reward"][-1][1] for m in dqn_all_metrics]
    qrdqn_finals = [m["eval_reward"][-1][1] for m in qrdqn_all_metrics]

    tqdm.tqdm.write(f"DQN final eval rewards: {dqn_finals}")
    tqdm.tqdm.write(f"DQN mean: {np.mean(dqn_finals):.1f} ± {np.std(dqn_finals):.1f}")
    tqdm.tqdm.write(f"QR-DQN final eval rewards: {qrdqn_finals}")
    tqdm.tqdm.write(
        f"QR-DQN mean: {np.mean(qrdqn_finals):.1f} ± {np.std(qrdqn_finals):.1f}"
    )

    # Plot
    save_path = plot_comparison(dqn_all_metrics, qrdqn_all_metrics, seeds)

    return save_path


if __name__ == "__main__":
    main()
