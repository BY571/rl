# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

from dataclasses import dataclass

import torch
import torch.nn
import torch.optim

from tensordict import TensorDict, TensorDictBase
from tensordict.nn import (
    dispatch,
    EnsembleModule,
    InteractionType,
    TensorDictModule,
    TensorDictSequential,
)
from tensordict.nn.distributions import NormalParamExtractor
from tensordict.utils import NestedKey
from torch import nn

from torchrl.collectors import SyncDataCollector
from torchrl.data import (
    BoundedTensorSpec,
    CompositeSpec,
    LazyMemmapStorage,
    TensorDictPrioritizedReplayBuffer,
    TensorDictReplayBuffer,
    UnboundedContinuousTensorSpec,
)
from torchrl.envs import (
    CatTensors,
    Compose,
    DMControlEnv,
    DoubleToFloat,
    EnvCreator,
    InitTracker,
    ModelBasedEnvBase,
    ParallelEnv,
    RewardSum,
    TransformedEnv,
)
from torchrl.envs.libs.gym import GymEnv, set_gym_backend

from torchrl.envs.utils import ExplorationType

from torchrl.modules import (
    MLP,
    SafeModule,
    SafeProbabilisticModule,
    SafeProbabilisticTensorDictSequential,
    TanhNormal,
    WorldModelWrapper,
)

from torchrl.modules.planners import CEMPlanner  # , MPPIPlanner
from torchrl.objectives.common import LossModule

from torchrl.objectives.utils import _reduce, distance_loss, ValueEstimators


def env_maker(cfg, device="cpu"):
    lib = cfg.env.backend
    if lib in ("gym", "gymnasium"):
        with set_gym_backend(lib):
            return GymEnv(
                cfg.env.name,
                device=device,
            )
    elif lib == "dm_control":
        env = DMControlEnv(cfg.env.name, cfg.env.task)
        return TransformedEnv(
            env, CatTensors(in_keys=env.observation_spec.keys(), out_key="observation")
        )
    else:
        raise NotImplementedError(f"Unknown lib {lib}.")


def apply_env_transforms(
    env,
):
    transformed_env = TransformedEnv(
        env,
        Compose(
            InitTracker(),
            DoubleToFloat(),
            RewardSum(),
        ),
    )
    return transformed_env


def make_environment(cfg, train_num_envs=1, eval_num_envs=1):
    """Make environments for training and evaluation."""
    parallel_env = ParallelEnv(
        train_num_envs,
        EnvCreator(lambda: env_maker(cfg)),
        serial_for_single=True,
    )
    parallel_env.set_seed(cfg.env.seed)

    train_env = apply_env_transforms(parallel_env)

    eval_env = TransformedEnv(
        ParallelEnv(
            eval_num_envs,
            EnvCreator(lambda: env_maker(cfg)),
            serial_for_single=True,
        ),
        train_env.transform.clone(),
    )
    return train_env, eval_env


def make_world_model(cfg, train_env, device="cpu"):

    model = MLP(
        in_features=6, out_features=8, num_cells=(32, 32), activation_class=nn.ReLU
    )
    model = SafeModule(
        model, in_keys=["observation", "action"], out_keys=["ensemble_output"]
    )
    ensemble = EnsembleModule(model, num_copies=3)

    dist_class = TanhNormal
    observation_spec = BoundedTensorSpec(shape=torch.Size([3]), low=-1.0, high=1.0)
    dist_kwargs = {
        "min": -1.0,  # action_spec.space.low,
        "max": 1.0,  # action_spec.space.high,
    }

    actor_extractor = NormalParamExtractor()
    actor_extractor = TensorDictModule(
        actor_extractor, in_keys="ensemble_output", out_keys=["loc", "scale"]
    )
    ensemble_model = TensorDictSequential(ensemble, actor_extractor)

    ensemble_model = SafeProbabilisticTensorDictSequential(
        ensemble_model,
        SafeProbabilisticModule(
            in_keys=["loc", "scale"],
            out_keys=["observation"],
            spec=observation_spec,
            distribution_class=dist_class,
            distribution_kwargs=dist_kwargs,
            default_interaction_type=InteractionType.RANDOM,
        ),
    )

    reward_model = MLP(
        in_features=6, out_features=1, num_cells=(32, 32), activation_class=nn.ReLU
    )
    reward_model = SafeModule(
        reward_model, in_keys=["observation", "action"], out_keys=["reward"]
    )

    data = TensorDict(
        {"observation": torch.randn(10, 4), "action": torch.randn(10, 2)},
        batch_size=[
            10,
        ],
    )

    ensemble_model(data)
    reward_model(data)

    world_model = WorldModelWrapper(ensemble_model, reward_model)

    class MyMBEnv(ModelBasedEnvBase):
        def __init__(self, world_model, device="cpu", dtype=None, batch_size=None):
            super().__init__(
                world_model, device=device, dtype=dtype, batch_size=batch_size
            )
            self.observation_spec = CompositeSpec(
                observation=UnboundedContinuousTensorSpec((4,))
            )

            self.action_spec = UnboundedContinuousTensorSpec((2,))
            self.reward_spec = UnboundedContinuousTensorSpec((1,))

        def _reset(self, tensordict: TensorDict) -> TensorDict:
            tensordict = TensorDict(
                {},
                batch_size=self.batch_size,
                device=self.device,
            )
            for key in list(self.observation_spec.keys()):
                if key not in list(tensordict.keys()):
                    tensordict = tensordict.update(self.observation_spec.rand())
            return tensordict

        def _step(
            self,
            tensordict: TensorDict,
        ) -> TensorDict:
            # step method requires to be immutable
            tensordict_out = tensordict.clone(recurse=False)
            # Compute world state
            if self.world_model_params is not None:
                tensordict_out = self.world_model(
                    tensordict_out,
                    params=self.world_model_params,
                    buffers=self.world_model_buffers,
                )
            else:
                tensordict_out = self.world_model(tensordict_out)
            out_tensordict = TensorDict(
                {
                    "observation": tensordict_out["observation"].mean(0),
                    "reward": tensordict_out["reward"].mean(0),
                    "action": tensordict_out["action"].mean(
                        0
                    ),  # gets repeated due to ensemble
                    "done": tensordict_out["done"].float().mean(0).bool(),
                },
                batch_size=tensordict.batch_size,
            )
            return out_tensordict

    mb_env = MyMBEnv(world_model)
    return mb_env


