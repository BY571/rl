# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

import dataclasses
import importlib.util
from collections.abc import Callable
from typing import Any

import torch
from tensordict import TensorDict, TensorDictBase

from torchrl.data.tensor_specs import Bounded, Composite, Unbounded
from torchrl.envs.batched_envs import ParallelEnv
from torchrl.envs.common import _EnvPostInit, _EnvWrapper
from torchrl.envs.utils import _classproperty

_has_mjwarp = importlib.util.find_spec("mujoco_warp") is not None
_has_mujoco = importlib.util.find_spec("mujoco") is not None
_has_warp = importlib.util.find_spec("warp") is not None


@dataclasses.dataclass
class MjWarpEnvConfig:
    """Configuration for a MuJoCo Warp environment.

    Since MJWarp is a physics engine without built-in obs/reward/done semantics,
    the user must provide callable functions to extract these from the simulation data.

    Args:
        mjw_model: The GPU model from ``mjw.put_model()``.
        mj_model: The original ``mujoco.MjModel`` (needed for ``mjw.make_data``).
        obs_fn: A callable ``(mjw.Data) -> dict[str, torch.Tensor]`` that extracts
            observations from the MJWarp data. Tensors should be obtained via
            ``wp.to_torch()`` for zero-copy GPU interop.
        reward_fn: A callable ``(mjw.Data, torch.Tensor) -> torch.Tensor`` that
            computes rewards from the data and action tensor.
        done_fn: A callable ``(mjw.Data) -> torch.Tensor`` that computes a boolean
            done signal from the data.
        reset_fn: An optional callable ``(mjw.Model, mjw.Data) -> mjw.Data`` for
            custom reset logic. If ``None``, a default reset using
            ``mjw.make_data()`` + ``mjw.forward()`` is used.
        action_size: Number of actuators. Defaults to ``mj_model.nu``.
        action_low: Lower bound for action spec. Defaults to ``-1.0``.
        action_high: Upper bound for action spec. Defaults to ``1.0``.
    """

    mjw_model: Any
    mj_model: Any
    obs_fn: Callable
    reward_fn: Callable
    done_fn: Callable
    reset_fn: Callable | None = None
    action_size: int | None = None
    action_low: float = -1.0
    action_high: float = 1.0


class _MjWarpMeta(_EnvPostInit):
    """Metaclass for MjWarpEnv that returns a lazy ParallelEnv when num_workers > 1."""

    def __call__(cls, *args, num_workers: int | None = None, **kwargs):
        if num_workers is None:
            num_workers = kwargs.pop("num_workers", 1)
        else:
            kwargs.pop("num_workers", None)

        num_workers = int(num_workers)
        if cls.__name__ == "MjWarpEnv" and num_workers > 1:
            xml_path = args[0] if len(args) >= 1 else kwargs.get("xml_path")
            env_kwargs = {k: v for k, v in kwargs.items() if k != "xml_path"}

            def make_env(_xml_path=xml_path, _kwargs=env_kwargs):
                return cls(_xml_path, num_workers=1, **_kwargs)

            return ParallelEnv(num_workers, make_env)

        return super().__call__(*args, **kwargs)


