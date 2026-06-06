# RIDE: Rewarding Impact-Driven Exploration

Reproduction of [RIDE: Rewarding Impact-Driven Exploration for Procedurally-Generated
Environments](https://arxiv.org/abs/2002.12292) (Raileanu & Rocktäschel, ICLR 2020) on
the [MiniGrid](https://github.com/Farama-Foundation/Minigrid) benchmark.

RIDE is an intrinsic-motivation method for hard-exploration, sparse-reward tasks. It adds
an intrinsic reward

```
r_i(s_t, a_t) = coef * || phi(s_{t+1}) - phi(s_t) ||_2 / sqrt(N_ep(s_{t+1}))
```

that rewards the **impact** of an action — the magnitude of the change it causes in a
learned state embedding `phi` — discounted by the episodic visitation count of the
resulting state. The embedding is trained with the ICM forward + inverse dynamics losses
and is *never* updated by the (intrinsic or extrinsic) reward.

## Components

This example is built from two reusable TorchRL components:

- [`torchrl.objectives.ICMLoss`](../../torchrl/objectives/curiosity.py) — trains the
  embedding `phi`, the forward model and the inverse model.
- [`torchrl.envs.transforms.RIDEReward`](../../torchrl/envs/transforms/ride.py) — reads
  `phi` (detached) and writes the impact-driven intrinsic reward, with the episodic count
  discount.

The two share the **same** embedding network, so the intrinsic reward always reflects the
freshly trained representation. The agent itself is a standard PPO actor-critic
([`ClipPPOLoss`](../../torchrl/objectives/ppo.py)).

## Install

```bash
pip install minigrid gymnasium hydra-core tqdm wandb
```

## Run

RIDE:

```bash
python ride.py
```

Vanilla PPO baseline (no intrinsic reward):

```bash
python ride.py intrinsic.enabled=false logger.exp_name=PPO
```

Other useful overrides:

```bash
python ride.py env.env_name=MiniGrid-MultiRoom-N7-S4-v0 intrinsic.coef=0.5
python ride.py logger.backend=csv optim.device=cuda:0
```

## Key hyperparameters (`config.yaml`)

| Group | Field | Meaning |
|-------|-------|---------|
| `intrinsic` | `enabled` | toggle RIDE (`true`) vs vanilla PPO (`false`) |
| `intrinsic` | `coef` | intrinsic reward coefficient `omega` |
| `intrinsic` | `episodic` | apply the `1/sqrt(N_ep)` episodic count discount |
| `intrinsic` | `forward_loss_weight` / `inverse_loss_weight` | ICM `beta` / `1-beta` |
| `loss` | `entropy_coeff`, `clip_epsilon`, ... | standard PPO hyperparameters |

## Notes

- The benchmark uses MiniGrid's egocentric `7x7x3` symbolic image. The raw integer image is
  used for the episodic count while a normalised float copy feeds the networks.
- The original paper uses an IMPALA backbone; here RIDE — which is backbone-agnostic
  reward augmentation — is plugged into PPO, TorchRL's reference on-policy algorithm.
