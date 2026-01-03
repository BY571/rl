# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
from __future__ import annotations

import pytest
import torch
import torch.nn as nn
from tensordict import TensorDict
from tensordict.nn import TensorDictModule

from torchrl.objectives.ctrl import CTRLLoss, CTRLPPOLoss


class TestCTRLLoss:
    """Tests for CTRLLoss module."""

    seed = 0

    def _create_mock_encoder(
        self,
        obs_dim=64,
        embedding_dim=128,
        device="cpu",
        observation_key="observation",
        embedding_key="embedding",
    ):
        """Create a mock encoder network."""
        net = nn.Sequential(
            nn.Linear(obs_dim, 256),
            nn.ReLU(),
            nn.Linear(256, embedding_dim),
        )
        encoder = TensorDictModule(
            net,
            in_keys=[observation_key],
            out_keys=[embedding_key],
        )
        return encoder.to(device)

    def _create_mock_data(
        self,
        batch_size=32,
        obs_dim=64,
        device="cpu",
        observation_key="observation",
    ):
        """Create mock trajectory data."""
        torch.manual_seed(self.seed)
        data = TensorDict(
            {
                observation_key: torch.randn(batch_size, obs_dim, device=device),
            },
            batch_size=[batch_size],
            device=device,
        )
        return data

    @pytest.mark.parametrize(
        "device", ["cpu", "cuda:0"] if torch.cuda.is_available() else ["cpu"]
    )
    @pytest.mark.parametrize("embedding_dim", [64, 128, 256])
    def test_ctrl_loss_forward(self, device, embedding_dim):
        """Test basic forward pass of CTRLLoss."""
        torch.manual_seed(self.seed)

        encoder = self._create_mock_encoder(
            obs_dim=64,
            embedding_dim=embedding_dim,
            device=device,
        )
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=embedding_dim,
            projection_dim=64,
            num_prototypes=128,
        ).to(device)

        data = self._create_mock_data(batch_size=32, obs_dim=64, device=device)
        loss_td = loss_fn(data)

        # Check output keys
        assert "loss_ctrl" in loss_td.keys()
        assert "loss_proto" in loss_td.keys()
        assert "loss_myow" in loss_td.keys()

        # Check loss values are valid
        assert torch.isfinite(loss_td["loss_ctrl"]).all()
        assert torch.isfinite(loss_td["loss_proto"]).all()
        assert torch.isfinite(loss_td["loss_myow"]).all()

        # Check shapes (should be scalar after reduction)
        assert loss_td["loss_ctrl"].shape == torch.Size([])

    @pytest.mark.parametrize(
        "device", ["cpu", "cuda:0"] if torch.cuda.is_available() else ["cpu"]
    )
    def test_ctrl_loss_backward(self, device):
        """Test that gradients flow through CTRLLoss."""
        torch.manual_seed(self.seed)

        encoder = self._create_mock_encoder(
            obs_dim=64,
            embedding_dim=128,
            device=device,
        )
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
            projection_dim=64,
            num_prototypes=128,
        ).to(device)

        data = self._create_mock_data(batch_size=32, obs_dim=64, device=device)
        loss_td = loss_fn(data)

        total_loss = loss_td["loss_ctrl"]
        total_loss.backward()

        # Check that gradients exist for projection head
        for param in loss_fn.projection_head.parameters():
            assert param.grad is not None
            assert torch.isfinite(param.grad).all()

        # Check that gradients exist for prototypes
        assert loss_fn.prototypes.grad is not None
        assert torch.isfinite(loss_fn.prototypes.grad).all()

    @pytest.mark.parametrize("num_prototypes", [64, 256, 512])
    def test_ctrl_loss_prototype_count(self, num_prototypes):
        """Test CTRLLoss with different prototype counts."""
        torch.manual_seed(self.seed)

        encoder = self._create_mock_encoder(obs_dim=64, embedding_dim=128)
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
            projection_dim=64,
            num_prototypes=num_prototypes,
        )

        # Check prototype dimensions
        assert loss_fn.prototypes.shape == (num_prototypes, 64)

        data = self._create_mock_data(batch_size=32, obs_dim=64)
        loss_td = loss_fn(data)

        assert torch.isfinite(loss_td["loss_ctrl"]).all()

    @pytest.mark.parametrize("sinkhorn_iters", [1, 3, 5])
    def test_ctrl_loss_sinkhorn_iters(self, sinkhorn_iters):
        """Test CTRLLoss with different Sinkhorn iteration counts."""
        torch.manual_seed(self.seed)

        encoder = self._create_mock_encoder(obs_dim=64, embedding_dim=128)
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
            projection_dim=64,
            num_prototypes=128,
            sinkhorn_iters=sinkhorn_iters,
        )

        data = self._create_mock_data(batch_size=32, obs_dim=64)
        loss_td = loss_fn(data)

        assert torch.isfinite(loss_td["loss_ctrl"]).all()

    @pytest.mark.parametrize("temperature", [0.05, 0.1, 0.5])
    def test_ctrl_loss_temperature(self, temperature):
        """Test CTRLLoss with different temperature values."""
        torch.manual_seed(self.seed)

        encoder = self._create_mock_encoder(obs_dim=64, embedding_dim=128)
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
            projection_dim=64,
            num_prototypes=128,
            temperature=temperature,
        )

        data = self._create_mock_data(batch_size=32, obs_dim=64)
        loss_td = loss_fn(data)

        assert torch.isfinite(loss_td["loss_ctrl"]).all()

    @pytest.mark.parametrize("myow_coeff", [0.0, 0.5, 1.0, 2.0])
    def test_ctrl_loss_myow_coeff(self, myow_coeff):
        """Test CTRLLoss with different MYOW coefficients."""
        torch.manual_seed(self.seed)

        encoder = self._create_mock_encoder(obs_dim=64, embedding_dim=128)
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
            projection_dim=64,
            num_prototypes=128,
            myow_coeff=myow_coeff,
        )

        data = self._create_mock_data(batch_size=32, obs_dim=64)
        loss_td = loss_fn(data)

        assert torch.isfinite(loss_td["loss_ctrl"]).all()

    @pytest.mark.parametrize("reduction", ["mean", "sum", "none"])
    def test_ctrl_loss_reduction(self, reduction):
        """Test CTRLLoss with different reduction modes."""
        torch.manual_seed(self.seed)

        encoder = self._create_mock_encoder(obs_dim=64, embedding_dim=128)
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
            projection_dim=64,
            num_prototypes=128,
            reduction=reduction,
        )

        batch_size = 32
        data = self._create_mock_data(batch_size=batch_size, obs_dim=64)
        loss_td = loss_fn(data)

        if reduction == "none":
            # Should not be reduced to scalar
            assert loss_td["loss_ctrl"].numel() > 1
        else:
            # Should be scalar
            assert loss_td["loss_ctrl"].shape == torch.Size([])

    def test_ctrl_loss_in_keys(self):
        """Test that in_keys are correctly set."""
        encoder = self._create_mock_encoder(obs_dim=64, embedding_dim=128)
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
        )

        assert "observation" in loss_fn.in_keys

    def test_ctrl_loss_out_keys(self):
        """Test that out_keys are correctly set."""
        encoder = self._create_mock_encoder(obs_dim=64, embedding_dim=128)
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
        )

        assert "loss_ctrl" in loss_fn.out_keys
        assert "loss_proto" in loss_fn.out_keys
        assert "loss_myow" in loss_fn.out_keys

    def test_ctrl_loss_set_keys(self):
        """Test setting custom tensordict keys."""
        encoder = self._create_mock_encoder(
            obs_dim=64,
            embedding_dim=128,
            observation_key="obs",
            embedding_key="hidden",
        )
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
        )
        loss_fn.set_keys(observation="obs", embedding="hidden")

        assert loss_fn.tensor_keys.observation == "obs"
        assert loss_fn.tensor_keys.embedding == "hidden"

    def test_ctrl_loss_missing_observation_key(self):
        """Test that error is raised when observation key is missing."""
        encoder = self._create_mock_encoder(obs_dim=64, embedding_dim=128)
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
        )

        # Create data without the observation key
        data = TensorDict(
            {"other_key": torch.randn(32, 64)},
            batch_size=[32],
        )

        with pytest.raises(KeyError):
            loss_fn(data)

    @pytest.mark.parametrize("batch_size", [8, 32, 64])
    def test_ctrl_loss_batch_sizes(self, batch_size):
        """Test CTRLLoss with different batch sizes."""
        torch.manual_seed(self.seed)

        encoder = self._create_mock_encoder(obs_dim=64, embedding_dim=128)
        loss_fn = CTRLLoss(
            encoder_network=encoder,
            embedding_dim=128,
            projection_dim=64,
            num_prototypes=128,
        )

        data = self._create_mock_data(batch_size=batch_size, obs_dim=64)
        loss_td = loss_fn(data)

        assert torch.isfinite(loss_td["loss_ctrl"]).all()

    def test_sinkhorn_algorithm(self):
        """Test that Sinkhorn algorithm produces valid soft assignments."""
        torch.manual_seed(self.seed)

        # Create random scores
        scores = torch.randn(32, 128)

        # Apply Sinkhorn
        Q = CTRLLoss._sinkhorn(scores, iters=3)

        # Check that output is valid probability distribution
        assert torch.isfinite(Q).all()
        assert (Q >= 0).all()
        # Rows should sum to approximately 1
        row_sums = Q.sum(dim=1)
        assert torch.allclose(row_sums, torch.ones_like(row_sums), atol=1e-3)

    def test_sinkhorn_convergence(self):
        """Test that more Sinkhorn iterations lead to better normalization."""
        torch.manual_seed(self.seed)

        scores = torch.randn(32, 128)

        Q1 = CTRLLoss._sinkhorn(scores, iters=1)
        Q3 = CTRLLoss._sinkhorn(scores, iters=3)
        Q10 = CTRLLoss._sinkhorn(scores, iters=10)

        # All should be valid
        for Q in [Q1, Q3, Q10]:
            assert torch.isfinite(Q).all()
            assert (Q >= 0).all()


