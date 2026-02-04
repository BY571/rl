# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

import pytest
import torch

from torchrl.envs.libs.mujoco_warp import _has_mjwarp, _has_mujoco, _has_warp
from torchrl.envs.utils import check_env_specs

_all_deps = _has_mjwarp and _has_mujoco and _has_warp and torch.cuda.is_available()

if _all_deps:
    import mujoco
    import mujoco_warp as mjw
    import warp as wp

    from torchrl.envs.libs.mujoco_warp import MjWarpEnv, MjWarpEnvConfig, MjWarpWrapper

# Minimal MJCF XML for testing — a simple body with one actuator
_MINIMAL_XML = """
<mujoco>
  <worldbody>
    <body name="cart" pos="0 0 0.5">
      <joint name="slide" type="slide" axis="1 0 0"/>
      <geom type="box" size="0.2 0.2 0.2" mass="1"/>
      <body name="pole" pos="0 0 0.5">
        <joint name="hinge" type="hinge" axis="0 1 0"/>
        <geom type="capsule" fromto="0 0 0 0 0 0.5" size="0.05" mass="0.1"/>
      </body>
    </body>
  </worldbody>
  <actuator>
    <motor joint="slide" gear="10"/>
  </actuator>
</mujoco>
"""


def _obs_fn(data):
    """Simple observation function: concatenate qpos and qvel."""
    qpos = wp.to_torch(data.qpos)
    qvel = wp.to_torch(data.qvel)
    return {"observation": torch.cat([qpos, qvel], dim=-1)}


def _reward_fn(data, action):
    """Simple reward function: forward velocity."""
    qvel = wp.to_torch(data.qvel)
    return qvel[:, 0:1]


def _done_fn(data):
    """Simple done function: pole angle exceeds threshold."""
    qpos = wp.to_torch(data.qpos)
    # Done if hinge angle (index 1) exceeds threshold
    return qpos[:, 1].abs() > 100.0  # Very large so tests don't terminate early


def _make_config():
    """Create a MjWarpEnvConfig for testing."""
    mj_model = mujoco.MjModel.from_xml_string(_MINIMAL_XML)
    mjw_model = mjw.put_model(mj_model)
    return MjWarpEnvConfig(
        mjw_model=mjw_model,
        mj_model=mj_model,
        obs_fn=_obs_fn,
        reward_fn=_reward_fn,
        done_fn=_done_fn,
    )


def _make_env(batch_size=4):
    """Create a MjWarpEnv for testing."""
    return MjWarpEnv(
        _MINIMAL_XML,
        obs_fn=_obs_fn,
        reward_fn=_reward_fn,
        done_fn=_done_fn,
        batch_size=[batch_size],
        device="cuda:0",
    )


