# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

import torch
import torch.nn as nn
from tensordict.nn import TensorDictModule
from torchrl.data.tensor_specs import CategoricalBox
from torchrl.envs import (
    DoubleToFloat,
    EnvCreator,
    ExplorationType,
    GymEnv,
    ParallelEnv,
    RenameTransform,
    Resize,
    RewardSum,
    set_gym_backend,
    StepCounter,
    ToTensorImage,
    TransformedEnv,
    VecNorm,
)
from torchrl.modules import ActorValueOperator, MLP, ProbabilisticActor, ValueOperator
from torchrl.record import VideoRecorder


# ====================================================================
# Environment utils
# --------------------------------------------------------------------


def make_base_env(
    env_name="procgen:procgen-coinrun-v0",
    num_levels=200,
    start_level=0,
    distribution_mode="easy",
    gym_backend="gymnasium",
):
    """Create a base Procgen environment.

    Args:
        env_name: Procgen environment name (e.g., "procgen:procgen-coinrun-v0")
        num_levels: Number of unique levels to use for training
        start_level: Starting level index
        distribution_mode: Difficulty mode ("easy", "hard", "extreme")
        gym_backend: Gym backend to use

    Returns:
        TransformedEnv: The base environment with minimal transforms
    """
    with set_gym_backend(gym_backend):
        env = GymEnv(
            env_name,
            from_pixels=True,
            pixels_only=False,
            device="cpu",
            categorical_action_encoding=True,
            num_levels=num_levels,
            start_level=start_level,
            distribution_mode=distribution_mode,
        )
    env = TransformedEnv(env)
    return env


def make_parallel_env(
    env_name,
    num_envs,
    device,
    gym_backend,
    num_levels=200,
    start_level=0,
    distribution_mode="easy",
    is_test=False,
):
    """Create parallel Procgen environments with appropriate transforms.

    Args:
        env_name: Procgen environment name
        num_envs: Number of parallel environments
        device: Device to run environments on
        gym_backend: Gym backend to use
        num_levels: Number of unique levels (0 for unlimited in test mode)
        start_level: Starting level index
        distribution_mode: Difficulty mode
        is_test: Whether this is a test environment

    Returns:
        TransformedEnv: Parallel environment with all transforms applied
    """
    if is_test:
        # Use different levels for testing (generalization)
        test_start_level = start_level + num_levels
        test_num_levels = 0  # Unlimited levels for testing

        env = ParallelEnv(
            num_envs,
            EnvCreator(
                lambda: make_base_env(
                    env_name,
                    num_levels=test_num_levels,
                    start_level=test_start_level,
                    distribution_mode=distribution_mode,
                    gym_backend=gym_backend,
                )
            ),
            serial_for_single=True,
            device=device,
        )
    else:
        env = ParallelEnv(
            num_envs,
            EnvCreator(
                lambda: make_base_env(
                    env_name,
                    num_levels=num_levels,
                    start_level=start_level,
                    distribution_mode=distribution_mode,
                    gym_backend=gym_backend,
                )
            ),
            serial_for_single=True,
            device=device,
        )

    env = TransformedEnv(env)
    # Procgen outputs RGB images, process them
    env.append_transform(RenameTransform(in_keys=["pixels"], out_keys=["pixels_int"]))
    env.append_transform(ToTensorImage(in_keys=["pixels_int"], out_keys=["pixels"]))
    # Optionally convert to grayscale (comment out for RGB)
    # env.append_transform(GrayScale())
    env.append_transform(Resize(64, 64))  # Procgen default is 64x64
    env.append_transform(RewardSum())
    env.append_transform(
        StepCounter(max_steps=1000)
    )  # Procgen episodes are typically 1000 steps
    env.append_transform(DoubleToFloat())
    env.append_transform(VecNorm(in_keys=["pixels"]))

    return env


# ====================================================================
# Model utils
# --------------------------------------------------------------------


class IMPALAEncoder(nn.Module):
    """IMPALA-style CNN encoder as used in the CTRL paper.

    This encoder uses residual blocks with the architecture from the
    IMPALA paper, which is commonly used for Procgen environments.
    """

    def __init__(
        self,
        input_channels: int = 3,
        depths: list[int] = None,
        output_dim: int = 256,
    ):
        super().__init__()
        if depths is None:
            depths = [16, 32, 32]

        self.depths = depths

        # Build IMPALA-style conv blocks
        layers = []
        in_channels = input_channels

        for depth in depths:
            layers.append(
                nn.Conv2d(in_channels, depth, kernel_size=3, stride=1, padding=1)
            )
            layers.append(nn.MaxPool2d(kernel_size=3, stride=2, padding=1))
            # Two residual blocks
            layers.append(self._make_residual_block(depth))
            layers.append(self._make_residual_block(depth))
            in_channels = depth

        self.conv_layers = nn.Sequential(*layers)

        # Calculate flattened size
        # After 3 max pools with stride 2 on 64x64 input: 64 -> 32 -> 16 -> 8
        self.flatten_size = depths[-1] * 8 * 8

        self.fc = nn.Sequential(
            nn.Flatten(),
            nn.ReLU(),
            nn.Linear(self.flatten_size, output_dim),
            nn.ReLU(),
        )

    def _make_residual_block(self, channels: int) -> nn.Module:
        """Create a residual block with two conv layers."""
        return ResidualBlock(channels)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        x = self.conv_layers(x)
        x = self.fc(x)
        return x