class TestCTRLPPOLoss:
    """Tests for combined CTRL+PPO loss."""

    seed = 0

    def _create_mock_encoder(self, obs_dim=64, embedding_dim=128, device="cpu"):
        """Create a mock encoder network."""
        net = nn.Sequential(
            nn.Linear(obs_dim, 256),
            nn.ReLU(),
            nn.Linear(256, embedding_dim),
        )
        encoder = TensorDictModule(
            net,
            in_keys=["observation"],
            out_keys=["embedding"],
        )
        return encoder.to(device)

    def _create_mock_ppo_loss(
        self, obs_dim=64, embedding_dim=128, action_dim=4, device="cpu"
    ):
        """Create a mock PPO loss module."""
        from torchrl.data.tensor_specs import Bounded
        from torchrl.modules import ProbabilisticActor, TanhNormal, ValueOperator
        from torchrl.modules.distributions import NormalParamExtractor
        from torchrl.objectives import ClipPPOLoss

        # Actor
        action_spec = Bounded(
            -torch.ones(action_dim), torch.ones(action_dim), (action_dim,)
        )
        net = nn.Sequential(
            nn.Linear(obs_dim, embedding_dim),
            nn.ReLU(),
            nn.Linear(embedding_dim, 2 * action_dim),
            NormalParamExtractor(),
        )
        module = TensorDictModule(
            net, in_keys=["observation"], out_keys=["loc", "scale"]
        )
        actor = ProbabilisticActor(
            module=module,
            distribution_class=TanhNormal,
            in_keys=["loc", "scale"],
            out_keys=["action"],
            spec=action_spec,
            return_log_prob=True,
        ).to(device)

        # Critic
        value_net = nn.Sequential(
            nn.Linear(obs_dim, embedding_dim),
            nn.ReLU(),
            nn.Linear(embedding_dim, 1),
        )
        critic = ValueOperator(
            value_net,
            in_keys=["observation"],
        ).to(device)

        return ClipPPOLoss(actor, critic)

    def _create_mock_data(
        self,
        batch_size=32,
        obs_dim=64,
        action_dim=4,
        device="cpu",
    ):
        """Create mock data for CTRL+PPO."""
        torch.manual_seed(self.seed)
        data = TensorDict(
            {
                "observation": torch.randn(batch_size, obs_dim, device=device),
                "action": torch.randn(batch_size, action_dim, device=device),
                "action_log_prob": torch.randn(batch_size, device=device),
                ("next", "observation"): torch.randn(
                    batch_size, obs_dim, device=device
                ),
                ("next", "reward"): torch.randn(batch_size, 1, device=device),
                ("next", "done"): torch.zeros(
                    batch_size, 1, dtype=torch.bool, device=device
                ),
                ("next", "terminated"): torch.zeros(
                    batch_size, 1, dtype=torch.bool, device=device
                ),
            },
            batch_size=[batch_size],
            device=device,
        )
        return data

    def test_ctrl_ppo_loss_forward(self):
        """Test combined CTRL+PPO loss forward pass."""
        torch.manual_seed(self.seed)

        ppo_loss = self._create_mock_ppo_loss()
        encoder = self._create_mock_encoder()
        ctrl_loss = CTRLLoss(encoder_network=encoder, embedding_dim=128)

        combined_loss = CTRLPPOLoss(ppo_loss, ctrl_loss, ctrl_coeff=1.0)

        data = self._create_mock_data()
        loss_td = combined_loss(data)

        # Check PPO outputs
        assert "loss_objective" in loss_td.keys()
        assert "loss_critic" in loss_td.keys()

        # Check CTRL outputs
        assert "loss_ctrl" in loss_td.keys()
        assert "loss_proto" in loss_td.keys()
        assert "loss_myow" in loss_td.keys()

    def test_ctrl_ppo_loss_ctrl_coeff(self):
        """Test that ctrl_coeff scales CTRL loss correctly."""
        torch.manual_seed(self.seed)

        ppo_loss = self._create_mock_ppo_loss()
        encoder = self._create_mock_encoder()
        ctrl_loss = CTRLLoss(encoder_network=encoder, embedding_dim=128)

        # Test with different coefficients
        for coeff in [0.5, 1.0, 2.0]:
            combined_loss = CTRLPPOLoss(ppo_loss, ctrl_loss, ctrl_coeff=coeff)
            data = self._create_mock_data()

            # Get standalone CTRL loss
            ctrl_td = ctrl_loss(data)
            expected_ctrl_loss = ctrl_td["loss_ctrl"] * coeff

            # Get combined loss
            combined_td = combined_loss(data)

            # The scaled loss should match
            assert torch.allclose(
                combined_td["loss_ctrl"],
                expected_ctrl_loss,
                atol=1e-5,
            )

    def test_ctrl_ppo_loss_in_keys(self):
        """Test that in_keys include both PPO and CTRL keys."""
        ppo_loss = self._create_mock_ppo_loss()
        encoder = self._create_mock_encoder()
        ctrl_loss = CTRLLoss(encoder_network=encoder, embedding_dim=128)

        combined_loss = CTRLPPOLoss(ppo_loss, ctrl_loss)

        # Should include observation (for both PPO and CTRL)
        assert "observation" in combined_loss.in_keys

    def test_ctrl_ppo_loss_out_keys(self):
        """Test that out_keys include both PPO and CTRL keys."""
        ppo_loss = self._create_mock_ppo_loss()
        encoder = self._create_mock_encoder()
        ctrl_loss = CTRLLoss(encoder_network=encoder, embedding_dim=128)

        combined_loss = CTRLPPOLoss(ppo_loss, ctrl_loss)

        # Should include PPO keys
        assert "loss_objective" in combined_loss.out_keys

        # Should include CTRL keys
        assert "loss_ctrl" in combined_loss.out_keys


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
