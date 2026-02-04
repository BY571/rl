# PPO HalfCheetah with MjWarpEnv — Benchmark Results

## Setup

- **GPU**: NVIDIA GeForce RTX 4060 Laptop GPU (8 GiB)
- **Num envs**: 4096 (GPU-batched via MuJoCo Warp)
- **Frames per batch**: 65,536 (4096 envs x 16 steps)
- **PPO epochs**: 4, mini-batch size: 4096
- **Network**: MLP [256, 256] with Tanh, orthogonal init
- **LR**: 3e-4 (linearly annealed), clip epsilon: 0.2
- **Max episode steps**: 1000

## Training Results (50M frames)

| Frames | FPS     | Train Reward | Eval Reward | Wall Time |
|--------|---------|--------------|-------------|-----------|
| 5M     | 121,787 | 607          | 1,941       | 0:33      |
| 10M    | 93,274  | 1,757        | 2,657       | 1:27      |
| 15M    | 92,027  | 2,941        | 2,960       | 2:58      |
| 20M    | 95,394  | 3,221        | 3,508       | 3:35      |
| 25M    | 103,401 | 3,658        | 3,998       | 3:57      |
| 30M    | 100,999 | 3,939        | 4,095       | 4:44      |
| 35M    | 99,554  | 3,970        | 4,369       | 5:29      |
| 40M    | 97,224  | 4,334        | 4,645       | 7:01      |
| 45M    | 97,215  | 4,491        | 4,548       | 7:43      |
| 50M    | 100,165 | 4,541        | 5,043       | 8:10      |

**Total: 50M frames in 512.7s (97,530 avg FPS)**

Reward is still climbing at 50M frames. Standard HalfCheetah-v4 PPO
asymptotes around 5,000-8,000 depending on hyperparameters.

## Collector Benchmark (data collection only, no training)

Direct env stepping vs SyncDataCollector, random policy, 4096 envs:

| Steps/env | Frames/batch | Direct FPS | Collector FPS | Speedup |
|-----------|-------------|------------|---------------|---------|
| 16        | 65,536      | 927,624    | 759,881       | 1.22x   |
| 32        | 131,072     | 866,282    | 763,778       | 1.13x   |
| 64        | 262,144     | 832,147    | 761,697       | 1.09x   |
| 128       | 524,288     | 823,631    | 754,789       | 1.09x   |
| 256       | 1,048,576   | 815,457    | 763,297       | 1.07x   |
| 512       | 2,097,152   | 722,352    | 728,067       | 0.99x   |

Direct stepping is ~20% faster at short rollouts (16 steps, typical for PPO).
The gap narrows and vanishes at 512 steps/env.
