import torch.nn
import torch.optim
from lamb import Lamb
from tensordict.nn import TensorDictModule

from torchrl.collectors import SyncDataCollector
from torchrl.data import LazyMemmapStorage, TensorDictReplayBuffer
from torchrl.data.datasets.d4rl import D4RLExperienceReplay
from torchrl.data.replay_buffers import SamplerWithoutReplacement
from torchrl.envs import (
    CatFrames,
    Compose,
    DoubleToFloat,
    EnvCreator,
    ExcludeTransform,
    NoopResetEnv,
    ObservationNorm,
    ParallelEnv,
    Reward2GoTransform,
    RewardScaling,
    RewardSum,
    TargetReturn,
    TensorDictPrimer,
    TransformedEnv,
    UnsqueezeTransform,
)
from torchrl.envs.libs.dm_control import DMControlEnv
from torchrl.envs.utils import set_exploration_mode
from torchrl.modules import (
    DTActor,
    OnlineDTActor,
    ProbabilisticActor,
    TanhDelta,
    TanhNormal,
)

from torchrl.objectives import DTLoss, OnlineDTLoss
from torchrl.record.loggers import generate_exp_name, get_logger
from torchrl.trainers.helpers.envs import LIBS


# ====================================================================
# Environment utils
# -----------------


def make_base_env(env_cfg):
    env_library = LIBS[env_cfg.library]
    env_name = env_cfg.name
    frame_skip = env_cfg.frame_skip

    env_kwargs = {
        "env_name": env_name,
        "frame_skip": frame_skip,
    }
    if env_library is DMControlEnv:
        env_task = env_cfg.task
        env_kwargs.update({"task_name": env_task})
    env = env_library(**env_kwargs)
    if env_cfg.noop > 1:
        env = TransformedEnv(env, NoopResetEnv(env_cfg.noop))
    return env


def make_transformed_env(base_env, env_cfg, obs_loc, obs_std, train=False):
    transformed_env = TransformedEnv(base_env)
    if train:
        transformed_env.append_transform(
            TargetReturn(
                env_cfg.collect_target_return,
                out_keys=["return_to_go"],
                mode=env_cfg.target_return_mode,
            )
        )
    else:
        transformed_env.append_transform(
            TargetReturn(
                env_cfg.eval_target_return,
                out_keys=["return_to_go"],
                mode=env_cfg.target_return_mode,
            )
        )
    transformed_env.append_transform(
        RewardScaling(
            loc=0,
            scale=env_cfg.reward_scaling,
            in_keys="return_to_go",
            standard_normal=False,
        )
    )
    transformed_env.append_transform(
        RewardScaling(
            loc=0, scale=env_cfg.reward_scaling, in_keys="reward", standard_normal=False
        )
    )
    transformed_env.append_transform(TensorDictPrimer(action=base_env.action_spec))

    transformed_env.append_transform(
        DoubleToFloat(
            in_keys=["observation"],
            in_keys_inv=[],
        )
    )
    transformed_env.append_transform(
        UnsqueezeTransform(-2, in_keys=["observation", "action", "return_to_go"])
    )
    transformed_env.append_transform(
        CatFrames(
            in_keys=["observation", "action", "return_to_go"],
            N=env_cfg.stacked_frames,
            dim=-2,
        )
    )
    obsnorm = ObservationNorm(
        loc=obs_loc, scale=obs_std, in_keys="observation", standard_normal=True
    )
    transformed_env.append_transform(obsnorm)

    if train:
        transformed_env.append_transform(RewardSum())

    return transformed_env


def make_parallel_env(env_cfg, obs_loc, obs_std, train=False):
    if train:
        num_envs = env_cfg.num_train_envs
    else:
        num_envs = env_cfg.num_eval_envs
    env = make_transformed_env(
        ParallelEnv(num_envs, EnvCreator(lambda: make_base_env(env_cfg))),
        env_cfg,
        obs_loc,
        obs_std,
        train,
    )
    return env


def make_env(env_cfg, obs_loc, obs_std, train=False):
    env = make_parallel_env(env_cfg, obs_loc, obs_std, train=train)
    return env


# ====================================================================
# Collector and replay buffer
# ---------------------------


