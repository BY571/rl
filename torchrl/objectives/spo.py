# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

import warnings
from collections.abc import Mapping

import torch
from tensordict import is_tensor_collection, TensorDict, TensorDictBase

from tensordict.nn import dispatch, ProbabilisticTensorDictSequential, TensorDictModule
from tensordict.utils import NestedKey

from torchrl._utils import _standardize
from torchrl.objectives.ppo import PPOLoss
from torchrl.objectives.utils import _reduce, _sum_td_features


class SPOLoss(PPOLoss):
    """Simple Policy Optimization (SPO) loss.

    SPO is a policy gradient algorithm that modifies PPO's clipping objective
    with a quadratic penalty term to better constrain the probability ratio
    within the trust region. The key insight is replacing PPO's min-clip
    operation with a soft quadratic penalty that provides stronger theoretical
    guarantees while maintaining computational simplicity.

    The SPO policy loss is computed as:
        loss = -mean(r(θ) * A - |A| / (2ε) * (r(θ) - 1)²)

    where r(θ) = π_θ(a|s) / π_θ_old(a|s) is the probability ratio,
    A is the advantage estimate, and ε is the trust region parameter.

    For more details, refer to: "Simple Policy Optimization",
    https://arxiv.org/abs/2401.16025

    Args:
        actor_network (ProbabilisticTensorDictSequential): policy operator.
        critic_network (ValueOperator): value operator.

    Keyword Args:
        epsilon (float, optional): trust region parameter that controls the
            strength of the quadratic penalty. Corresponds to the clip
            parameter in PPO. Defaults to ``0.2``.
        entropy_bonus (bool, optional): if ``True``, an entropy bonus will be added to the
            loss to favour exploratory policies.
        samples_mc_entropy (int, optional): if the distribution retrieved from the policy
            operator does not have a closed form formula for the entropy, a Monte-Carlo
            estimate will be used. ``samples_mc_entropy`` will control how many
            samples will be used to compute this estimate. Defaults to ``1``.
        entropy_coeff (float | Mapping[NestedKey, float], optional): entropy multiplier
            when computing the total loss. Defaults to ``0.01``.
        critic_coeff (float, optional): critic loss multiplier when computing the total
            loss. Defaults to ``1.0``. Set ``critic_coeff`` to ``None`` to exclude the value
            loss from the forward outputs.
        loss_critic_type (str, optional): loss function for the value discrepancy.
            Can be one of "l1", "l2" or "smooth_l1". Defaults to ``"smooth_l1"``.
        normalize_advantage (bool, optional): if ``True``, the advantage will be normalized
            before being used. Defaults to ``False``.
        normalize_advantage_exclude_dims (tuple[int], optional): dimensions to exclude from
            the advantage standardization. Defaults to ().
        separate_losses (bool, optional): if ``True``, shared parameters between
            policy and critic will only be trained on the policy loss.
            Defaults to ``False``.
        functional (bool, optional): whether modules should be functionalized.
            Defaults to ``True``.
        reduction (str, optional): Specifies the reduction to apply to the output:
            ``"none"`` | ``"mean"`` | ``"sum"``. Defaults to ``"mean"``.
        clip_value (float, optional): If provided, it will be used to compute a clipped
            version of the value prediction. Defaults to ``None``.
        device (torch.device, optional): device of the buffers. Defaults to ``None``.

    Examples:
        >>> import torch
        >>> from torch import nn
        >>> from torchrl.data.tensor_specs import Bounded
        >>> from torchrl.modules.distributions import NormalParamExtractor, TanhNormal
        >>> from torchrl.modules.tensordict_module.actors import ProbabilisticActor, ValueOperator
        >>> from torchrl.modules.tensordict_module.common import SafeModule
        >>> from torchrl.objectives.spo import SPOLoss
        >>> from tensordict import TensorDict
        >>> n_act, n_obs = 4, 3
        >>> spec = Bounded(-torch.ones(n_act), torch.ones(n_act), (n_act,))
        >>> base_layer = nn.Linear(n_obs, 5)
        >>> net = nn.Sequential(base_layer, nn.Linear(5, 2 * n_act), NormalParamExtractor())
        >>> module = SafeModule(net, in_keys=["observation"], out_keys=["loc", "scale"])
        >>> actor = ProbabilisticActor(
        ...     module=module,
        ...     distribution_class=TanhNormal,
        ...     in_keys=["loc", "scale"],
        ...     spec=spec)
        >>> module = nn.Sequential(base_layer, nn.Linear(5, 1))
        >>> value = ValueOperator(
        ...     module=module,
        ...     in_keys=["observation"])
        >>> loss = SPOLoss(actor, value)
        >>> batch = [2, ]
        >>> action = spec.rand(batch)
        >>> data = TensorDict({"observation": torch.randn(*batch, n_obs),
        ...         "action": action,
        ...         "action_log_prob": torch.randn_like(action[..., 1]),
        ...         ("next", "done"): torch.zeros(*batch, 1, dtype=torch.bool),
        ...         ("next", "terminated"): torch.zeros(*batch, 1, dtype=torch.bool),
        ...         ("next", "reward"): torch.randn(*batch, 1),
        ...         ("next", "observation"): torch.randn(*batch, n_obs),
        ...     }, batch)
        >>> loss(data)
        TensorDict(
            fields={
                entropy: Tensor(shape=torch.Size([]), device=cpu, dtype=torch.float32, is_shared=False),
                loss_critic: Tensor(shape=torch.Size([]), device=cpu, dtype=torch.float32, is_shared=False),
                loss_entropy: Tensor(shape=torch.Size([]), device=cpu, dtype=torch.float32, is_shared=False),
                loss_objective: Tensor(shape=torch.Size([]), device=cpu, dtype=torch.float32, is_shared=False),
                ratio_deviation: Tensor(shape=torch.Size([]), device=cpu, dtype=torch.float32, is_shared=False)},
            batch_size=torch.Size([]),
            device=None,
            is_shared=False)
    """

    def __init__(
        self,
        actor_network: ProbabilisticTensorDictSequential | None = None,
        critic_network: TensorDictModule | None = None,
        *,
        epsilon: float = 0.2,
        entropy_bonus: bool = True,
        samples_mc_entropy: int = 1,
        entropy_coeff: float | Mapping[NestedKey, float] | None = None,
        critic_coeff: float | None = None,
        loss_critic_type: str = "smooth_l1",
        normalize_advantage: bool = False,
        normalize_advantage_exclude_dims: tuple[int] = (),
        gamma: float | None = None,
        separate_losses: bool = False,
        reduction: str | None = None,
        clip_value: float | None = None,
        device: torch.device | None = None,
        **kwargs,
    ):
        super().__init__(
            actor_network,
            critic_network,
            entropy_bonus=entropy_bonus,
            samples_mc_entropy=samples_mc_entropy,
            entropy_coeff=entropy_coeff,
            critic_coeff=critic_coeff,
            loss_critic_type=loss_critic_type,
            normalize_advantage=normalize_advantage,
            normalize_advantage_exclude_dims=normalize_advantage_exclude_dims,
            gamma=gamma,
            separate_losses=separate_losses,
            reduction=reduction,
            clip_value=clip_value,
            device=device,
            **kwargs,
        )
        if device is None:
            try:
                device = next(self.parameters()).device
            except (AttributeError, StopIteration):
                device = getattr(
                    torch, "get_default_device", lambda: torch.device("cpu")
                )()
        self.register_buffer("epsilon", torch.tensor(epsilon, device=device))

    @property
    def out_keys(self):
        if self._out_keys is None:
            keys = ["loss_objective", "ratio_deviation"]
            if self.entropy_bonus:
                keys.extend(["entropy", "loss_entropy"])
            if self.loss_critic:
                keys.append("loss_critic")
            if self.clip_value:
                keys.append("value_clip_fraction")
            self._out_keys = keys
        return self._out_keys

    @out_keys.setter
    def out_keys(self, values):
        self._out_keys = values

    @dispatch
    def forward(self, tensordict: TensorDictBase) -> TensorDictBase:
        tensordict = tensordict.clone(False)
        advantage = tensordict.get(
            self.tensor_keys.advantage, None, as_padded_tensor=True
        )
        if advantage is None:
            if self.critic_network is None:
                raise RuntimeError(
                    "Critic network is not specified, cannot compute advantage within forward."
                )
            self.value_estimator(
                tensordict,
                params=self._cached_critic_network_params_detached,
                target_params=self.target_critic_network_params,
            )
            advantage = tensordict.get(self.tensor_keys.advantage)
        if self.normalize_advantage and advantage.numel() > 1:
            if advantage.numel() > tensordict.batch_size.numel() and not len(
                self.normalize_advantage_exclude_dims
            ):
                warnings.warn(
                    "You requested advantage normalization and the advantage key has more dimensions"
                    " than the tensordict batch. Make sure to pass `normalize_advantage_exclude_dims` "
                    "if you want to keep any dimension independent while computing normalization statistics. "
                    "If you are working in multi-agent/multi-objective settings this is highly suggested."
                )
            advantage = _standardize(advantage, self.normalize_advantage_exclude_dims)

        log_weight, dist, kl_approx = self._log_weight(
            tensordict, adv_shape=advantage.shape[:-1]
        )

        # Compute the probability ratio
        ratio = log_weight.exp()

        # SPO loss: r(θ) * A - |A| / (2ε) * (r(θ) - 1)²
        # The quadratic penalty term constrains the ratio within the trust region
        ratio_deviation = ratio - 1
        quadratic_penalty = (advantage.abs() / (2 * self.epsilon)) * (
            ratio_deviation**2
        )
        neg_loss = ratio * advantage - quadratic_penalty

        # Log ratio deviation for monitoring (useful for debugging trust region violations)
        with torch.no_grad():
            mean_ratio_deviation = ratio_deviation.abs().mean()

        td_out = TensorDict({"loss_objective": -neg_loss})
        td_out.set("ratio_deviation", mean_ratio_deviation)
        td_out.set("kl_approx", kl_approx.detach().mean())  # for logging

        if self.entropy_bonus:
            entropy = self._get_entropy(dist, adv_shape=advantage.shape[:-1])
            if is_tensor_collection(entropy):
                # Reports the entropy of each action head.
                td_out.set("composite_entropy", entropy.detach())
                td_out.set(
                    "entropy", _sum_td_features(entropy).detach().mean()
                )  # for logging
            else:
                td_out.set("entropy", entropy.detach().mean())  # for logging
            td_out.set("loss_entropy", self._weighted_loss_entropy(entropy))
        if self._has_critic:
            loss_critic, value_clip_fraction, explained_variance = self.loss_critic(
                tensordict
            )
            td_out.set("loss_critic", loss_critic)
            if value_clip_fraction is not None:
                td_out.set("value_clip_fraction", value_clip_fraction)
            if explained_variance is not None:
                td_out.set("explained_variance", explained_variance)

        td_out = td_out.named_apply(
            lambda name, value: _reduce(value, reduction=self.reduction).squeeze(-1)
            if name.startswith("loss_")
            else value,
        )
        self._clear_weakrefs(
            tensordict,
            td_out,
            "actor_network_params",
            "critic_network_params",
            "target_actor_network_params",
            "target_critic_network_params",
        )
        return td_out
