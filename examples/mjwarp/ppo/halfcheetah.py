# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

"""HalfCheetah task definition for MjWarpEnv.

This module contains the MJCF XML model and task functions (obs, reward, done)
for the HalfCheetah-v4 environment.

How to obtain MJCF XML models for other tasks
----------------------------------------------

**Gymnasium built-in models** (easiest):
    ``pip install gymnasium`` ships XML files at
    ``gymnasium/envs/mujoco/assets/*.xml`` (HalfCheetah, Ant, Hopper, etc.).
    Copy the XML or load it with ``open(...).read()``.

**MuJoCo Menagerie** (diverse robots):
    Clone https://github.com/google-deepmind/mujoco_menagerie or
    ``pip install robot_descriptions`` for programmatic access.
    Contains quadrupeds, arms, hands, humanoids, and more.

**MuJoCo Warp test data**:
    ``mujoco_warp/test_data/`` ships humanoid, pendula, and other
    models used for internal testing.

**Inline XML string** (self-contained):
    Paste the XML directly as a Python string constant, which is what
    this module does for a fully self-contained example.
"""
from __future__ import annotations

import torch
import warp as wp


# ====================================================================
# HalfCheetah MJCF XML (standard DeepMind model)
# ====================================================================

XML = """\
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
