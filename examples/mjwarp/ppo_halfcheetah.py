# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

"""PPO training on HalfCheetah using MjWarpEnv (GPU-batched MuJoCo).

Demonstrates high-throughput RL training with thousands of parallel
environments running on GPU via MuJoCo Warp. No Hydra, no config files —
all hyperparameters are constants at the top of this file.

Note on data collection: This script steps the environment directly in a
Python loop rather than using ``SyncDataCollector``.  Since MjWarpEnv already
runs batched on the same GPU as the policy, the collector's per-iteration
bookkeeping adds overhead without providing a device-transfer benefit.
Benchmarks (see ``bench_collector_vs_direct.py``) show ~20 % higher FPS with
direct stepping at the rollout length used here (16 steps / env).  The gap
narrows at longer rollouts and vanishes around 512 steps / env.  Using a
collector is of course still valid and may be preferable when you want its
built-in features (e.g. ``init_random_frames``, automatic ``step_mdp``,
replay-buffer integration).

Requirements:
    pip install mujoco mujoco-warp warp-lang

Usage:
    python examples/mjwarp/ppo_halfcheetah.py

    # With tensorboard logging:
    python examples/mjwarp/ppo_halfcheetah.py --logger tensorboard

    # With wandb logging:
    python examples/mjwarp/ppo_halfcheetah.py --logger wandb
"""
from __future__ import annotations

import argparse
import time

import torch
import torch.nn
import tqdm
import warp as wp
from tensordict import TensorDict
from tensordict.nn import AddStateIndependentNormalScale, TensorDictModule
from torchrl.data import LazyTensorStorage, TensorDictReplayBuffer
from torchrl.data.replay_buffers.samplers import SamplerWithoutReplacement
from torchrl.envs import (
    ExplorationType,
    RewardSum,
    set_exploration_type,
    StepCounter,
    TransformedEnv,
)
from torchrl.envs.libs.mujoco_warp import MjWarpEnv
from torchrl.modules import MLP, ProbabilisticActor, TanhNormal, ValueOperator
from torchrl.objectives import ClipPPOLoss
from torchrl.objectives.value.advantages import GAE
from torchrl.record.loggers import generate_exp_name, get_logger

# ====================================================================
# Hyperparameters
# ====================================================================

# Environment
NUM_ENVS = 4096
DEVICE = "cuda:0"

# PPO
TOTAL_FRAMES = 50_000_000
FRAMES_PER_BATCH = NUM_ENVS * 16  # 65536 frames per collection
MINI_BATCH_SIZE = 4096
PPO_EPOCHS = 4
GAMMA = 0.99
GAE_LAMBDA = 0.95
CLIP_EPSILON = 0.2
LR = 3e-4
ENTROPY_COEF = 0.0
CRITIC_COEF = 0.5
MAX_GRAD_NORM = 0.5
ANNEAL_LR = True

# Episode
MAX_EPISODE_STEPS = 1000

# Evaluation
EVAL_INTERVAL = 5_000_000  # evaluate every N frames
EVAL_EPISODES = 3

# Logging
LOG_INTERVAL = 1  # log every N collection iterations

# ====================================================================
# HalfCheetah MJCF XML (standard DeepMind model)
# ====================================================================

