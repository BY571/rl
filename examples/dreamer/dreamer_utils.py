# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
import tempfile
from contextlib import nullcontext

# from torchrl.record.loggers import Logger
# from torchrl.record.recorder import VideoRecorder

import torch

# from dataclasses import dataclass, field as dataclass_field
# from typing import Any, Callable, Optional, Sequence, Union

import torch.nn as nn
from tensordict.nn import InteractionType
from torchrl.collectors import SyncDataCollector
from torchrl.data import TensorDictReplayBuffer
from torchrl.data.replay_buffers.storages import LazyMemmapStorage

from torchrl.data.tensor_specs import (
    CompositeSpec,
    # DiscreteTensorSpec,
    UnboundedContinuousTensorSpec,
)
from torchrl.envs import ParallelEnv

# from torchrl.envs.common import EnvBase
from torchrl.envs.env_creator import EnvCreator
from torchrl.envs.libs.dm_control import DMControlEnv
from torchrl.envs.libs.gym import GymEnv, set_gym_backend
from torchrl.envs.model_based.dreamer import DreamerEnv
from torchrl.envs.transforms import (
    Compose,
    # CenterCrop,
    DoubleToFloat,
    FrameSkipTransform,
    GrayScale,
    # NoopResetEnv,
    ObservationNorm,
    RandomCropTensorDict,
    Resize,
    # RewardScaling,
    RewardSum,
    ToTensorImage,
    TransformedEnv,
    # UnsqueezeTransform,
)
from torchrl.envs.transforms.transforms import TensorDictPrimer  # FlattenObservation
from torchrl.envs.utils import ExplorationType, set_exploration_type
from torchrl.modules import (
    MLP,
    # NoisyLinear,
    # NormalParamWrapper,
    SafeModule,
    SafeProbabilisticModule,
    SafeProbabilisticTensorDictSequential,
    SafeSequential,
)
from torchrl.modules.distributions import TanhNormal
from torchrl.modules.models.model_based import (
    DenseDecoder,
    DenseEncoder,
    DreamerActor,
    ObsDecoder,
    ObsEncoder,
    RSSMPosterior,
    RSSMPrior,
    RSSMRollout,
)
from torchrl.modules.tensordict_module.exploration import AdditiveGaussianWrapper
from torchrl.modules.tensordict_module.world_models import WorldModelWrapper


# TODO make env with action repeat transform
def _make_env(cfg, device):
    lib = cfg.env.backend
    if lib in ("gym", "gymnasium"):
        with set_gym_backend(lib):
            return GymEnv(
                cfg.env.name,
                device=device,
            )
    elif lib == "dm_control":
        env = DMControlEnv(cfg.env.name, cfg.env.task, from_pixels=cfg.env.from_pixels)
        return env
    else:
        raise NotImplementedError(f"Unknown lib {lib}.")


def transform_env(cfg, env, parallel_envs, dummy=False):
    env = TransformedEnv(env)
    if cfg.env.from_pixels:
        # transforms pixel from 0-255 to 0-1 (uint8 to float32)
        env.append_transform(ToTensorImage(from_int=True))
        if cfg.env.grayscale:
            env.append_transform(GrayScale())
        img_size = cfg.env.image_size
        env.append_transform(Resize(img_size, img_size))

    env.append_transform(DoubleToFloat())
    env.append_transform(RewardSum())
    env.append_transform(FrameSkipTransform(cfg.env.frame_skip))
    if dummy:
        default_dict = {
            "state": UnboundedContinuousTensorSpec(shape=(cfg.networks.state_dim)),
            "belief": UnboundedContinuousTensorSpec(
                shape=(cfg.networks.rssm_hidden_dim)
            ),
        }
    else:
        default_dict = {
            "state": UnboundedContinuousTensorSpec(
                shape=(parallel_envs, cfg.networks.state_dim)
            ),
            "belief": UnboundedContinuousTensorSpec(
                shape=(parallel_envs, cfg.networks.rssm_hidden_dim)
            ),
        }
    env.append_transform(
        TensorDictPrimer(random=False, default_value=0, **default_dict)
    )

    return env


