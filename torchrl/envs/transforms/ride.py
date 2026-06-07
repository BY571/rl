# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

import torch
from tensordict import NestedKey, TensorDictBase
from tensordict.nn import TensorDictModule
from tensordict.utils import unravel_key

from torchrl.envs.common import EnvBase
from torchrl.envs.transforms.transforms import Transform


class RIDEReward(Transform):
    r"""RIDE impact-driven intrinsic reward transform.

    Implements the intrinsic reward of `RIDE: Rewarding Impact-Driven Exploration for
    Procedurally-Generated Environments <https://arxiv.org/abs/2002.12292>`_
    (Raileanu & Rocktäschel, 2020):

    .. math::

        r^{i}_t = \frac{\omega}{\sqrt{N_{ep}(s_{t+1})}}\,
                  \big\lVert \phi(s_{t+1}) - \phi(s_t) \big\rVert_2

    where :math:`\phi` is a learned state-embedding network, :math:`\omega` an intrinsic
    reward coefficient, and :math:`N_{ep}(s_{t+1})` the number of times the resulting state
    has been visited in the current episode. The reward measures the **impact** of an
    action — the magnitude of the change it causes in the learned representation —
    discounted by an episodic visitation count that discourages cycling between states.

    Unlike a prediction-error bonus (ICM), this signal does not vanish once the dynamics
    model has converged. The embedding network :math:`\phi` is normally trained by
    :class:`~torchrl.objectives.ICMLoss` (the inverse + forward dynamics losses); this
    transform reads :math:`\phi` **detached**, so — as prescribed by the paper — the
    intrinsic/extrinsic reward never updates the embedding.

    The transform augments the reward in place and additionally writes the raw intrinsic
    reward under a separate key for logging. It is designed to be applied to a collected
    on-policy batch (shaped ``[*batch, time]``) — e.g. as a collector post-processing step
    or via :meth:`~torchrl.data.ReplayBuffer.append_transform` — rather than inside the
    environment, so the episodic count can be computed over whole trajectories without
    cross-process state.

    Args:
        feature_network (TensorDictModule): the state-embedding network :math:`\phi`. The
            same module is typically shared with :class:`~torchrl.objectives.ICMLoss`, so
            that the intrinsic reward always uses the freshly trained representation.

    Keyword Args:
        coef (float, optional): the intrinsic reward coefficient :math:`\omega`. Defaults
            to ``0.1``.
        episodic (bool, optional): whether to apply the episodic count discount
            :math:`1/\sqrt{N_{ep}}`. Defaults to ``True``.
        normalize (bool, optional): if ``True``, divide the intrinsic reward by a running
            estimate of the standard deviation of the discounted intrinsic return (as in
            the RND / RIDE reference implementations). This makes the intrinsic *return*
            unit-scale so that ``coef`` controls its weight relative to the extrinsic
            return; without it the per-step bonus, summed over long episodes, can dwarf a
            sparse terminal reward and discourage the agent from ever terminating. The
            paper does not dwell on this, but it is essential for sparse-reward tasks.
            Defaults to ``False``.
        gamma (float, optional): discount factor used by the intrinsic-return forward
            filter when ``normalize=True``. Should match the RL discount. Defaults to
            ``0.99``.
        in_keys (list of NestedKey, optional): the observation key(s) fed to
            ``feature_network``. Defaults to ``feature_network.in_keys``.
        reward_key (NestedKey, optional): the (extrinsic) reward key to augment. Defaults
            to ``("next", "reward")``.
        done_key (NestedKey, optional): the done key delimiting episodes for the count.
            Defaults to ``("next", "done")``.
        intrinsic_reward_key (NestedKey, optional): where the raw intrinsic reward is
            written. Defaults to ``("next", "intrinsic_reward")``.
        count_key (NestedKey, optional): the (next) observation entry hashed for the
            episodic count. Defaults to the observation key in ``in_keys``. For symbolic
            environments (e.g. MiniGrid) point this at a discrete, unnormalised observation
            so that distinct states hash to distinct keys.

    .. note::
        The episodic count hashes the byte representation of the ``count_key`` tensor and
        counts occurrences within each episode of the batch. This generalises the paper's
        MiniGrid-specific state descriptor to arbitrary observations; for image
        observations prefer an unnormalised integer entry for ``count_key``.

    Examples:
        >>> import torch
        >>> from tensordict import TensorDict
        >>> from tensordict.nn import TensorDictModule
        >>> from torchrl.modules import MLP
        >>> from torchrl.envs.transforms import RIDEReward
        >>> phi = TensorDictModule(
        ...     MLP(in_features=6, out_features=8, num_cells=[16]),
        ...     in_keys=["observation"], out_keys=["embedding"])
        >>> ride = RIDEReward(phi, coef=0.1)
        >>> data = TensorDict({
        ...     "observation": torch.randn(2, 5, 6),
        ...     "next": TensorDict({
        ...         "observation": torch.randn(2, 5, 6),
        ...         "reward": torch.zeros(2, 5, 1),
        ...         "done": torch.zeros(2, 5, 1, dtype=torch.bool),
        ...     }, [2, 5]),
        ... }, [2, 5])
        >>> data = ride(data)
        >>> data["next", "intrinsic_reward"].shape
        torch.Size([2, 5, 1])
    """

    ENV_ERR = (
        "RIDEReward operates on whole trajectories (time-batched data) to compute the "
        "episodic visitation count, so it cannot be used as an in-environment transform. "
        "Apply it to the collected batch (e.g. as a collector post-processing step) or to "
        "a replay buffer instead."
    )

    def __init__(
        self,
        feature_network: TensorDictModule,
        *,
        coef: float = 0.1,
        episodic: bool = True,
        normalize: bool = False,
        gamma: float = 0.99,
        in_keys: list[NestedKey] | None = None,
        reward_key: NestedKey = ("next", "reward"),
        done_key: NestedKey = ("next", "done"),
        intrinsic_reward_key: NestedKey = ("next", "intrinsic_reward"),
        count_key: NestedKey | None = None,
        out_keys: list[NestedKey] | None = None,
    ) -> None:
        if in_keys is None:
            in_keys = list(feature_network.in_keys)
        self._obs_key = unravel_key(in_keys[0])
        if count_key is None:
            count_key = self._obs_key
        if out_keys is None:
            out_keys = [reward_key, intrinsic_reward_key]
        super().__init__(in_keys=in_keys, out_keys=out_keys)
        self.feature_network = feature_network
        self._embedding_key = feature_network.out_keys[0]
        self.reward_key = reward_key
        self.done_key = done_key
        self.intrinsic_reward_key = intrinsic_reward_key
        self.count_key = unravel_key(count_key)
        self.coef = float(coef)
        self.episodic = episodic
        self.normalize = normalize
        self.gamma = float(gamma)
        # Running estimate of the std of the discounted intrinsic return, used to
        # normalise the intrinsic reward (as in the RND / RIDE reference code) so that the
        # intrinsic *return* is unit-scale and ``coef`` controls its weight relative to the
        # extrinsic return. Without this the per-step bonus, summed over long episodes, can
        # dwarf a sparse terminal reward and discourage the agent from ever terminating.
        self.register_buffer("_ret_mean", torch.zeros(()))
        self.register_buffer("_ret_var", torch.ones(()))
        self.register_buffer("_ret_count", torch.zeros(()))

    def _embed(self, tensordict: TensorDictBase) -> torch.Tensor:
        td_in = tensordict.select(*self.feature_network.in_keys, strict=True)
        out = self.feature_network(td_in)
        return out.get(self._embedding_key)

    def forward(self, tensordict: TensorDictBase) -> TensorDictBase:
        next_td = tensordict.get("next")

        with torch.no_grad():
            phi = self._embed(tensordict)
            phi_next = self._embed(next_td)

        # impact = ||phi(s') - phi(s)||_2, keep a trailing reward dim
        signal = (phi_next - phi).pow(2).sum(-1, keepdim=True).clamp_min(0).sqrt()

        if self.episodic:
            signal = signal * self._episodic_count_discount(tensordict)

        if self.normalize:
            signal = signal / self._return_std(signal, tensordict)

        intrinsic = self.coef * signal
        reward = tensordict.get(self.reward_key)
        tensordict.set(self.reward_key, reward + intrinsic.to(reward.dtype))
        tensordict.set(self.intrinsic_reward_key, intrinsic)
        return tensordict

    def _return_std(
        self, signal: torch.Tensor, tensordict: TensorDictBase
    ) -> torch.Tensor:
        """Update and return the running std of the discounted intrinsic return.

        Computes the discounted return of the (pre-coefficient) intrinsic signal with a
        per-episode forward filter, updates a running mean/variance over those returns
        (Chan et al. parallel update), and returns the current standard deviation.
        """
        batch_size = tensordict.batch_size
        if len(batch_size) == 1:
            n_envs, time = 1, batch_size[0]
        else:
            n_envs = int(torch.tensor(batch_size[:-1]).prod())
            time = batch_size[-1]
        # The forward filter is a sequential recurrence; run it on CPU with small tensors
        # to avoid one CUDA kernel launch per timestep. The running stats live on CPU too.
        sig = signal.detach().reshape(n_envs, time).to("cpu")
        done = tensordict.get(self.done_key).reshape(n_envs, time).to("cpu", torch.bool)

        # discounted forward filter, reset at episode boundaries
        returns = torch.empty_like(sig)
        running = torch.zeros(n_envs, dtype=sig.dtype)
        keep = (~done).to(sig.dtype)
        for t in range(time):
            running = sig[:, t] + self.gamma * running
            returns[:, t] = running
            running = running * keep[:, t]

        batch = returns.reshape(-1)
        batch_count = batch.numel()
        batch_mean = batch.mean()
        batch_var = batch.var(unbiased=False)
        count = self._ret_count
        delta = batch_mean - self._ret_mean
        tot = count + batch_count
        self._ret_mean += delta * batch_count / tot
        m2 = (
            self._ret_var * count
            + batch_var * batch_count
            + delta.pow(2) * count * batch_count / tot
        )
        self._ret_var.copy_(m2 / tot)
        self._ret_count.copy_(tot)
        return (self._ret_var + 1e-8).sqrt().to(signal.device)

    def _call(self, next_tensordict: TensorDictBase) -> TensorDictBase:
        raise ValueError(self.ENV_ERR)

    def set_container(self, container) -> None:
        if (
            isinstance(container, EnvBase)
            or getattr(container, "parent", None) is not None
        ):
            raise ValueError(self.ENV_ERR)
        return super().set_container(container)

    def _episodic_count_discount(self, tensordict: TensorDictBase) -> torch.Tensor:
        """Return ``1/sqrt(N_ep(s_{t+1}))`` with shape ``[*batch, time, 1]``."""
        batch_size = tensordict.batch_size
        if len(batch_size) == 0:
            raise RuntimeError(
                "RIDEReward expects a batched tensordict with a trailing time dimension; "
                "got an empty batch size."
            )
        if len(batch_size) == 1:
            n_envs, time = 1, batch_size[0]
        else:
            n_envs, time = int(torch.tensor(batch_size[:-1]).prod()), batch_size[-1]

        next_obs = tensordict.get(("next", self.count_key))
        done = tensordict.get(self.done_key)

        next_obs = next_obs.reshape(n_envs, time, *next_obs.shape[len(batch_size) :])
        done = done.reshape(n_envs, time).to(torch.bool)

        # byte-hash each next observation and count within-episode occurrences
        obs_cpu = next_obs.detach().to("cpu").contiguous()
        discount = torch.ones(n_envs, time)
        for e in range(n_envs):
            counts: dict[bytes, int] = {}
            for t in range(time):
                key = obs_cpu[e, t].numpy().tobytes()
                n = counts.get(key, 0) + 1
                counts[key] = n
                discount[e, t] = n**-0.5
                if done[e, t]:
                    counts = {}
        discount = discount.reshape(*batch_size, 1).to(next_obs.device)
        return discount