class ResidualBlock(nn.Module):
    """Residual block with two conv layers."""

    def __init__(self, channels: int):
        super().__init__()
        self.conv1 = nn.Conv2d(channels, channels, kernel_size=3, stride=1, padding=1)
        self.conv2 = nn.Conv2d(channels, channels, kernel_size=3, stride=1, padding=1)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        residual = x
        x = nn.functional.relu(x)
        x = self.conv1(x)
        x = nn.functional.relu(x)
        x = self.conv2(x)
        return x + residual


def make_ctrl_ppo_modules(proof_environment, device, embedding_dim=256):
    """Create encoder, actor, and critic modules for CTRL+PPO.

    Args:
        proof_environment: Environment to get specs from
        device: Device to create modules on
        embedding_dim: Dimension of encoder output

    Returns:
        Tuple of (encoder_module, policy_module, value_module)
    """
    # Define input shape
    input_shape = proof_environment.observation_spec["pixels"].shape

    # Define distribution class and kwargs
    if isinstance(proof_environment.action_spec_unbatched.space, CategoricalBox):
        num_outputs = proof_environment.action_spec_unbatched.space.n
        distribution_class = torch.distributions.Categorical
        distribution_kwargs = {}
    else:
        raise ValueError("CTRL is designed for discrete action spaces (Procgen)")

    # Create IMPALA encoder
    input_channels = input_shape[0]  # Should be 3 for RGB
    encoder = IMPALAEncoder(
        input_channels=input_channels,
        depths=[16, 32, 32],
        output_dim=embedding_dim,
    ).to(device)

    # Wrap encoder as TensorDictModule
    encoder_module = TensorDictModule(
        module=encoder,
        in_keys=["pixels"],
        out_keys=["embedding"],
    )

    # Define policy head
    policy_net = MLP(
        in_features=embedding_dim,
        out_features=num_outputs,
        activation_class=nn.ReLU,
        num_cells=[],
        device=device,
    )
    policy_module = TensorDictModule(
        module=policy_net,
        in_keys=["embedding"],
        out_keys=["logits"],
    )

    # Add probabilistic sampling
    policy_module = ProbabilisticActor(
        policy_module,
        in_keys=["logits"],
        spec=proof_environment.full_action_spec_unbatched.to(device),
        distribution_class=distribution_class,
        distribution_kwargs=distribution_kwargs,
        return_log_prob=True,
        default_interaction_type=ExplorationType.RANDOM,
    )

    # Define value head
    value_net = MLP(
        activation_class=nn.ReLU,
        in_features=embedding_dim,
        out_features=1,
        num_cells=[],
        device=device,
    )
    value_module = ValueOperator(
        value_net,
        in_keys=["embedding"],
    )

    return encoder_module, policy_module, value_module


def make_ctrl_ppo_models(
    env_name,
    device,
    gym_backend,
    embedding_dim=256,
    num_levels=200,
    distribution_mode="easy",
):
    """Create complete actor-critic models for CTRL+PPO.

    Args:
        env_name: Procgen environment name
        device: Device to create models on
        gym_backend: Gym backend to use
        embedding_dim: Dimension of encoder output
        num_levels: Number of training levels
        distribution_mode: Difficulty mode

    Returns:
        Tuple of (encoder, actor, critic) modules
    """
    proof_environment = make_parallel_env(
        env_name,
        1,
        device=device,
        gym_backend=gym_backend,
        num_levels=num_levels,
        distribution_mode=distribution_mode,
    )

    encoder_module, policy_module, value_module = make_ctrl_ppo_modules(
        proof_environment,
        device=device,
        embedding_dim=embedding_dim,
    )

    # Wrap modules in ActorValueOperator for shared encoder
    actor_critic = ActorValueOperator(
        common_operator=encoder_module,
        policy_operator=policy_module,
        value_operator=value_module,
    )

    with torch.no_grad():
        td = proof_environment.fake_tensordict().expand(10)
        actor_critic(td)
        del td

    actor = actor_critic.get_policy_operator()
    critic = actor_critic.get_value_operator()

    del proof_environment

    # Return encoder separately for CTRL loss
    return encoder_module, actor, critic


# ====================================================================
# Evaluation utils
# --------------------------------------------------------------------


def dump_video(module):
    """Dump video if module is a VideoRecorder."""
    if isinstance(module, VideoRecorder):
        module.dump()


def eval_model(actor, test_env, num_episodes=10):
    """Evaluate model on test environment.

    Args:
        actor: Actor policy to evaluate
        test_env: Test environment
        num_episodes: Number of episodes to evaluate

    Returns:
        Mean episode reward
    """
    test_rewards = []
    for _ in range(num_episodes):
        td_test = test_env.rollout(
            policy=actor,
            auto_reset=True,
            auto_cast_to_device=True,
            break_when_any_done=True,
            max_steps=1000,
        )
        test_env.apply(dump_video)
        reward = td_test["next", "episode_reward"][td_test["next", "done"]]
        test_rewards.append(reward.cpu())
    del td_test
    return torch.cat(test_rewards, 0).mean()
