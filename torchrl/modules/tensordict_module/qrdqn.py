# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
"""QR-DQN Module for Quantile Regression DQN.

This module provides action selection for QR-DQN by computing the mean
Q-value across quantiles.

Reference: "Distributional Reinforcement Learning with Quantile Regression"
https://arxiv.org/abs/1710.10044
"""
from __future__ import annotations

from collections.abc import Sequence

import torch
from tensordict import TensorDictBase
from tensordict.nn import dispatch, TensorDictModuleBase
from tensordict.utils import NestedKey
from torch import nn

from torchrl.data.tensor_specs import Composite, TensorSpec
from torchrl.data.utils import _find_action_space
from torchrl.modules.tensordict_module.sequence import SafeSequential


class QRDQNModule(TensorDictModuleBase):
    """QR-DQN Module for Quantile Regression DQN action selection.

    This module processes quantile values and selects actions based on the
    mean Q-value across quantiles. Unlike DistributionalQValueModule which
    expects log-softmax probabilities, this module works with raw quantile values.

    Args:
        action_space (str): Action space. Must be one of
            ``"one-hot"``, ``"mult-one-hot"``, or ``"categorical"``.
        action_value_key (str or tuple of str, optional): The input key
            representing the quantile values. Expected shape is
            [batch, num_quantiles, num_actions]. Defaults to ``"action_value"``.
        action_mask_key (str or tuple of str, optional): The input key
            representing the action mask. Defaults to ``None`` (no masking).
        out_keys (list of str, optional): The output keys for action and
            action values. Defaults to ``["action", "action_value"]``.
        var_nums (int, optional): if ``action_space = "mult-one-hot"``,
            this value represents the cardinality of each action component.
        spec (TensorSpec, optional): if provided, the specs of the action.
            This is exclusive with ``action_space``.
        safe (bool): if ``True``, the value of the output is checked against
            the input spec. Default is ``False``.

    Examples:
        >>> import torch
        >>> from tensordict import TensorDict
        >>> module = QRDQNModule(action_space="categorical")
        >>> # Quantile values: [batch, num_quantiles, num_actions]
        >>> action_value = torch.randn(4, 32, 5)  # 4 batch, 32 quantiles, 5 actions
        >>> td = TensorDict({"action_value": action_value}, batch_size=[4])
        >>> td = module(td)
        >>> print(td["action"].shape)  # [4]
        torch.Size([4])
    """

    in_keys: list[NestedKey]
    out_keys: list[NestedKey]

    def __init__(
        self,
        action_space: str | None,
        action_value_key: NestedKey | None = None,
        action_mask_key: NestedKey | None = None,
        out_keys: Sequence[NestedKey] | None = None,
        var_nums: int | None = None,
        spec: TensorSpec = None,
        safe: bool = False,
    ):
        super().__init__()

        if action_value_key is None:
            action_value_key = "action_value"
        if out_keys is None:
            out_keys = ["action", action_value_key]

        self.in_keys = [action_value_key]
        if action_mask_key is not None:
            self.in_keys.append(action_mask_key)
        self.out_keys = list(out_keys)

        self.action_mask_key = action_mask_key
        self.var_nums = var_nums
        self.safe = safe

        if spec is not None and action_space is None:
            action_space, _ = _find_action_space(spec)
        elif action_space is None:
            raise ValueError("Either action_space or spec must be provided.")
        self.action_space = _find_action_space(action_space)

        if spec is not None:
            self._spec = Composite({out_keys[0]: spec})
        else:
            self._spec = None

        self.action_func_mapping = {
            "one_hot": self._one_hot,
            "one-hot": self._one_hot,
            "mult_one_hot": self._mult_one_hot,
            "mult-one-hot": self._mult_one_hot,
            "categorical": self._categorical,
        }

    @property
    def spec(self) -> Composite:
        return self._spec

    @spec.setter
    def spec(self, spec: Composite) -> None:
        if not isinstance(spec, Composite):
            raise RuntimeError(
                f"Trying to set an object of type {type(spec)} as a tensorspec "
                f"but expected a Composite instance."
            )
        self._spec = spec

    @property
    def action_value_key(self):
        return self.in_keys[0]

    @dispatch(auto_batch_size=False)
    def forward(self, tensordict: TensorDictBase) -> TensorDictBase:
        """Select actions based on mean Q-values across quantiles.

        Args:
            tensordict: Input tensordict containing quantile values with shape
                [batch, num_quantiles, num_actions].

        Returns:
            Updated tensordict with selected actions.
        """
        action_values = tensordict.get(self.action_value_key, None)
        if action_values is None:
            raise KeyError(
                f"Action value key {self.action_value_key} not found in {tensordict}."
            )

        # Compute mean Q-values across quantiles for action selection
        # action_values shape: [batch, num_quantiles, num_actions]
        # q_mean shape: [batch, num_actions]
        q_mean = action_values.mean(dim=-2)

        if self.action_mask_key is not None:
            action_mask = tensordict.get(self.action_mask_key, None)
            if action_mask is None:
                raise KeyError(
                    f"Action mask key {self.action_mask_key} not found in {tensordict}."
                )
            q_mean = torch.where(action_mask, q_mean, torch.finfo(q_mean.dtype).min)

        action = self.action_func_mapping[self.action_space](q_mean)

        tensordict.update(
            dict(
                zip(
                    self.out_keys,
                    (
                        action,
                        action_values,
                    ),
                )
            )
        )
        return tensordict

    @staticmethod
    def _one_hot(value: torch.Tensor) -> torch.Tensor:
        """Convert Q-values to one-hot action."""
        out = (value == value.max(dim=-1, keepdim=True)[0]).to(torch.long)
        return out

    @staticmethod
    def _categorical(value: torch.Tensor) -> torch.Tensor:
        """Convert Q-values to categorical action index."""
        return torch.argmax(value, dim=-1).to(torch.long)

    def _mult_one_hot(self, value: torch.Tensor) -> torch.Tensor:
        """Convert Q-values to multi one-hot action."""
        if self.var_nums is None:
            raise ValueError(
                "var_nums must be provided to the constructor for "
                "multi one-hot action spaces."
            )
        values = value.split(self.var_nums, dim=-1)
        return torch.cat(
            [self._one_hot(_value) for _value in values],
            -1,
        )