def make_collector(cfg, policy):
    exclude_target_return = ExcludeTransform(
        "return_to_go",
        ("next", "return_to_go"),
        ("next", "action"),
        ("next", "observation"),
        "scale",
        "loc",
    )
    cat = CatFrames(in_keys=["action"], N=20, dim=-2, padding="zeros")
    transforms = Compose(
        exclude_target_return,
        cat,
    )
    collector_cfg = cfg.collector
    collector_class = SyncDataCollector
    collector = collector_class(
        make_env(cfg.env, train=True),
        policy,
        frames_per_batch=collector_cfg.frames_per_batch,
        total_frames=collector_cfg.total_frames,
        device=collector_cfg.collector_devices,
        max_frames_per_traj=collector_cfg.max_frames_per_traj,
        postproc=transforms,
    )
    return collector


def get_loc_std(env_name):
    import d4rl  # noqa
    import gym

    env = gym.make(env_name)
    data = env.get_dataset()
    loc = torch.from_numpy(data["observations"].mean(axis=0)).float()
    std = torch.from_numpy(data["observations"].std(axis=0)).float()
    return loc, std


def make_offline_replay_buffer(rb_cfg, reward_scaling):
    r2g = Reward2GoTransform(gamma=1.0, in_keys=["reward"], out_keys=["return_to_go"])
    reward_scale = RewardScaling(
        loc=0, scale=reward_scaling, in_keys="return_to_go", standard_normal=False
    )
    catframes = CatFrames(
        in_keys=["action", "observation", "return_to_go"],
        N=rb_cfg.stacked_frames,
        dim=-2,
        padding="zeros",
        as_inverse=True,
    )

    d2f = DoubleToFloat(
        in_keys=["observation", ("next", "observation")],
        in_keys_inv=[],
    )
    loc, std = get_loc_std(rb_cfg.dataset)
    obsnorm = ObservationNorm(
        loc=loc, scale=std, in_keys="observation", standard_normal=True
    )
    exclude = ExcludeTransform(
        "next_observations",
        "timeout",
        "terminal",
        "info",
        ("next", "timeout"),
        ("next", "terminal"),
        ("next", "observation"),
        ("next", "info"),
    )

    transforms = Compose(
        # inverse transforms are called reversed
        # therefore catframes before r2g
        catframes,
        r2g,
        reward_scale,
        d2f,
        exclude,
        obsnorm,
    )
    data = D4RLExperienceReplay(
        rb_cfg.dataset,
        split_trajs=False,
        batch_size=rb_cfg.batch_size,
        sampler=SamplerWithoutReplacement(drop_last=False),
        transform=transforms,
    )
    # TODO: add obsnorm here

    return data, loc, std


def make_online_replay_buffer(offline_buffer, rb_cfg, reward_scaling=0.001):
    r2g = Reward2GoTransform(gamma=1.0, out_keys=["return_to_go"])
    reward_scale = RewardScaling(
        loc=0, scale=reward_scaling, in_keys="return_to_go", standard_normal=False
    )
    catframes = CatFrames(
        in_keys=["return_to_go"],
        N=rb_cfg.stacked_frames,
        dim=-2,
        padding="zeros",
        as_inverse=True,
    )
    transforms = Compose(
        r2g,
        reward_scale,
        catframes,  # TODO: cat frames is not an inverse transform doesnt get triggered!
    )
    storage = LazyMemmapStorage(
        rb_cfg.capacity, rb_cfg.buffer_scratch_dir, device=rb_cfg.device
    )

    replay_buffer = TensorDictReplayBuffer(
        pin_memory=False,
        prefetch=rb_cfg.prefetch,
        storage=storage,
        batch_size=rb_cfg.batch_size,
    )
    # init buffer with offline data
    offline_data = offline_buffer.sample(100000)
    offline_data.del_("index")
    replay_buffer.extend(offline_data.clone().detach().to_tensordict())
    # add transforms after offline data extension to not trigger reward-to-go calculation
    replay_buffer.append_transform(transforms)

    return replay_buffer


# ====================================================================
# Model
# -----


