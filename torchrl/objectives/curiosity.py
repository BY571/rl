# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

from dataclasses import dataclass

import torch
import torch.nn.functional as F
from tensordict import TensorDict, TensorDictBase, TensorDictParams
from tensordict.nn import dispatch, TensorDictModule
from tensordict.utils import NestedKey

from torchrl.objectives.common import LossModule
from torchrl.objectives.utils import _reduce


class ICMLoss(LossModule):
    r"""Intrinsic Curiosity Module (ICM) loss.

    This loss trains the self-supervised dynamics models of the Intrinsic Curiosity
    Module, presented in `"Curiosity-driven Exploration by Self-supervised Prediction"
    <https://arxiv.org/abs/1705.05279>`_ (Pathak et al., 2017). The very same machinery
    underpins :class:`~torchrl.envs.transforms.RIDEReward` (the
    `RIDE <https://arxiv.org/abs/2002.12292>`_ intrinsic reward), which is why this loss
    is the shared engine for both methods.

    Three networks are jointly optimised:

    - a **feature** (embedding) network :math:`\phi` that maps an observation to a latent
      representation;
    - a **forward** model that predicts :math:`\hat\phi(s_{t+1})` from
      :math:`\phi(s_t)` and the action :math:`a_t`;
    - an **inverse** model that predicts the action :math:`a_t` from
      :math:`\phi(s_t)` and :math:`\phi(s_{t+1})`.

    The two losses are

    .. math::

        L_{forward} = \tfrac12 \lVert \hat\phi(s_{t+1}) - \phi(s_{t+1}) \rVert_2^2 ,
        \qquad
        L_{inverse} = \operatorname{CE}\big(f_{inv}(\phi(s_t), \phi(s_{t+1})), a_t\big)

    (the inverse loss is a mean-squared error for continuous action spaces). The feature
    network is shaped by the *inverse* loss, which forces :math:`\phi` to encode only the
    parts of the observation the agent can control. By default the target of the forward
    loss is detached (``stop_gradient=True``) so the forward objective cannot collapse the
    representation; set ``stop_gradient=False`` to also train :math:`\phi` through the
    forward loss.

    Args:
        feature_network (TensorDictModule): the embedding network :math:`\phi`. Reads the
            observation and writes the embedding. Its ``out_keys[0]`` is reused as the
            embedding key fed to the forward and inverse models.
        forward_model (TensorDictModule): predicts the next embedding. Must read the
            embedding key and the action key (``in_keys = [embedding_key, action_key]``)
            and write the predicted next embedding.
        inverse_model (TensorDictModule): predicts the action. Must read two embedding
            keys (``in_keys = [embedding_key, next_embedding_key]``), corresponding to
            :math:`\phi(s_t)` and :math:`\phi(s_{t+1})`, and write the predicted action.

    Keyword Args:
        action_space (str, optional): one of ``"one-hot"``, ``"categorical"`` or
            ``"continuous"``. Discrete spaces use a cross-entropy inverse loss, continuous
            spaces a mean-squared error. Defaults to ``"one-hot"``.
        forward_loss_weight (float, optional): scalar weight applied to the forward loss.
            Defaults to ``0.2`` (the :math:`\beta` of the ICM paper).
        inverse_loss_weight (float, optional): scalar weight applied to the inverse loss.
            Defaults to ``0.8`` (:math:`1-\beta`).
        stop_gradient (bool, optional): if ``True`` (default) the forward-loss target
            :math:`\phi(s_{t+1})` is detached. If ``False`` the feature network is also
            trained through the forward loss.
        reduction (str, optional): ``"none"`` | ``"mean"`` | ``"sum"``. Defaults to
            ``"mean"``.

    Examples:
        >>> import torch
        >>> from tensordict import TensorDict
        >>> from tensordict.nn import TensorDictModule
        >>> from torchrl.modules import MLP
        >>> from torchrl.objectives import ICMLoss
        >>> feature = TensorDictModule(
        ...     MLP(in_features=6, out_features=8, num_cells=[16]),
        ...     in_keys=["observation"], out_keys=["embedding"])
        >>> forward_model = TensorDictModule(
        ...     MLP(in_features=8 + 4, out_features=8, num_cells=[16]),
        ...     in_keys=["embedding", "action"], out_keys=["predicted_embedding"])
        >>> inverse_model = TensorDictModule(
        ...     MLP(in_features=2 * 8, out_features=4, num_cells=[16]),
        ...     in_keys=["embedding", "embedding_next"], out_keys=["predicted_action"])
        >>> loss = ICMLoss(feature, forward_model, inverse_model)
        >>> data = TensorDict({
        ...     "observation": torch.randn(5, 6),
        ...     "action": torch.eye(4)[torch.randint(4, (5,))],
        ...     "next": TensorDict({"observation": torch.randn(5, 6)}, [5]),
        ... }, [5])
        >>> loss(data)
        TensorDict(
            fields={
                loss_forward: Tensor(shape=torch.Size([]), ...),
                loss_inverse: Tensor(shape=torch.Size([]), ...)},
            batch_size=torch.Size([]),
            ...)
    """

    @dataclass
    class _AcceptedKeys:
        """Maintains default values for all configurable tensordict keys.

        Attributes:
            action (NestedKey): the action key. Defaults to ``"action"``.
        """

        action: NestedKey = "action"

    tensor_keys: _AcceptedKeys
    default_keys = _AcceptedKeys

    feature_network: TensorDictModule
    feature_network_params: TensorDictParams
    target_feature_network_params: TensorDictParams
    forward_model: TensorDictModule
    forward_model_params: TensorDictParams
    target_forward_model_params: TensorDictParams
    inverse_model: TensorDictModule
    inverse_model_params: TensorDictParams
    target_inverse_model_params: TensorDictParams

    out_keys = ["loss_forward", "loss_inverse"]

    def __init__(
        self,
        feature_network: TensorDictModule,
        forward_model: TensorDictModule,
        inverse_model: TensorDictModule,
        *,
        action_space: str = "one-hot",
        forward_loss_weight: float = 0.2,
        inverse_loss_weight: float = 0.8,
        stop_gradient: bool = True,
        reduction: str | None = None,
    ) -> None:
        self._in_keys = None
        self._out_keys = None
        if reduction is None:
            reduction = "mean"
        action_space = action_space.replace("_", "-")
        if action_space not in ("one-hot", "categorical", "continuous"):
            raise ValueError(
                "action_space must be one of 'one-hot', 'categorical' or 'continuous', "
                f"got {action_space}."
            )
        super().__init__()

        self.convert_to_functional(
            feature_network, "feature_network", create_target_params=False
        )
        self.convert_to_functional(
            forward_model, "forward_model", create_target_params=False
        )
        self.convert_to_functional(
            inverse_model, "inverse_model", create_target_params=False
        )

        self.action_space = action_space
        self.stop_gradient = stop_gradient
        self.register_buffer(
            "forward_loss_weight", torch.tensor(forward_loss_weight, dtype=torch.float)
        )
        self.register_buffer(
            "inverse_loss_weight", torch.tensor(inverse_loss_weight, dtype=torch.float)
        )
        self.reduction = reduction

        # key bookkeeping (the sub-networks declare their own keys)
        self._embedding_key = feature_network.out_keys[0]
        self._observation_key = feature_network.in_keys[0]
        self._inverse_in_keys = inverse_model.in_keys  # [phi(s), phi(s')]
        self._predicted_embedding_key = forward_model.out_keys[0]
        self._predicted_action_key = inverse_model.out_keys[0]

    def _forward_value_estimator_keys(self, **kwargs) -> None:
        pass

    def _set_in_keys(self):
        keys = {
            self.tensor_keys.action,
            self._observation_key,
            ("next", self._observation_key),
        }
        self._in_keys = sorted(keys, key=str)

    @property
    def in_keys(self):
        if self._in_keys is None:
            self._set_in_keys()
        return self._in_keys

    @in_keys.setter
    def in_keys(self, values):
        self._in_keys = values

    @property
    def out_keys(self):  # noqa: F811
        if self._out_keys is None:
            self._out_keys = ["loss_forward", "loss_inverse"]
        return self._out_keys

    @out_keys.setter
    def out_keys(self, values):
        self._out_keys = values

    def _embed(self, tensordict: TensorDictBase) -> torch.Tensor:
        with self.feature_network_params.to_module(self.feature_network):
            out = self.feature_network(tensordict)
        return out.get(self._embedding_key)

    @dispatch
    def forward(self, tensordict: TensorDictBase) -> TensorDictBase:
        """Compute the forward and inverse dynamics losses.

        Check the class ``in_keys`` / ``out_keys`` attributes for the expected input and
        output entries.
        """
        tensordict = tensordict.clone(False)
        next_td = tensordict.get("next")

        obs_in = tensordict.select(self._observation_key, strict=True)
        next_obs_in = next_td.select(self._observation_key, strict=True)

        phi = self._embed(obs_in)
        phi_next = self._embed(next_obs_in)

        action = tensordict.get(self.tensor_keys.action)

        # --- inverse model: predict a_t from (phi(s_t), phi(s_{t+1})) ---
        inverse_input = TensorDict(
            {
                self._inverse_in_keys[0]: phi,
                self._inverse_in_keys[1]: phi_next,
            },
            batch_size=tensordict.batch_size,
        )
        with self.inverse_model_params.to_module(self.inverse_model):
            action_pred = self.inverse_model(inverse_input).get(
                self._predicted_action_key
            )
        loss_inverse = self._inverse_loss(action_pred, action)

        # --- forward model: predict phi(s_{t+1}) from (phi(s_t), a_t) ---
        # The forward model concatenates the action with the embedding, so discrete
        # actions are one-hot encoded first.
        action_enc = self._encode_action(action, num_actions=action_pred.shape[-1])
        forward_input = TensorDict(
            {self._embedding_key: phi, self.tensor_keys.action: action_enc},
            batch_size=tensordict.batch_size,
        )
        with self.forward_model_params.to_module(self.forward_model):
            phi_next_pred = self.forward_model(forward_input).get(
                self._predicted_embedding_key
            )
        forward_target = phi_next.detach() if self.stop_gradient else phi_next
        loss_forward = 0.5 * (phi_next_pred - forward_target).pow(2).sum(-1)

        loss_forward = _reduce(loss_forward, self.reduction) * self.forward_loss_weight
        loss_inverse = _reduce(loss_inverse, self.reduction) * self.inverse_loss_weight

        td_out = TensorDict(
            {"loss_forward": loss_forward, "loss_inverse": loss_inverse}
        )
        self._clear_weakrefs(
            tensordict,
            td_out,
            "feature_network_params",
            "forward_model_params",
            "inverse_model_params",
        )
        return td_out

    def _discrete_action_index(self, action: torch.Tensor) -> torch.Tensor:
        """Return integer action indices of shape ``batch_size`` from a discrete action."""
        if self.action_space == "one-hot":
            return action.argmax(-1)
        # categorical: indices possibly with a trailing singleton dimension
        if action.shape[-1:] == (1,):
            action = action.squeeze(-1)
        return action.long()

    def _encode_action(self, action: torch.Tensor, num_actions: int) -> torch.Tensor:
        """One-hot encode discrete actions so they can be concatenated with embeddings."""
        if self.action_space == "continuous":
            return action
        if self.action_space == "one-hot":
            return action.to(torch.get_default_dtype())
        idx = self._discrete_action_index(action)
        return F.one_hot(idx, num_actions).to(torch.get_default_dtype())

    def _inverse_loss(
        self, action_pred: torch.Tensor, action: torch.Tensor
    ) -> torch.Tensor:
        if self.action_space == "continuous":
            return 0.5 * (action_pred - action).pow(2).sum(-1)
        # discrete: cross-entropy over the flattened batch
        target = self._discrete_action_index(action)
        n_actions = action_pred.shape[-1]
        loss = F.cross_entropy(
            action_pred.reshape(-1, n_actions),
            target.reshape(-1),
            reduction="none",
        )
        return loss.reshape(target.shape)
