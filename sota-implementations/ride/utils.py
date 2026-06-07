# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

import torch.nn
import torch.optim
from tensordict.nn import TensorDictModule, TensorDictSequential
from torchrl.data.tensor_specs import CategoricalBox
from torchrl.envs import (
    DoubleToFloat,
    EnvCreator,
    ExplorationType,
    GymWrapper,
    InitTracker,
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
    LSTMModule,
    MLP,
    ProbabilisticActor,
    ValueOperator,
)
from torchrl.record import VideoRecorder

# MiniGrid observations are a dict (image, direction, mission). We use ``ImgObsWrapper``
# to keep only the egocentric symbolic image (H x W x 3 integer encodings of object type,
# colour and door state), which avoids the (unsupported) ``MissionSpace``. ``GymWrapper``
# names this image ``pixels``; we rename the raw integer copy to ``IMAGE_KEY`` (used for the
# episodic count) and produce a channel-first float copy (``pixels``, C x H x W) for the
# networks. Following the paper, the symbolic integers are fed to the CNN as-is (no /255
# scaling), so the learned embedding -- and hence the RIDE impact signal -- is informative.
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


def make_env(
    env_name, num_envs, device, gym_backend, is_test=False, serial=False, primer=None
):
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
    # produce a channel-first float ``pixels`` (C x H x W) for the networks. ``from_int=False``
    # keeps the raw symbolic integer values (no /255), matching the paper.
    env.append_transform(RenameTransform(in_keys=[PIXELS_KEY], out_keys=[IMAGE_KEY]))
    env.append_transform(
        ToTensorImage(in_keys=[IMAGE_KEY], out_keys=[PIXELS_KEY], from_int=False)
    )
    env.append_transform(DoubleToFloat())
    env.append_transform(RewardSum())  # logs the *extrinsic* episode return
    env.append_transform(StepCounter())
    env.append_transform(InitTracker())  # is_init, needed to reset the LSTM per episode
    if primer is not None:
        env.append_transform(primer)  # adds the LSTM recurrent-state keys to rollouts
    return env


# ====================================================================
# Model utils
# --------------------------------------------------------------------


def _minigrid_cnn(input_shape, device):
    """Paper CNN: 3 conv layers, 32 filters, 3x3 kernel, stride 2, padding 1, ELU."""
    cnn = ConvNet(
        activation_class=torch.nn.ELU,
        num_cells=[32, 32, 32],
        kernel_sizes=[3, 3, 3],
        strides=[2, 2, 2],
        paddings=[1, 1, 1],
        device=device,
    )
    cnn_out = cnn(torch.ones(input_shape, device=device))
    return cnn, cnn_out.shape[-1]


def make_ppo_models(proof_environment, device, lstm_hidden=256):
    """Recurrent actor-critic per the RIDE paper: CNN -> LSTM-256 -> policy/value heads.

    Returns ``(actor, critic, lstm)``; the caller must append ``lstm.make_tensordict_primer()``
    to the data-collection environments so the recurrent state flows through rollouts.
    """
    input_shape = proof_environment.observation_spec[PIXELS_KEY].shape
    if not isinstance(proof_environment.action_spec_unbatched.space, CategoricalBox):
        raise NotImplementedError(
            "The RIDE example is configured for discrete (MiniGrid) action spaces."
        )
    num_outputs = proof_environment.action_spec_unbatched.space.n

    cnn, cnn_out = _minigrid_cnn(input_shape, device)
    feature = TensorDictModule(cnn, in_keys=[PIXELS_KEY], out_keys=["embed"])
    lstm = LSTMModule(
        input_size=cnn_out,
        hidden_size=lstm_hidden,
        device=device,
        in_key="embed",
        out_key="embed",
    )
    common_module = TensorDictSequential(feature, lstm)

    policy_module = TensorDictModule(
        MLP(
            in_features=lstm_hidden,
            out_features=num_outputs,
            num_cells=[],
            device=device,
        ),
        in_keys=["embed"],
        out_keys=["logits"],
    )
    policy_module = ProbabilisticActor(
        policy_module,
        in_keys=["logits"],
        spec=proof_environment.full_action_spec_unbatched.to(device),
        distribution_class=torch.distributions.Categorical,
        return_log_prob=True,
        default_interaction_type=ExplorationType.RANDOM,
    )
    value_module = ValueOperator(
        MLP(in_features=lstm_hidden, out_features=1, num_cells=[], device=device),
        in_keys=["embed"],
    )

    actor_critic = ActorValueOperator(
        common_operator=common_module,
        policy_operator=policy_module,
        value_operator=value_module,
    )
    # No lazy params remain: the CNN was initialised in ``_minigrid_cnn`` and the
    # LSTM/MLP heads have explicit input sizes.
    return (
        actor_critic.get_policy_operator(),
        actor_critic.get_value_operator(),
        lstm,
    )


def make_curiosity_models(proof_environment, device, embedding_dim=128):
    """Build the RIDE/ICM dynamics networks: embedding phi, forward and inverse models.

    These networks are independent from the PPO actor-critic so that the policy gradient
    never shapes the embedding (as prescribed by the RIDE paper).
    """
    input_shape = proof_environment.observation_spec[PIXELS_KEY].shape
    num_actions = proof_environment.action_spec_unbatched.space.n

    # Feed-forward embedding of a single state (the RIDE paper's embedding is not recurrent).
    cnn, cnn_out = _minigrid_cnn(input_shape, device)
    mlp = MLP(
        in_features=cnn_out,
        out_features=embedding_dim,
        num_cells=[],
        activation_class=torch.nn.ELU,
        device=device,
    )
    feature_network = TensorDictModule(
        module=torch.nn.Sequential(cnn, mlp),
        in_keys=[PIXELS_KEY],
        out_keys=["embedding"],
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