def make_odt_model(cfg):
    env_cfg = cfg.env
    proof_environment = make_transformed_env(
        make_base_env(env_cfg), env_cfg, obs_loc=0, obs_std=1
    )

    action_spec = proof_environment.action_spec
    for key, value in proof_environment.observation_spec.items():
        if key == "observation":
            state_dim = value.shape[-1]
    in_keys = [
        "observation",
        "action",
        "return_to_go",
    ]

    actor_net = OnlineDTActor(
        state_dim=state_dim,
        action_dim=action_spec.shape[-1],
        transformer_config=cfg.transformer,
    )

    actor_module = TensorDictModule(
        actor_net,
        in_keys=in_keys,
        out_keys=[
            "loc",
            "scale",
        ],
    )
    dist_class = TanhNormal
    dist_kwargs = {
        "min": -1.0,
        "max": 1.0,
        "tanh_loc": False,
    }

    actor = ProbabilisticActor(
        spec=action_spec,
        in_keys=["loc", "scale"],
        out_keys=["action"],
        module=actor_module,
        distribution_class=dist_class,
        distribution_kwargs=dist_kwargs,
        default_interaction_mode="random",
        cache_dist=False,
        return_log_prob=False,
    )

    # init the lazy layers
    with torch.no_grad(), set_exploration_mode("random"):
        td = proof_environment.rollout(max_steps=100)
        td["action"] = td["next", "action"]
        actor(td)

    return actor


def make_dt_model(cfg):
    env_cfg = cfg.env
    proof_environment = make_transformed_env(
        make_base_env(env_cfg), env_cfg, obs_loc=0, obs_std=1
    )

    action_spec = proof_environment.action_spec
    for key, value in proof_environment.observation_spec.items():
        if key == "observation":
            state_dim = value.shape[-1]
    in_keys = [
        "observation",
        "action",
        "return_to_go",
    ]

    actor_net = DTActor(
        state_dim=state_dim,
        action_dim=action_spec.shape[-1],
        transformer_config=cfg.transformer,
    )

    actor_module = TensorDictModule(
        actor_net,
        in_keys=in_keys,
        out_keys=["param"],
    )
    dist_class = TanhDelta
    dist_kwargs = {
        "min": action_spec.space.minimum,
        "max": action_spec.space.maximum,
    }

    actor = ProbabilisticActor(
        spec=action_spec,
        in_keys=["param"],
        out_keys=["action"],
        module=actor_module,
        distribution_class=dist_class,
        distribution_kwargs=dist_kwargs,
        default_interaction_mode="random",
        cache_dist=False,
        return_log_prob=False,
    )

    # init the lazy layers
    with torch.no_grad(), set_exploration_mode("random"):
        td = proof_environment.rollout(max_steps=100)
        td["action"] = td["next", "action"]
        actor(td)

    return actor


# ====================================================================
# Online Decision Transformer Loss
# ---------


def make_odt_loss(loss_cfg, actor_network):
    loss = OnlineDTLoss(
        actor_network,
        alpha_init=loss_cfg.alpha_init,
        target_entropy=loss_cfg.target_entropy,
    )
    return loss


def make_dt_loss(loss_cfg, actor_network):
    loss = DTLoss(
        actor_network,
        loss_function=loss_cfg.loss_function,
    )
    return loss


def make_odt_optimizer(optim_cfg, actor_network, loss_module):
    dt_optimizer = Lamb(
        actor_network.parameters(),
        lr=optim_cfg.lr,
        weight_decay=optim_cfg.weight_decay,
        eps=1.0e-8,
    )
    scheduler = torch.optim.lr_scheduler.LambdaLR(
        dt_optimizer, lambda steps: min((steps + 1) / optim_cfg.warmup_steps, 1)
    )

    log_temp_optimizer = torch.optim.Adam(
        [loss_module.log_alpha],
        lr=1e-4,
        betas=[0.9, 0.999],
    )

    return dt_optimizer, log_temp_optimizer, scheduler


def make_dt_optimizer(optim_cfg, actor_network):
    dt_optimizer = torch.optim.Adam(
        actor_network.parameters(),
        lr=optim_cfg.lr,
        weight_decay=optim_cfg.weight_decay,
        eps=1.0e-8,
    )
    scheduler = torch.optim.lr_scheduler.LambdaLR(
        dt_optimizer, lambda steps: min((steps + 1) / optim_cfg.warmup_steps, 1)
    )

    return dt_optimizer, scheduler


# ====================================================================
# Logging and recording
# ---------------------


def make_logger(cfg):
    exp_name = generate_exp_name(cfg.logger.model_name, cfg.logger.exp_name)
    cfg.logger.exp_name = exp_name
    logger = get_logger(
        cfg.logger.backend,
        logger_name=cfg.logger.model_name,
        experiment_name=exp_name,
        wandb_kwargs={"config": cfg},
    )
    return logger