# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
"""Tests for Stable Contrastive RL implementation."""
from __future__ import annotations

import pytest
import torch
import torch.nn as nn
from tensordict import TensorDict
from tensordict.nn import TensorDictModule

from torchrl.objectives.contrastive_rl import (
    ContrastiveRLEncoder,
    make_contrastive_rl_modules,
    StableContrastiveRLLoss,
)


class TestStableContrastiveRLLoss:
    """Tests for the StableContrastiveRLLoss class."""

    @pytest.fixture
    def simple_modules(self):
        """Create simple modules for testing."""
        obs_dim = 10
        action_dim = 4
        goal_dim = 10
        embed_dim = 32

        # Actor: obs + goal -> action
        class ActorNet(nn.Module):
            def __init__(self):
                super().__init__()
                self.net = nn.Sequential(
                    nn.Linear(obs_dim + goal_dim, 64),
                    nn.ReLU(),
                    nn.Linear(64, action_dim),
                    nn.Tanh(),
                )

            def forward(self, observation, goal):
                x = torch.cat([observation, goal], dim=-1)
                return self.net(x)

        actor = TensorDictModule(
            ActorNet(),
            in_keys=["observation", "goal"],
            out_keys=["action"],
        )

        # State-action encoder
        class SANet(nn.Module):
            def __init__(self):
                super().__init__()
                self.net = nn.Sequential(
                    nn.Linear(obs_dim + action_dim, 64),
                    nn.ReLU(),
                    nn.Linear(64, embed_dim),
                )

            def forward(self, observation, action):
                x = torch.cat([observation, action], dim=-1)
                return self.net(x)

        sa_encoder = TensorDictModule(
            SANet(),
            in_keys=["observation", "action"],
            out_keys=["sa_embedding"],
        )

        # Goal encoder
        goal_encoder = TensorDictModule(
            nn.Sequential(
                nn.Linear(goal_dim, 64),
                nn.ReLU(),
                nn.Linear(64, embed_dim),
            ),
            in_keys=["goal"],
            out_keys=["goal_embedding"],
        )

        return actor, sa_encoder, goal_encoder, obs_dim, action_dim, goal_dim

    @pytest.fixture
    def sample_data(self, simple_modules):
        """Create sample data for testing."""
        _, _, _, obs_dim, action_dim, goal_dim = simple_modules
        batch_size = 32

        return TensorDict(
            {
                "observation": torch.randn(batch_size, obs_dim),
                "action": torch.randn(batch_size, action_dim),
                "goal": torch.randn(batch_size, goal_dim),
                ("next", "observation"): torch.randn(batch_size, obs_dim),
            },
            batch_size=[batch_size],
        )

    def test_forward_infonce(self, simple_modules, sample_data):
        """Test forward pass with InfoNCE loss."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
            use_log_softmax=True,
        )

        loss_td = loss(sample_data)

        assert "loss_critic" in loss_td.keys()
        assert "loss_actor" in loss_td.keys()
        assert "critic_logits" in loss_td.keys()

        # Losses should be scalars after reduction
        assert loss_td["loss_critic"].shape == torch.Size([])
        assert loss_td["loss_actor"].shape == torch.Size([])

        # Losses should be finite
        assert torch.isfinite(loss_td["loss_critic"])
        assert torch.isfinite(loss_td["loss_actor"])

    def test_forward_bce(self, simple_modules, sample_data):
        """Test forward pass with binary cross-entropy loss."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
            use_log_softmax=False,  # Use BCE
        )

        loss_td = loss(sample_data)

        assert "loss_critic" in loss_td.keys()
        assert "loss_actor" in loss_td.keys()
        assert torch.isfinite(loss_td["loss_critic"])
        assert torch.isfinite(loss_td["loss_actor"])

    def test_backward(self, simple_modules, sample_data):
        """Test that gradients flow correctly."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
        )

        loss_td = loss(sample_data)
        total_loss = loss_td["loss_critic"] + loss_td["loss_actor"]
        total_loss.backward()

        # Check gradients exist
        for param in actor.parameters():
            assert param.grad is not None
            assert torch.isfinite(param.grad).all()

        for param in sa_encoder.parameters():
            assert param.grad is not None
            assert torch.isfinite(param.grad).all()

        for param in goal_encoder.parameters():
            assert param.grad is not None
            assert torch.isfinite(param.grad).all()

    def test_gamma_hyperparameter(self, simple_modules, sample_data):
        """Test gamma hyperparameter is correctly stored."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        gamma = 0.95
        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
            gamma=gamma,
        )

        assert loss.gamma.item() == pytest.approx(gamma)

    def test_actor_coeff(self, simple_modules, sample_data):
        """Test actor coefficient scaling."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        # Create two losses with different actor coefficients
        loss_1x = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
            actor_coeff=1.0,
            reduction="none",
        )

        loss_2x = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
            actor_coeff=2.0,
            reduction="none",
        )

        td_1x = loss_1x(sample_data)
        td_2x = loss_2x(sample_data.clone())

        # Actor loss should scale linearly
        assert torch.allclose(td_2x["loss_actor"], td_1x["loss_actor"] * 2.0, rtol=1e-4)

    def test_reduction_none(self, simple_modules, sample_data):
        """Test no reduction returns per-sample losses."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
            reduction="none",
        )

        loss_td = loss(sample_data)

        # Should have batch dimension
        assert loss_td["loss_critic"].shape[0] == sample_data.batch_size[0]
        assert loss_td["loss_actor"].shape[0] == sample_data.batch_size[0]

    def test_reduction_sum(self, simple_modules, sample_data):
        """Test sum reduction."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        loss_none = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
            reduction="none",
        )

        loss_sum = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
            reduction="sum",
        )

        td_none = loss_none(sample_data)
        td_sum = loss_sum(sample_data.clone())

        # Sum should equal sum of individual losses
        assert torch.allclose(
            td_sum["loss_critic"], td_none["loss_critic"].sum(), rtol=1e-4
        )

    def test_in_keys(self, simple_modules):
        """Test in_keys property."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
        )

        in_keys = loss.in_keys

        assert "observation" in in_keys
        assert "action" in in_keys
        assert "goal" in in_keys

    def test_out_keys(self, simple_modules):
        """Test out_keys property."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
        )

        out_keys = loss.out_keys

        assert "loss_critic" in out_keys
        assert "loss_actor" in out_keys
        assert "critic_logits" in out_keys

    def test_set_keys(self, simple_modules):
        """Test setting custom keys."""
        actor, sa_encoder, goal_encoder, obs_dim, action_dim, goal_dim = simple_modules

        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
        )

        loss.set_keys(observation="my_obs", action="my_action", goal="my_goal")

        assert loss.tensor_keys.observation == "my_obs"
        assert loss.tensor_keys.action == "my_action"
        assert loss.tensor_keys.goal == "my_goal"

    def test_no_goal_uses_next_obs(self, simple_modules):
        """Test that next observation is used as goal if goal not provided."""
        actor, sa_encoder, goal_encoder, obs_dim, action_dim, _ = simple_modules
        batch_size = 32

        data = TensorDict(
            {
                "observation": torch.randn(batch_size, obs_dim),
                "action": torch.randn(batch_size, action_dim),
                # No "goal" key
                ("next", "observation"): torch.randn(batch_size, obs_dim),
            },
            batch_size=[batch_size],
        )

        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
        )

        # Should not raise - uses next.observation as goal
        loss_td = loss(data)
        assert torch.isfinite(loss_td["loss_critic"])

    def test_priority_set(self, simple_modules, sample_data):
        """Test that priority is set in tensordict for prioritized replay."""
        actor, sa_encoder, goal_encoder, _, _, _ = simple_modules

        loss = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
        )

        loss(sample_data)

        assert "td_error" in sample_data.keys()
        assert sample_data["td_error"].shape[0] == sample_data.batch_size[0]


class TestContrastiveRLEncoder:
    """Tests for the ContrastiveRLEncoder class."""

    def test_state_based_forward(self):
        """Test forward pass with state-based input."""
        input_dim = 20
        output_dim = 64
        batch_size = 16

        encoder = ContrastiveRLEncoder(
            input_dim=input_dim,
            output_dim=output_dim,
            hidden_dim=256,
            num_layers=3,
            is_visual=False,
        )

        x = torch.randn(batch_size, input_dim)
        out = encoder(x)

        assert out.shape == (batch_size, output_dim)
        assert torch.isfinite(out).all()

    def test_layer_norm(self):
        """Test that layer normalization is applied."""
        encoder = ContrastiveRLEncoder(
            input_dim=10,
            output_dim=32,
            hidden_dim=64,
            num_layers=2,
            use_layer_norm=True,
        )

        # Check that LayerNorm modules exist
        has_layer_norm = any(isinstance(m, nn.LayerNorm) for m in encoder.mlp.modules())
        assert has_layer_norm

    def test_no_layer_norm(self):
        """Test that layer normalization can be disabled."""
        encoder = ContrastiveRLEncoder(
            input_dim=10,
            output_dim=32,
            hidden_dim=64,
            num_layers=2,
            use_layer_norm=False,
        )

        # Check that no LayerNorm modules exist
        has_layer_norm = any(isinstance(m, nn.LayerNorm) for m in encoder.mlp.modules())
        assert not has_layer_norm

    def test_cold_initialization(self):
        """Test cold initialization of last layer."""
        encoder = ContrastiveRLEncoder(
            input_dim=10,
            output_dim=32,
            hidden_dim=64,
            num_layers=2,
            cold_init=True,
        )

        # Get last linear layer
        last_linear = None
        for module in encoder.mlp.modules():
            if isinstance(module, nn.Linear):
                last_linear = module

        assert last_linear is not None

        # Check weights are near zero
        assert last_linear.weight.abs().max() < 1e-10
        assert last_linear.bias.abs().max() < 1e-10

    def test_no_cold_initialization(self):
        """Test that cold initialization can be disabled."""
        encoder = ContrastiveRLEncoder(
            input_dim=10,
            output_dim=32,
            hidden_dim=64,
            num_layers=2,
            cold_init=False,
        )

        # Get last linear layer
        last_linear = None
        for module in encoder.mlp.modules():
            if isinstance(module, nn.Linear):
                last_linear = module

        # Weights should not be near zero (random init)
        assert last_linear.weight.abs().max() > 1e-10


class TestMakeContrastiveRLModules:
    """Tests for the make_contrastive_rl_modules function."""

    def test_creates_all_modules(self):
        """Test that all modules are created."""
        actor, sa_encoder, goal_encoder = make_contrastive_rl_modules(
            observation_dim=10,
            action_dim=4,
            goal_dim=10,
            embed_dim=32,
        )

        assert actor is not None
        assert sa_encoder is not None
        assert goal_encoder is not None

    def test_module_forward(self):
        """Test forward pass through created modules."""
        obs_dim = 10
        action_dim = 4
        goal_dim = 10
        embed_dim = 32
        batch_size = 16

        actor, sa_encoder, goal_encoder = make_contrastive_rl_modules(
            observation_dim=obs_dim,
            action_dim=action_dim,
            goal_dim=goal_dim,
            embed_dim=embed_dim,
        )

        # Test actor
        td_actor = TensorDict(
            {
                "observation": torch.randn(batch_size, obs_dim),
                "goal": torch.randn(batch_size, goal_dim),
            },
            batch_size=[batch_size],
        )
        td_actor = actor(td_actor)
        assert "action" in td_actor.keys()
        assert td_actor["action"].shape == (batch_size, action_dim)

        # Test SA encoder
        td_sa = TensorDict(
            {
                "observation": torch.randn(batch_size, obs_dim),
                "action": torch.randn(batch_size, action_dim),
            },
            batch_size=[batch_size],
        )
        td_sa = sa_encoder(td_sa)
        assert "sa_embedding" in td_sa.keys()
        assert td_sa["sa_embedding"].shape == (batch_size, embed_dim)

        # Test goal encoder
        td_goal = TensorDict(
            {
                "goal": torch.randn(batch_size, goal_dim),
            },
            batch_size=[batch_size],
        )
        td_goal = goal_encoder(td_goal)
        assert "goal_embedding" in td_goal.keys()
        assert td_goal["goal_embedding"].shape == (batch_size, embed_dim)

    def test_device_placement(self):
        """Test that modules are placed on correct device."""
        if not torch.cuda.is_available():
            pytest.skip("CUDA not available")

        device = torch.device("cuda:0")

        actor, sa_encoder, goal_encoder = make_contrastive_rl_modules(
            observation_dim=10,
            action_dim=4,
            goal_dim=10,
            device=device,
        )

        # Check all parameters are on CUDA
        for param in actor.parameters():
            assert param.device.type == "cuda"

        for param in sa_encoder.parameters():
            assert param.device.type == "cuda"

        for param in goal_encoder.parameters():
            assert param.device.type == "cuda"


class TestIntegration:
    """Integration tests for the full training loop."""

    def test_optimizer_step(self):
        """Test that optimizer can update parameters."""
        obs_dim = 10
        action_dim = 4
        goal_dim = 10
        batch_size = 32

        actor, sa_encoder, goal_encoder = make_contrastive_rl_modules(
            observation_dim=obs_dim,
            action_dim=action_dim,
            goal_dim=goal_dim,
        )

        loss_module = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
        )

        optimizer = torch.optim.Adam(
            list(actor.parameters())
            + list(sa_encoder.parameters())
            + list(goal_encoder.parameters()),
            lr=1e-3,
        )

        # Store initial parameters
        initial_params = [p.clone() for p in actor.parameters()]

        # Create data
        data = TensorDict(
            {
                "observation": torch.randn(batch_size, obs_dim),
                "action": torch.randn(batch_size, action_dim),
                "goal": torch.randn(batch_size, goal_dim),
                ("next", "observation"): torch.randn(batch_size, obs_dim),
            },
            batch_size=[batch_size],
        )

        # Training step
        optimizer.zero_grad()
        loss_td = loss_module(data)
        total_loss = loss_td["loss_critic"] + loss_td["loss_actor"]
        total_loss.backward()
        optimizer.step()

        # Check parameters changed
        for initial, current in zip(initial_params, actor.parameters()):
            assert not torch.allclose(initial, current)

    def test_multiple_training_steps(self):
        """Test multiple training steps without errors."""
        obs_dim = 10
        action_dim = 4
        goal_dim = 10
        batch_size = 16

        actor, sa_encoder, goal_encoder = make_contrastive_rl_modules(
            observation_dim=obs_dim,
            action_dim=action_dim,
            goal_dim=goal_dim,
        )

        loss_module = StableContrastiveRLLoss(
            actor_network=actor,
            sa_encoder=sa_encoder,
            goal_encoder=goal_encoder,
        )

        optimizer = torch.optim.Adam(
            list(actor.parameters())
            + list(sa_encoder.parameters())
            + list(goal_encoder.parameters()),
            lr=1e-3,
        )

        losses = []
        for _ in range(10):
            data = TensorDict(
                {
                    "observation": torch.randn(batch_size, obs_dim),
                    "action": torch.randn(batch_size, action_dim),
                    "goal": torch.randn(batch_size, goal_dim),
                    ("next", "observation"): torch.randn(batch_size, obs_dim),
                },
                batch_size=[batch_size],
            )

            optimizer.zero_grad()
            loss_td = loss_module(data)
            total_loss = loss_td["loss_critic"] + loss_td["loss_actor"]
            total_loss.backward()
            optimizer.step()

            losses.append(total_loss.item())

        # All losses should be finite
        assert all(torch.isfinite(torch.tensor(loss_val)) for loss_val in losses)
