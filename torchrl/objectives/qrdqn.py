# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
"""QR-DQN Loss Module.

Implements Quantile Regression DQN from:
"Distributional Reinforcement Learning with Quantile Regression"
Dabney et al., 2017
https://arxiv.org/abs/1710.10044
"""
from __future__ import annotations

import warnings
from dataclasses import dataclass

import torch
from tensordict import TensorDict, TensorDictBase, TensorDictParams
from tensordict.nn import dispatch, TensorDictModule
from tensordict.utils import NestedKey
from torch import nn, Tensor

from torchrl.data.tensor_specs import TensorSpec
from torchrl.data.utils import _find_action_space
from torchrl.envs.utils import step_mdp
from torchrl.modules.tensordict_module.common import ensure_tensordict_compatible
from torchrl.modules.tensordict_module.qrdqn import QRDQNActor
from torchrl.objectives.common import LossModule
from torchrl.objectives.utils import (
    _GAMMA_LMBDA_DEPREC_ERROR,
    _reduce,
    default_value_kwargs,
    ValueEstimators,
)
from torchrl.objectives.value import ValueEstimatorBase


class QRDQNLoss(LossModule):
    """QR-DQN Loss class for Quantile Regression DQN.

    This loss implements the Quantile Regression DQN algorithm from
    "Distributional Reinforcement Learning with Quantile Regression"
    (Dabney et al., 2017).

    Unlike standard DQN which estimates E[Z(s,a)], QR-DQN learns the full
    distribution of returns by estimating N quantile values. The loss uses
    quantile Huber loss which is more robust than standard quantile regression.

    Args:
        value_network (DistributionalQValueActor or nn.Module): A Q-value network
            that outputs quantile values. The network should output a tensor of
            shape [batch, num_quantiles, num_actions].

    Keyword Args:
        num_quantiles (int, optional): Number of quantiles to estimate. Defaults to 200
            (as in the original paper for Atari).
        huber_kappa (float, optional): Threshold for Huber loss. Defaults to 1.0.
        delay_value (bool, optional): Whether to use a target network. Defaults to True.
        double_qrdqn (bool, optional): Whether to use Double DQN action selection
            (select action with online network, evaluate with target network).
            Defaults to False.
        action_space (str or TensorSpec, optional): Action space. Must be one of
            "one-hot", "mult_one_hot", "binary" or "categorical".
        gamma (float, optional): Discount factor. Defaults to None (must be set via
            make_value_estimator).
        priority_key (str, optional): Key for priority in tensordict. Defaults to "td_error".
        reduction (str, optional): Reduction method for loss. Defaults to "mean".

    Examples:
        >>> import torch
        >>> from torchrl.modules import MLP, DistributionalQValueActor
        >>> from torchrl.data import OneHot
        >>> from tensordict import TensorDict
        >>>
        >>> n_obs, n_act, num_quantiles = 4, 3, 51
        >>> # Create a network that outputs [batch, num_quantiles, n_act]
        >>> value_net = MLP(in_features=n_obs, out_features=num_quantiles * n_act, depth=2)
        >>> # Reshape to [batch, num_quantiles, n_act] in forward pass
        >>> class QRNet(torch.nn.Module):
        ...     def __init__(self, net, num_quantiles, n_act):
        ...         super().__init__()
        ...         self.net = net
        ...         self.num_quantiles = num_quantiles
        ...         self.n_act = n_act
        ...     def forward(self, x):
        ...         return self.net(x).view(*x.shape[:-1], self.num_quantiles, self.n_act)
        >>> qr_net = QRNet(value_net, num_quantiles, n_act)
        >>> spec = OneHot(n_act)
        >>> # Note: DistributionalQValueActor expects log_softmax output, but QR-DQN
        >>> # uses raw quantile values. We need a custom actor or direct network usage.
        >>> actor = DistributionalQValueActor(
        ...     qr_net,
        ...     in_keys=["observation"],
        ...     action_space=spec,
        ...     support=torch.linspace(0, 1, num_quantiles),  # quantile midpoints
        ... )
        >>> loss = QRDQNLoss(actor, num_quantiles=num_quantiles, action_space=spec)
        >>> batch = [10,]
        >>> data = TensorDict({
        ...     "observation": torch.randn(*batch, n_obs),
        ...     "action": spec.rand(batch),
        ...     ("next", "observation"): torch.randn(*batch, n_obs),
        ...     ("next", "done"): torch.zeros(*batch, 1, dtype=torch.bool),
        ...     ("next", "terminated"): torch.zeros(*batch, 1, dtype=torch.bool),
        ...     ("next", "reward"): torch.randn(*batch, 1)
        ... }, batch)
        >>> loss_td = loss(data)
        >>> loss_td["loss"]
        tensor(..., grad_fn=<MeanBackward0>)
    """

    @dataclass
    class _AcceptedKeys:
        """Maintains default values for all configurable tensordict keys.

        Attributes:
            action_value (NestedKey): The input tensordict key for action values
                (quantile predictions). Defaults to "action_value".
            action (NestedKey): The input tensordict key for actions. Defaults to "action".
            priority (NestedKey): The key for priority values used in prioritized
                replay. Defaults to "td_error".
            reward (NestedKey): The key for rewards. Defaults to "reward".
            done (NestedKey): The key for done flags. Defaults to "done".
            terminated (NestedKey): The key for terminated flags. Defaults to "terminated".
        """

        action_value: NestedKey = "action_value"
        action: NestedKey = "action"
        priority: NestedKey = "td_error"
        reward: NestedKey = "reward"
        done: NestedKey = "done"
        terminated: NestedKey = "terminated"
        priority_weight: NestedKey = "priority_weight"

    tensor_keys: _AcceptedKeys
    default_keys = _AcceptedKeys
    default_value_estimator = ValueEstimators.TD0
    out_keys = ["loss"]

    value_network: TensorDictModule
    value_network_params: TensorDictParams
    target_value_network_params: TensorDictParams

    def __init__(
        self,
        value_network: QRDQNActor | nn.Module,
        *,
        num_quantiles: int = 200,
        huber_kappa: float = 1.0,
        delay_value: bool = True,
        double_qrdqn: bool = False,
        action_space: str | TensorSpec = None,
        gamma: float | None = None,
        priority_key: str | None = None,
        reduction: str | None = None,
        use_prioritized_weights: str | bool = "auto",
    ) -> None:
        if reduction is None:
            reduction = "mean"
        super().__init__()
        self.use_prioritized_weights = use_prioritized_weights
        self._in_keys = None

        if double_qrdqn and not delay_value:
            raise ValueError("double_qrdqn=True requires delay_value=True.")

        self.double_qrdqn = double_qrdqn
        self.num_quantiles = num_quantiles
        self.register_buffer("huber_kappa", torch.tensor(huber_kappa))

        self._set_deprecated_ctor_keys(priority=priority_key)
        self.delay_value = delay_value

        value_network = ensure_tensordict_compatible(
            module=value_network,
            wrapper_type=QRDQNActor,
            action_space=action_space,
        )

        self.convert_to_functional(
            value_network,
            "value_network",
            create_target_params=self.delay_value,
        )

        self.value_network_in_keys = value_network.in_keys

        if action_space is None:
            try:
                action_space = value_network.spec
            except AttributeError:
                try:
                    action_space = value_network.action_space
                except AttributeError:
                    raise ValueError(
                        "The action space could not be retrieved from the value_network. "
                        "Make sure it is available to the QRDQNLoss module."
                    )
        if action_space is None:
            warnings.warn(
                "action_space was not specified. QRDQNLoss will default to 'one-hot'. "
                "This behavior will be deprecated soon and a space will have to be passed."
            )
            action_space = "one-hot"
        self.action_space = _find_action_space(action_space)
        self.reduction = reduction

        if gamma is not None:
            raise TypeError(_GAMMA_LMBDA_DEPREC_ERROR)

        # Pre-compute quantile midpoints: τ_i = (2i - 1) / 2N for i = 1, ..., N
        # These are used in the asymmetric quantile loss
        tau = torch.arange(num_quantiles, dtype=torch.float32) + 0.5
        tau = tau / num_quantiles
        self.register_buffer("tau", tau)

    def _forward_value_estimator_keys(self, **kwargs) -> None:
        pass  # QR-DQN doesn't use standard value estimators

    def _set_in_keys(self):
        keys = [
            self.tensor_keys.action,
            ("next", self.tensor_keys.reward),
            ("next", self.tensor_keys.done),
            ("next", self.tensor_keys.terminated),
            *self.value_network.in_keys,
            *[("next", key) for key in self.value_network.in_keys],
        ]
        self._in_keys = list(set(keys))

    @property
    def in_keys(self):
        if self._in_keys is None:
            self._set_in_keys()
        return self._in_keys

    def make_value_estimator(self, value_type: ValueEstimators = None, **hyperparams):
        """Configure the value estimator.

        For QR-DQN, this primarily sets the gamma (discount factor) hyperparameter.
        The actual value computation uses quantile regression rather than
        standard TD estimation.
        """
        if value_type is None:
            value_type = self.default_value_estimator

        # Handle ValueEstimatorBase instance or class
        if isinstance(value_type, ValueEstimatorBase) or (
            isinstance(value_type, type) and issubclass(value_type, ValueEstimatorBase)
        ):
            return LossModule.make_value_estimator(self, value_type, **hyperparams)

        self.value_type = value_type
        hp = dict(default_value_kwargs(value_type))
        hp.update(hyperparams)

        # Store gamma for use in forward
        if "gamma" in hp:
            gamma = hp["gamma"]
            if not isinstance(gamma, torch.Tensor):
                gamma = torch.tensor(gamma)
            self.register_buffer("gamma", gamma)

        # Store device if provided
        if "device" in hp:
            device = hp["device"]
            if device is not None:
                # Move buffers to the specified device
                self.tau = self.tau.to(device)
                if hasattr(self, "gamma"):
                    self.gamma = self.gamma.to(device)
                self.huber_kappa = self.huber_kappa.to(device)

    def _quantile_huber_loss(
        self,
        td_errors: Tensor,
        tau: Tensor,
        kappa: float = 1.0,
    ) -> Tensor:
        """Compute the quantile Huber loss.

        The quantile Huber loss combines asymmetric quantile weighting with
        Huber loss for robustness:

            ρ_τ^κ(u) = |τ - 𝟙(u < 0)| × L_κ(u)

        where L_κ(u) is the Huber loss:
            L_κ(u) = 0.5 * u² if |u| ≤ κ
                   = κ * (|u| - 0.5 * κ) otherwise

        Args:
            td_errors: TD errors of shape [batch, num_quantiles, num_quantiles]
                (or [batch, num_quantiles_current, num_quantiles_target])
            tau: Quantile fractions of shape [num_quantiles]
            kappa: Huber loss threshold (default: 1.0)

        Returns:
            Quantile Huber loss of shape [batch]
        """
        # Huber loss element-wise
        abs_td_errors = td_errors.abs()
        huber_loss = torch.where(
            abs_td_errors <= kappa,
            0.5 * td_errors.pow(2),
            kappa * (abs_td_errors - 0.5 * kappa),
        )

        # Asymmetric quantile weighting
        # tau shape: [num_quantiles] -> [1, num_quantiles, 1] for broadcasting
        # td_errors shape: [batch, num_quantiles_i, num_quantiles_j]
        # We weight by |τ - 𝟙(u < 0)|
        tau_expanded = tau.view(1, -1, 1)
        indicator = (td_errors < 0).float()
        quantile_weight = torch.abs(tau_expanded - indicator)

        # Weighted Huber loss
        loss = quantile_weight * huber_loss

        # Sum over target quantiles, mean over current quantiles
        # loss shape: [batch, num_quantiles_i, num_quantiles_j]
        loss = loss.sum(dim=-1).mean(dim=-1)

        return loss

    @dispatch
    def forward(self, tensordict: TensorDictBase) -> TensorDict:
        """Compute the QR-DQN loss given a tensordict sampled from replay buffer.

        This method also writes a "td_error" key for prioritized replay buffers.

        Args:
            tensordict: A tensordict with keys ["action"] and the in_keys of
                the value network (observations, "done", "terminated", "reward"
                in a "next" tensordict).

        Returns:
            A TensorDict containing the loss.
        """
        td_copy = tensordict.clone(False)

        # Get current quantile values for all actions
        with self.value_network_params.to_module(self.value_network):
            self.value_network(td_copy)

        # action_value shape: [batch, num_quantiles, num_actions]
        action_value = td_copy.get(self.tensor_keys.action_value)
        action = tensordict.get(self.tensor_keys.action)

        # Get quantile values for taken actions
        # current_quantiles shape: [batch, num_quantiles]
        if self.action_space == "categorical":
            if action.ndim < action_value.ndim - 1:
                action = action.unsqueeze(-1)
            # action shape: [batch, 1] -> [batch, num_quantiles, 1]
            action_expanded = action.unsqueeze(-2).expand(
                *action.shape[:-1], action_value.shape[-2], 1
            )
            current_quantiles = torch.gather(
                action_value, dim=-1, index=action_expanded
            ).squeeze(-1)
        else:
            # One-hot action
            action = action.to(torch.float)
            # action shape: [batch, num_actions] -> [batch, 1, num_actions]
            action_expanded = action.unsqueeze(-2)
            current_quantiles = (action_value * action_expanded).sum(-1)

        # Compute target quantiles
        with torch.no_grad():
            # Get next state quantile values
            next_td = step_mdp(td_copy, keep_other=False)

            if self.double_qrdqn:
                # Double DQN: use online network for action selection
                next_td_online = next_td.clone(False)
                with self.value_network_params.data.to_module(self.value_network):
                    self.value_network(next_td_online)
                next_action_value_online = next_td_online.get(
                    self.tensor_keys.action_value
                )
                # Select action based on mean Q-values from online network
                # Mean over quantiles: [batch, num_quantiles, num_actions] -> [batch, num_actions]
                next_q_mean = next_action_value_online.mean(dim=-2)
                next_action = next_q_mean.argmax(dim=-1, keepdim=True)

                # Use target network for value estimation
                with self.target_value_network_params.to_module(self.value_network):
                    self.value_network(next_td)
                next_action_value = next_td.get(self.tensor_keys.action_value)
            else:
                # Standard QR-DQN: use target network for both
                with self.target_value_network_params.to_module(self.value_network):
                    self.value_network(next_td)
                next_action_value = next_td.get(self.tensor_keys.action_value)
                # Select action based on mean Q-values
                next_q_mean = next_action_value.mean(dim=-2)
                next_action = next_q_mean.argmax(dim=-1, keepdim=True)

            # Get quantiles for greedy action
            # next_action shape: [batch, 1] -> [batch, num_quantiles, 1]
            next_action_expanded = next_action.unsqueeze(-2).expand(
                *next_action.shape[:-1], next_action_value.shape[-2], 1
            )
            next_quantiles = torch.gather(
                next_action_value, dim=-1, index=next_action_expanded
            ).squeeze(-1)

            # Compute target quantiles using Bellman equation
            reward = tensordict.get(("next", self.tensor_keys.reward))
            terminated = tensordict.get(
                ("next", self.tensor_keys.terminated),
                tensordict.get(("next", self.tensor_keys.done)),
            )

            # Ensure proper shapes for broadcasting
            if reward.ndim > 1:
                reward = reward.squeeze(-1)
            if terminated.ndim > 1:
                terminated = terminated.squeeze(-1)

            # target_quantiles shape: [batch, num_quantiles]
            target_quantiles = reward.unsqueeze(-1) + (
                self.gamma * (1 - terminated.float().unsqueeze(-1)) * next_quantiles
            )

        # Compute TD errors for all pairs of quantiles
        # current_quantiles: [batch, num_quantiles] -> [batch, num_quantiles, 1]
        # target_quantiles: [batch, num_quantiles] -> [batch, 1, num_quantiles]
        # td_errors: [batch, num_quantiles, num_quantiles]
        td_errors = target_quantiles.unsqueeze(-2) - current_quantiles.unsqueeze(-1)

        # Compute quantile Huber loss
        loss = self._quantile_huber_loss(td_errors, self.tau, self.huber_kappa.item())

        # Compute priority for prioritized replay (mean absolute TD error)
        with torch.no_grad():
            priority_tensor = td_errors.abs().mean(dim=(-1, -2), keepdim=True)

        if tensordict.device is not None:
            priority_tensor = priority_tensor.to(tensordict.device)

        tensordict.set(
            self.tensor_keys.priority,
            priority_tensor,
            inplace=True,
        )

        # Apply reduction with optional priority weights
        weights = None
        if (
            self.use_prioritized_weights in (True, "auto")
            and self.tensor_keys.priority_weight in tensordict.keys()
        ):
            weights = tensordict.get(self.tensor_keys.priority_weight)

        loss = _reduce(loss, reduction=self.reduction, weights=weights)
        td_out = TensorDict(loss=loss)

        self._clear_weakrefs(
            tensordict,
            td_out,
            "value_network_params",
            "target_value_network_params",
        )

        return td_out