class QRDQNActor(SafeSequential):
    """A QR-DQN actor class for Quantile Regression DQN.

    This class appends a :class:`~.QRDQNModule` after the input module
    such that action selection uses mean Q-values across quantiles.

    Args:
        module (nn.Module): A module that outputs quantile values with shape
            [batch, num_quantiles, num_actions].

    Keyword Args:
        in_keys (iterable of str, optional): Keys to be read from input
            tensordict and passed to the module. Defaults to ``["observation"]``.
        spec (TensorSpec, optional): Specs of the output tensor.
        safe (bool): If ``True``, the output is checked against the spec.
            Default is ``False``.
        action_space (str, optional): Action space. Must be one of
            ``"one-hot"``, ``"mult-one-hot"``, or ``"categorical"``.
        action_value_key (str, optional): The key for quantile values output.
            Defaults to ``"action_value"``.
        action_mask_key (str, optional): The key for action mask. Defaults to ``None``.

    Examples:
        >>> import torch
        >>> from tensordict import TensorDict
        >>> from tensordict.nn import TensorDictModule
        >>> from torchrl.data import OneHot
        >>> from torchrl.modules.models.models import MLP
        >>>
        >>> # Create a network outputting [batch, num_quantiles, num_actions]
        >>> class QRNetwork(torch.nn.Module):
        ...     def __init__(self, obs_dim, num_quantiles, num_actions):
        ...         super().__init__()
        ...         self.net = MLP(obs_dim, (num_quantiles * num_actions,))
        ...         self.num_quantiles = num_quantiles
        ...         self.num_actions = num_actions
        ...     def forward(self, x):
        ...         out = self.net(x)
        ...         return out.view(*x.shape[:-1], self.num_quantiles, self.num_actions)
        >>>
        >>> net = QRNetwork(4, 32, 3)
        >>> td = TensorDict({"observation": torch.randn(5, 4)}, batch_size=[5])
        >>> action_spec = OneHot(3)
        >>> actor = QRDQNActor(net, spec=action_spec, in_keys=["observation"])
        >>> td = actor(td)
        >>> print(td["action"].shape)
        torch.Size([5, 3])
    """

    def __init__(
        self,
        module: nn.Module,
        in_keys: Sequence[NestedKey] | None = None,
        spec: TensorSpec | None = None,
        safe: bool = False,
        action_space: str | None = None,
        action_value_key: str = "action_value",
        action_mask_key: NestedKey | None = None,
    ):
        if isinstance(action_space, TensorSpec):
            raise RuntimeError("Using specs in action_space is deprecated")
        action_space, spec = self._process_action_space_spec(action_space, spec)
        self.action_space = action_space
        self.action_value_key = action_value_key

        if in_keys is None:
            in_keys = ["observation"]

        # Wrap module if needed
        if isinstance(module, TensorDictModuleBase):
            if action_value_key not in module.out_keys:
                raise ValueError(
                    f"action_value_key '{action_value_key}' not found in module.out_keys: "
                    f"{module.out_keys}"
                )
        else:
            from tensordict.nn import TensorDictModule

            module = TensorDictModule(
                module,
                in_keys=in_keys,
                out_keys=[action_value_key],
            )

        # Create the QR-DQN action selection module
        qrdqn_module = QRDQNModule(
            action_space=action_space,
            action_value_key=action_value_key,
            action_mask_key=action_mask_key,
            out_keys=["action", action_value_key],
            spec=spec,
            safe=safe,
        )

        super().__init__(module, qrdqn_module)

    @staticmethod
    def _process_action_space_spec(action_space, spec):
        """Process action_space and spec arguments."""
        if action_space is None and spec is None:
            raise ValueError("Either action_space or spec must be provided.")
        if spec is not None:
            if hasattr(spec, "space"):
                if action_space is None:
                    action_space = spec
            elif isinstance(spec, Composite):
                if "action" in spec.keys():
                    if action_space is None:
                        action_space = spec["action"]
        return action_space, spec
