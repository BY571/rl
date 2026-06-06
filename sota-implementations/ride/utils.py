# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

import torch.nn
import torch.optim
from tensordict.nn import TensorDictModule
from torchrl.data.tensor_specs import CategoricalBox
from torchrl.envs import (
    DoubleToFloat,
    EnvCreator,
    ExplorationType,
    GymWrapper,
    ParallelEnv,
    RenameTransform,
    RewardSum,
    SerialEnv,
    set_gym_backend,
    StepCounter,
    ToTensorImage,
    TransformedEnv,
)
from torchrl.modules import (
    ActorValueOperator,
    ConvNet,
    MLP,
    ProbabilisticActor,
    ValueOperator,
)
from torchrl.record import VideoRecorder

# MiniGrid observations are a dict (image, direction, mission). We use ``ImgObsWrapper``
# to keep only the egocentric symbolic image (H x W x 3, uint8), which avoids the
# (unsupported) ``MissionSpace``. ``GymWrapper`` names this image ``pixels``; we rename the
# raw integer copy to ``IMAGE_KEY`` (used for the episodic count) and produce a normalised
# float copy (``pixels``, C x H x W) for the networks.
IMAGE_KEY = "image"
PIXELS_KEY = "pixels"


# ====================================================================
# Environment utils
# --------------------------------------------------------------------


def make_base_env(env_name="MiniGrid-DoorKey-8x8-v0", gym_backend="gymnasium"):
    import minigrid  # noqa: F401  # registers the MiniGrid environments
    from minigrid.wrappers import ImgObsWrapper

    with set_gym_backend(gym_backend):
        import gymnasium

        base = ImgObsWrapper(gymnasium.make(env_name))
        env = GymWrapper(base, categorical_action_encoding=True, device="cpu")
    return env


def make_env(env_name, num_envs, device, gym_backend, is_test=False, serial=False):
    # ``SerialEnv`` runs all sub-environments in a single process; it is slower but avoids
    # the multiprocessing fragility of ``ParallelEnv`` on some platforms (e.g. Jetson).
    env_cls = SerialEnv if serial else ParallelEnv
    env = env_cls(
        num_envs,
        EnvCreator(lambda: make_base_env(env_name, gym_backend=gym_backend)),
        serial_for_single=True,
        device=device,
    )
    env = TransformedEnv(env)
    # Rename the raw uint8 image to ``IMAGE_KEY`` (kept for the episodic count), then
    # produce a normalised float ``pixels`` (C x H x W) for the networks.
    env.append_transform(RenameTransform(in_keys=[PIXELS_KEY], out_keys=[IMAGE_KEY]))
    env.append_transform(
        ToTensorImage(in_keys=[IMAGE_KEY], out_keys=[PIXELS_KEY], from_int=True)
    )
    env.append_transform(DoubleToFloat())
    env.append_transform(RewardSum())  # logs the *extrinsic* episode return
    env.append_transform(StepCounter())
    return env


# ====================================================================
# Model utils
# --------------------------------------------------------------------


def _minigrid_cnn(input_shape, device, out_features=256):
    """A small CNN + MLP backbone suited to MiniGrid's 7x7x3 egocentric image."""
    cnn = ConvNet(
        activation_class=torch.nn.ReLU,
        num_cells=[16, 32, 64],
        kernel_sizes=[2, 2, 2],
        strides=[1, 1, 1],
        paddings=[0, 0, 0],
        device=device,
    )
    cnn_out = cnn(torch.ones(input_shape, device=device))
    mlp = MLP(
        in_features=cnn_out.shape[-1],
        activation_class=torch.nn.ReLU,
        activate_last_layer=True,
        out_features=out_features,
        num_cells=[],
        device=device,
    )
    return torch.nn.Sequential(cnn, mlp), out_features