def make_environments(cfg, device, parallel_envs=1):
    """Make environments for training and evaluation."""
    train_env = ParallelEnv(
        parallel_envs,
        EnvCreator(lambda cfg=cfg: _make_env(cfg, device=device)),
    )
    train_env = transform_env(cfg, train_env, parallel_envs)
    train_env.set_seed(cfg.env.seed)
    eval_env = ParallelEnv(
        parallel_envs,
        EnvCreator(lambda cfg=cfg: _make_env(cfg, device=device)),
    )
    eval_env = transform_env(cfg, eval_env, parallel_envs)
    eval_env.set_seed(cfg.env.seed + 1)

    return train_env, eval_env


def make_dreamer(
    config,
    device,
    action_key: str = "action",
    value_key: str = "state_value",
    use_decoder_in_env: bool = False,
):
    test_env = _make_env(config, device=device)
    test_env = transform_env(config, test_env, parallel_envs=1, dummy=True)
    # Make encoder and decoder
    if config.env.from_pixels:
        encoder = ObsEncoder()
        decoder = ObsDecoder()
        observation_in_key = "pixels"
        obsevation_out_key = "reco_pixels"
    else:
        encoder = DenseEncoder()
        decoder = DenseDecoder(
            observation_dim=test_env.observation_spec["observation"].shape[-1]
        )
        observation_in_key = "observation"
        obsevation_out_key = "reco_observation"
        # raise NotImplementedError("Currently only pixel observations are supported.")

    # Make RSSM
    rssm_prior = RSSMPrior(
        hidden_dim=config.networks.rssm_hidden_dim,
        rnn_hidden_dim=config.networks.rssm_hidden_dim,
        state_dim=config.networks.state_dim,
        action_spec=test_env.action_spec,
    )
    rssm_posterior = RSSMPosterior(
        hidden_dim=config.networks.rssm_hidden_dim, state_dim=config.networks.state_dim
    )
    # Make reward module
    reward_module = MLP(
        out_features=1,
        depth=2,
        num_cells=config.networks.hidden_dim,
        activation_class=get_activation(config.networks.activation),
    )

    # Make combined world model
    world_model = _dreamer_make_world_model(
        encoder,
        decoder,
        rssm_prior,
        rssm_posterior,
        reward_module,
        observation_in_key=observation_in_key,
        observation_out_key=obsevation_out_key,
    )

    # Initialize world model
    with torch.no_grad(), set_exploration_type(ExplorationType.RANDOM):
        tensordict = test_env.rollout(5).unsqueeze(-1)
        tensordict = tensordict.to_tensordict()
        world_model(tensordict)

    # Create model-based environment
    model_based_env = _dreamer_make_mbenv(
        reward_module=reward_module,
        rssm_prior=rssm_prior,
        decoder=decoder,
        observation_out_key=obsevation_out_key,
        test_env=test_env,
        use_decoder_in_env=use_decoder_in_env,
        state_dim=config.networks.state_dim,
        rssm_hidden_dim=config.networks.rssm_hidden_dim,
    )

    # Make actor
    actor_simulator, actor_realworld = _dreamer_make_actors(
        encoder=encoder,
        observation_in_key=observation_in_key,
        rssm_prior=rssm_prior,
        rssm_posterior=rssm_posterior,
        mlp_num_units=config.networks.hidden_dim,
        activation=get_activation(config.networks.activation),
        action_key=action_key,
        test_env=test_env,
    )
    # Exploration noise to be added to the actor_realworld
    actor_realworld = AdditiveGaussianWrapper(
        actor_realworld,
        sigma_init=1.0,
        sigma_end=1.0,
        annealing_num_steps=1,
        mean=0.0,
        std=config.networks.exploration_noise,
    )

    # Make Critic
    value_model = _dreamer_make_value_model(
        hidden_dim=config.networks.hidden_dim,
        activation=config.networks.activation,
        value_key=value_key,
    )

    # Initialize model-based environment, actor and critic
    with torch.no_grad(), set_exploration_type(ExplorationType.RANDOM):
        tensordict = model_based_env.fake_tensordict().unsqueeze(-1)
        tensordict = tensordict
        tensordict = actor_simulator(tensordict)
        value_model(tensordict)

    return world_model, model_based_env, actor_simulator, value_model, actor_realworld


def make_collector(cfg, train_env, actor_model_explore):
    """Make collector."""
    collector = SyncDataCollector(
        train_env,
        actor_model_explore,
        init_random_frames=cfg.collector.init_random_frames,
        frames_per_batch=cfg.collector.frames_per_batch,
        total_frames=cfg.collector.total_frames,
        device=cfg.collector.device,
        reset_at_each_iter=True,
    )
    collector.set_seed(cfg.env.seed)
    return collector


