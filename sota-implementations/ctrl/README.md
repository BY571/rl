# CTRL: Cross-Trajectory Representation Learning

This implementation reproduces the CTRL algorithm from the paper:

**"Cross-Trajectory Representation Learning for Zero-Shot Generalization in RL"**
Bogdan Mazoure, Ahmed M. Ahmed, Patrick MacAlpine, R. Devon Hjelm, Andrey Kolobov
ICLR 2022

Paper: https://arxiv.org/abs/2106.02193

## Overview

CTRL is a self-supervised representation learning method for RL that improves zero-shot generalization. The key insight is that a good encoder for generalization should map behaviorally similar observations to similar representations, regardless of the specific task or level.

### Key Components

1. **Prototype-based Contrastive Learning**: Uses learnable prototype vectors and the Sinkhorn algorithm for soft cluster assignments
2. **MYOW (Make Your Own Winners) Loss**: Encourages consistency between representations that share nearby prototypes
3. **Integration with PPO**: CTRL serves as an auxiliary loss that trains the encoder alongside the standard PPO objective

## Installation

```bash
# Install TorchRL
pip install torchrl

# Install Procgen (required for this implementation)
pip install procgen

# Install additional dependencies
pip install hydra-core wandb tqdm
```

## Usage

### Basic Training

```bash
# Train on CoinRun (default)
python ctrl_procgen.py

# Train on a different Procgen game
python ctrl_procgen.py env.env_name=procgen:procgen-starpilot-v0

# Train with more levels (harder generalization)
python ctrl_procgen.py env.num_levels=500
```

### Configuration Options

Key parameters can be modified via command line:

```bash
# Adjust CTRL hyperparameters
python ctrl_procgen.py ctrl.num_prototypes=256 ctrl.temperature=0.05

# Adjust training
python ctrl_procgen.py collector.total_frames=50_000_000 loss.ppo_epochs=4

# Use hard difficulty
python ctrl_procgen.py env.distribution_mode=hard

# Enable torch.compile for faster training
python ctrl_procgen.py compile.compile=true
```

### Logging

By default, results are logged to Weights & Biases. To change:

```bash
# Use TensorBoard instead
python ctrl_procgen.py logger.backend=tensorboard

# Disable logging
python ctrl_procgen.py logger.backend=""
```

## Procgen Environments

CTRL was designed for the Procgen benchmark which tests generalization. Available games:

- `procgen-coinrun-v0` (default)
- `procgen-starpilot-v0`
- `procgen-caveflyer-v0`
- `procgen-dodgeball-v0`
- `procgen-fruitbot-v0`
- `procgen-chaser-v0`
- `procgen-miner-v0`
- `procgen-jumper-v0`
- `procgen-leaper-v0`
- `procgen-maze-v0`
- `procgen-bigfish-v0`
- `procgen-heist-v0`
- `procgen-climber-v0`
- `procgen-plunder-v0`
- `procgen-ninja-v0`
- `procgen-bossfight-v0`

## Expected Results

On Procgen with 200 training levels (easy mode), CTRL should show improved generalization performance compared to vanilla PPO, particularly on test levels not seen during training.

## Algorithm Details

### CTRL Loss

The CTRL loss combines two components:

1. **Prototype Loss**: Cross-entropy between Sinkhorn-computed soft assignments and prediction head outputs
2. **MYOW Loss**: Cosine similarity loss between representations that share nearby prototypes

```
L_CTRL = L_proto + myow_coeff * L_myow
```

### Training Loop

1. Collect trajectories using PPO policy
2. Compute PPO losses (policy, value, entropy)
3. Compute CTRL losses on encoder representations
4. Update policy/value networks with PPO gradients
5. Update encoder/prototypes with CTRL gradients

## Citation

```bibtex
@inproceedings{mazoure2022cross,
  title={Cross-Trajectory Representation Learning for Zero-Shot Generalization in {RL}},
  author={Mazoure, Bogdan and Ahmed, Ahmed M and MacAlpine, Patrick and Hjelm, R Devon and Kolobov, Andrey},
  booktitle={International Conference on Learning Representations},
  year={2022}
}
```
