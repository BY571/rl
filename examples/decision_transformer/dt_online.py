import hydra
import torch

from tensordict.nn import TensorDictModule

from torchrl.modules import ProbabilisticActor
from torchrl.modules.distributions import TanhNormal
from torchrl.modules.models import DTActor
from utils import make_collector, make_replay_buffer, make_test_env


@hydra.main(config_path=".", config_name="config")
def main(cfg: "DictConfig"):  # noqa: F821
    # Sanity check
    test_env = make_test_env(cfg.env)
    # test_env = make_transformed_env(test_env)
    action_spec = test_env.action_spec

    in_keys = [
        "observation",
        "action",
        "return_to_go",
        "timesteps",
    ]  # return_to_go, timesteps

    actor_net = DTActor(action_dim=1)

    dist_class = TanhNormal
    dist_kwargs = {
        "min": -1.0,
        "max": 1.0,
        "tanh_loc": False,
    }

    actor_module = TensorDictModule(
        actor_net, in_keys=in_keys, out_keys=["loc", "scale"]  # , "hidden_state"],
    )
    actor = ProbabilisticActor(
        spec=action_spec,
        in_keys=["loc", "scale"],  # , "hidden_state"],
        out_keys=["action", "log_prob"],  # , "hidden_state"],
        module=actor_module,
        distribution_class=dist_class,
        distribution_kwargs=dist_kwargs,
        default_interaction_mode="random",
        cache_dist=True,
        return_log_prob=False,
    )

    print(actor)

    with torch.no_grad():
        test_env.eval()
        actor.eval()
        # Generate a complete episode
        td_test = test_env.rollout(
            policy=actor,
            max_steps=30,
            auto_reset=True,
            auto_cast_to_device=True,
            break_when_any_done=True,
        ).clone()
        print(td_test)

    collector = make_collector(cfg, policy=actor)

    replay_buffer = make_replay_buffer(cfg.replay_buffer)
    for data in collector:
        data_view = data.reshape(-1)
        replay_buffer.extend(data_view)


if __name__ == "__main__":
    main()