def make_ppo_models(proof_environment, device):
    input_shape = proof_environment.observation_spec[PIXELS_KEY].shape

    if isinstance(proof_environment.action_spec_unbatched.space, CategoricalBox):
        num_outputs = proof_environment.action_spec_unbatched.space.n
        distribution_class = torch.distributions.Categorical
        distribution_kwargs = {}
    else:
        raise NotImplementedError(
            "The RIDE example is configured for discrete (MiniGrid) action spaces."
        )

    backbone, feat_dim = _minigrid_cnn(input_shape, device, out_features=256)
    common_module = TensorDictModule(
        module=backbone, in_keys=[PIXELS_KEY], out_keys=["common_features"]
    )

    policy_net = MLP(
        in_features=feat_dim,
        out_features=num_outputs,
        activation_class=torch.nn.ReLU,
        num_cells=[],
        device=device,
    )
    policy_module = TensorDictModule(
        module=policy_net, in_keys=["common_features"], out_keys=["logits"]
    )
    policy_module = ProbabilisticActor(
        policy_module,
        in_keys=["logits"],
        spec=proof_environment.full_action_spec_unbatched.to(device),
        distribution_class=distribution_class,
        distribution_kwargs=distribution_kwargs,
        return_log_prob=True,
        default_interaction_type=ExplorationType.RANDOM,
    )

    value_net = MLP(
        activation_class=torch.nn.ReLU,
        in_features=feat_dim,
        out_features=1,
        num_cells=[],
        device=device,
    )
    value_module = ValueOperator(value_net, in_keys=["common_features"])

    actor_critic = ActorValueOperator(
        common_operator=common_module,
        policy_operator=policy_module,
        value_operator=value_module,
    )
    with torch.no_grad():
        td = proof_environment.fake_tensordict().expand(10).to(device)
        actor_critic(td)
        del td
    return actor_critic.get_policy_operator(), actor_critic.get_value_operator()


def make_curiosity_models(proof_environment, device, embedding_dim=128):
    """Build the RIDE/ICM dynamics networks: embedding phi, forward and inverse models.

    These networks are independent from the PPO actor-critic so that the policy gradient
    never shapes the embedding (as prescribed by the RIDE paper).
    """
    input_shape = proof_environment.observation_spec[PIXELS_KEY].shape
    num_actions = proof_environment.action_spec_unbatched.space.n

    backbone, feat_dim = _minigrid_cnn(input_shape, device, out_features=embedding_dim)
    feature_network = TensorDictModule(
        module=backbone, in_keys=[PIXELS_KEY], out_keys=["embedding"]
    )

    forward_model = TensorDictModule(
        MLP(
            in_features=embedding_dim + num_actions,
            out_features=embedding_dim,
            num_cells=[256],
            activation_class=torch.nn.ReLU,
            device=device,
        ),
        in_keys=["embedding", "action"],
        out_keys=["predicted_embedding"],
    )
    inverse_model = TensorDictModule(
        MLP(
            in_features=2 * embedding_dim,
            out_features=num_actions,
            num_cells=[256],
            activation_class=torch.nn.ReLU,
            device=device,
        ),
        in_keys=["embedding", "embedding_next"],
        out_keys=["predicted_action"],
    )
    # Initialise lazy parameters with a fake forward pass.
    with torch.no_grad():
        td = proof_environment.fake_tensordict().expand(10).to(device)
        feature_network(td)
    return feature_network, forward_model, inverse_model


# ====================================================================
# Evaluation utils
# --------------------------------------------------------------------


def dump_video(module):
    if isinstance(module, VideoRecorder):
        module.dump()


def eval_model(actor, test_env, num_episodes=5):
    test_rewards = []
    for _ in range(num_episodes):
        td_test = test_env.rollout(
            policy=actor,
            auto_reset=True,
            auto_cast_to_device=True,
            break_when_any_done=True,
            max_steps=10_000_000,
        )
        test_env.apply(dump_video)
        reward = td_test["next", "episode_reward"][td_test["next", "done"]]
        test_rewards.append(reward.cpu())
    del td_test
    return torch.cat(test_rewards, 0).mean()
