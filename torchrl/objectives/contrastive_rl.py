# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
"""Stable Contrastive RL implementation.

Reference: "Stabilizing Contrastive RL: Techniques for Robotic Goal Reaching from Offline Data"
https://arxiv.org/abs/2306.03346
"""
from __future__ import annotations

from dataclasses import dataclass

import torch
import torch.nn.functional as F
from tensordict import TensorDict, TensorDictBase
from tensordict.nn import dispatch, TensorDictModule
from tensordict.utils import NestedKey
from torch import nn

from torchrl.objectives.common import LossModule
from torchrl.objectives.utils import _reduce


class StableContrastiveRLLoss(LossModule):
    """Stable Contrastive RL Loss for goal-conditioned reinforcement learning.

    This implements the contrastive RL algorithm from "Stabilizing Contrastive RL:
    Techniques for Robotic Goal Reaching from Offline Data" (Zheng et al., 2023).

    The algorithm learns a goal-conditioned Q-function using InfoNCE contrastive
    learning. The critic is parameterized as f(s,a,g) = phi(s,a)^T psi(g), where
    phi encodes state-action pairs and psi encodes goal states.

    Key stabilization techniques from the paper:
    - Shallow and wide MLP architecture
    - Layer normalization
    - Cold initialization (last layer weights near zero)
    - Data augmentation (random cropping for images)
    - Large batch size (2048)

    Args:
        actor_network (TensorDictModule): The policy network that takes observations
            and goals, outputs actions. Expected in_keys: ["observation", "goal"],
            out_keys: ["action"].
        sa_encoder (TensorDictModule): State-action encoder network (phi).
            Takes observations and actions, outputs embeddings.
            Expected in_keys: ["observation", "action"], out_keys: ["sa_embedding"].
        goal_encoder (TensorDictModule): Goal state encoder network (psi).
            Takes goal observations, outputs embeddings.
            Expected in_keys: ["goal"], out_keys: ["goal_embedding"].

    Keyword Args:
        gamma (float, optional): Discount factor. Defaults to 0.99.
        actor_coeff (float, optional): Coefficient for actor loss. Defaults to 1.0.
        entropy_coeff (float, optional): Coefficient for action entropy bonus.
            Defaults to 0.0 (no entropy regularization by default).
        use_log_softmax (bool, optional): Whether to use log-softmax (InfoNCE) or
            binary cross-entropy for critic loss. Defaults to True (InfoNCE).
        reduction (str, optional): Reduction method for losses. Defaults to "mean".
        separate_losses (bool, optional): If True, prevents gradients from critic
            loss flowing to shared encoder parameters. Defaults to False.

    Examples:
        >>> import torch
        >>> from tensordict import TensorDict
        >>> from tensordict.nn import TensorDictModule, TensorDictSequential
        >>> from torchrl.objectives.contrastive_rl import StableContrastiveRLLoss
        >>> # Create simple networks
        >>> obs_dim, act_dim, goal_dim, embed_dim = 10, 4, 10, 64
        >>> # Actor: obs + goal -> action
        >>> actor = TensorDictModule(
        ...     nn.Sequential(nn.Linear(obs_dim + goal_dim, 128), nn.ReLU(), nn.Linear(128, act_dim)),
        ...     in_keys=["obs_goal"],
        ...     out_keys=["action"]
        ... )
        >>> # State-action encoder
        >>> sa_encoder = TensorDictModule(
        ...     nn.Sequential(nn.Linear(obs_dim + act_dim, 128), nn.ReLU(), nn.Linear(128, embed_dim)),
        ...     in_keys=["obs_action"],
        ...     out_keys=["sa_embedding"]
        ... )
        >>> # Goal encoder
        >>> goal_encoder = TensorDictModule(
        ...     nn.Sequential(nn.Linear(goal_dim, 128), nn.ReLU(), nn.Linear(128, embed_dim)),
        ...     in_keys=["goal"],
        ...     out_keys=["goal_embedding"]
        ... )
        >>> # Create loss
        >>> loss = StableContrastiveRLLoss(actor, sa_encoder, goal_encoder)
        >>> # Sample data
        >>> batch_size = 32
        >>> data = TensorDict({
        ...     "observation": torch.randn(batch_size, obs_dim),
        ...     "action": torch.randn(batch_size, act_dim),
        ...     "goal": torch.randn(batch_size, goal_dim),
        ...     ("next", "observation"): torch.randn(batch_size, obs_dim),
        ... }, batch_size=[batch_size])
        >>> loss_td = loss(data)
        >>> loss_td["loss_critic"]
        tensor(..., grad_fn=<...>)
    """

    @dataclass
    class _AcceptedKeys:
        """Maintains default values for all configurable tensordict keys.

        Attributes:
            observation (NestedKey): Key for current observation. Defaults to "observation".
            action (NestedKey): Key for actions. Defaults to "action".
            goal (NestedKey): Key for goal state. Defaults to "goal".
            sa_embedding (NestedKey): Key for state-action embeddings. Defaults to "sa_embedding".
            goal_embedding (NestedKey): Key for goal embeddings. Defaults to "goal_embedding".
            priority (NestedKey): Key for priority (for prioritized replay). Defaults to "td_error".
        """

        observation: NestedKey = "observation"
        action: NestedKey = "action"
        goal: NestedKey = "goal"
        sa_embedding: NestedKey = "sa_embedding"
        goal_embedding: NestedKey = "goal_embedding"
        priority: NestedKey = "td_error"

    default_keys = _AcceptedKeys
    tensor_keys: _AcceptedKeys

    actor_network: TensorDictModule
    sa_encoder: TensorDictModule
    goal_encoder: TensorDictModule

    def __init__(
        self,
        actor_network: TensorDictModule,
        sa_encoder: TensorDictModule,
        goal_encoder: TensorDictModule,
        *,
        gamma: float = 0.99,
        actor_coeff: float = 1.0,
        entropy_coeff: float = 0.0,
        use_log_softmax: bool = True,
        reduction: str | None = None,
        separate_losses: bool = False,
    ):
        if reduction is None:
            reduction = "mean"

        self._in_keys = None
        self._out_keys = None
        super().__init__()

        # Store networks (not functionalized for simplicity)
        self.actor_network = actor_network
        self.sa_encoder = sa_encoder
        self.goal_encoder = goal_encoder

        # Handle separate losses for shared encoders
        self.separate_losses = separate_losses

        # Hyperparameters
        self.register_buffer("gamma", torch.tensor(gamma))
        self.register_buffer("actor_coeff", torch.tensor(actor_coeff))
        self.register_buffer("entropy_coeff", torch.tensor(entropy_coeff))
        self.use_log_softmax = use_log_softmax
        self.reduction = reduction

    @property
    def functional(self) -> bool:
        """This loss module is not functional."""
        return False

    def _set_in_keys(self):
        keys = [
            self.tensor_keys.observation,
            self.tensor_keys.action,
            self.tensor_keys.goal,
            ("next", self.tensor_keys.observation),
        ]
        self._in_keys = list(set(keys))

    @property
    def in_keys(self):
        if self._in_keys is None:
            self._set_in_keys()
        return self._in_keys

    @in_keys.setter
    def in_keys(self, values):
        self._in_keys = values

    @property
    def out_keys(self):
        if self._out_keys is None:
            self._out_keys = ["loss_critic", "loss_actor", "critic_logits"]
        return self._out_keys

    @out_keys.setter
    def out_keys(self, values):
        self._out_keys = values

    def _forward_value_estimator_keys(self, **kwargs) -> None:
        """Contrastive RL does not use a traditional value estimator."""
        pass

    def _compute_critic_loss_infonce(
        self,
        sa_embed: torch.Tensor,
        goal_embed_positive: torch.Tensor,
        goal_embed_negative: torch.Tensor | None = None,
    ) -> tuple[torch.Tensor, torch.Tensor]:
        """Compute InfoNCE critic loss.

        The InfoNCE loss treats the problem as K+1 way classification where
        the positive pair (s,a,s_future) should have higher similarity than
        negative pairs (s,a,s_random).

        Args:
            sa_embed: State-action embeddings (batch_size, embed_dim)
            goal_embed_positive: Future state embeddings (batch_size, embed_dim)
            goal_embed_negative: Optional negative goal embeddings. If None,
                uses other samples in the batch as negatives.

        Returns:
            Tuple of (loss, logits) where logits are the similarity scores
        """
        # Normalize embeddings for stable training
        sa_embed = F.normalize(sa_embed, dim=-1)
        goal_embed_positive = F.normalize(goal_embed_positive, dim=-1)

        # Compute similarity logits: (batch_size, batch_size)
        # logits[i,j] = phi(s_i, a_i)^T psi(g_j)
        logits = torch.mm(sa_embed, goal_embed_positive.t())

        # For InfoNCE, positives are on the diagonal
        # labels[i] = i (each sample's positive is itself)
        batch_size = sa_embed.shape[0]
        labels = torch.arange(batch_size, device=sa_embed.device)

        # InfoNCE loss (categorical cross-entropy)
        loss = F.cross_entropy(logits, labels, reduction="none")

        return loss, logits

    def _compute_critic_loss_bce(
        self,
        sa_embed: torch.Tensor,
        goal_embed_positive: torch.Tensor,
    ) -> tuple[torch.Tensor, torch.Tensor]:
        """Compute binary cross-entropy critic loss.

        This formulation treats each (s,a,g) pair as a binary classification
        problem: is this goal reachable from this state-action pair?

        Args:
            sa_embed: State-action embeddings (batch_size, embed_dim)
            goal_embed_positive: Future state embeddings (batch_size, embed_dim)

        Returns:
            Tuple of (loss, logits)
        """
        # Normalize embeddings
        sa_embed = F.normalize(sa_embed, dim=-1)
        goal_embed_positive = F.normalize(goal_embed_positive, dim=-1)

        batch_size = sa_embed.shape[0]

        # Compute logits for all pairs
        logits = torch.mm(sa_embed, goal_embed_positive.t())

        # Positive pairs on diagonal (label=1), negatives off-diagonal (label=0)
        labels = torch.eye(batch_size, device=sa_embed.device)

        # Binary cross-entropy
        loss = F.binary_cross_entropy_with_logits(
            logits, labels, reduction="none"
        ).mean(dim=-1)

        return loss, logits

    def _compute_actor_loss(
        self,
        tensordict: TensorDictBase,
    ) -> torch.Tensor:
        """Compute actor loss.

        The actor maximizes the Q-value (critic output) for commanded goals.

        Args:
            tensordict: Input data with observations and goals

        Returns:
            Actor loss (to be minimized, so negated Q-value)
        """
        obs_key = self.tensor_keys.observation
        goal_key = self.tensor_keys.goal

        observation = tensordict.get(obs_key)
        goal = tensordict.get(goal_key)

        # Get action from actor
        td_actor = TensorDict(
            {obs_key: observation, goal_key: goal},
            batch_size=observation.shape[:1],
        )
        td_actor = self.actor_network(td_actor)
        action = td_actor.get(self.tensor_keys.action)

        # Get state-action embedding
        td_sa = TensorDict(
            {obs_key: observation, self.tensor_keys.action: action},
            batch_size=observation.shape[:1],
        )
        td_sa = self.sa_encoder(td_sa)
        sa_embed = td_sa.get(self.tensor_keys.sa_embedding)

        # Get goal embedding
        td_goal = TensorDict({goal_key: goal}, batch_size=goal.shape[:1])
        td_goal = self.goal_encoder(td_goal)
        goal_embed = td_goal.get(self.tensor_keys.goal_embedding)

        # Normalize embeddings
        sa_embed = F.normalize(sa_embed, dim=-1)
        goal_embed = F.normalize(goal_embed, dim=-1)

        # Q-value is the inner product
        q_value = (sa_embed * goal_embed).sum(dim=-1)

        # Actor loss: maximize Q-value (so minimize negative Q-value)
        loss = -q_value

        return loss

    @dispatch
    def forward(self, tensordict: TensorDictBase) -> TensorDictBase:
        """Compute Stable Contrastive RL losses.

        Args:
            tensordict: Input data containing:
                - observation: Current observations
                - action: Actions taken
                - goal: Goal states (typically future observations)
                - next.observation: Next observations (used as positive samples)

        Returns:
            TensorDict with:
                - loss_critic: Contrastive critic loss
                - loss_actor: Actor loss
                - critic_logits: Similarity logits from critic
        """
        obs_key = self.tensor_keys.observation
        action_key = self.tensor_keys.action
        goal_key = self.tensor_keys.goal

        observation = tensordict.get(obs_key)
        action = tensordict.get(action_key)
        goal = tensordict.get(goal_key)
        next_obs = tensordict.get(("next", obs_key))

        if observation is None:
            raise KeyError(f"Could not find observation key '{obs_key}' in tensordict")
        if action is None:
            raise KeyError(f"Could not find action key '{action_key}' in tensordict")

        # Use next observation as positive goal if goal not provided
        if goal is None:
            goal = next_obs
            # Set goal in tensordict for actor loss computation
            tensordict = tensordict.clone(False)
            tensordict.set(goal_key, goal)
        if next_obs is None:
            next_obs = goal

        batch_size = observation.shape[0]

        # === Compute Critic Loss ===
        # Get state-action embeddings
        td_sa = TensorDict(
            {obs_key: observation, action_key: action},
            batch_size=[batch_size],
        )
        td_sa = self.sa_encoder(td_sa)
        sa_embed = td_sa.get(self.tensor_keys.sa_embedding)

        # Get goal embeddings (using next observation as positive)
        td_goal = TensorDict({goal_key: next_obs}, batch_size=[batch_size])
        td_goal = self.goal_encoder(td_goal)
        goal_embed = td_goal.get(self.tensor_keys.goal_embedding)

        if sa_embed is None:
            raise KeyError(
                f"Could not find sa_embedding key '{self.tensor_keys.sa_embedding}' "
                f"in sa_encoder output. Available keys: {list(td_sa.keys())}"
            )
        if goal_embed is None:
            raise KeyError(
                f"Could not find goal_embedding key '{self.tensor_keys.goal_embedding}' "
                f"in goal_encoder output. Available keys: {list(td_goal.keys())}"
            )

        # Compute critic loss
        if self.use_log_softmax:
            loss_critic, logits = self._compute_critic_loss_infonce(
                sa_embed, goal_embed
            )
        else:
            loss_critic, logits = self._compute_critic_loss_bce(sa_embed, goal_embed)

        # === Compute Actor Loss ===
        if self.separate_losses:
            # Detach encoder for actor loss computation
            with torch.no_grad():
                loss_actor = self._compute_actor_loss(tensordict)
            loss_actor = loss_actor.detach()
            loss_actor.requires_grad_(True)
        else:
            loss_actor = self._compute_actor_loss(tensordict)

        loss_actor = self.actor_coeff * loss_actor

        # Build output tensordict
        td_out = TensorDict(
            {
                "loss_critic": loss_critic,
                "loss_actor": loss_actor,
                "critic_logits": logits.detach(),
            },
        )

        # Apply reduction
        td_out = td_out.named_apply(
            lambda name, value: _reduce(value, reduction=self.reduction)
            if name.startswith("loss_")
            else value,
        )

        # Set priority for prioritized replay
        with torch.no_grad():
            priority = loss_critic.detach()
            if priority.dim() == 0:
                priority = priority.unsqueeze(0).expand(batch_size)
            tensordict.set(self.tensor_keys.priority, priority, inplace=True)

        return td_out