HALFCHEETAH_XML = """\
<mujoco model="cheetah">
  <compiler angle="radian" settotalmass="14"/>

  <default>
    <joint armature=".1" damping=".01" limited="true" solimplimit="0 .8 .03" solreflimit=".02 1" stiffness="8"/>
    <geom conaffinity="0" condim="3" contype="1" friction=".4 .1 .1" rgba="0.8 0.6 .4 1" solimp="0.0 0.8 0.01" solref="0.02 1"/>
    <motor ctrllimited="true" ctrlrange="-1 1"/>
  </default>

  <size nstack="300000" nuser_geom="1"/>

  <option gravity="0 0 -9.81" timestep="0.01"/>

  <asset>
    <texture builtin="gradient" height="100" rgb1="1 1 1" rgb2="0 0 0" type="skybox" width="100"/>
    <texture builtin="flat" height="1278" mark="cross" markrgb="1 1 1" name="texgeom" random="0.01" rgb1="0.8 0.6 0.4" rgb2="0.8 0.6 0.4" type="cube" width="127"/>
    <texture builtin="checker" height="100" name="texplane" rgb1="0 0 0" rgb2="0.8 0.8 0.8" type="2d" width="100"/>
    <material name="MatPlane" reflectance="0.5" shininess="1" specular="1" texrepeat="60 60" texture="texplane"/>
    <material name="geom" texture="texgeom" texuniform="true"/>
  </asset>

  <worldbody>
    <light cutoff="100" diffuse="1 1 1" dir="-0 0 -1.3" directional="true" exponent="1" pos="0 0 1.3" specular=".1 .1 .1"/>
    <geom conaffinity="1" condim="3" material="MatPlane" name="floor" pos="0 0 0" rgba="0.8 0.9 0.8 1" size="40 40 40" type="plane"/>
    <body name="torso" pos="0 0 .7">
      <camera name="track" mode="trackcom" pos="0 -3 0.3" xyaxes="1 0 0 0 0 1"/>
      <joint armature="0" axis="1 0 0" damping="0" limited="false" name="rootx" pos="0 0 0" stiffness="0" type="slide"/>
      <joint armature="0" axis="0 0 1" damping="0" limited="false" name="rootz" pos="0 0 0" stiffness="0" type="slide"/>
      <joint armature="0" axis="0 1 0" damping="0" limited="false" name="rooty" pos="0 0 0" stiffness="0" type="hinge"/>
      <geom name="torso" size="0.046 0.5" type="capsule"/>
      <body name="bthigh" pos="-.5 0 0">
        <joint axis="0 1 0" damping="6" name="bthigh" pos="0 0 0" range="-.52 1.05" stiffness="240" type="hinge"/>
        <geom name="bthigh" pos=".1 0 -.13" size="0.046 0.145" type="capsule"/>
        <body name="bshin" pos=".16 0 -.25">
          <joint axis="0 1 0" damping="4.5" name="bshin" pos="0 0 0" range="-.785 .785" stiffness="180" type="hinge"/>
          <geom name="bshin" pos="-.14 0 -.07" size="0.046 0.15" type="capsule" rgba="0.9 0.6 0.6 1"/>
          <body name="bfoot" pos="-.28 0 -.14">
            <joint axis="0 1 0" damping="3" name="bfoot" pos="0 0 0" range="-.4 .785" stiffness="120" type="hinge"/>
            <geom name="bfoot" pos="0.03 0 -0.097" size="0.046 0.094" type="capsule" rgba="0.9 0.6 0.6 1"/>
          </body>
        </body>
      </body>
      <body name="fthigh" pos=".5 0 0">
        <joint axis="0 1 0" damping="4.5" name="fthigh" pos="0 0 0" range="-1 .7" stiffness="180" type="hinge"/>
        <geom name="fthigh" pos="-.07 0 -.12" size="0.046 0.133" type="capsule"/>
        <body name="fshin" pos="-.14 0 -.24">
          <joint axis="0 1 0" damping="3" name="fshin" pos="0 0 0" range="-1.2 .87" stiffness="120" type="hinge"/>
          <geom name="fshin" pos="0.065 0 -0.09" size="0.046 0.106" type="capsule" rgba="0.9 0.6 0.6 1"/>
          <body name="ffoot" pos=".13 0 -.18">
            <joint axis="0 1 0" damping="1.5" name="ffoot" pos="0 0 0" range="-.5 .5" stiffness="60" type="hinge"/>
            <geom name="ffoot" pos="0.045 0 -0.07" size="0.046 0.07" type="capsule" rgba="0.9 0.6 0.6 1"/>
          </body>
        </body>
      </body>
    </body>
  </worldbody>

  <actuator>
    <motor gear="120" joint="bthigh" name="bthigh"/>
    <motor gear="90" joint="bshin" name="bshin"/>
    <motor gear="60" joint="bfoot" name="bfoot"/>
    <motor gear="120" joint="fthigh" name="fthigh"/>
    <motor gear="60" joint="fshin" name="fshin"/>
    <motor gear="30" joint="ffoot" name="ffoot"/>
  </actuator>
</mujoco>
"""

