# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

import importlib

import torch
import torch.nn

from tensordict.nn import AddStateIndependentNormalScale, TensorDictModule
from torchrl.envs import ExplorationType, RewardSum, StepCounter, TransformedEnv
from torchrl.envs.libs.mujoco_warp import MjWarpEnv
from torchrl.modules import MLP, ProbabilisticActor, TanhNormal, ValueOperator


# ====================================================================
# Environment utils
# --------------------------------------------------------------------


def make_env(cfg, device, num_envs=None):
    """Create a batched MjWarpEnv with transforms.

    Imports the task module (e.g. ``halfcheetah``) and uses its XML,
    obs_fn, reward_fn, and done_fn to build the environment.
    """
    if num_envs is None:
        num_envs = cfg.env.num_envs
    task_module = importlib.import_module(cfg.env.task)

    base_env = MjWarpEnv(
        task_module.XML,
        obs_fn=task_module.obs_fn,
        reward_fn=task_module.reward_fn,
        done_fn=task_module.done_fn,
        batch_size=[num_envs],
        device=device,
    )
    env = TransformedEnv(base_env)
    env.append_transform(StepCounter(max_steps=cfg.env.max_episode_steps))
    env.append_transform(RewardSum())
    return env


# ====================================================================
# Model utils
# --------------------------------------------------------------------


def make_ppo_models(env, cfg, device):
    """Create actor and critic networks with configurable hidden sizes."""
    input_shape = env.observation_spec["observation"].shape
    num_actions = env.action_spec_unbatched.shape[-1]

    hidden_sizes = list(cfg.network.hidden_sizes)
    activation_class = getattr(torch.nn, cfg.network.activation)

    # Actor: MLP -> loc, then AddStateIndependentNormalScale -> (loc, scale)
    policy_mlp = MLP(
        in_features=input_shape[-1],
        activation_class=activation_class,
        out_features=num_actions,
        num_cells=hidden_sizes,
        device=device,
    )

    for layer in policy_mlp.modules():
        if isinstance(layer, torch.nn.Linear):
            torch.nn.init.orthogonal_(layer.weight, 1.0)
            layer.bias.data.zero_()

    policy_mlp = torch.nn.Sequential(
        policy_mlp,
        AddStateIndependentNormalScale(num_actions, scale_lb=1e-8).to(device),
    )

    actor = ProbabilisticActor(
        TensorDictModule(
            module=policy_mlp,
            in_keys=["observation"],
            out_keys=["loc", "scale"],
        ),
        in_keys=["loc", "scale"],
        spec=env.full_action_spec_unbatched.to(device),
        distribution_class=TanhNormal,
        distribution_kwargs={
            "low": env.action_spec_unbatched.space.low.to(device),
            "high": env.action_spec_unbatched.space.high.to(device),
            "tanh_loc": False,
        },
        return_log_prob=True,
        default_interaction_type=ExplorationType.RANDOM,
    )

    # Critic: MLP -> scalar value
    value_mlp = MLP(
        in_features=input_shape[-1],
        activation_class=activation_class,
        out_features=1,
        num_cells=hidden_sizes,
        device=device,
    )

    for layer in value_mlp.modules():
        if isinstance(layer, torch.nn.Linear):
            torch.nn.init.orthogonal_(layer.weight, 0.01)
            layer.bias.data.zero_()

    critic = ValueOperator(value_mlp, in_keys=["observation"])

    return actor, critic


# ====================================================================
# Evaluation utils
# --------------------------------------------------------------------


def eval_model(actor, eval_env, num_episodes=3):
    """Evaluate policy deterministically on a separate env."""
    test_rewards = []
    for _ in range(num_episodes):
        td_test = eval_env.rollout(
            policy=actor,
            auto_reset=True,
            auto_cast_to_device=True,
            break_when_any_done=True,
            max_steps=10_000_000,
        )
        reward = td_test["next", "episode_reward"][td_test["next", "done"]]
        test_rewards.append(reward.cpu())
    del td_test
    return torch.cat(test_rewards, 0).mean()