class MjWarpWrapper(_EnvWrapper):
    """MuJoCo Warp environment wrapper.

    MuJoCo Warp (MJWarp) is a GPU-optimized MuJoCo built on NVIDIA Warp.
    It provides zero-copy PyTorch interop via ``wp.to_torch()`` / ``wp.from_torch()``,
    enabling high-throughput batched simulation without JAX or DLPack overhead.

    GitHub: https://github.com/google-deepmind/mujoco_warp

    Since MJWarp is a physics engine (no built-in obs/reward/done concept), the
    user must provide callable functions that extract observations, rewards, and
    done signals from the simulation data.

    .. note::
        MJWarp requires CUDA. All output tensors live on the GPU device.
        Gradient backpropagation through MJWarp rollouts is not supported
        (unlike Brax). For time-limited episodes, use a ``StepCounter``
        transform with ``max_steps``.

    Args:
        env (MjWarpEnvConfig): Configuration dataclass containing the GPU model,
            MuJoCo model, and user-defined obs/reward/done functions.

    Keyword Args:
        device (torch.device, optional): The CUDA device for output tensors.
            Must be a CUDA device. Defaults to ``"cuda:0"``.
        batch_size (torch.Size, optional): The number of parallel simulation
            worlds. MJWarp handles batching natively via ``nworld``.
            Defaults to ``torch.Size([])``.
        allow_done_after_reset (bool, optional): If ``True``, tolerates environments
            being done immediately after reset. Defaults to ``False``.

    Examples:
        >>> import mujoco
        >>> import mujoco_warp as mjw
        >>> import warp as wp
        >>> import torch
        >>> from torchrl.envs import MjWarpWrapper, MjWarpEnvConfig
        >>>
        >>> def obs_fn(data):
        ...     return {"observation": torch.cat([wp.to_torch(data.qpos), wp.to_torch(data.qvel)], dim=-1)}
        >>>
        >>> def reward_fn(data, action):
        ...     return wp.to_torch(data.qvel)[:, 0:1]
        >>>
        >>> def done_fn(data):
        ...     return wp.to_torch(data.qpos)[:, 2].abs() > 1.0
        >>>
        >>> mj_model = mujoco.MjModel.from_xml_path("humanoid.xml")
        >>> mjw_model = mjw.put_model(mj_model)
        >>> config = MjWarpEnvConfig(mjw_model, mj_model, obs_fn, reward_fn, done_fn)
        >>> env = MjWarpWrapper(config, batch_size=[4096], device="cuda:0")
        >>> td = env.reset()
        >>> td["action"] = env.action_spec.rand()
        >>> td = env.step(td)
    """

    git_url = "https://github.com/google-deepmind/mujoco_warp"
    libname = "mujoco_warp"

    _lib = None

    @_classproperty
    def lib(cls):
        if cls._lib is not None:
            return cls._lib

        import mujoco_warp

        cls._lib = mujoco_warp
        return mujoco_warp

    def __init__(self, env=None, **kwargs):
        if env is not None:
            kwargs["env"] = env
        super().__init__(**kwargs)

    def _check_kwargs(self, kwargs: dict):
        if "env" not in kwargs:
            raise TypeError("Could not find environment key 'env' in kwargs.")
        env = kwargs["env"]
        if not isinstance(env, MjWarpEnvConfig):
            raise TypeError(f"env must be a MjWarpEnvConfig instance, got {type(env)}.")

    def _build_env(self, env: MjWarpEnvConfig, **kwargs) -> MjWarpEnvConfig:
        if not _has_mjwarp:
            raise ImportError(
                "mujoco_warp is not installed. "
                "Install it with: pip install mujoco-warp"
            )
        if not _has_warp:
            raise ImportError(
                "NVIDIA warp is not installed. "
                "Install it with: pip install warp-lang"
            )

        if self.device is not None and self.device.type != "cuda":
            raise ValueError(
                f"MJWarp requires a CUDA device, got device={self.device}. "
                "Set device='cuda' or device='cuda:N'."
            )

        self._mjw_model = env.mjw_model
        self._mj_model = env.mj_model
        self._obs_fn = env.obs_fn
        self._reward_fn = env.reward_fn
        self._done_fn = env.done_fn
        self._reset_fn = env.reset_fn
        self._action_size = (
            env.action_size if env.action_size is not None else env.mj_model.nu
        )
        self._action_low = env.action_low
        self._action_high = env.action_high

        return env

    def _make_specs(self, env: MjWarpEnvConfig) -> None:
        import mujoco_warp as mjw

        # Probe observation shapes using a single-world data instance
        probe_data = mjw.make_data(self._mj_model, nworld=1)
        mjw.forward(self._mjw_model, probe_data)
        probe_obs = self._obs_fn(probe_data)

        obs_specs = {}
        for key, val in probe_obs.items():
            # val shape is (1, ...) from single-world probe; take per-world shape
            per_world_shape = val.shape[1:]
            obs_specs[key] = Unbounded(
                shape=(*self.batch_size, *per_world_shape),
                device=self.device,
                dtype=val.dtype,
            )

        self.observation_spec = Composite(
            obs_specs,
            shape=self.batch_size,
        )

        self.action_spec = Bounded(
            low=self._action_low,
            high=self._action_high,
            shape=(*self.batch_size, self._action_size),
            device=self.device,
            dtype=torch.float32,
        )

        self.reward_spec = Unbounded(
            shape=(*self.batch_size, 1),
            device=self.device,
            dtype=torch.float32,
        )

    def _init_env(self) -> None:
        import mujoco_warp as mjw
        import warp as wp

        nworld = self.batch_size.numel() or 1
        self._mjw_data = mjw.make_data(self._mj_model, nworld=nworld)
        mjw.forward(self._mjw_model, self._mjw_data)

        # Store template reset state for per-world selective reset.
        # We snapshot the qpos, qvel, ctrl, act arrays from a freshly
        # initialized single-world data so we can overwrite individual
        # worlds without recreating the entire batched data.
        template_data = mjw.make_data(self._mj_model, nworld=1)
        mjw.forward(self._mjw_model, template_data)
        self._reset_qpos = wp.to_torch(template_data.qpos).clone()
        self._reset_qvel = wp.to_torch(template_data.qvel).clone()
        self._reset_ctrl = wp.to_torch(template_data.ctrl).clone()
        self._reset_act = wp.to_torch(template_data.act).clone()

    def _set_seed(self, seed: int | None) -> None:
        if seed is not None:
            self._torch_generator = torch.Generator(device=self.device)
            self._torch_generator.manual_seed(seed)
        else:
            self._torch_generator = None

    def _selective_reset(self, reset_mask: torch.Tensor) -> None:
        """Reset only the worlds indicated by reset_mask to template state."""
        import warp as wp

        # reset_mask: flat bool tensor of shape (nworld,)
        idx = reset_mask.nonzero(as_tuple=True)[0]
        if idx.numel() == 0:
            return

        qpos = wp.to_torch(self._mjw_data.qpos)
        qvel = wp.to_torch(self._mjw_data.qvel)
        ctrl = wp.to_torch(self._mjw_data.ctrl)
        act = wp.to_torch(self._mjw_data.act)

        # Overwrite selected worlds with template values
        qpos[idx] = self._reset_qpos.expand_as(qpos[idx])
        qvel[idx] = self._reset_qvel.expand_as(qvel[idx])
        ctrl[idx] = self._reset_ctrl.expand_as(ctrl[idx])
        act[idx] = self._reset_act.expand_as(act[idx])

    def _reset(self, tensordict: TensorDictBase = None, **kwargs) -> TensorDictBase:
        import mujoco_warp as mjw

        nworld = self.batch_size.numel() or 1

        # Check for partial reset via "_reset" key
        reset_mask = None
        if tensordict is not None:
            reset_mask = tensordict.get("_reset", None)
            if reset_mask is not None:
                reset_mask = reset_mask.view(nworld).bool()

        if reset_mask is not None and not reset_mask.all():
            # Partial reset: only reset selected worlds
            self._selective_reset(reset_mask)
            mjw.forward(self._mjw_model, self._mjw_data)
        elif self._reset_fn is not None:
            self._mjw_data = self._reset_fn(self._mjw_model, self._mjw_data)
            mjw.forward(self._mjw_model, self._mjw_data)
        else:
            # Full reset: recreate all worlds
            self._mjw_data = mjw.make_data(self._mj_model, nworld=nworld)
            mjw.forward(self._mjw_model, self._mjw_data)

        obs_dict = self._obs_fn(self._mjw_data)
        done = self._done_fn(self._mjw_data)

        if done.dtype != torch.bool:
            done = done.bool()

        # Ensure done has trailing dim
        if done.dim() == 1:
            done = done.unsqueeze(-1)

        # Reshape for batch_size
        if self.batch_size:
            done = done.view(*self.batch_size, 1)
            obs_dict = {
                k: v.view(*self.batch_size, *v.shape[1:]) for k, v in obs_dict.items()
            }

        source = dict(obs_dict)
        source["done"] = done
        source["terminated"] = done.clone()

        return TensorDict._new_unsafe(
            source=source,
            batch_size=self.batch_size,
            device=self.device,
        )

    def _step(self, tensordict: TensorDictBase) -> TensorDictBase:
        import mujoco_warp as mjw
        import warp as wp

        action = tensordict.get("action")

        # Flatten action for nworld dimension
        flat_action = action.reshape(-1, self._action_size)

        # Write action into ctrl via zero-copy
        ctrl_torch = wp.to_torch(self._mjw_data.ctrl)
        ctrl_torch.copy_(flat_action)

        # Step all worlds in parallel
        mjw.step(self._mjw_model, self._mjw_data)

        obs_dict = self._obs_fn(self._mjw_data)
        reward = self._reward_fn(self._mjw_data, action)
        done = self._done_fn(self._mjw_data)

        if done.dtype != torch.bool:
            done = done.bool()

        # Ensure reward has trailing dim
        if reward.dim() == 1:
            reward = reward.unsqueeze(-1)

        # Ensure done has trailing dim
        if done.dim() == 1:
            done = done.unsqueeze(-1)

        # Reshape for batch_size
        if self.batch_size:
            reward = reward.view(*self.batch_size, 1)
            done = done.view(*self.batch_size, 1)
            obs_dict = {
                k: v.view(*self.batch_size, *v.shape[1:]) for k, v in obs_dict.items()
            }

        source = dict(obs_dict)
        source["reward"] = reward
        source["done"] = done
        source["terminated"] = done.clone()

        return TensorDict._new_unsafe(
            source=source,
            batch_size=self.batch_size,
            device=self.device,
        )

    def close(self, *, raise_if_closed: bool = True) -> None:
        """Closes the environment and frees GPU resources."""
        if hasattr(self, "_mjw_data"):
            del self._mjw_data
        if hasattr(self, "_reset_qpos"):
            del self._reset_qpos
            del self._reset_qvel
            del self._reset_ctrl
            del self._reset_act
        self.is_closed = True

    def __repr__(self) -> str:
        return (
            f"{self.__class__.__name__}("
            f"batch_size={self.batch_size}, device={self.device})"
        )


