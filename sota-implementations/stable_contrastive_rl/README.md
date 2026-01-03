# Stable Contrastive RL

This is an implementation of the Stable Contrastive RL algorithm from:

**"Stabilizing Contrastive RL: Techniques for Robotic Goal Reaching from Offline Data"**

Chongyi Zheng, Benjamin Eysenbach, Homer Walke, Patrick Yin, Kuan Fang, Ruslan Salakhutdinov, Sergey Levine

[Paper](https://arxiv.org/abs/2306.03346) | [Official Code](https://github.com/chongyi-zheng/stable_contrastive_rl)

## Overview

Stable Contrastive RL is a goal-conditioned reinforcement learning algorithm that uses contrastive learning (InfoNCE) to learn a goal-conditioned Q-function. The key insight is that the critic can be parameterized as:

```
f(s, a, g) = φ(s, a)ᵀ ψ(g)
```

where φ encodes state-action pairs and ψ encodes goal states. The inner product represents the Q-value for reaching goal g from state s with action a.

### Key Stabilization Techniques

The paper identifies several design decisions that significantly improve performance:

1. **Shallow and wide architecture**: 3-layer CNN + wide MLP (1024 hidden units)
2. **Layer normalization**: Applied after each layer
3. **Cold initialization**: Last layer weights initialized near zero (UNIF[-1e-12, 1e-12])
4. **Data augmentation**: Random cropping for image observations
5. **Large batch size**: 2048 recommended

## Installation

Ensure TorchRL is installed with the required dependencies:

```bash
pip install torchrl gymnasium[mujoco]
```

For FetchReach environments:
```bash
pip install gymnasium-robotics
```

## Usage

### Basic Training

```bash
python stable_contrastive_rl.py
```

### With Configuration Override

```bash
# Train on FetchReach with wandb logging
python stable_contrastive_rl.py \
    env.env_name=FetchReach-v3 \
    logger.backend=wandb \
    collector.total_frames=500000

# Train on PointMaze
python stable_contrastive_rl.py \
    env.env_name=PointMaze_UMaze-v3 \
    env.max_steps=100
```

### Key Hyperparameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `model.embed_dim` | 64 | Embedding dimension |
| `model.hidden_dim` | 1024 | Hidden layer width |
| `model.num_layers` | 4 | Number of MLP layers |
| `model.use_layer_norm` | true | Use layer normalization |
| `model.cold_init` | true | Cold initialization |
| `buffer.batch_size` | 2048 | Training batch size |
| `loss.gamma` | 0.99 | Discount factor |
| `optim.lr` | 3e-4 | Learning rate |

## Algorithm

The algorithm trains two main components:

### Critic (Contrastive Learning)
Uses InfoNCE loss to learn state-action and goal embeddings:
```python
L_critic = -log(exp(φ(s,a)ᵀψ(s_future)) / Σⱼ exp(φ(s,a)ᵀψ(sⱼ)))
```

Where positive samples are future states from the same trajectory, and negatives are random states from the batch.

### Actor
Maximizes the Q-value for commanded goals:
```python
L_actor = -φ(s, π(s,g))ᵀψ(g)
```

## Performance

The algorithm is designed for goal-conditioned tasks and has been demonstrated on:
- Robotic manipulation (reaching, pushing)
- Navigation (maze environments)
- Both simulated and real-world tasks

## Citation

```bibtex
@article{zheng2023stabilizing,
  title={Stabilizing Contrastive RL: Techniques for Robotic Goal Reaching from Offline Data},
  author={Zheng, Chongyi and Eysenbach, Benjamin and Walke, Homer and Yin, Patrick and Fang, Kuan and Salakhutdinov, Ruslan and Levine, Sergey},
  journal={arXiv preprint arXiv:2306.03346},
  year={2023}
}
```
