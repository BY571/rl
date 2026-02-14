#!/usr/bin/env python
"""Verification experiment for Stable Contrastive RL implementation.

This script verifies that the Stable Contrastive RL implementation works correctly
by training on a simple goal-conditioned environment.
"""
import time

import torch
import torch.nn as nn
from tensordict.nn import TensorDictModule

from torchrl.data import LazyTensorStorage, TensorDictReplayBuffer
from torchrl.envs import (
    DoubleToFloat,
    EnvCreator,
    GymEnv,
    ParallelEnv,
    RewardSum,
    StepCounter,
    TransformedEnv,
)
from torchrl.objectives import StableContrastiveRLLoss


def make_goal_conditioned_env(env_name="Pendulum-v1", device="cpu"):
    """Create a goal-conditioned environment wrapper.

    For verification, we use the final observation as the goal.
    """
    env = GymEnv(env_name, device=device)
    env = TransformedEnv(env)
    env.append_transform(DoubleToFloat())
    env.append_transform(RewardSum())
    env.append_transform(StepCounter(max_steps=200))

    return env


class SAEncoderNet(nn.Module):
    """State-action encoder."""

    def __init__(self, obs_dim, action_dim, embed_dim, hidden_dim=256):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(obs_dim + action_dim, hidden_dim),
            nn.LayerNorm(hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.LayerNorm(hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, embed_dim),
        )
        # Cold initialization
        nn.init.uniform_(self.net[-1].weight, -1e-12, 1e-12)
        nn.init.zeros_(self.net[-1].bias)

    def forward(self, observation, action):
        x = torch.cat([observation, action], dim=-1)
        return self.net(x)


class GoalEncoderNet(nn.Module):
    """Goal encoder."""

    def __init__(self, goal_dim, embed_dim, hidden_dim=256):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(goal_dim, hidden_dim),
            nn.LayerNorm(hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.LayerNorm(hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, embed_dim),
        )
        # Cold initialization
        nn.init.uniform_(self.net[-1].weight, -1e-12, 1e-12)
        nn.init.zeros_(self.net[-1].bias)

    def forward(self, goal):
        return self.net(goal)


class ActorNet(nn.Module):
    """Actor network."""

    def __init__(self, obs_dim, goal_dim, action_dim, hidden_dim=256):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(obs_dim + goal_dim, hidden_dim),
            nn.LayerNorm(hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, hidden_dim),
            nn.LayerNorm(hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, action_dim),
            nn.Tanh(),
        )

    def forward(self, observation, goal):
        x = torch.cat([observation, goal], dim=-1)
        return self.net(x) * 2.0  # Scale for Pendulum action space


