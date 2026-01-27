# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
"""Tests for QRDQNLoss module.

Reference: "Distributional Reinforcement Learning with Quantile Regression"
https://arxiv.org/abs/1710.10044
"""
from __future__ import annotations

import contextlib

import pytest
import torch
from tensordict import TensorDict
from torch import nn

from torchrl._utils import rl_warnings
from torchrl.data import (
    Categorical,
    LazyTensorStorage,
    OneHot,
    TensorDictPrioritizedReplayBuffer,
)
from torchrl.modules import QRDQNActor
from torchrl.modules.models.models import MLP
from torchrl.objectives import HardUpdate, SoftUpdate
from torchrl.objectives.qrdqn import QRDQNLoss
from torchrl.testing import get_default_devices


class TestQRDQNLoss:
    """Tests for QRDQNLoss module."""

    seed = 0

    def _create_mock_qr_actor(
        self,
        action_spec_type,
        batch=2,
        obs_dim=3,
        action_dim=4,
        num_quantiles=32,
        device="cpu",
        action_value_key="action_value",
    ):
        """Create a mock QR-DQN actor for testing."""
        if action_spec_type == "one_hot":
            action_spec = OneHot(action_dim)
        elif action_spec_type == "categorical":
            action_spec = Categorical(action_dim)
        else:
            raise ValueError(f"Unknown action_spec_type: {action_spec_type}")

        # Create network that outputs [batch, num_quantiles, action_dim]
        class QRNetwork(nn.Module):
            def __init__(self, obs_dim, action_dim, num_quantiles):
                super().__init__()
                self.net = MLP(obs_dim, (num_quantiles * action_dim,))
                self.num_quantiles = num_quantiles
                self.action_dim = action_dim

            def forward(self, x):
                out = self.net(x)
                return out.view(*x.shape[:-1], self.num_quantiles, self.action_dim)

        net = QRNetwork(obs_dim, action_dim, num_quantiles)

        actor = QRDQNActor(
            module=net,
            spec=action_spec,
            in_keys=["observation"],
            action_space=action_spec_type,
            action_value_key=action_value_key,
        )

        return actor.to(device)

    def _create_mock_data_qrdqn(
        self,
        action_spec_type,
        batch=2,
        obs_dim=3,
        action_dim=4,
        num_quantiles=32,
        device="cpu",
        action_key="action",
        action_value_key="action_value",
    ):
        """Create mock data for QR-DQN testing."""
        obs = torch.randn(batch, obs_dim, device=device)
        next_obs = torch.randn(batch, obs_dim, device=device)

        # Action values: [batch, num_quantiles, action_dim]
        action_value = torch.randn(batch, num_quantiles, action_dim, device=device)

        # Mean Q-values for action selection
        q_mean = action_value.mean(dim=-2)  # [batch, action_dim]

        if action_spec_type == "one_hot":
            action = (q_mean == q_mean.max(-1, keepdim=True)[0]).to(torch.long)
        elif action_spec_type == "categorical":
            action = q_mean.argmax(dim=-1)
        else:
            raise ValueError(f"Unknown action_spec_type: {action_spec_type}")

        reward = torch.randn(batch, 1, device=device)
        done = torch.zeros(batch, 1, dtype=torch.bool, device=device)
        terminated = torch.zeros(batch, 1, dtype=torch.bool, device=device)

        td = TensorDict(
            {
                "observation": obs,
                "next": {
                    "observation": next_obs,
                    "done": done,
                    "terminated": terminated,
                    "reward": reward,
                },
                action_key: action,
                action_value_key: action_value,
            },
            batch_size=[batch],
            device=device,
        )
        return td

    @pytest.mark.parametrize("delay_value", [True, False])
    @pytest.mark.parametrize("double_qrdqn", [True, False])
    @pytest.mark.parametrize("device", get_default_devices())
    @pytest.mark.parametrize("action_spec_type", ["one_hot", "categorical"])
    @pytest.mark.parametrize("num_quantiles", [32, 51])
    def test_qrdqn(
        self, delay_value, double_qrdqn, device, action_spec_type, num_quantiles
    ):
        """Test basic QR-DQN loss computation and backward pass."""
        torch.manual_seed(self.seed)

        if double_qrdqn and not delay_value:
            pytest.skip("double_qrdqn requires delay_value=True")

        actor = self._create_mock_qr_actor(
            action_spec_type=action_spec_type,
            num_quantiles=num_quantiles,
            device=device,
        )
        td = self._create_mock_data_qrdqn(
            action_spec_type=action_spec_type,
            num_quantiles=num_quantiles,
            device=device,
        )

        loss_fn = QRDQNLoss(
            actor,
            num_quantiles=num_quantiles,
            huber_kappa=1.0,
            delay_value=delay_value,
            double_qrdqn=double_qrdqn,
        )
        loss_fn.make_value_estimator(gamma=0.99, device=device)

        with (
            pytest.warns(UserWarning, match="No target network updater has been")
            if delay_value and rl_warnings()
            else contextlib.nullcontext()
        ):
            loss_td = loss_fn(td)

        # Check loss output
        assert "loss" in loss_td.keys()
        assert loss_td["loss"].shape == torch.Size([])
        assert loss_td["loss"].requires_grad

        # Check priority is written
        assert loss_fn.tensor_keys.priority in td.keys()

        # Test backward pass
        loss_td["loss"].backward()
        grad_norm = torch.nn.utils.clip_grad_norm_(actor.parameters(), 1.0)
        assert grad_norm > 0.0

        if delay_value:
            # Remove warning by creating updater
            SoftUpdate(loss_fn, eps=0.5)

    @pytest.mark.parametrize("device", get_default_devices())
    @pytest.mark.parametrize("action_spec_type", ["one_hot", "categorical"])
    def test_qrdqn_state_dict(self, device, action_spec_type):
        """Test QR-DQN loss state dict save/load."""
        torch.manual_seed(self.seed)

        actor = self._create_mock_qr_actor(
            action_spec_type=action_spec_type,
            device=device,
        )

        loss_fn = QRDQNLoss(actor, num_quantiles=32, delay_value=True)
        sd = loss_fn.state_dict()

        loss_fn2 = QRDQNLoss(actor, num_quantiles=32, delay_value=True)
        loss_fn2.load_state_dict(sd)

        # Verify parameters match
        for (k1, v1), (k2, v2) in zip(
            loss_fn.state_dict().items(), loss_fn2.state_dict().items()
        ):
            assert k1 == k2
            if isinstance(v1, torch.Tensor) and isinstance(v2, torch.Tensor):
                assert torch.allclose(v1, v2)
            else:
                assert v1 == v2

    @pytest.mark.parametrize("huber_kappa", [0.5, 1.0, 2.0])
    @pytest.mark.parametrize("device", get_default_devices())
    def test_qrdqn_huber_kappa(self, huber_kappa, device):
        """Test QR-DQN with different Huber loss thresholds."""
        torch.manual_seed(self.seed)

        actor = self._create_mock_qr_actor(action_spec_type="one_hot", device=device)
        td = self._create_mock_data_qrdqn(action_spec_type="one_hot", device=device)

        loss_fn = QRDQNLoss(
            actor,
            num_quantiles=32,
            huber_kappa=huber_kappa,
            delay_value=True,
        )
        loss_fn.make_value_estimator(gamma=0.99, device=device)
        SoftUpdate(loss_fn, eps=0.5)

        loss_td = loss_fn(td)

        assert "loss" in loss_td.keys()
        assert torch.isfinite(loss_td["loss"])

    @pytest.mark.parametrize("reduction", ["mean", "sum", "none"])
    def test_qrdqn_reduction(self, reduction):
        """Test QR-DQN with different reduction modes."""
        torch.manual_seed(self.seed)
        batch_size = 4

        actor = self._create_mock_qr_actor(action_spec_type="one_hot")
        td = self._create_mock_data_qrdqn(action_spec_type="one_hot", batch=batch_size)

        loss_fn = QRDQNLoss(
            actor,
            num_quantiles=32,
            delay_value=True,
            reduction=reduction,
        )
        loss_fn.make_value_estimator(gamma=0.99)
        SoftUpdate(loss_fn, eps=0.5)

        loss_td = loss_fn(td)

        if reduction == "none":
            assert loss_td["loss"].shape == torch.Size([batch_size])
        else:
            assert loss_td["loss"].shape == torch.Size([])

    def test_qrdqn_tensordict_keys(self):
        """Test QR-DQN tensordict key configuration."""
        torch.manual_seed(self.seed)

        actor = self._create_mock_qr_actor(action_spec_type="one_hot")

        loss_fn = QRDQNLoss(actor, num_quantiles=32, delay_value=True)

        # Check default keys
        assert loss_fn.tensor_keys.action_value == "action_value"
        assert loss_fn.tensor_keys.action == "action"
        assert loss_fn.tensor_keys.priority == "td_error"
        assert loss_fn.tensor_keys.reward == "reward"
        assert loss_fn.tensor_keys.done == "done"
        assert loss_fn.tensor_keys.terminated == "terminated"

        # Test custom keys
        loss_fn.set_keys(
            action="custom_action",
            priority="custom_priority",
            reward="custom_reward",
        )
        assert loss_fn.tensor_keys.action == "custom_action"
        assert loss_fn.tensor_keys.priority == "custom_priority"
        assert loss_fn.tensor_keys.reward == "custom_reward"

    @pytest.mark.parametrize("action_spec_type", ["one_hot", "categorical"])
    def test_qrdqn_tensordict_run(self, action_spec_type):
        """Test QR-DQN with custom tensordict keys."""
        torch.manual_seed(self.seed)

        tensor_keys = {
            "action_value": "action_value_test",
            "action": "action_test",
            "priority": "priority_test",
        }

        actor = self._create_mock_qr_actor(
            action_spec_type=action_spec_type,
            action_value_key=tensor_keys["action_value"],
        )
        td = self._create_mock_data_qrdqn(
            action_spec_type=action_spec_type,
            action_key=tensor_keys["action"],
            action_value_key=tensor_keys["action_value"],
        )

        loss_fn = QRDQNLoss(actor, num_quantiles=32, delay_value=True)
        loss_fn.set_keys(**tensor_keys)
        loss_fn.make_value_estimator(gamma=0.99)
        SoftUpdate(loss_fn, eps=0.5)

        loss_td = loss_fn(td)

        assert "loss" in loss_td.keys()
        assert tensor_keys["priority"] in td.keys()

    def test_qrdqn_target_network_update(self):
        """Test QR-DQN target network update mechanics."""
        torch.manual_seed(self.seed)

        actor = self._create_mock_qr_actor(action_spec_type="one_hot")
        td = self._create_mock_data_qrdqn(action_spec_type="one_hot")

        loss_fn = QRDQNLoss(actor, num_quantiles=32, delay_value=True)
        loss_fn.make_value_estimator(gamma=0.99)

        # Store initial target params
        target_value = loss_fn.target_value_network_params.clone()

        # Update network params
        for p in loss_fn.parameters():
            if p.requires_grad:
                p.data += torch.randn_like(p)

        # Target should not change without explicit update
        target_value2 = loss_fn.target_value_network_params.clone()
        for (k1, v1), (_, v2) in zip(
            target_value.flatten_keys(",").items(),
            target_value2.flatten_keys(",").items(),
        ):
            if "support" in k1:
                continue
            assert torch.allclose(v1, v2), f"Target param {k1} changed unexpectedly"

        # Create updater and test update
        updater = HardUpdate(loss_fn, value_network_update_interval=1)
        updater.step()

        # Now target should match online
        target_value3 = loss_fn.target_value_network_params.clone()
        online_value = loss_fn.value_network_params.clone()

        for (k1, v1), (_, v2) in zip(
            target_value3.flatten_keys(",").items(),
            online_value.flatten_keys(",").items(),
        ):
            if "support" in k1:
                continue
            assert torch.allclose(v1, v2), f"Target param {k1} didn't update"

    def test_qrdqn_prioritized_weights(self):
        """Test QR-DQN with prioritized replay buffer weighted loss reduction."""
        torch.manual_seed(self.seed)

        n_obs = 4
        n_actions = 3
        num_quantiles = 32
        batch_size = 16
        buffer_size = 50

        # Create QR-DQN actor
        actor = self._create_mock_qr_actor(
            action_spec_type="categorical",
            obs_dim=n_obs,
            action_dim=n_actions,
            num_quantiles=num_quantiles,
        )

        # Create QR-DQN loss
        loss_fn = QRDQNLoss(
            value_network=actor,
            num_quantiles=num_quantiles,
            action_space="categorical",
            reduction="mean",
            delay_value=True,
        )
        loss_fn.make_value_estimator(gamma=0.99)
        SoftUpdate(loss_fn, eps=0.5)

        # Try to create prioritized replay buffer - skip if not available
        try:
            rb = TensorDictPrioritizedReplayBuffer(
                alpha=0.7,
                beta=0.9,
                storage=LazyTensorStorage(buffer_size),
                batch_size=batch_size,
                priority_key="td_error",
            )
        except RuntimeError as e:
            if "SumSegmentTreeFp32" in str(e):
                pytest.skip("SumSegmentTreeFp32 not available")
            raise

        # Create initial data
        initial_data = TensorDict(
            {
                "observation": torch.randn(buffer_size, n_obs),
                "action": torch.randint(0, n_actions, (buffer_size,)),
                ("next", "observation"): torch.randn(buffer_size, n_obs),
                ("next", "reward"): torch.randn(buffer_size, 1),
                ("next", "done"): torch.zeros(buffer_size, 1, dtype=torch.bool),
                ("next", "terminated"): torch.zeros(buffer_size, 1, dtype=torch.bool),
            },
            batch_size=[buffer_size],
        )
        rb.extend(initial_data)

        # Sample and run loss
        sample1 = rb.sample()
        assert "priority_weight" in sample1.keys()

        loss_fn(sample1)
        assert "td_error" in sample1.keys()

        # Update replay buffer with new priorities
        rb.update_tensordict_priority(sample1)

        # Sample again - weights should now vary
        sample2 = rb.sample()
        loss_out2 = loss_fn(sample2)
        assert torch.isfinite(loss_out2["loss"])

    def test_qrdqn_quantile_huber_loss(self):
        """Test the quantile Huber loss computation directly."""
        torch.manual_seed(self.seed)

        actor = self._create_mock_qr_actor(action_spec_type="one_hot")
        loss_fn = QRDQNLoss(actor, num_quantiles=32, delay_value=True)
        loss_fn.make_value_estimator(gamma=0.99)

        # Create test TD errors
        batch_size = 4
        num_quantiles = 32
        td_errors = torch.randn(batch_size, num_quantiles, num_quantiles)
        tau = loss_fn.tau

        loss = loss_fn._quantile_huber_loss(td_errors, tau, kappa=1.0)

        # Check output shape
        assert loss.shape == torch.Size([batch_size])

        # Loss should be non-negative (it's a weighted combination of Huber losses)
        assert (loss >= 0).all()

    @pytest.mark.parametrize("gamma", [0.9, 0.99, 0.999])
    def test_qrdqn_gamma(self, gamma):
        """Test QR-DQN with different discount factors."""
        torch.manual_seed(self.seed)

        actor = self._create_mock_qr_actor(action_spec_type="one_hot")
        td = self._create_mock_data_qrdqn(action_spec_type="one_hot")

        loss_fn = QRDQNLoss(actor, num_quantiles=32, delay_value=True)
        loss_fn.make_value_estimator(gamma=gamma)
        SoftUpdate(loss_fn, eps=0.5)

        # Check gamma is stored correctly
        assert torch.isclose(loss_fn.gamma, torch.tensor(gamma))

        loss_td = loss_fn(td)
        assert torch.isfinite(loss_td["loss"])

    def test_qrdqn_gradient_flow(self):
        """Test that gradients flow properly through the QR-DQN loss."""
        torch.manual_seed(self.seed)

        actor = self._create_mock_qr_actor(action_spec_type="one_hot")
        td = self._create_mock_data_qrdqn(action_spec_type="one_hot")

        loss_fn = QRDQNLoss(actor, num_quantiles=32, delay_value=True)
        loss_fn.make_value_estimator(gamma=0.99)
        SoftUpdate(loss_fn, eps=0.5)

        # Zero gradients
        for p in loss_fn.parameters():
            if p.grad is not None:
                p.grad.zero_()

        loss_td = loss_fn(td)
        loss_td["loss"].backward()

        # Check that value network has gradients
        has_grad = False
        for p in loss_fn.value_network_params.values(include_nested=True):
            if isinstance(p, torch.Tensor) and p.requires_grad and p.grad is not None:
                if p.grad.abs().sum() > 0:
                    has_grad = True
                    break

        assert has_grad, "Value network should have non-zero gradients"