class MjWarpEnv(MjWarpWrapper, metaclass=_MjWarpMeta):
    """MuJoCo Warp environment constructed from an MJCF XML path.

    This is a convenience constructor that handles loading the MuJoCo model,
    uploading it to GPU via ``mjw.put_model()``, and building the
    :class:`MjWarpEnvConfig` internally.

    Args:
        xml_path (str): Path to an MJCF XML file, or an XML string.
        obs_fn (callable): ``(mjw.Data) -> dict[str, torch.Tensor]``.
        reward_fn (callable): ``(mjw.Data, torch.Tensor) -> torch.Tensor``.
        done_fn (callable): ``(mjw.Data) -> torch.Tensor``.

    Keyword Args:
        reset_fn (callable, optional): Custom reset function.
        action_size (int, optional): Number of actuators. Defaults to ``mj_model.nu``.
        action_low (float, optional): Lower bound for actions. Defaults to ``-1.0``.
        action_high (float, optional): Upper bound for actions. Defaults to ``1.0``.
        device (torch.device, optional): CUDA device for output tensors.
            Defaults to ``"cuda:0"``.
        batch_size (torch.Size, optional): Number of parallel worlds.
            Defaults to ``torch.Size([])``.
        num_workers (int, optional): If greater than 1, returns a
            :class:`~torchrl.envs.ParallelEnv` wrapping multiple ``MjWarpEnv``
            instances.

    Examples:
        >>> import mujoco_warp as mjw
        >>> import warp as wp
        >>> import torch
        >>> from torchrl.envs import MjWarpEnv
        >>>
        >>> def obs_fn(data):
        ...     return {"observation": torch.cat([wp.to_torch(data.qpos), wp.to_torch(data.qvel)], dim=-1)}
        >>>
        >>> def reward_fn(data, action):
        ...     return wp.to_torch(data.qvel)[:, 0:1]
        >>>
        >>> def done_fn(data):
        ...     return wp.to_torch(data.qpos)[:, 2].abs() > 1.0
        >>>
        >>> env = MjWarpEnv(
        ...     "humanoid.xml",
        ...     obs_fn=obs_fn, reward_fn=reward_fn, done_fn=done_fn,
        ...     batch_size=[4096], device="cuda:0",
        ... )
        >>> rollout = env.rollout(100)
    """

    def __init__(
        self,
        xml_path: str,
        obs_fn: Callable,
        reward_fn: Callable,
        done_fn: Callable,
        *,
        reset_fn: Callable | None = None,
        action_size: int | None = None,
        action_low: float = -1.0,
        action_high: float = 1.0,
        **kwargs,
    ):
        kwargs["xml_path"] = xml_path
        kwargs["obs_fn"] = obs_fn
        kwargs["reward_fn"] = reward_fn
        kwargs["done_fn"] = done_fn
        kwargs["reset_fn"] = reset_fn
        kwargs["action_size"] = action_size
        kwargs["action_low"] = action_low
        kwargs["action_high"] = action_high
        super().__init__(**kwargs)

    def _check_kwargs(self, kwargs: dict):
        if "xml_path" not in kwargs:
            raise TypeError("Expected 'xml_path' to be part of kwargs")
        if "obs_fn" not in kwargs:
            raise TypeError("Expected 'obs_fn' to be part of kwargs")
        if "reward_fn" not in kwargs:
            raise TypeError("Expected 'reward_fn' to be part of kwargs")
        if "done_fn" not in kwargs:
            raise TypeError("Expected 'done_fn' to be part of kwargs")

    def _build_env(
        self,
        xml_path: str,
        obs_fn: Callable,
        reward_fn: Callable,
        done_fn: Callable,
        reset_fn: Callable | None = None,
        action_size: int | None = None,
        action_low: float = -1.0,
        action_high: float = 1.0,
        **kwargs,
    ) -> MjWarpEnvConfig:
        if not _has_mjwarp:
            raise ImportError(
                f"mujoco_warp not found, unable to create env from {xml_path}. "
                f"Consider downloading and installing mujoco-warp from {self.git_url}"
            )
        if not _has_mujoco:
            raise ImportError("mujoco not found. Install it with: pip install mujoco")

        import mujoco
        import mujoco_warp as mjw

        # Load MuJoCo model from XML path or string
        if xml_path.strip().startswith("<"):
            mj_model = mujoco.MjModel.from_xml_string(xml_path)
        else:
            mj_model = mujoco.MjModel.from_xml_path(xml_path)

        mjw_model = mjw.put_model(mj_model)

        config = MjWarpEnvConfig(
            mjw_model=mjw_model,
            mj_model=mj_model,
            obs_fn=obs_fn,
            reward_fn=reward_fn,
            done_fn=done_fn,
            reset_fn=reset_fn,
            action_size=action_size,
            action_low=action_low,
            action_high=action_high,
        )

        return super()._build_env(config, **kwargs)

    @property
    def xml_path(self):
        return self._constructor_kwargs["xml_path"]

    def __repr__(self) -> str:
        return (
            f"{self.__class__.__name__}(xml_path={self.xml_path!r}, "
            f"batch_size={self.batch_size}, device={self.device})"
        )
