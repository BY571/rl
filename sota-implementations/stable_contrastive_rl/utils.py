# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
"""Utility functions for Stable Contrastive RL."""
from __future__ import annotations

import torch
import torch.nn as nn
from tensordict.nn import TensorDictModule

from torchrl.envs import (
    CatTensors,
    DoubleToFloat,
    EnvCreator,
    GymEnv,
    ParallelEnv,
    RewardSum,
    set_gym_backend,
    StepCounter,
    TransformedEnv,
)


# ====================================================================
# Environment utils
# --------------------------------------------------------------------


def make_base_env(
    env_name: str = "FetchReach-v3",
    max_steps: int = 50,
    gym_backend: str = "gymnasium",
):
    """Create a base goal-conditioned environment.

    Args:
        env_name: Environment name (e.g., "FetchReach-v3", "PointMaze_UMaze-v3")
        max_steps: Maximum steps per episode
        gym_backend: Gym backend to use

    Returns:
        TransformedEnv: The base environment with minimal transforms
    """
    with set_gym_backend(gym_backend):
        env = GymEnv(
            env_name,
            device="cpu",
        )

    env = TransformedEnv(env)
    return env


def make_parallel_env(
    env_name: str,
    num_envs: int,
    device: torch.device,
    gym_backend: str,
    max_steps: int = 50,
    is_test: bool = False,
):
    """Create parallel goal-conditioned environments with appropriate transforms.

    Args:
        env_name: Environment name
        num_envs: Number of parallel environments
        device: Device to run environments on
        gym_backend: Gym backend to use
        max_steps: Maximum steps per episode
        is_test: Whether this is a test environment

    Returns:
        TransformedEnv: Parallel environment with all transforms applied
    """
    env = ParallelEnv(
        num_envs,
        EnvCreator(
            lambda: make_base_env(
                env_name,
                max_steps=max_steps,
                gym_backend=gym_backend,
            )
        ),
        serial_for_single=True,
        device=device,
    )

    env = TransformedEnv(env)

    # Convert double to float
    env.append_transform(DoubleToFloat())

    # Track episode rewards
    env.append_transform(RewardSum())

    # Track step count
    env.append_transform(StepCounter(max_steps=max_steps))

    # Concatenate observation and desired_goal for the policy
    # This assumes the environment has "observation" and "desired_goal" keys
    if "desired_goal" in env.observation_spec.keys():
        env.append_transform(
            CatTensors(
                in_keys=["observation", "desired_goal"],
                out_key="obs_goal",
                del_keys=False,
            )
        )
        # Also create a "goal" key that references desired_goal
        env.append_transform(
            CatTensors(
                in_keys=["desired_goal"],
                out_key="goal",
                del_keys=False,
            )
        )

    return env


# ====================================================================
# Model utils
# --------------------------------------------------------------------


class ContrastiveRLEncoderNet(nn.Module):
    """Encoder network for Stable Contrastive RL.

    This implements the recommended architecture from the paper:
    - Wide MLP with layer normalization
    - Cold initialization for the last layer
    """

    def __init__(
        self,
        input_dim: int,
        output_dim: int,
        hidden_dim: int = 1024,
        num_layers: int = 4,
        use_layer_norm: bool = True,
        cold_init: bool = True,
    ):
        super().__init__()

        layers = []
        in_features = input_dim

        for _ in range(num_layers - 1):
            layers.append(nn.Linear(in_features, hidden_dim))
            if use_layer_norm:
                layers.append(nn.LayerNorm(hidden_dim))
            layers.append(nn.ReLU())
            in_features = hidden_dim

        # Final layer
        final_layer = nn.Linear(in_features, output_dim)

        # Cold initialization (paper: UNIF[-1e-12, 1e-12])
        if cold_init:
            nn.init.uniform_(final_layer.weight, -1e-12, 1e-12)
            nn.init.zeros_(final_layer.bias)

        layers.append(final_layer)

        self.net = nn.Sequential(*layers)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.net(x)


class SAEncoderNet(nn.Module):
    """State-action encoder that concatenates observation and action."""

    def __init__(self, encoder: nn.Module):
        super().__init__()
        self.encoder = encoder

    def forward(self, observation: torch.Tensor, action: torch.Tensor) -> torch.Tensor:
        x = torch.cat([observation, action], dim=-1)
        return self.encoder(x)


