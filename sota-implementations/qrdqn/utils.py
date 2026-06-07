# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
"""Utility functions for QR-DQN training.

Reference: "Distributional Reinforcement Learning with Quantile Regression"
https://arxiv.org/abs/1710.10044
"""
from __future__ import annotations

import torch
import torch.nn as nn
from torchrl.envs import (
    CatFrames,
    DoubleToFloat,
    EndOfLifeTransform,
    GrayScale,
    GymEnv,
    NoopResetEnv,
    Resize,
    RewardSum,
    set_gym_backend,
    SignTransform,
    StepCounter,
    ToTensorImage,
    TransformedEnv,
    VecNorm,
)
from torchrl.modules import ConvNet, MLP, QRDQNActor
from torchrl.record import VideoRecorder


# ====================================================================
# Environment utils
# --------------------------------------------------------------------


def make_env(env_name, frame_skip, device, gym_backend, is_test=False):
    """Create an Atari environment with standard preprocessing.

    Args:
        env_name: Name of the Atari environment (e.g., "ALE/Pong-v5")
        frame_skip: Number of frames to skip between actions
        device: Device to put the environment on
        gym_backend: Gym backend to use (e.g., "gymnasium")
        is_test: If True, skips end-of-life and reward clipping transforms

    Returns:
        TransformedEnv: The preprocessed environment
    """
    with set_gym_backend(gym_backend):
        env = GymEnv(
            env_name,
            frame_skip=frame_skip,
            from_pixels=True,
            pixels_only=False,
            device=device,
            categorical_action_encoding=True,
        )
    env = TransformedEnv(env)
    env.append_transform(NoopResetEnv(noops=30, random=True))
    if not is_test:
        env.append_transform(EndOfLifeTransform())
        env.append_transform(SignTransform(in_keys=["reward"]))
    env.append_transform(ToTensorImage())
    env.append_transform(GrayScale())
    env.append_transform(Resize(84, 84))
    env.append_transform(CatFrames(N=4, dim=-3))
    env.append_transform(RewardSum())
    env.append_transform(StepCounter(max_steps=4500))
    env.append_transform(DoubleToFloat())
    env.append_transform(VecNorm(in_keys=["pixels"]))
    return env


# ====================================================================
# Model utils
# --------------------------------------------------------------------


class QuantileNetwork(nn.Module):
    """Network that outputs quantile values for each action.

    The network architecture follows the original DQN paper but outputs
    num_quantiles values for each action instead of a single Q-value.

    Args:
        cnn: Convolutional network for feature extraction
        mlp: MLP that outputs [num_quantiles * num_actions] values
        num_quantiles: Number of quantiles to estimate
        num_actions: Number of actions
    """

    def __init__(
        self,
        cnn: nn.Module,
        mlp: nn.Module,
        num_quantiles: int,
        num_actions: int,
    ):
        super().__init__()
        self.cnn = cnn
        self.mlp = mlp
        self.num_quantiles = num_quantiles
        self.num_actions = num_actions

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """Forward pass.

        Args:
            x: Input tensor of shape [batch, channels, height, width]

        Returns:
            Quantile values of shape [batch, num_quantiles, num_actions]
        """
        features = self.cnn(x)
        output = self.mlp(features)
        # Reshape from [batch, num_quantiles * num_actions] to [batch, num_quantiles, num_actions]
        batch_shape = output.shape[:-1]
        return output.view(*batch_shape, self.num_quantiles, self.num_actions)


def make_qrdqn_modules_pixels(proof_environment, num_quantiles: int, device):
    """Create QR-DQN modules for pixel observations.

    Args:
        proof_environment: Environment to extract specs from
        num_quantiles: Number of quantiles for the distribution
        device: Device to create the model on

    Returns:
        DistributionalQValueActor: The QR-DQN actor module
    """
    # Define input shape
    input_shape = proof_environment.observation_spec["pixels"].shape
    env_specs = proof_environment.specs
    num_actions = env_specs["input_spec", "full_action_spec", "action"].space.n
    action_spec = env_specs["input_spec", "full_action_spec", "action"]

    # Define CNN backbone (same as DQN)
    cnn = ConvNet(
        activation_class=torch.nn.ReLU,
        num_cells=[32, 64, 64],
        kernel_sizes=[8, 4, 3],
        strides=[4, 2, 1],
        device=device,
    )

    # Get CNN output shape
    cnn_output = cnn(torch.ones(input_shape, device=device))

    # Define MLP head outputting quantile values
    mlp = MLP(
        in_features=cnn_output.shape[-1],
        activation_class=torch.nn.ReLU,
        out_features=num_quantiles * num_actions,
        num_cells=[512],
        device=device,
    )

    # Create the quantile network
    quantile_net = QuantileNetwork(cnn, mlp, num_quantiles, num_actions)

    # Create the QR-DQN actor
    qvalue_actor = QRDQNActor(
        module=quantile_net,
        spec=action_spec,
        in_keys=["pixels"],
        action_space="categorical",
        action_value_key="action_value",
    )

    return qvalue_actor


def make_qrdqn_model(env_name, gym_backend, frame_skip, num_quantiles, device):
    """Create a QR-DQN model for an Atari environment.

    Args:
        env_name: Name of the Atari environment
        gym_backend: Gym backend to use
        frame_skip: Number of frames to skip
        num_quantiles: Number of quantiles for the distribution
        device: Device to create the model on

    Returns:
        DistributionalQValueActor: The QR-DQN actor module
    """
    proof_environment = make_env(
        env_name, frame_skip, gym_backend=gym_backend, device=device
    )
    qvalue_module = make_qrdqn_modules_pixels(
        proof_environment, num_quantiles=num_quantiles, device=device
    )
    del proof_environment
    return qvalue_module


# ====================================================================
# Evaluation utils
# --------------------------------------------------------------------


def eval_model(actor, test_env, num_episodes=3):
    """Evaluate the model for a number of episodes.

    Args:
        actor: The policy to evaluate
        test_env: The test environment
        num_episodes: Number of episodes to run

    Returns:
        float: Mean reward over episodes
    """
    test_rewards = torch.zeros(num_episodes, dtype=torch.float32)
    for i in range(num_episodes):
        td_test = test_env.rollout(
            policy=actor,
            auto_reset=True,
            auto_cast_to_device=True,
            break_when_any_done=True,
            max_steps=10_000_000,
        )
        test_env.apply(dump_video)
        reward = td_test["next", "episode_reward"][td_test["next", "done"]]
        test_rewards[i] = reward.sum()
    del td_test
    return test_rewards.mean()


def dump_video(module):
    """Dump video if module is a VideoRecorder."""
    if isinstance(module, VideoRecorder):
        module.dump()