@pytest.mark.skipif(
    not _all_deps, reason="mujoco-warp, mujoco, warp, or CUDA not available"
)
class TestMjWarp:
    def test_wrapper_constructor(self):
        """Test that MjWarpWrapper builds from MjWarpEnvConfig."""
        config = _make_config()
        env = MjWarpWrapper(config, batch_size=[4], device="cuda:0")
        assert env.batch_size == torch.Size([4])
        assert env.device == torch.device("cuda:0")
        env.close()

    def test_env_constructor_xml_string(self):
        """Test that MjWarpEnv builds from XML string."""
        env = _make_env()
        assert env.batch_size == torch.Size([4])
        env.close()

    @pytest.mark.parametrize("batch_size", [(1,), (4,), (64,)])
    def test_batch_sizes(self, batch_size):
        """Test various batch sizes."""
        env = MjWarpEnv(
            _MINIMAL_XML,
            obs_fn=_obs_fn,
            reward_fn=_reward_fn,
            done_fn=_done_fn,
            batch_size=list(batch_size),
            device="cuda:0",
        )
        assert env.batch_size == torch.Size(batch_size)
        td = env.reset()
        assert td.batch_size == torch.Size(batch_size)
        env.close()

    def test_spec_consistency(self):
        """Test that check_env_specs passes."""
        env = _make_env()
        check_env_specs(env)
        env.close()

    def test_step_shapes(self):
        """Test correct keys, shapes, and devices in step output."""
        env = _make_env(batch_size=8)
        td = env.reset()
        td["action"] = env.action_spec.rand()
        td = env.step(td)

        assert "next" in td.keys()
        next_td = td["next"]

        assert "observation" in next_td.keys()
        assert "reward" in next_td.keys()
        assert "done" in next_td.keys()
        assert "terminated" in next_td.keys()

        assert next_td["reward"].shape == torch.Size([8, 1])
        assert next_td["done"].shape == torch.Size([8, 1])
        assert next_td["done"].dtype == torch.bool
        assert next_td["reward"].device == torch.device("cuda:0")
        env.close()

    def test_reset_shapes(self):
        """Test correct keys, shapes, and devices in reset output."""
        env = _make_env(batch_size=8)
        td = env.reset()

        assert "observation" in td.keys()
        assert "done" in td.keys()
        assert "terminated" in td.keys()

        assert td["done"].shape == torch.Size([8, 1])
        assert td["done"].dtype == torch.bool
        assert td["observation"].device == torch.device("cuda:0")
        env.close()

    def test_rollout(self):
        """Test that env.rollout completes without error."""
        env = _make_env()
        env.set_seed(42)
        rollout = env.rollout(max_steps=10)
        assert rollout.batch_size[:-1] == torch.Size([4])
        assert rollout.batch_size[-1] == 10
        env.close()

    def test_seeding(self):
        """Test that same seed produces same trajectory."""
        results = []
        for _ in range(2):
            env = _make_env()
            env.set_seed(123)
            td = env.reset()
            results.append(td["observation"].clone())
            env.close()
        torch.testing.assert_close(results[0], results[1])

    def test_custom_reset_fn(self):
        """Test user-provided custom reset function."""

        def custom_reset(mjw_model, mjw_data):
            new_data = mjw.make_data(
                mujoco.MjModel.from_xml_string(_MINIMAL_XML),
                nworld=mjw_data.qpos.shape[0],
            )
            return new_data

        env = MjWarpEnv(
            _MINIMAL_XML,
            obs_fn=_obs_fn,
            reward_fn=_reward_fn,
            done_fn=_done_fn,
            reset_fn=custom_reset,
            batch_size=[4],
            device="cuda:0",
        )
        td = env.reset()
        assert "observation" in td.keys()
        env.close()

    def test_action_spec_bounds(self):
        """Test custom action bounds."""
        env = MjWarpEnv(
            _MINIMAL_XML,
            obs_fn=_obs_fn,
            reward_fn=_reward_fn,
            done_fn=_done_fn,
            action_low=-2.0,
            action_high=2.0,
            batch_size=[4],
            device="cuda:0",
        )
        assert (env.action_spec.space.low == -2.0).all()
        assert (env.action_spec.space.high == 2.0).all()
        env.close()

    def test_multi_obs_keys(self):
        """Test observation function returning multiple keys."""

        def multi_obs_fn(data):
            qpos = wp.to_torch(data.qpos)
            qvel = wp.to_torch(data.qvel)
            return {"qpos": qpos, "qvel": qvel}

        env = MjWarpEnv(
            _MINIMAL_XML,
            obs_fn=multi_obs_fn,
            reward_fn=_reward_fn,
            done_fn=_done_fn,
            batch_size=[4],
            device="cuda:0",
        )
        td = env.reset()
        assert "qpos" in td.keys()
        assert "qvel" in td.keys()
        check_env_specs(env)
        env.close()

    def test_repr(self):
        """Test string representation."""
        env = _make_env()
        repr_str = repr(env)
        assert "MjWarpEnv" in repr_str
        assert "batch_size" in repr_str
        env.close()

    def test_wrapper_repr(self):
        """Test string representation of MjWarpWrapper."""
        config = _make_config()
        env = MjWarpWrapper(config, batch_size=[4], device="cuda:0")
        repr_str = repr(env)
        assert "MjWarpWrapper" in repr_str
        assert "batch_size" in repr_str
        env.close()

    def test_check_kwargs_missing_env(self):
        """Test that missing env raises TypeError."""
        with pytest.raises(TypeError, match="Could not find environment key"):
            MjWarpWrapper(batch_size=[1], device="cuda:0")

    def test_check_kwargs_wrong_type(self):
        """Test that wrong env type raises TypeError."""
        with pytest.raises(TypeError, match="must be a MjWarpEnvConfig"):
            MjWarpWrapper("not_a_config", batch_size=[1], device="cuda:0")

    def test_mjwarpenv_missing_xml_path(self):
        """Test that missing xml_path raises TypeError."""
        with pytest.raises(TypeError, match="xml_path"):
            MjWarpEnv(
                obs_fn=_obs_fn,
                reward_fn=_reward_fn,
                done_fn=_done_fn,
                batch_size=[1],
                device="cuda:0",
            )

    def test_cuda_device_required(self):
        """Test that non-CUDA device raises ValueError."""
        with pytest.raises(ValueError, match="CUDA device"):
            config = _make_config()
            MjWarpWrapper(config, batch_size=[4], device="cpu")

    def test_partial_reset(self):
        """Test that partial reset via _reset key only resets selected worlds."""
        env = _make_env(batch_size=8)
        td = env.reset()

        # Step a few times to diverge state from initial
        for _ in range(5):
            td["action"] = env.action_spec.rand()
            td = env.step(td)
            td = td["next"].clone()

        obs_before_reset = td["observation"].clone()

        # Create a partial reset mask: only reset worlds 0, 3, 7
        reset_mask = torch.zeros(8, 1, dtype=torch.bool, device="cuda:0")
        reset_mask[0] = True
        reset_mask[3] = True
        reset_mask[7] = True
        td["_reset"] = reset_mask

        td_reset = env.reset(td)

        # Reset worlds should have initial-state observations
        initial_td = env.reset()  # full reset to get initial obs
        initial_obs = initial_td["observation"]

        # Non-reset worlds (1,2,4,5,6) should retain their pre-reset obs
        for idx in [1, 2, 4, 5, 6]:
            torch.testing.assert_close(
                td_reset["observation"][idx],
                obs_before_reset[idx],
                msg=f"World {idx} should NOT have been reset",
            )

        # Reset worlds (0,3,7) should match initial state
        for idx in [0, 3, 7]:
            torch.testing.assert_close(
                td_reset["observation"][idx],
                initial_obs[idx],
                msg=f"World {idx} should have been reset to initial state",
            )

        env.close()

    def test_full_reset_with_reset_key_all_true(self):
        """Test that _reset with all True is equivalent to full reset."""
        env = _make_env(batch_size=4)

        # Step to diverge state
        td = env.reset()
        for _ in range(3):
            td["action"] = env.action_spec.rand()
            td = env.step(td)
            td = td["next"].clone()

        # Full reset via _reset key with all True
        reset_mask = torch.ones(4, 1, dtype=torch.bool, device="cuda:0")
        td["_reset"] = reset_mask
        td_reset = env.reset(td)

        # Should match a clean full reset
        td_clean = env.reset()
        torch.testing.assert_close(td_reset["observation"], td_clean["observation"])

        env.close()

    def test_with_transform(self):
        """Test that MjWarpEnv works with TransformedEnv."""
        from torchrl.envs import TransformedEnv
        from torchrl.envs.transforms import DoubleToFloat

        base_env = _make_env()
        env = TransformedEnv(base_env, DoubleToFloat())
        check_env_specs(env)
        rollout = env.rollout(5)
        assert rollout.batch_size[:-1] == torch.Size([4])
        env.close()

    def test_tensor_persistence_across_steps(self):
        """Test that cloned tensors remain valid after stepping."""
        env = _make_env()
        td = env.reset()
        obs_before = td["observation"].clone()

        td["action"] = env.action_spec.rand()
        td = env.step(td)

        # obs_before should still be valid (not corrupted by step)
        assert obs_before.device == torch.device("cuda:0")
        assert not torch.isnan(obs_before).any()
        assert obs_before.shape == td["next", "observation"].shape
        env.close()