class ActorNet(nn.Module):
    """Actor network that takes observation and goal, outputs action."""

    def __init__(
        self,
        obs_dim: int,
        goal_dim: int,
        action_dim: int,
        hidden_dim: int = 1024,
        use_layer_norm: bool = True,
    ):
        super().__init__()

        layers = [
            nn.Linear(obs_dim + goal_dim, hidden_dim),
        ]
        if use_layer_norm:
            layers.append(nn.LayerNorm(hidden_dim))
        layers.extend(
            [
                nn.ReLU(),
                nn.Linear(hidden_dim, hidden_dim),
            ]
        )
        if use_layer_norm:
            layers.append(nn.LayerNorm(hidden_dim))
        layers.extend(
            [
                nn.ReLU(),
                nn.Linear(hidden_dim, action_dim),
                nn.Tanh(),  # Bounded actions
            ]
        )

        self.net = nn.Sequential(*layers)

    def forward(self, observation: torch.Tensor, goal: torch.Tensor) -> torch.Tensor:
        x = torch.cat([observation, goal], dim=-1)
        return self.net(x)


def make_contrastive_rl_models(
    proof_environment,
    device: torch.device,
    embed_dim: int = 64,
    hidden_dim: int = 1024,
    num_layers: int = 4,
    use_layer_norm: bool = True,
    cold_init: bool = True,
):
    """Create actor and encoder modules for Stable Contrastive RL.

    Args:
        proof_environment: Environment to get specs from
        device: Device to create models on
        embed_dim: Embedding dimension for encoders
        hidden_dim: Hidden layer dimension
        num_layers: Number of MLP layers
        use_layer_norm: Whether to use layer normalization
        cold_init: Whether to use cold initialization

    Returns:
        Tuple of (actor, sa_encoder, goal_encoder) as TensorDictModules
    """
    # Get dimensions from environment specs
    obs_spec = proof_environment.observation_spec

    # Handle different observation key structures
    if "observation" in obs_spec.keys():
        obs_dim = obs_spec["observation"].shape[-1]
    elif "obs_goal" in obs_spec.keys():
        obs_dim = obs_spec["obs_goal"].shape[-1]
    else:
        # Fallback: use the first available key
        first_key = list(obs_spec.keys())[0]
        obs_dim = obs_spec[first_key].shape[-1]

    # Get goal dimension
    if "desired_goal" in obs_spec.keys():
        goal_dim = obs_spec["desired_goal"].shape[-1]
    elif "goal" in obs_spec.keys():
        goal_dim = obs_spec["goal"].shape[-1]
    else:
        goal_dim = obs_dim  # Assume goal has same dim as observation

    action_dim = proof_environment.action_spec.shape[-1]

    # Create state-action encoder
    sa_net = ContrastiveRLEncoderNet(
        input_dim=obs_dim + action_dim,
        output_dim=embed_dim,
        hidden_dim=hidden_dim,
        num_layers=num_layers,
        use_layer_norm=use_layer_norm,
        cold_init=cold_init,
    ).to(device)

    sa_encoder = TensorDictModule(
        SAEncoderNet(sa_net),
        in_keys=["observation", "action"],
        out_keys=["sa_embedding"],
    )

    # Create goal encoder
    goal_net = ContrastiveRLEncoderNet(
        input_dim=goal_dim,
        output_dim=embed_dim,
        hidden_dim=hidden_dim,
        num_layers=num_layers,
        use_layer_norm=use_layer_norm,
        cold_init=cold_init,
    ).to(device)

    goal_encoder = TensorDictModule(
        goal_net,
        in_keys=["goal"],
        out_keys=["goal_embedding"],
    )

    # Create actor
    actor_net = ActorNet(
        obs_dim=obs_dim,
        goal_dim=goal_dim,
        action_dim=action_dim,
        hidden_dim=hidden_dim,
        use_layer_norm=use_layer_norm,
    ).to(device)

    actor = TensorDictModule(
        actor_net,
        in_keys=["observation", "goal"],
        out_keys=["action"],
    )

    return actor, sa_encoder, goal_encoder


# ====================================================================
# Evaluation utils
# --------------------------------------------------------------------


def eval_model(actor, test_env, num_episodes: int = 10):
    """Evaluate model on test environment.

    Args:
        actor: Actor policy to evaluate
        test_env: Test environment
        num_episodes: Number of episodes to evaluate

    Returns:
        Tuple of (mean_reward, success_rate)
    """
    test_rewards = []
    successes = []

    for _ in range(num_episodes):
        td_test = test_env.rollout(
            policy=actor,
            auto_reset=True,
            auto_cast_to_device=True,
            break_when_any_done=True,
            max_steps=100,
        )

        # Get episode reward
        reward = td_test["next", "episode_reward"][td_test["next", "done"]]
        if len(reward) > 0:
            test_rewards.append(reward.cpu())

        # Check for success (if available)
        if ("next", "success") in td_test.keys():
            success = td_test["next", "success"][td_test["next", "done"]]
            if len(success) > 0:
                successes.extend(success.cpu().tolist())

    mean_reward = torch.cat(test_rewards, 0).mean().item() if test_rewards else 0.0
    success_rate = sum(successes) / len(successes) if successes else 0.0

    return mean_reward, success_rate