def run_verification_experiment(
    total_frames=50000,
    frames_per_batch=1000,
    batch_size=256,
    device="cuda:0",
):
    """Run verification experiment."""
    print("=" * 60)
    print("Stable Contrastive RL Verification Experiment")
    print("=" * 60)
    print(f"Device: {device}")
    print(f"Total frames: {total_frames}")
    print(f"Frames per batch: {frames_per_batch}")
    print(f"Batch size: {batch_size}")
    print()

    device = torch.device(device)

    # Create environment
    print("Creating environment...")
    env = ParallelEnv(
        4,
        EnvCreator(lambda: make_goal_conditioned_env("Pendulum-v1", device="cpu")),
        device=device,
    )

    # Get dimensions
    obs_dim = env.observation_spec["observation"].shape[-1]
    action_dim = env.action_spec.shape[-1]
    goal_dim = obs_dim  # Goals are observations
    embed_dim = 64

    print(f"Observation dim: {obs_dim}")
    print(f"Action dim: {action_dim}")
    print(f"Goal dim: {goal_dim}")
    print(f"Embedding dim: {embed_dim}")
    print()

    # Create networks
    print("Creating networks...")
    sa_encoder = TensorDictModule(
        SAEncoderNet(obs_dim, action_dim, embed_dim).to(device),
        in_keys=["observation", "action"],
        out_keys=["sa_embedding"],
    )

    goal_encoder = TensorDictModule(
        GoalEncoderNet(goal_dim, embed_dim).to(device),
        in_keys=["goal"],
        out_keys=["goal_embedding"],
    )

    actor = TensorDictModule(
        ActorNet(obs_dim, goal_dim, action_dim).to(device),
        in_keys=["observation", "goal"],
        out_keys=["action"],
    )

    # Create loss module
    print("Creating loss module...")
    loss_module = StableContrastiveRLLoss(
        actor_network=actor,
        sa_encoder=sa_encoder,
        goal_encoder=goal_encoder,
        gamma=0.99,
        actor_coeff=1.0,
        use_log_softmax=True,
    )

    # Create optimizer
    optimizer = torch.optim.Adam(
        list(actor.parameters())
        + list(sa_encoder.parameters())
        + list(goal_encoder.parameters()),
        lr=3e-4,
    )

    # Create replay buffer
    replay_buffer = TensorDictReplayBuffer(
        storage=LazyTensorStorage(100000, device=device),
        batch_size=batch_size,
    )

    # Create a simple random policy for data collection
    def random_policy(td):
        td["action"] = torch.rand(td.shape[0], action_dim, device=device) * 4.0 - 2.0
        return td

    # Collect initial data
    print("Collecting initial data...")
    env.reset()
    initial_frames = 5000
    collected = 0
    while collected < initial_frames:
        td = env.reset()
        for _ in range(200):
            td = random_policy(td)
            td = env.step(td)

            # Add goal (use next observation as goal for contrastive learning)
            td_store = td.clone()
            td_store["goal"] = td_store["next", "observation"]
            replay_buffer.extend(td_store.reshape(-1))
            collected += td.numel()

            if td["next", "done"].any():
                td = env.reset()

            if collected >= initial_frames:
                break

    print(f"Initial data collected: {collected} frames")
    print(f"Replay buffer size: {len(replay_buffer)}")
    print()

    # Training loop
    print("Starting training...")
    print("-" * 60)

    start_time = time.time()
    total_critic_loss = 0.0
    total_actor_loss = 0.0
    num_updates = 0
    update_interval = 10

    for frame_idx in range(0, total_frames, frames_per_batch):
        # Collect more data
        td = env.reset()
        for _ in range(frames_per_batch // 4):  # 4 parallel envs
            td = random_policy(td)
            td = env.step(td)

            td_store = td.clone()
            td_store["goal"] = td_store["next", "observation"]
            replay_buffer.extend(td_store.reshape(-1))

            if td["next", "done"].any():
                td = env.reset()

        # Training updates
        for _ in range(update_interval):
            batch = replay_buffer.sample()

            optimizer.zero_grad()
            loss_td = loss_module(batch)
            total_loss = loss_td["loss_critic"] + loss_td["loss_actor"]
            total_loss.backward()

            # Gradient clipping
            torch.nn.utils.clip_grad_norm_(
                list(actor.parameters())
                + list(sa_encoder.parameters())
                + list(goal_encoder.parameters()),
                1.0,
            )
            optimizer.step()

            total_critic_loss += loss_td["loss_critic"].item()
            total_actor_loss += loss_td["loss_actor"].item()
            num_updates += 1

        # Log progress
        if (frame_idx + frames_per_batch) % 10000 == 0:
            avg_critic_loss = total_critic_loss / num_updates
            avg_actor_loss = total_actor_loss / num_updates
            elapsed = time.time() - start_time
            fps = (frame_idx + frames_per_batch) / elapsed

            print(
                f"Frames: {frame_idx + frames_per_batch:6d} | "
                f"Critic Loss: {avg_critic_loss:.4f} | "
                f"Actor Loss: {avg_actor_loss:.4f} | "
                f"FPS: {fps:.0f}"
            )

    # Final summary
    elapsed = time.time() - start_time
    print("-" * 60)
    print()
    print("Training Complete!")
    print(f"Total time: {elapsed:.1f}s")
    print(f"Average FPS: {total_frames / elapsed:.0f}")
    print(f"Final Critic Loss: {total_critic_loss / num_updates:.4f}")
    print(f"Final Actor Loss: {total_actor_loss / num_updates:.4f}")

    # Verify losses are finite
    final_batch = replay_buffer.sample()
    with torch.no_grad():
        final_loss_td = loss_module(final_batch)

    print()
    print("Verification Checks:")
    print(
        f"  - Critic loss finite: {torch.isfinite(final_loss_td['loss_critic']).item()}"
    )
    print(
        f"  - Actor loss finite: {torch.isfinite(final_loss_td['loss_actor']).item()}"
    )
    print(f"  - Critic logits shape: {final_loss_td['critic_logits'].shape}")

    # Check gradients
    optimizer.zero_grad()
    test_loss_td = loss_module(final_batch)
    test_loss = test_loss_td["loss_critic"] + test_loss_td["loss_actor"]
    test_loss.backward()

    has_gradients = all(
        p.grad is not None and torch.isfinite(p.grad).all() for p in actor.parameters()
    )
    print(f"  - Gradients flow correctly: {has_gradients}")

    env.close()

    print()
    print("=" * 60)
    print("Verification PASSED!" if has_gradients else "Verification FAILED!")
    print("=" * 60)

    return has_gradients


if __name__ == "__main__":
    success = run_verification_experiment(
        total_frames=50000,
        frames_per_batch=1000,
        batch_size=256,
        device="cuda:0" if torch.cuda.is_available() else "cpu",
    )
    exit(0 if success else 1)