# ====================================================================
# Task functions (obs / reward / done)
# ====================================================================


def obs_fn(data):
    """HalfCheetah observation: joint positions (skip root x) + velocities.

    qpos layout (nq=9): [rootx, rootz, rooty, bthigh, bshin, bfoot, fthigh, fshin, ffoot]
    qvel layout (nv=9): same order as qpos
    obs = qpos[1:] (8) + qvel (9) = 17 dims
    """
    qpos = wp.to_torch(data.qpos)  # (nworld, 9)
    qvel = wp.to_torch(data.qvel)  # (nworld, 9)
    return {"observation": torch.cat([qpos[:, 1:], qvel], dim=-1)}


def reward_fn(data, action):
    """Forward velocity - control cost (HalfCheetah-v4 reward)."""
    qvel = wp.to_torch(data.qvel)
    forward_vel = qvel[:, 0:1]  # x-velocity
    ctrl_cost = 0.1 * (action**2).sum(dim=-1, keepdim=True)
    return forward_vel - ctrl_cost


def done_fn(data):
    """HalfCheetah never terminates (time limit via StepCounter)."""
    qpos = wp.to_torch(data.qpos)
    return torch.zeros(qpos.shape[0], dtype=torch.bool, device=qpos.device)


# ====================================================================
# Environment creation
# ====================================================================


def make_env(num_envs, device):
    """Create a batched MjWarpEnv with transforms."""
    base_env = MjWarpEnv(
        HALFCHEETAH_XML,
        obs_fn=obs_fn,
        reward_fn=reward_fn,
        done_fn=done_fn,
        batch_size=[num_envs],
        device=device,
    )
    env = TransformedEnv(base_env)
    env.append_transform(StepCounter(max_steps=MAX_EPISODE_STEPS))
    env.append_transform(RewardSum())
    return env


# ====================================================================
# Model creation
# ====================================================================


def make_ppo_models(env, device):
    """Create actor and critic networks following PPO SOTA pattern."""
    input_shape = env.observation_spec["observation"].shape
    num_actions = env.action_spec_unbatched.shape[-1]

    # Actor: MLP -> loc, then AddStateIndependentNormalScale -> (loc, scale)
    policy_mlp = MLP(
        in_features=input_shape[-1],
        activation_class=torch.nn.Tanh,
        out_features=num_actions,
        num_cells=[256, 256],
        device=device,
    )

    # Orthogonal weight init
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
        activation_class=torch.nn.Tanh,
        out_features=1,
        num_cells=[256, 256],
        device=device,
    )

    for layer in value_mlp.modules():
        if isinstance(layer, torch.nn.Linear):
            torch.nn.init.orthogonal_(layer.weight, 0.01)
            layer.bias.data.zero_()

    critic = ValueOperator(value_mlp, in_keys=["observation"])

    return actor, critic


# ====================================================================
# Evaluation
# ====================================================================


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