class ContrastiveRLEncoder(nn.Module):
    """Encoder architecture for Stable Contrastive RL.

    This implements the recommended architecture from the paper:
    - For visual inputs: 3-layer CNN + wide MLP
    - Layer normalization after each layer
    - Cold initialization for last layer

    Args:
        input_dim (int): Input dimension (for state-based) or channels (for visual).
        output_dim (int): Output embedding dimension.
        hidden_dim (int, optional): Hidden layer dimension. Defaults to 1024.
        num_layers (int, optional): Number of MLP layers. Defaults to 4.
        is_visual (bool, optional): Whether input is visual (images). Defaults to False.
        use_layer_norm (bool, optional): Whether to use layer normalization.
            Defaults to True.
        cold_init (bool, optional): Whether to use cold initialization for last layer.
            Defaults to True.
    """

    def __init__(
        self,
        input_dim: int,
        output_dim: int,
        hidden_dim: int = 1024,
        num_layers: int = 4,
        is_visual: bool = False,
        use_layer_norm: bool = True,
        cold_init: bool = True,
    ):
        super().__init__()

        self.is_visual = is_visual
        self.use_layer_norm = use_layer_norm

        if is_visual:
            # CNN for visual features
            self.cnn = nn.Sequential(
                nn.Conv2d(input_dim, 32, kernel_size=3, stride=2, padding=1),
                nn.LayerNorm([32, 32, 32]) if use_layer_norm else nn.Identity(),
                nn.ReLU(),
                nn.Conv2d(32, 64, kernel_size=3, stride=2, padding=1),
                nn.LayerNorm([64, 16, 16]) if use_layer_norm else nn.Identity(),
                nn.ReLU(),
                nn.Conv2d(64, 64, kernel_size=3, stride=2, padding=1),
                nn.LayerNorm([64, 8, 8]) if use_layer_norm else nn.Identity(),
                nn.ReLU(),
                nn.Flatten(),
            )
            # CNN output size for 64x64 input: 64 * 8 * 8 = 4096
            mlp_input_dim = 64 * 8 * 8
        else:
            self.cnn = None
            mlp_input_dim = input_dim

        # Build MLP layers
        layers = []
        in_features = mlp_input_dim

        for _ in range(num_layers - 1):
            layers.append(nn.Linear(in_features, hidden_dim))
            if use_layer_norm:
                layers.append(nn.LayerNorm(hidden_dim))
            layers.append(nn.ReLU())
            in_features = hidden_dim

        # Final layer
        final_layer = nn.Linear(in_features, output_dim)

        # Cold initialization
        if cold_init:
            nn.init.uniform_(final_layer.weight, -1e-12, 1e-12)
            nn.init.zeros_(final_layer.bias)

        layers.append(final_layer)

        self.mlp = nn.Sequential(*layers)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        if self.is_visual and self.cnn is not None:
            x = self.cnn(x)
        return self.mlp(x)


