# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

"""Benchmark: SyncDataCollector vs direct env stepping with MjWarpEnv.

Compares two data-collection strategies for GPU-batched MuJoCo Warp envs:

  1. **Direct stepping** — call env.step() in a Python loop, keep everything
     on the same GPU. This is what ``ppo/train.py`` does.

  2. **SyncDataCollector** — use TorchRL's standard collector abstraction,
     which handles rollout collection, auto-reset, and step_mdp internally.

We measure wall-clock FPS for pure data collection (no training) over
a fixed number of frames, repeated for several batch-size / step configs.

Reference results (RTX 4060 Laptop, 4096 envs, random policy):

    steps/env  frames/batch   Direct FPS  Collector FPS  Speedup
    ─────────  ────────────   ──────────  ─────────────  ───────
          16        65,536      927,624        759,881    1.22x
          32       131,072      866,282        763,778    1.13x
          64       262,144      832,147        761,697    1.09x
         128       524,288      823,631        754,789    1.09x
         256     1,048,576      815,457        763,297    1.07x
         512     2,097,152      722,352        728,067    0.99x

Takeaway: direct stepping is ~20 % faster at short rollouts (16 steps, the
typical PPO setting) because the collector's per-iteration bookkeeping is a
fixed cost that gets amortized over longer rollouts.  At 512 steps/env the
two approaches converge.  A collector is still perfectly valid and may be
preferable when you want its built-in features (init_random_frames, automatic
step_mdp, replay-buffer integration, etc.).

Usage:
    python examples/mjwarp/bench_collector_vs_direct.py
"""
from __future__ import annotations

import time

import torch
import warp as wp
from torchrl.collectors import SyncDataCollector
from torchrl.envs import RewardSum, StepCounter, TransformedEnv
from torchrl.envs.libs.mujoco_warp import MjWarpEnv
from torchrl.envs.utils import step_mdp

# ── Minimal HalfCheetah XML (same as ppo/halfcheetah.py) ─────────────

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

# ── Task functions ───────────────────────────────────────────────────


def obs_fn(data):
    qpos = wp.to_torch(data.qpos)
    qvel = wp.to_torch(data.qvel)
    return {"observation": torch.cat([qpos[:, 1:], qvel], dim=-1)}


def reward_fn(data, action):
    qvel = wp.to_torch(data.qvel)
    return qvel[:, 0:1] - 0.1 * (action**2).sum(dim=-1, keepdim=True)


def done_fn(data):
    qpos = wp.to_torch(data.qpos)
    return torch.zeros(qpos.shape[0], dtype=torch.bool, device=qpos.device)


# ── Environment factory ─────────────────────────────────────────────


def make_env(num_envs, device):
    base_env = MjWarpEnv(
        HALFCHEETAH_XML,
        obs_fn=obs_fn,
        reward_fn=reward_fn,
        done_fn=done_fn,
        batch_size=[num_envs],
        device=device,
    )
    env = TransformedEnv(base_env)
    env.append_transform(StepCounter(max_steps=1000))
    env.append_transform(RewardSum())
    return env


# ── Simple random policy (no neural net overhead) ───────────────────


class RandomPolicy(torch.nn.Module):
    """Samples uniform random actions — removes NN cost from the benchmark."""

    def __init__(self, action_spec):
        super().__init__()
        self.action_spec = action_spec

    def forward(self, td):
        td["action"] = self.action_spec.rand()
        return td


# ── Benchmark: direct stepping ──────────────────────────────────────


def bench_direct(num_envs, steps_per_env, num_iters, device):
    """Collect data by stepping MjWarpEnv directly in a Python loop."""
    env = make_env(num_envs, device)
    policy = RandomPolicy(env.action_spec)
    frames_per_batch = num_envs * steps_per_env

    # Warmup
    td = env.reset()
    for _ in range(steps_per_env):
        td = policy(td)
        td = env.step(td)
        td = step_mdp(td)
    torch.cuda.synchronize()

    # Timed runs
    timings = []
    for _ in range(num_iters):
        td = env.reset()
        torch.cuda.synchronize()
        t0 = time.perf_counter()

        for _ in range(steps_per_env):
            td = policy(td)
            td = env.step(td)
            td = step_mdp(td)

        torch.cuda.synchronize()
        t1 = time.perf_counter()
        timings.append(frames_per_batch / (t1 - t0))

    env.close()
    return timings


# ── Benchmark: SyncDataCollector ────────────────────────────────────


def bench_collector(num_envs, steps_per_env, num_iters, device):
    """Collect data using SyncDataCollector."""
    frames_per_batch = num_envs * steps_per_env
    total_frames = frames_per_batch * (num_iters + 1)  # +1 for warmup

    env = make_env(num_envs, device)
    policy = RandomPolicy(env.action_spec)

    collector = SyncDataCollector(
        create_env_fn=env,
        policy=policy,
        frames_per_batch=frames_per_batch,
        total_frames=total_frames,
        device=device,
    )

    # Warmup (first iteration)
    collector_iter = iter(collector)
    _ = next(collector_iter)
    torch.cuda.synchronize()

    # Timed runs
    timings = []
    for _ in range(num_iters):
        torch.cuda.synchronize()
        t0 = time.perf_counter()
        _ = next(collector_iter)
        torch.cuda.synchronize()
        t1 = time.perf_counter()
        timings.append(frames_per_batch / (t1 - t0))

    collector.shutdown()
    return timings


# ── Main ─────────────────────────────────────────────────────────────


def main():
    device = "cuda:0"
    num_iters = 10  # timed iterations per config

    configs = [
        # (num_envs, steps_per_env)
        (512, 16),
        (1024, 16),
        (4096, 16),
        (4096, 32),
        (4096, 64),
        (4096, 128),
        (4096, 256),
        (4096, 512),
    ]

    print("=" * 72)
    print("MjWarpEnv Benchmark: SyncDataCollector vs Direct Stepping")
    print("=" * 72)
    print(f"  Device: {device}")
    print(f"  Timed iterations per config: {num_iters}")
    print("  Policy: random (no neural net)")
    print()

    header = (
        f"{'num_envs':>10} {'steps/env':>10} {'frames/batch':>14} "
        f"{'Direct FPS':>14} {'Collector FPS':>14} {'Speedup':>10}"
    )
    print(header)
    print("-" * len(header))

    for num_envs, steps_per_env in configs:
        frames_per_batch = num_envs * steps_per_env

        # Run benchmarks
        direct_fps = bench_direct(num_envs, steps_per_env, num_iters, device)
        collector_fps = bench_collector(num_envs, steps_per_env, num_iters, device)

        d_mean = sum(direct_fps) / len(direct_fps)
        c_mean = sum(collector_fps) / len(collector_fps)
        speedup = d_mean / c_mean if c_mean > 0 else float("inf")

        print(
            f"{num_envs:>10} {steps_per_env:>10} {frames_per_batch:>14,} "
            f"{d_mean:>14,.0f} {c_mean:>14,.0f} {speedup:>9.2f}x"
        )

    print()
    print("Speedup > 1.0 means direct stepping is faster.")
    print("Speedup < 1.0 means SyncDataCollector is faster.")


if __name__ == "__main__":
    main()