def make_replay_buffer(
    batch_size,
    batch_seq_len,
    buffer_size=1000000,
    buffer_scratch_dir=None,
    device="cpu",
    prefetch=3,
    pixel_obs=True,
):
    with (
        tempfile.TemporaryDirectory()
        if buffer_scratch_dir is None
        else nullcontext(buffer_scratch_dir)
    ) as scratch_dir:
        transforms = []
        crop_seq = RandomCropTensorDict(sub_seq_len=batch_seq_len, sample_dim=-1)
        transforms.append(crop_seq)

        if pixel_obs:
            # dtype_transform = DTypeCastTransform(torch.double, torch.float32, in_keys=["pixels"])
            # from 0-255 to 0-1
            norm_obs = ObservationNorm(
                loc=0,
                scale=255,
                standard_normal=True,
                in_keys=["pixels", ("next", "pixels")],
            )
            # transforms.append(dtype_transform)
            transforms.append(norm_obs)

        transforms = Compose(*transforms)

        replay_buffer = TensorDictReplayBuffer(
            pin_memory=False,
            prefetch=prefetch,
            storage=LazyMemmapStorage(
                buffer_size,
                scratch_dir=scratch_dir,
                device=device,
            ),
            transform=transforms,
            batch_size=batch_size,
        )
        return replay_buffer


def _dreamer_make_value_model(
    hidden_dim: int = 400, activation: str = "elu", value_key: str = "state_value"
):
    value_model = SafeModule(
        MLP(
            out_features=1,
            depth=3,
            num_cells=hidden_dim,
            activation_class=get_activation(activation),
        ),
        in_keys=["state", "belief"],
        out_keys=[value_key],
    )
    return value_model


def _dreamer_make_actors(
    encoder,
    observation_in_key,
    rssm_prior,
    rssm_posterior,
    mlp_num_units,
    activation,
    action_key,
    test_env,
):
    actor_module = DreamerActor(
        out_features=test_env.action_spec.shape[-1],
        depth=3,
        num_cells=mlp_num_units,
        activation_class=activation,
    )
    actor_simulator = _dreamer_make_actor_sim(action_key, test_env, actor_module)
    actor_realworld = _dreamer_make_actor_real(
        encoder,
        observation_in_key,
        rssm_prior,
        rssm_posterior,
        actor_module,
        action_key,
        test_env,
    )
    return actor_simulator, actor_realworld


def _dreamer_make_actor_sim(action_key, proof_environment, actor_module):
    actor_simulator = SafeProbabilisticTensorDictSequential(
        SafeModule(
            actor_module,
            in_keys=["state", "belief"],
            out_keys=["loc", "scale"],
            spec=CompositeSpec(
                **{
                    "loc": UnboundedContinuousTensorSpec(
                        proof_environment.action_spec.shape,
                        device=proof_environment.action_spec.device,
                    ),
                    "scale": UnboundedContinuousTensorSpec(
                        proof_environment.action_spec.shape,
                        device=proof_environment.action_spec.device,
                    ),
                }
            ),
        ),
        SafeProbabilisticModule(
            in_keys=["loc", "scale"],
            out_keys=[action_key],
            default_interaction_type=InteractionType.RANDOM,
            distribution_class=TanhNormal,
            distribution_kwargs={"tanh_loc": True},
            spec=CompositeSpec(**{action_key: proof_environment.action_spec}),
        ),
    )
    return actor_simulator