def make_planner(cfg, mb_env, device="cpu"):
    planner = CEMPlanner(
        env=mb_env, planning_horizon=10, optim_steps=10, num_candidates=100, top_k=10
    )
    return planner


def make_replay_buffer(
    batch_size,
    prb=False,
    buffer_size=1000000,
    scratch_dir=None,
    device="cpu",
    prefetch=3,
):
    if prb:
        replay_buffer = TensorDictPrioritizedReplayBuffer(
            alpha=0.7,
            beta=0.5,
            pin_memory=False,
            prefetch=prefetch,
            storage=LazyMemmapStorage(
                buffer_size,
                scratch_dir=scratch_dir,
                device=device,
            ),
            batch_size=batch_size,
        )
    else:
        replay_buffer = TensorDictReplayBuffer(
            pin_memory=False,
            prefetch=prefetch,
            storage=LazyMemmapStorage(
                buffer_size,
                scratch_dir=scratch_dir,
                device=device,
            ),
            batch_size=batch_size,
        )
    return replay_buffer


def make_collector(cfg, train_env, actor_model_explore):
    """Make collector."""
    collector = SyncDataCollector(
        train_env,
        actor_model_explore,
        frames_per_batch=cfg.collector.frames_per_batch,
        init_random_frames=cfg.collector.init_random_frames,
        max_frames_per_traj=cfg.collector.max_frames_per_traj,
        total_frames=cfg.collector.total_frames,
        device=cfg.collector.device,
    )
    collector.set_seed(cfg.env.seed)
    return collector


