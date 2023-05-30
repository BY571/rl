import torch
from tensordict.nn import InteractionType
from torch import nn, optim
from torchrl.collectors import SyncDataCollector
from torchrl.data import TensorDictPrioritizedReplayBuffer, TensorDictReplayBuffer
from torchrl.data.replay_buffers.storages import LazyMemmapStorage
from torchrl.envs import Compose, DoubleToFloat, EnvCreator, ParallelEnv, TransformedEnv
from torchrl.envs.libs.gym import GymEnv
from torchrl.envs.transforms import RewardScaling
from torchrl.envs.utils import ExplorationType, set_exploration_type
from torchrl.modules import (
    AdditiveGaussianWrapper,
    MLP,
    ProbabilisticActor,
    SafeModule,
    ValueOperator,
)
from torchrl.modules.distributions import TanhDelta
from torchrl.objectives import SoftUpdate
from torchrl.objectives.td3 import TD3Loss


# ====================================================================
# Environment utils
# -----------------


def env_maker(task, frame_skip=1, device="cpu", from_pixels=False):
    return GymEnv(task, device=device, frame_skip=frame_skip, from_pixels=from_pixels)


def apply_env_transforms(env, reward_scaling=1.0):
    transformed_env = TransformedEnv(
        env,
        Compose(
            RewardScaling(loc=0.0, scale=reward_scaling),
            DoubleToFloat(in_keys=["observation"], in_keys_inv=[]),
        ),
    )
    return transformed_env


def make_environment(cfg):
    """Make environments for training and evaluation."""
    parallel_env = ParallelEnv(
        cfg.env_per_collector, EnvCreator(lambda: env_maker(task=cfg.env_name))
    )
    parallel_env.set_seed(cfg.seed)

    train_env = apply_env_transforms(parallel_env)

    eval_env = TransformedEnv(
        ParallelEnv(
            cfg.env_per_collector, EnvCreator(lambda: env_maker(task=cfg.env_name))
        ),
        train_env.transform.clone(),
    )
    return train_env, eval_env


# ====================================================================
# Collector and replay buffer
# ---------------------------


def make_collector(cfg, train_env, actor_model_explore):
    """Make collector."""
    collector = SyncDataCollector(
        train_env,
        actor_model_explore,
        frames_per_batch=cfg.frames_per_batch,
        max_frames_per_traj=cfg.max_frames_per_traj,
        total_frames=cfg.total_frames,
        device=cfg.collector_device,
    )
    collector.set_seed(cfg.seed)
    return collector


def make_replay_buffer(
    batch_size,
    prb=False,
    buffer_size=1000000,
    buffer_scratch_dir="/tmp/",
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
                scratch_dir=buffer_scratch_dir,
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
                scratch_dir=buffer_scratch_dir,
                device=device,
            ),
            batch_size=batch_size,
        )
    return replay_buffer


# ====================================================================
# Model
# -----


def make_td3_agent(train_env, eval_env, device):
    """Make TD3 agent."""
    # Define Actor Network
    in_keys = ["observation"]
    action_spec = train_env.action_spec
    actor_net_kwargs = {
        "num_cells": [256, 256],
        "out_features": action_spec.shape[-1],
        "activation_class": nn.ReLU,
    }

    actor_net = MLP(**actor_net_kwargs)

    dist_class = TanhDelta
    dist_kwargs = {
        "min": action_spec.space.minimum,
        "max": action_spec.space.maximum,
    }

    in_keys_actor = in_keys
    actor_module = SafeModule(
        actor_net,
        in_keys=in_keys_actor,
        out_keys=[
            "param",
        ],
    )
    actor = ProbabilisticActor(
        spec=action_spec,
        in_keys=["param"],
        module=actor_module,
        distribution_class=dist_class,
        distribution_kwargs=dist_kwargs,
        default_interaction_type=InteractionType.RANDOM,
        return_log_prob=False,
    )

    # Define Critic Network
    qvalue_net_kwargs = {
        "num_cells": [256, 256],
        "out_features": 1,
        "activation_class": nn.ReLU,
    }

    qvalue_net = MLP(
        **qvalue_net_kwargs,
    )

    qvalue = ValueOperator(
        in_keys=["action"] + in_keys,
        module=qvalue_net,
    )

    model = nn.ModuleList([actor, qvalue]).to(device)

    # init nets
    with torch.no_grad(), set_exploration_type(ExplorationType.RANDOM):
        td = eval_env.reset()
        td = td.to(device)
        for net in model:
            net(td)
    del td
    eval_env.close()

    # Exploration wrappers:
    actor_model_explore = AdditiveGaussianWrapper(
        model[0],
        sigma_init=1,
        sigma_end=1,
        mean=0,
        std=0.1,
    ).to(device)
    return model, actor_model_explore


# ====================================================================
# TD3 Loss
# ---------


def make_loss_module(cfg, model):
    """Make loss module and target network updater."""
    # Create TD3 loss
    loss_module = TD3Loss(
        actor_network=model[0],
        qvalue_network=model[1],
        num_qvalue_nets=2,
        loss_function=cfg.loss_function,
        delay_actor=True,
        delay_qvalue=True,
    )
    loss_module.make_value_estimator(gamma=cfg.gamma)

    # Define Target Network Updater
    target_net_updater = SoftUpdate(loss_module, eps=cfg.target_update_polyak)
    return loss_module, target_net_updater


def make_optimizer(cfg, loss_module):
    critic_params = list(loss_module.qvalue_network_params.flatten_keys().values())
    actor_params = list(loss_module.actor_network_params.flatten_keys().values())

    optimizer_actor = optim.Adam(actor_params, lr=cfg.lr, weight_decay=cfg.weight_decay)
    optimizer_critic = optim.Adam(
        critic_params, lr=cfg.lr, weight_decay=cfg.weight_decay
    )
    return optimizer_actor, optimizer_critic