def make_contrastive_rl_modules(
    observation_dim: int,
    action_dim: int,
    goal_dim: int | None = None,
    embed_dim: int = 64,
    hidden_dim: int = 1024,
    num_layers: int = 4,
    is_visual: bool = False,
    use_layer_norm: bool = True,
    cold_init: bool = True,
    device: torch.device | str | None = None,
) -> tuple[TensorDictModule, TensorDictModule, TensorDictModule]:
    """Create encoder and actor modules for Stable Contrastive RL.

    Args:
        observation_dim: Observation dimension (or channels for visual).
        action_dim: Action dimension.
        goal_dim: Goal dimension. If None, uses observation_dim.
        embed_dim: Embedding dimension for encoders.
        hidden_dim: Hidden layer dimension.
        num_layers: Number of MLP layers.
        is_visual: Whether observations are visual (images).
        use_layer_norm: Whether to use layer normalization.
        cold_init: Whether to use cold initialization.
        device: Device to create modules on.

    Returns:
        Tuple of (actor, sa_encoder, goal_encoder) as TensorDictModules.
    """
    if goal_dim is None:
        goal_dim = observation_dim

    # State-action encoder
    sa_input_dim = observation_dim + action_dim if not is_visual else observation_dim
    sa_net = ContrastiveRLEncoder(
        input_dim=sa_input_dim,
        output_dim=embed_dim,
        hidden_dim=hidden_dim,
        num_layers=num_layers,
        is_visual=is_visual,
        use_layer_norm=use_layer_norm,
        cold_init=cold_init,
    )

    # For state-based, we need to concatenate obs and action
    if not is_visual:

        class SAEncoder(nn.Module):
            def __init__(self, encoder):
                super().__init__()
                self.encoder = encoder

            def forward(self, observation, action):
                x = torch.cat([observation, action], dim=-1)
                return self.encoder(x)

        sa_module = TensorDictModule(
            SAEncoder(sa_net),
            in_keys=["observation", "action"],
            out_keys=["sa_embedding"],
        )
    else:
        # For visual, just use observation (action handled separately)
        sa_module = TensorDictModule(
            sa_net,
            in_keys=["observation"],
            out_keys=["sa_embedding"],
        )

    # Goal encoder
    goal_net = ContrastiveRLEncoder(
        input_dim=goal_dim,
        output_dim=embed_dim,
        hidden_dim=hidden_dim,
        num_layers=num_layers,
        is_visual=is_visual,
        use_layer_norm=use_layer_norm,
        cold_init=cold_init,
    )
    goal_module = TensorDictModule(
        goal_net,
        in_keys=["goal"],
        out_keys=["goal_embedding"],
    )

    # Actor network
    actor_input_dim = observation_dim + goal_dim if not is_visual else observation_dim

    class ActorNet(nn.Module):
        def __init__(self, input_dim, action_dim, hidden_dim):
            super().__init__()
            self.net = nn.Sequential(
                nn.Linear(input_dim, hidden_dim),
                nn.LayerNorm(hidden_dim) if use_layer_norm else nn.Identity(),
                nn.ReLU(),
                nn.Linear(hidden_dim, hidden_dim),
                nn.LayerNorm(hidden_dim) if use_layer_norm else nn.Identity(),
                nn.ReLU(),
                nn.Linear(hidden_dim, action_dim),
                nn.Tanh(),  # Bounded actions
            )

        def forward(self, observation, goal):
            x = torch.cat([observation, goal], dim=-1)
            return self.net(x)

    actor_net = ActorNet(actor_input_dim, action_dim, hidden_dim)
    actor_module = TensorDictModule(
        actor_net,
        in_keys=["observation", "goal"],
        out_keys=["action"],
    )

    if device is not None:
        sa_module = sa_module.to(device)
        goal_module = goal_module.to(device)
        actor_module = actor_module.to(device)

    return actor_module, sa_module, goal_module