class EnsembleWMLoss(LossModule):
    """Ensemble Dynamics Model Loss module + Reward Model Loss module."""

    @dataclass
    class _AcceptedKeys:
        """Maintains default values for all configurable tensordict keys.

        This class defines which tensordict keys can be set using '.set_keys(key_name=key_value)' and their
        default values.

        Attributes:
            action (NestedKey): The input tensordict key where the action is expected.
                Defaults to ``"action"``.
            state_action_value (NestedKey): The input tensordict key where the state action value is expected.
                Will be used for the underlying value estimator. Defaults to ``"state_action_value"``.
            priority (NestedKey): The input tensordict key where the target priority is written to.
                Defaults to ``"td_error"``.
            reward (NestedKey): The input tensordict key where the reward is expected.
                Will be used for the underlying value estimator. Defaults to ``"reward"``.
            done (NestedKey): The key in the input TensorDict that indicates
                whether a trajectory is done. Will be used for the underlying value estimator.
                Defaults to ``"done"``.
            terminated (NestedKey): The key in the input TensorDict that indicates
                whether a trajectory is terminated. Will be used for the underlying value estimator.
                Defaults to ``"terminated"``.
        """

        action: NestedKey = "action"
        reward: NestedKey = "reward"
        done: NestedKey = "done"
        terminated: NestedKey = "terminated"

    default_keys = _AcceptedKeys()
    default_value_estimator = ValueEstimators.TD0
    out_keys = [
        "loss_dynamics_model",
        "loss_reward_model",
    ]

    def __init__(
        self,
        ensemble_dynamics_network: TensorDictModule,
        reward_model_network: TensorDictModule,
        *,
        single_ensemble_batch_size: int = 256,
        reduction: str = None,
    ) -> None:
        if reduction is None:
            reduction = "mean"
        super().__init__()
        self._in_keys = None

        self.convert_to_functional(
            ensemble_dynamics_network,
            "ensemble_dynamics_network",
            create_target_params=False,
        )

        self.convert_to_functional(
            reward_model_network,
            "reward_model_network",
            create_target_params=False,
            compare_against=ensemble_dynamics_network,
        )

        self.single_ensemble_batch_size = single_ensemble_batch_size
        self.reduction = reduction

    def _set_in_keys(self):
        keys = [
            self.tensor_keys.action,
            ("next", self.tensor_keys.reward),
            ("next", self.tensor_keys.done),
            ("next", self.tensor_keys.terminated),
            *self.actor_network.in_keys,
            *[("next", key) for key in self.actor_network.in_keys],
            *self.qvalue_network.in_keys,
        ]
        self._in_keys = list(set(keys))

    @property
    def in_keys(self):
        if self._in_keys is None:
            self._set_in_keys()
        return self._in_keys

    @in_keys.setter
    def in_keys(self, values):
        self._in_keys = values

    def dynamics_model_loss(self, tensordict):

        # we want to train each member of the ensemble on a different batch
        # sample batch size is batch size * num_ensemble_members

        # get obs and actions
        tensordict_input = tensordict.select(
            *self.ensemble_dynamics_network.in_keys, strict=False
        )
        target_td = tensordict.select(("next", "observation"), strict=False)
        # we want to train each member of the ensemble on a different batch
        target_td = target_td.apply(
            lambda x: x.unsqueeze(0).repeat(3, 1, 1),
            batch_size=(
                3,
                30,
            ),
        )

        with ExplorationType == ExplorationType.RANDOM:
            dist = self.ensemble_dynamics_network.get_dist(tensordict_input)

        log_prob = dist.log_prob(target_td)

        extracted_ensemble_log_probs = self.extract_ensemble_batch(
            log_prob, self.single_ensemble_batch_size
        )

        loss_dynamics_model = -extracted_ensemble_log_probs

        loss_dynamics_model = _reduce(loss_dynamics_model, reduction=self.reduction)
        return loss_dynamics_model, {}

    def reward_model_loss(self, tensordict):
        tensordict = tensordict.clone(False)

        reward = tensordict.select(self.reward_key, strict=False)

        reward_pred = self.reward_model_network(tensordict)

        loss_reward_model = distance_loss(reward_pred, reward, loss_function="l2")

        loss_reward_model = _reduce(loss_reward_model, reduction=self.reduction)
        return loss_reward_model, {}

    @dispatch
    def forward(self, tensordict: TensorDictBase) -> TensorDictBase:

        loss_dynamics_model, metadata_actor = self.dynamics_model_loss(tensordict)
        loss_reward_model, metadata_value = self.reward_model_loss(tensordict)

        if not loss_dynamics_model.shape == loss_reward_model.shape:
            raise RuntimeError(
                f"QVal and actor loss have different shape: {loss_dynamics_model.shape} and {loss_reward_model.shape}"
            )
        td_out = TensorDict(
            source={
                "loss_dynamics_model": loss_dynamics_model,
                "loss_reward_model": loss_reward_model,
            },
            batch_size=[],
        )
        return td_out

    def extract_ensemble_batch(self, log_probs, batch_size):
        """
        Extracts segments from a 2D tensor based on a defined number of segments and segment length.
        Each segment is extracted from the consecutive blocks of columns in the tensor, where
        the starting column of each segment is determined by the segment index multiplied by
        the segment length.

        Parameters:
        - tensor (torch.Tensor): A 2D tensor of shape [N, M] from which segments are to be extracted.
                                `N` is the number of rows (segments) and `M` is the total number of columns.
        - num_segments (int): The number of segments to extract from the tensor. This should match
                            the first dimension of the tensor.
        - segment_length (int): The length of each segment to be extracted. The product of `num_segments`
                                and `segment_length` should not exceed the second dimension of the tensor.

        Returns:
        - extracted_segments (torch.Tensor): A 2D tensor where each row contains a segment extracted
                                            from the original tensor. The shape of the returned tensor
                                            is [num_segments, segment_length].

        Example:
        >>> tensor = torch.randn(3, 30)  # A tensor of shape [3, 30]
        >>> num_segments = 3
        >>> segment_length = 10
        >>> extracted_segments = extract_segments(tensor, num_segments, segment_length)
        >>> print(extracted_segments.shape)
        torch.Size([3, 10])
        """
        num_segments = log_probs.size(0)
        # segment_length = 10  # should be original batch size

        # Create row indices (one for each segment)
        row_indices = torch.arange(num_segments)

        # Create column indices for each segment
        col_indices = (
            torch.arange(batch_size).unsqueeze(0)
            + torch.arange(num_segments).unsqueeze(1) * batch_size
        )

        # Advanced indexing
        return log_probs[row_indices[:, None], col_indices]