# ====================================================================
# Training
# ====================================================================


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--logger",
        type=str,
        default="",
        choices=["", "tensorboard", "wandb", "csv"],
        help="Logger backend (default: none)",
    )
    parser.add_argument(
        "--project-name",
        type=str,
        default="torchrl_mjwarp_ppo",
        help="Project name for wandb/tensorboard",
    )
    args = parser.parse_args()

    device = torch.device(DEVICE)
    torch.set_float32_matmul_precision("high")

    # --- Logger ---
    logger = None
    if args.logger:
        exp_name = generate_exp_name("PPO", "MjWarp_HalfCheetah")
        logger = get_logger(
            args.logger,
            logger_name="ppo",
            experiment_name=exp_name,
            wandb_kwargs={
                "project": args.project_name,
                "config": {
                    "num_envs": NUM_ENVS,
                    "total_frames": TOTAL_FRAMES,
                    "frames_per_batch": FRAMES_PER_BATCH,
                    "mini_batch_size": MINI_BATCH_SIZE,
                    "ppo_epochs": PPO_EPOCHS,
                    "gamma": GAMMA,
                    "gae_lambda": GAE_LAMBDA,
                    "clip_epsilon": CLIP_EPSILON,
                    "lr": LR,
                    "entropy_coef": ENTROPY_COEF,
                    "critic_coef": CRITIC_COEF,
                    "max_grad_norm": MAX_GRAD_NORM,
                    "anneal_lr": ANNEAL_LR,
                    "max_episode_steps": MAX_EPISODE_STEPS,
                },
            },
        )

    print(f"Device: {device}")
    print(f"Num envs: {NUM_ENVS}")
    print(f"Frames per batch: {FRAMES_PER_BATCH}")
    print(f"Total frames: {TOTAL_FRAMES}")
    print(f"Logger: {args.logger or 'none'}")
    print()

    # --- Environment ---
    env = make_env(NUM_ENVS, device)

    # --- Eval environment (small batch for deterministic eval) ---
    eval_env = make_env(1, device)
    eval_env.eval()

    # --- Models ---
    actor, critic = make_ppo_models(env, device)

    # --- GAE advantage estimator ---
    adv_module = GAE(
        gamma=GAMMA,
        lmbda=GAE_LAMBDA,
        value_network=critic,
        average_gae=False,
        device=device,
    )

    # --- PPO loss ---
    loss_module = ClipPPOLoss(
        actor_network=actor,
        critic_network=critic,
        clip_epsilon=CLIP_EPSILON,
        entropy_coeff=ENTROPY_COEF,
        critic_coeff=CRITIC_COEF,
        normalize_advantage=True,
    )

    # --- Optimizer ---
    optimizer = torch.optim.Adam(loss_module.parameters(), lr=LR, eps=1e-5)

    # --- Data buffer for PPO mini-batch sampling ---
    data_buffer = TensorDictReplayBuffer(
        storage=LazyTensorStorage(FRAMES_PER_BATCH, device=device),
        sampler=SamplerWithoutReplacement(),
        batch_size=MINI_BATCH_SIZE,
    )

    # --- LR annealing ---
    steps_per_env = FRAMES_PER_BATCH // NUM_ENVS
    num_batches = TOTAL_FRAMES // FRAMES_PER_BATCH
    num_mini_batches = FRAMES_PER_BATCH // MINI_BATCH_SIZE
    total_network_updates = num_batches * PPO_EPOCHS * num_mini_batches
    num_network_updates = 0

    # --- Loss tracking ---
    losses = TensorDict(batch_size=[PPO_EPOCHS, num_mini_batches])

    # --- Training loop ---
    collected_frames = 0
    td = env.reset()

    pbar = tqdm.tqdm(total=TOTAL_FRAMES, unit="frames", unit_scale=True)
    t_start = time.perf_counter()
    iter_count = 0

    while collected_frames < TOTAL_FRAMES:
        t_collect_start = time.perf_counter()

        # ----- Collect rollout by stepping env directly -----
        rollout_tds = []
        for _ in range(steps_per_env):
            with torch.no_grad():
                td = actor(td)
            # step_and_maybe_reset returns:
            #   transition_td: the full step td (with "next") for training
            #   td: the reset root td for the next iteration
            transition_td, td = env.step_and_maybe_reset(td)
            rollout_tds.append(transition_td.clone())

        # Stack into (num_envs, steps_per_env)
        data = torch.stack(rollout_tds, dim=1)
        frames_in_batch = data.numel()
        collected_frames += frames_in_batch
        iter_count += 1

        t_collect_end = time.perf_counter()
        collect_time = t_collect_end - t_collect_start

        # ----- Metrics dict -----
        metrics_to_log = {}

        # Training rewards
        episode_end = data["next", "done"].squeeze(-1)
        if episode_end.any():
            episode_rewards = data["next", "episode_reward"][episode_end]
            episode_lengths = data["next", "step_count"][episode_end].float()
            metrics_to_log["train/reward"] = episode_rewards.mean().item()
            metrics_to_log["train/episode_length"] = episode_lengths.mean().item()

        # ----- PPO update -----
        t_train_start = time.perf_counter()

        for j in range(PPO_EPOCHS):
            with torch.no_grad():
                data = adv_module(data)

            data_buffer.extend(data.reshape(-1))

            for k, batch in enumerate(data_buffer):
                # LR annealing
                alpha = 1.0
                if ANNEAL_LR:
                    alpha = 1.0 - (num_network_updates / total_network_updates)
                    for group in optimizer.param_groups:
                        group["lr"] = LR * alpha
                num_network_updates += 1

                loss = loss_module(batch)
                total_loss = (
                    loss["loss_objective"]
                    + loss["loss_entropy"]
                    + CRITIC_COEF * loss["loss_critic"]
                )

                optimizer.zero_grad(set_to_none=True)
                total_loss.backward()
                torch.nn.utils.clip_grad_norm_(loss_module.parameters(), MAX_GRAD_NORM)
                optimizer.step()

                losses[j, k] = loss.select(
                    "loss_critic", "loss_entropy", "loss_objective"
                ).detach()

        t_train_end = time.perf_counter()
        train_time = t_train_end - t_train_start

        # ----- Loss metrics -----
        losses_mean = losses.apply(lambda x: x.float().mean(), batch_size=[])
        for key, value in losses_mean.items():
            metrics_to_log[f"train/{key}"] = value.item()
        metrics_to_log["train/lr"] = alpha * LR
        metrics_to_log["train/clip_epsilon"] = CLIP_EPSILON

        # ----- Timing metrics -----
        elapsed = time.perf_counter() - t_start
        fps = collected_frames / elapsed
        metrics_to_log["time/fps"] = fps
        metrics_to_log["time/collect"] = collect_time
        metrics_to_log["time/train"] = train_time

        # ----- Evaluation -----
        prev_frames = collected_frames - frames_in_batch
        if (prev_frames // EVAL_INTERVAL) < (collected_frames // EVAL_INTERVAL):
            with torch.no_grad(), set_exploration_type(ExplorationType.DETERMINISTIC):
                actor.eval()
                eval_reward = eval_model(actor, eval_env, EVAL_EPISODES)
                metrics_to_log["eval/reward"] = eval_reward.item()
                actor.train()
            print(
                f"\n  [Eval @ {collected_frames:,} frames] "
                f"reward: {eval_reward.item():.2f}"
            )

        # ----- Log to backend -----
        if logger and (iter_count % LOG_INTERVAL == 0):
            for key, value in metrics_to_log.items():
                logger.log_scalar(key, value, collected_frames)

        # ----- Progress bar -----
        desc = f"FPS: {fps:,.0f}"
        if "train/reward" in metrics_to_log:
            desc += f" | reward: {metrics_to_log['train/reward']:.2f}"
        if "eval/reward" in metrics_to_log:
            desc += f" | eval: {metrics_to_log['eval/reward']:.2f}"
        pbar.set_description(desc)
        pbar.update(frames_in_batch)

    pbar.close()
    elapsed = time.perf_counter() - t_start
    print(f"\nTraining complete: {collected_frames:,} frames in {elapsed:.1f}s")
    print(f"Average FPS: {collected_frames / elapsed:,.0f}")

    eval_env.close()
    env.close()


if __name__ == "__main__":
    main()