def _dreamer_make_actor_real(
    encoder,
    observation_in_key,
    rssm_prior,
    rssm_posterior,
    actor_module,
    action_key,
    proof_environment,
):
    # actor for real world: interacts with states ~ posterior
    # Out actor differs from the original paper where first they compute prior and posterior and then act on it
    # but we found that this approach worked better.
    actor_realworld = SafeSequential(
        SafeModule(
            encoder,
            in_keys=[observation_in_key],
            out_keys=["encoded_latents"],
        ),
        SafeModule(
            rssm_posterior,
            in_keys=["belief", "encoded_latents"],
            out_keys=[
                "_",
                "_",
                "state",
            ],
        ),
        SafeProbabilisticTensorDictSequential(
            SafeModule(
                actor_module,
                in_keys=["state", "belief"],
                out_keys=["loc", "scale"],
                spec=CompositeSpec(
                    **{
                        "loc": UnboundedContinuousTensorSpec(
                            proof_environment.action_spec.shape,
                        ),
                        "scale": UnboundedContinuousTensorSpec(
                            proof_environment.action_spec.shape,
                        ),
                    }
                ),
            ),
            SafeProbabilisticModule(
                in_keys=["loc", "scale"],
                out_keys=[action_key],
                default_interaction_type=InteractionType.MODE,
                distribution_class=TanhNormal,
                distribution_kwargs={"tanh_loc": True},
                spec=CompositeSpec(
                    **{action_key: proof_environment.action_spec.to("cpu")}
                ),
            ),
        ),
        SafeModule(
            rssm_prior,
            in_keys=["state", "belief", action_key],
            out_keys=[
                "_",
                "_",
                "_",  # we don't need the prior state
                ("next", "belief"),
            ],
        ),
    )
    return actor_realworld


def _dreamer_make_mbenv(
    reward_module,
    rssm_prior,
    test_env,
    decoder,
    observation_out_key: str = "reco_pixels",
    use_decoder_in_env: bool = False,
    state_dim: int = 30,
    rssm_hidden_dim: int = 200,
):
    # MB environment
    if use_decoder_in_env:
        mb_env_obs_decoder = SafeModule(
            decoder,
            in_keys=[("next", "state"), ("next", "belief")],
            out_keys=[("next", observation_out_key)],
        )
    else:
        mb_env_obs_decoder = None

    transition_model = SafeSequential(
        SafeModule(
            rssm_prior,
            in_keys=["state", "belief", "action"],
            out_keys=[
                "_",
                "_",
                "state",
                "belief",
            ],
        ),
    )
    reward_model = SafeModule(
        reward_module,
        in_keys=["state", "belief"],
        out_keys=["reward"],
    )
    model_based_env = DreamerEnv(
        world_model=WorldModelWrapper(
            transition_model,
            reward_model,
        ),
        prior_shape=torch.Size([state_dim]),
        belief_shape=torch.Size([rssm_hidden_dim]),
        obs_decoder=mb_env_obs_decoder,
    )

    model_based_env.set_specs_from_env(test_env)
    model_based_env = TransformedEnv(model_based_env)
    default_dict = {
        "state": UnboundedContinuousTensorSpec(shape=(state_dim)),
        "belief": UnboundedContinuousTensorSpec(shape=(rssm_hidden_dim)),
    }
    model_based_env.append_transform(
        TensorDictPrimer(random=False, default_value=0, **default_dict)
    )
    return model_based_env


def _dreamer_make_world_model(
    encoder,
    decoder,
    rssm_prior,
    rssm_posterior,
    reward_module,
    observation_in_key: str = "pixels",
    observation_out_key: str = "reco_pixels",
):
    # World Model and reward model
    rssm_rollout = RSSMRollout(
        SafeModule(
            rssm_prior,
            in_keys=["state", "belief", "action"],
            out_keys=[
                ("next", "prior_mean"),
                ("next", "prior_std"),
                "_",
                ("next", "belief"),
            ],
        ),
        SafeModule(
            rssm_posterior,
            in_keys=[("next", "belief"), ("next", "encoded_latents")],
            out_keys=[
                ("next", "posterior_mean"),
                ("next", "posterior_std"),
                ("next", "state"),
            ],
        ),
    )

    transition_model = SafeSequential(
        SafeModule(
            encoder,
            in_keys=[("next", observation_in_key)],
            out_keys=[("next", "encoded_latents")],
        ),
        rssm_rollout,
        SafeModule(
            decoder,
            in_keys=[("next", "state"), ("next", "belief")],
            out_keys=[("next", observation_out_key)],
        ),
    )
    reward_model = SafeModule(
        reward_module,
        in_keys=[("next", "state"), ("next", "belief")],
        out_keys=[("next", "reward")],
    )
    world_model = WorldModelWrapper(
        transition_model,
        reward_model,
    )
    return world_model


def log_metrics(logger, metrics, step):
    for metric_name, metric_value in metrics.items():
        logger.log_scalar(metric_name, metric_value, step)


def get_activation(name):
    if name == "relu":
        return nn.ReLU
    elif name == "tanh":
        return nn.Tanh
    elif name == "leaky_relu":
        return nn.LeakyReLU
    elif name == "elu":
        return nn.ELU
    else:
        raise NotImplementedError
