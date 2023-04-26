window.BENCHMARK_DATA = {
  "lastUpdate": 1682493305324,
  "repoUrl": "https://github.com/BY571/rl",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "albertbou92@users.noreply.github.com",
            "name": "Albert Bou",
            "username": "albertbou92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d3c5537e5ca81670576c6921aa09b0141a6815d",
          "message": "[BugFix] Advantage normalisation in ClipPPOLoss is done after computing gain1 (#1033)",
          "timestamp": "2023-04-11T08:37:19+01:00",
          "tree_id": "280c5e835e37888e1393cee2d346fa4749e73b2c",
          "url": "https://github.com/BY571/rl/commit/4d3c5537e5ca81670576c6921aa09b0141a6815d"
        },
        "date": 1681204449013,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07162519292993479,
            "unit": "iter/sec",
            "range": "stddev: 0.05018957944944853",
            "extra": "mean: 13.961567977600009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.13108531105073398,
            "unit": "iter/sec",
            "range": "stddev: 0.06214769273005741",
            "extra": "mean: 7.628619804800019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1323540911229236,
            "unit": "iter/sec",
            "range": "stddev: 0.033042837808002844",
            "extra": "mean: 7.5554899098000075 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.276024188577926,
            "unit": "iter/sec",
            "range": "stddev: 0.028748448286794608",
            "extra": "mean: 783.684203599978 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7257831276590218,
            "unit": "iter/sec",
            "range": "stddev: 0.024208005077171725",
            "extra": "mean: 1.377822054399985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.45887906547200397,
            "unit": "iter/sec",
            "range": "stddev: 0.027631235250164626",
            "extra": "mean: 2.1792234060000055 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5186371049771005,
            "unit": "iter/sec",
            "range": "stddev: 0.02446957270397723",
            "extra": "mean: 1.9281304603999616 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.425709337868284,
            "unit": "iter/sec",
            "range": "stddev: 0.0021361474707805982",
            "extra": "mean: 35.17942113999652 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.5590176223855772,
            "unit": "iter/sec",
            "range": "stddev: 0.00559179152716677",
            "extra": "mean: 641.429567980008 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4550.866352953266,
            "unit": "iter/sec",
            "range": "stddev: 0.000021413843845886345",
            "extra": "mean: 219.7383800012176 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 77.30816219979091,
            "unit": "iter/sec",
            "range": "stddev: 0.00011903929446151048",
            "extra": "mean: 12.935244759999023 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.4235919273913198,
            "unit": "iter/sec",
            "range": "stddev: 0.019241395450079114",
            "extra": "mean: 702.4484901600022 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.32026327807587,
            "unit": "iter/sec",
            "range": "stddev: 0.00021025392918799847",
            "extra": "mean: 30.94034201999648 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.4359021762597037,
            "unit": "iter/sec",
            "range": "stddev: 0.005940229133927106",
            "extra": "mean: 696.4262722999979 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.24168919217591212,
            "unit": "iter/sec",
            "range": "stddev: 0.02491825585626413",
            "extra": "mean: 4.137545378000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.23353395238927155,
            "unit": "iter/sec",
            "range": "stddev: 0.021237059006115267",
            "extra": "mean: 4.282032611400018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2324900081433546,
            "unit": "iter/sec",
            "range": "stddev: 0.01770925038008518",
            "extra": "mean: 4.301260118599998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.23939678643980855,
            "unit": "iter/sec",
            "range": "stddev: 0.05188897223983818",
            "extra": "mean: 4.177165512000011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2346448196105946,
            "unit": "iter/sec",
            "range": "stddev: 0.02723042216918548",
            "extra": "mean: 4.261760398799993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23430764661950185,
            "unit": "iter/sec",
            "range": "stddev: 0.020628531809556015",
            "extra": "mean: 4.267893150000032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2392294007841998,
            "unit": "iter/sec",
            "range": "stddev: 0.02852216367560693",
            "extra": "mean: 4.180088219599997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2351014572912112,
            "unit": "iter/sec",
            "range": "stddev: 0.011744546911587392",
            "extra": "mean: 4.253482779399951 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.23426989798755327,
            "unit": "iter/sec",
            "range": "stddev: 0.011321205255076315",
            "extra": "mean: 4.268580848800002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 38.17647909710648,
            "unit": "iter/sec",
            "range": "stddev: 0.00020558650431798956",
            "extra": "mean: 26.19413899999472 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 37.54907231940449,
            "unit": "iter/sec",
            "range": "stddev: 0.0001530463905356244",
            "extra": "mean: 26.63181639998129 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 37.383128098582525,
            "unit": "iter/sec",
            "range": "stddev: 0.0001999561416768411",
            "extra": "mean: 26.75003540000489 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 38.16671643102797,
            "unit": "iter/sec",
            "range": "stddev: 0.00020230308581354567",
            "extra": "mean: 26.20083919996432 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 37.54315209905797,
            "unit": "iter/sec",
            "range": "stddev: 0.00017422684996410247",
            "extra": "mean: 26.636015999974916 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 36.98015197586806,
            "unit": "iter/sec",
            "range": "stddev: 0.0006101995754674745",
            "extra": "mean: 27.041532999987794 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 38.13001499300371,
            "unit": "iter/sec",
            "range": "stddev: 0.00008219810800691429",
            "extra": "mean: 26.226058400015972 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 37.56264274977447,
            "unit": "iter/sec",
            "range": "stddev: 0.00013904610473937292",
            "extra": "mean: 26.622195000004467 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 37.279112127252425,
            "unit": "iter/sec",
            "range": "stddev: 0.00032239586093063923",
            "extra": "mean: 26.824673200007965 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.031039240547428584,
            "unit": "iter/sec",
            "range": "stddev: 0.09143531202055262",
            "extra": "mean: 32.2172831024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.031152287427237538,
            "unit": "iter/sec",
            "range": "stddev: 0.17952948476704633",
            "extra": "mean: 32.100371516399946 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03140851270196017,
            "unit": "iter/sec",
            "range": "stddev: 0.059029817203328776",
            "extra": "mean: 31.838502175799977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.0313305659236613,
            "unit": "iter/sec",
            "range": "stddev: 0.04085773590094727",
            "extra": "mean: 31.917712640000083 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.031275940903610064,
            "unit": "iter/sec",
            "range": "stddev: 0.1417340199341518",
            "extra": "mean: 31.973458547000064 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03131503140706784,
            "unit": "iter/sec",
            "range": "stddev: 0.08561894266724317",
            "extra": "mean: 31.933546130000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.031273310482380696,
            "unit": "iter/sec",
            "range": "stddev: 0.06233290726112877",
            "extra": "mean: 31.976147858199965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03118466917504366,
            "unit": "iter/sec",
            "range": "stddev: 0.024814386665830662",
            "extra": "mean: 32.067038915400005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.031229875580993532,
            "unit": "iter/sec",
            "range": "stddev: 0.10136026693105733",
            "extra": "mean: 32.0206206844 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6920823a65655c57cd177c60e90b62d9bf97651c",
          "message": "[Refactor] Import envpool locally to avoid importing gym at root level (#1041)",
          "timestamp": "2023-04-12T10:16:28+01:00",
          "tree_id": "36c4e43e63dd981d3a97d71f3cd20d90d7cf6759",
          "url": "https://github.com/BY571/rl/commit/6920823a65655c57cd177c60e90b62d9bf97651c"
        },
        "date": 1681300021344,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.039523604277160375,
            "unit": "iter/sec",
            "range": "stddev: 0.1281547691729552",
            "extra": "mean: 25.301336208799988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.07162472337281604,
            "unit": "iter/sec",
            "range": "stddev: 0.28555953118972016",
            "extra": "mean: 13.961659506800038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.0736265589320594,
            "unit": "iter/sec",
            "range": "stddev: 0.14424331302225885",
            "extra": "mean: 13.582055368400052 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.694132864783493,
            "unit": "iter/sec",
            "range": "stddev: 0.04434601677165681",
            "extra": "mean: 1.4406463816000268 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.39403621004279904,
            "unit": "iter/sec",
            "range": "stddev: 0.07363422769476662",
            "extra": "mean: 2.53783782939995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.26067948022932996,
            "unit": "iter/sec",
            "range": "stddev: 0.07088906861898833",
            "extra": "mean: 3.836128563400007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.28724989887168023,
            "unit": "iter/sec",
            "range": "stddev: 0.07100816303980423",
            "extra": "mean: 3.481289302199957 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 17.023680635013033,
            "unit": "iter/sec",
            "range": "stddev: 0.006254279894743981",
            "extra": "mean: 58.741703479990974 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.0869284641222103,
            "unit": "iter/sec",
            "range": "stddev: 0.030821416314723692",
            "extra": "mean: 920.0237485799835 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2250.407222532378,
            "unit": "iter/sec",
            "range": "stddev: 0.00018829748586900543",
            "extra": "mean: 444.36401998154906 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 49.11668075082903,
            "unit": "iter/sec",
            "range": "stddev: 0.003098639886245637",
            "extra": "mean: 20.35968197999864 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 0.9990145330231314,
            "unit": "iter/sec",
            "range": "stddev: 0.039929274931298234",
            "extra": "mean: 1.0009864390800067 sec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 19.922323458504085,
            "unit": "iter/sec",
            "range": "stddev: 0.003965898322924639",
            "extra": "mean: 50.19494850000228 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.0067195094544081,
            "unit": "iter/sec",
            "range": "stddev: 0.022575142345444325",
            "extra": "mean: 993.3253409799818 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.16062050344938392,
            "unit": "iter/sec",
            "range": "stddev: 0.13140637614413506",
            "extra": "mean: 6.225855221000029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.15736413318961012,
            "unit": "iter/sec",
            "range": "stddev: 0.08406564867434933",
            "extra": "mean: 6.3546881982000745 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.15879593750735774,
            "unit": "iter/sec",
            "range": "stddev: 0.04600948136223615",
            "extra": "mean: 6.297390321800049 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.16061185170222944,
            "unit": "iter/sec",
            "range": "stddev: 0.15016403579471443",
            "extra": "mean: 6.226190591800014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.15883097777234073,
            "unit": "iter/sec",
            "range": "stddev: 0.06803440079180133",
            "extra": "mean: 6.2960010322000475 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.15479911232334953,
            "unit": "iter/sec",
            "range": "stddev: 0.06607459814149853",
            "extra": "mean: 6.459985364200065 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1566036923657403,
            "unit": "iter/sec",
            "range": "stddev: 0.10603912615784496",
            "extra": "mean: 6.385545480399969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.15534666514728662,
            "unit": "iter/sec",
            "range": "stddev: 0.09471926299282969",
            "extra": "mean: 6.437215752600059 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1589404249186318,
            "unit": "iter/sec",
            "range": "stddev: 0.15194096090869424",
            "extra": "mean: 6.291665575399975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 26.366840812072596,
            "unit": "iter/sec",
            "range": "stddev: 0.003328959202728282",
            "extra": "mean: 37.92642460002753 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 25.10683914115349,
            "unit": "iter/sec",
            "range": "stddev: 0.0018929105764041462",
            "extra": "mean: 39.829784799985646 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 26.229780917675185,
            "unit": "iter/sec",
            "range": "stddev: 0.001471713649486228",
            "extra": "mean: 38.12460359995384 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 27.490811581026556,
            "unit": "iter/sec",
            "range": "stddev: 0.0007485262504606351",
            "extra": "mean: 36.375790400097685 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 27.0578533811963,
            "unit": "iter/sec",
            "range": "stddev: 0.0009221908629705232",
            "extra": "mean: 36.95784680003271 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 25.903656839929628,
            "unit": "iter/sec",
            "range": "stddev: 0.0016665295450360475",
            "extra": "mean: 38.604588000043805 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 27.21507866017797,
            "unit": "iter/sec",
            "range": "stddev: 0.0017125838606788463",
            "extra": "mean: 36.74433620003583 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 26.20042514067006,
            "unit": "iter/sec",
            "range": "stddev: 0.0011835862763684953",
            "extra": "mean: 38.16731960000652 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 26.092235321269495,
            "unit": "iter/sec",
            "range": "stddev: 0.0012668341635078742",
            "extra": "mean: 38.32557800001268 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.035614861325889674,
            "unit": "iter/sec",
            "range": "stddev: 0.23633972201102543",
            "extra": "mean: 28.07816632639997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.03601974115321086,
            "unit": "iter/sec",
            "range": "stddev: 0.22369403450180547",
            "extra": "mean: 27.762553754800045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03571162204587236,
            "unit": "iter/sec",
            "range": "stddev: 0.23535881698195782",
            "extra": "mean: 28.002088471799972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.035833655992627333,
            "unit": "iter/sec",
            "range": "stddev: 0.08539069575432962",
            "extra": "mean: 27.906725459599965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.035223570885900966,
            "unit": "iter/sec",
            "range": "stddev: 0.3100499868519118",
            "extra": "mean: 28.390080132399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03562146855459817,
            "unit": "iter/sec",
            "range": "stddev: 0.3627952214195849",
            "extra": "mean: 28.072958262999965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.03591610617641352,
            "unit": "iter/sec",
            "range": "stddev: 0.5220241846440106",
            "extra": "mean: 27.842661871200015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.036278513743643374,
            "unit": "iter/sec",
            "range": "stddev: 0.27023702881779044",
            "extra": "mean: 27.564525026200045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03552573370582399,
            "unit": "iter/sec",
            "range": "stddev: 0.405297011720103",
            "extra": "mean: 28.148609351200047 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d8d1087948833a0d1141ae8aac62c17b5be2c36",
          "message": "[Doc] Minor changes to contributing.md (#1054)",
          "timestamp": "2023-04-13T14:27:58+01:00",
          "tree_id": "3977e50c9e59d51aca3bbc909795a41209e56c5c",
          "url": "https://github.com/BY571/rl/commit/8d8d1087948833a0d1141ae8aac62c17b5be2c36"
        },
        "date": 1681395115349,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.046378555794842534,
            "unit": "iter/sec",
            "range": "stddev: 0.3196168034706022",
            "extra": "mean: 21.561689079400004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.08763849403197467,
            "unit": "iter/sec",
            "range": "stddev: 0.08961503318712771",
            "extra": "mean: 11.41051099799995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.08865969543525865,
            "unit": "iter/sec",
            "range": "stddev: 0.09979188739683882",
            "extra": "mean: 11.27908228299998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8163283379964824,
            "unit": "iter/sec",
            "range": "stddev: 0.04404678748706036",
            "extra": "mean: 1.2249972878000335 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4684211736351147,
            "unit": "iter/sec",
            "range": "stddev: 0.026869885462376154",
            "extra": "mean: 2.134830909200036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.30589486071860156,
            "unit": "iter/sec",
            "range": "stddev: 0.07348897959924852",
            "extra": "mean: 3.2690970932000027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.36874573913930025,
            "unit": "iter/sec",
            "range": "stddev: 0.04914213229956024",
            "extra": "mean: 2.7118957423999746 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 17.048819135723367,
            "unit": "iter/sec",
            "range": "stddev: 0.004660666688855394",
            "extra": "mean: 58.655088779999005 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.263535299472993,
            "unit": "iter/sec",
            "range": "stddev: 0.015418283551420655",
            "extra": "mean: 791.4302041399947 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3011.110032480327,
            "unit": "iter/sec",
            "range": "stddev: 0.00007527432621671704",
            "extra": "mean: 332.10343999826364 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 56.15967447141506,
            "unit": "iter/sec",
            "range": "stddev: 0.0019300324567440013",
            "extra": "mean: 17.806371019992184 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.146580278580902,
            "unit": "iter/sec",
            "range": "stddev: 0.018992620668274538",
            "extra": "mean: 872.1587303399974 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 20.90507971498816,
            "unit": "iter/sec",
            "range": "stddev: 0.002172200678360289",
            "extra": "mean: 47.835263660010696 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.158225835735781,
            "unit": "iter/sec",
            "range": "stddev: 0.01730077570313942",
            "extra": "mean: 863.3894782399966 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2001322739121196,
            "unit": "iter/sec",
            "range": "stddev: 0.05187231509870855",
            "extra": "mean: 4.996695337799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.19476255173672385,
            "unit": "iter/sec",
            "range": "stddev: 0.02591239322650571",
            "extra": "mean: 5.134457271600036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.19331904028699706,
            "unit": "iter/sec",
            "range": "stddev: 0.11601715456434533",
            "extra": "mean: 5.172796215599988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.20111926694123286,
            "unit": "iter/sec",
            "range": "stddev: 0.0536610584622884",
            "extra": "mean: 4.972174049800015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19273891384774483,
            "unit": "iter/sec",
            "range": "stddev: 0.05298947137415321",
            "extra": "mean: 5.1883658574000036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.193615661336586,
            "unit": "iter/sec",
            "range": "stddev: 0.1275545970846881",
            "extra": "mean: 5.164871442200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.20351509590992709,
            "unit": "iter/sec",
            "range": "stddev: 0.09033634665492356",
            "extra": "mean: 4.913640413400026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.19410836915126065,
            "unit": "iter/sec",
            "range": "stddev: 0.02526230949242261",
            "extra": "mean: 5.151761381400002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.19145753949967748,
            "unit": "iter/sec",
            "range": "stddev: 0.09831493704522401",
            "extra": "mean: 5.22309020900002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.038589303611765,
            "unit": "iter/sec",
            "range": "stddev: 0.0007052927146999573",
            "extra": "mean: 29.37842080000337 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 32.15676324323774,
            "unit": "iter/sec",
            "range": "stddev: 0.0011188104258926653",
            "extra": "mean: 31.097657200007234 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 31.168783889499107,
            "unit": "iter/sec",
            "range": "stddev: 0.0015294604719056865",
            "extra": "mean: 32.08338199992795 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 34.23218774154467,
            "unit": "iter/sec",
            "range": "stddev: 0.0014870821279029727",
            "extra": "mean: 29.212272599988864 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 31.236623306459673,
            "unit": "iter/sec",
            "range": "stddev: 0.0030318647495701646",
            "extra": "mean: 32.013703600068766 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 31.15856538464137,
            "unit": "iter/sec",
            "range": "stddev: 0.0009268308697234965",
            "extra": "mean: 32.09390379997785 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 33.70720602218057,
            "unit": "iter/sec",
            "range": "stddev: 0.0012081990817927122",
            "extra": "mean: 29.667246800045177 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 31.910551405673818,
            "unit": "iter/sec",
            "range": "stddev: 0.0009379449571455605",
            "extra": "mean: 31.33759700003793 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 32.25601178520253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005015220374998471",
            "extra": "mean: 31.00197279995882 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04028218282680619,
            "unit": "iter/sec",
            "range": "stddev: 0.42545117886026523",
            "extra": "mean: 24.824871191799957 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04124760183000847,
            "unit": "iter/sec",
            "range": "stddev: 0.24443079775438553",
            "extra": "mean: 24.243833717200005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.04176962935578006,
            "unit": "iter/sec",
            "range": "stddev: 0.06350206086245022",
            "extra": "mean: 23.940839682400018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04150676047213225,
            "unit": "iter/sec",
            "range": "stddev: 0.11980264366420668",
            "extra": "mean: 24.092460809400016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04124804010313831,
            "unit": "iter/sec",
            "range": "stddev: 0.16634257684955553",
            "extra": "mean: 24.243576119000046 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04125202108704174,
            "unit": "iter/sec",
            "range": "stddev: 0.14764096653841444",
            "extra": "mean: 24.241236517599965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04125545532775622,
            "unit": "iter/sec",
            "range": "stddev: 0.17285025794185457",
            "extra": "mean: 24.239218596799994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.041349602977396226,
            "unit": "iter/sec",
            "range": "stddev: 0.17571845696518057",
            "extra": "mean: 24.184029059399926 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.041309381063217805,
            "unit": "iter/sec",
            "range": "stddev: 0.19957946148195863",
            "extra": "mean: 24.2075764453999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "11810424@mail.sustech.edu.cn",
            "name": "btx0424",
            "username": "btx0424"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e21e6ffbd2a4f5e079e3df7e0a228e9c85aeda5",
          "message": "[BugFix] CompositeSpec nested key deletion (#1059)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-13T21:02:36+01:00",
          "tree_id": "7b9b9296ea74d6f34872563fecf532f95048061e",
          "url": "https://github.com/BY571/rl/commit/7e21e6ffbd2a4f5e079e3df7e0a228e9c85aeda5"
        },
        "date": 1681460837028,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07091872014735963,
            "unit": "iter/sec",
            "range": "stddev: 0.09860128534306833",
            "extra": "mean: 14.10064927740001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.13051276635511555,
            "unit": "iter/sec",
            "range": "stddev: 0.03860912200488146",
            "extra": "mean: 7.662085694200016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.13133102947780018,
            "unit": "iter/sec",
            "range": "stddev: 0.018527529309929503",
            "extra": "mean: 7.614346769200017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.2668071658171451,
            "unit": "iter/sec",
            "range": "stddev: 0.030271399690129944",
            "extra": "mean: 789.3861252000079 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7325975867783894,
            "unit": "iter/sec",
            "range": "stddev: 0.001505301166139092",
            "extra": "mean: 1.3650058614000045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4583625275389645,
            "unit": "iter/sec",
            "range": "stddev: 0.003427498187030463",
            "extra": "mean: 2.181679216599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4986566266274472,
            "unit": "iter/sec",
            "range": "stddev: 0.09724029082572716",
            "extra": "mean: 2.0053879695999965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.599356709410497,
            "unit": "iter/sec",
            "range": "stddev: 0.0009616501100062955",
            "extra": "mean: 34.965821439996034 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.535082241666986,
            "unit": "iter/sec",
            "range": "stddev: 0.004071411921392627",
            "extra": "mean: 651.4308959199957 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4506.660799524439,
            "unit": "iter/sec",
            "range": "stddev: 0.000019113749560056854",
            "extra": "mean: 221.8937800034837 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 77.45272427054094,
            "unit": "iter/sec",
            "range": "stddev: 0.00009665404954662287",
            "extra": "mean: 12.91110170001275 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.414954439513125,
            "unit": "iter/sec",
            "range": "stddev: 0.00880867858078025",
            "extra": "mean: 706.7365365799992 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.916170304570457,
            "unit": "iter/sec",
            "range": "stddev: 0.00016677473509156394",
            "extra": "mean: 31.33207996000692 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.4134753359852197,
            "unit": "iter/sec",
            "range": "stddev: 0.004056149177404266",
            "extra": "mean: 707.4760871600074 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21038776725954297,
            "unit": "iter/sec",
            "range": "stddev: 1.1506401717130719",
            "extra": "mean: 4.753128059799974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.23212098766587225,
            "unit": "iter/sec",
            "range": "stddev: 0.0430158379100204",
            "extra": "mean: 4.308098160600002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.231067097804419,
            "unit": "iter/sec",
            "range": "stddev: 0.019429540776580496",
            "extra": "mean: 4.327747262599996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.23500743733841478,
            "unit": "iter/sec",
            "range": "stddev: 0.06454909039131275",
            "extra": "mean: 4.255184479800027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23065926163481154,
            "unit": "iter/sec",
            "range": "stddev: 0.01778702749328493",
            "extra": "mean: 4.335399293800037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.22886829281272617,
            "unit": "iter/sec",
            "range": "stddev: 0.08780784933669226",
            "extra": "mean: 4.369325203199992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2352603218763048,
            "unit": "iter/sec",
            "range": "stddev: 0.0333571597636047",
            "extra": "mean: 4.250610523800015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.22975566426781582,
            "unit": "iter/sec",
            "range": "stddev: 0.025420064153941487",
            "extra": "mean: 4.352449821800019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.22834690366777297,
            "unit": "iter/sec",
            "range": "stddev: 0.08602403087181344",
            "extra": "mean: 4.379301772600002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 37.904173624794446,
            "unit": "iter/sec",
            "range": "stddev: 0.00016285067697796734",
            "extra": "mean: 26.38231899998118 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 37.22692357732373,
            "unit": "iter/sec",
            "range": "stddev: 0.000108627837141179",
            "extra": "mean: 26.862278799990236 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 37.014254352203395,
            "unit": "iter/sec",
            "range": "stddev: 0.00024044460948878854",
            "extra": "mean: 27.016618800007564 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 37.87090126358485,
            "unit": "iter/sec",
            "range": "stddev: 0.00035797508854249475",
            "extra": "mean: 26.40549780001038 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 36.80869389546362,
            "unit": "iter/sec",
            "range": "stddev: 0.00043089887403359656",
            "extra": "mean: 27.167494800005443 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 36.9235111891114,
            "unit": "iter/sec",
            "range": "stddev: 0.000161378098017005",
            "extra": "mean: 27.083014799927696 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 37.93512210993023,
            "unit": "iter/sec",
            "range": "stddev: 0.00024927676722284574",
            "extra": "mean: 26.360795599975972 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 36.85680072921076,
            "unit": "iter/sec",
            "range": "stddev: 0.0002794933253613334",
            "extra": "mean: 27.132034799956273 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 36.66015113135689,
            "unit": "iter/sec",
            "range": "stddev: 0.0003270355673870264",
            "extra": "mean: 27.27757439997731 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06074407189062261,
            "unit": "iter/sec",
            "range": "stddev: 0.09202481327249325",
            "extra": "mean: 16.462511795399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06110984136960501,
            "unit": "iter/sec",
            "range": "stddev: 0.03383658006259979",
            "extra": "mean: 16.36397636759998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.061188455602477786,
            "unit": "iter/sec",
            "range": "stddev: 0.051149347381262394",
            "extra": "mean: 16.34295211660001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.061251381949407026,
            "unit": "iter/sec",
            "range": "stddev: 0.041051957160107046",
            "extra": "mean: 16.326162254200064 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.061247209333975795,
            "unit": "iter/sec",
            "range": "stddev: 0.0973656410511553",
            "extra": "mean: 16.327274513800056 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.061582878011489414,
            "unit": "iter/sec",
            "range": "stddev: 0.05460951280283032",
            "extra": "mean: 16.238279734400066 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06144462279930349,
            "unit": "iter/sec",
            "range": "stddev: 0.07306238214268615",
            "extra": "mean: 16.274817135199918 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06123754765991896,
            "unit": "iter/sec",
            "range": "stddev: 0.03453919986686929",
            "extra": "mean: 16.329850528199994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.061206332509684436,
            "unit": "iter/sec",
            "range": "stddev: 0.015120031141979766",
            "extra": "mean: 16.338178730800017 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Sebastian.dittert@gmx.de",
            "name": "Sebastian Dittert",
            "username": "BY571"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "271fde772dbfd1b98bca4dd2d31759bfdddcf665",
          "message": "[Feature] Reward2go Transform (#1038)\n\nCo-authored-by: Vincent Moens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-17T14:06:46+01:00",
          "tree_id": "38ce53e0f1c88a343478550678b2b96c6adc4862",
          "url": "https://github.com/BY571/rl/commit/271fde772dbfd1b98bca4dd2d31759bfdddcf665"
        },
        "date": 1681821497070,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05873901311375765,
            "unit": "iter/sec",
            "range": "stddev: 0.04178075161193393",
            "extra": "mean: 17.02446035419998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10832904744893991,
            "unit": "iter/sec",
            "range": "stddev: 0.22594032430033592",
            "extra": "mean: 9.231134433 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10842198770425246,
            "unit": "iter/sec",
            "range": "stddev: 0.15445265281308984",
            "extra": "mean: 9.223221425599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0293382197615983,
            "unit": "iter/sec",
            "range": "stddev: 0.0415471908089193",
            "extra": "mean: 971.4979788000164 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5985022241959752,
            "unit": "iter/sec",
            "range": "stddev: 0.03576581399253132",
            "extra": "mean: 1.6708375668000144 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4074621182635711,
            "unit": "iter/sec",
            "range": "stddev: 0.009698933228181194",
            "extra": "mean: 2.4542158771999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.47042161992583914,
            "unit": "iter/sec",
            "range": "stddev: 0.017401618763086376",
            "extra": "mean: 2.125752638999984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.342967667351083,
            "unit": "iter/sec",
            "range": "stddev: 0.0011147712662529744",
            "extra": "mean: 35.282120479992045 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.4060052196627306,
            "unit": "iter/sec",
            "range": "stddev: 0.013599930777683678",
            "extra": "mean: 711.2349129399945 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3494.508449889192,
            "unit": "iter/sec",
            "range": "stddev: 0.000034580645488624754",
            "extra": "mean: 286.16327999770874 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.95896809942565,
            "unit": "iter/sec",
            "range": "stddev: 0.00017811107027313071",
            "extra": "mean: 12.993937220001044 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2828988975305333,
            "unit": "iter/sec",
            "range": "stddev: 0.016894801236156384",
            "extra": "mean: 779.4846514599953 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.456677389218623,
            "unit": "iter/sec",
            "range": "stddev: 0.00023684919469385202",
            "extra": "mean: 31.78975285999968 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2938606985868537,
            "unit": "iter/sec",
            "range": "stddev: 0.002569578856471917",
            "extra": "mean: 772.8807290399914 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.22096452051384075,
            "unit": "iter/sec",
            "range": "stddev: 0.030128495000305105",
            "extra": "mean: 4.525613422799983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21598465085760957,
            "unit": "iter/sec",
            "range": "stddev: 0.018262420724424754",
            "extra": "mean: 4.629958638400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21649770819349368,
            "unit": "iter/sec",
            "range": "stddev: 0.00992469878318075",
            "extra": "mean: 4.6189865396000185 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.22167953907485438,
            "unit": "iter/sec",
            "range": "stddev: 0.03036206480837698",
            "extra": "mean: 4.511016236199998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2165730932730086,
            "unit": "iter/sec",
            "range": "stddev: 0.024921427207150338",
            "extra": "mean: 4.617378756000017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21494152227220073,
            "unit": "iter/sec",
            "range": "stddev: 0.021464768790384482",
            "extra": "mean: 4.65242820200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22007856824165076,
            "unit": "iter/sec",
            "range": "stddev: 0.028270008641360842",
            "extra": "mean: 4.543831814200007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.214694857963696,
            "unit": "iter/sec",
            "range": "stddev: 0.02962790204803831",
            "extra": "mean: 4.65777340679997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21581820553215206,
            "unit": "iter/sec",
            "range": "stddev: 0.024013235097260624",
            "extra": "mean: 4.633529398200016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 36.04978431952099,
            "unit": "iter/sec",
            "range": "stddev: 0.00029678006022419815",
            "extra": "mean: 27.739417000020694 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 35.029302712317104,
            "unit": "iter/sec",
            "range": "stddev: 0.00021485092238602348",
            "extra": "mean: 28.547527999990052 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 34.27759891738454,
            "unit": "iter/sec",
            "range": "stddev: 0.0012762385538312242",
            "extra": "mean: 29.17357199989965 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 36.012473107275106,
            "unit": "iter/sec",
            "range": "stddev: 0.00021242852152482316",
            "extra": "mean: 27.768156800038923 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.81770518472675,
            "unit": "iter/sec",
            "range": "stddev: 0.0004335778420145758",
            "extra": "mean: 28.721019799968417 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 35.3191574338485,
            "unit": "iter/sec",
            "range": "stddev: 0.00028517508839418935",
            "extra": "mean: 28.31324619996849 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 36.197824528104476,
            "unit": "iter/sec",
            "range": "stddev: 0.00045348964044454766",
            "extra": "mean: 27.625969600012468 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 35.23083312317817,
            "unit": "iter/sec",
            "range": "stddev: 0.00018515708621235518",
            "extra": "mean: 28.384228000049916 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 34.96409044550376,
            "unit": "iter/sec",
            "range": "stddev: 0.0003555047304262148",
            "extra": "mean: 28.600772600066193 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.054961214843169015,
            "unit": "iter/sec",
            "range": "stddev: 0.04049724223254214",
            "extra": "mean: 18.194648769199965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.0548552156522605,
            "unit": "iter/sec",
            "range": "stddev: 0.03431751459227672",
            "extra": "mean: 18.22980710419997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05524174762673464,
            "unit": "iter/sec",
            "range": "stddev: 0.0452351259943202",
            "extra": "mean: 18.10225134000002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05552203254726109,
            "unit": "iter/sec",
            "range": "stddev: 0.080399060900257",
            "extra": "mean: 18.010868012599985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.0554479957147739,
            "unit": "iter/sec",
            "range": "stddev: 0.08026449174184447",
            "extra": "mean: 18.03491699039996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.0558575922330314,
            "unit": "iter/sec",
            "range": "stddev: 0.011003381122362148",
            "extra": "mean: 17.902669270600065 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.055959426935171176,
            "unit": "iter/sec",
            "range": "stddev: 0.027940395622707396",
            "extra": "mean: 17.870090077199983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05584495938198799,
            "unit": "iter/sec",
            "range": "stddev: 0.0275693887056595",
            "extra": "mean: 17.90671908559998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05575549299838877,
            "unit": "iter/sec",
            "range": "stddev: 0.07762511783989369",
            "extra": "mean: 17.9354525666 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3390db099131d2737208c426601a333fafe26d57",
          "message": "[Refactor] Deprecate interaction_mode (#1067)",
          "timestamp": "2023-04-18T21:42:48+01:00",
          "tree_id": "b788839f27a4dfb7d7177187c47a397e1ff883de",
          "url": "https://github.com/BY571/rl/commit/3390db099131d2737208c426601a333fafe26d57"
        },
        "date": 1681892396142,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05932717456741276,
            "unit": "iter/sec",
            "range": "stddev: 0.04430842776884698",
            "extra": "mean: 16.855682194400003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11028448553064996,
            "unit": "iter/sec",
            "range": "stddev: 0.05200458526822177",
            "extra": "mean: 9.067458538599999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11070968233958457,
            "unit": "iter/sec",
            "range": "stddev: 0.04673023715027637",
            "extra": "mean: 9.032633631199996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0453756177612394,
            "unit": "iter/sec",
            "range": "stddev: 0.03890781690360344",
            "extra": "mean: 956.5939582000055 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.59878568851518,
            "unit": "iter/sec",
            "range": "stddev: 0.03385537494505163",
            "extra": "mean: 1.6700465946000123 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.40159838576764234,
            "unit": "iter/sec",
            "range": "stddev: 0.03936059539958208",
            "extra": "mean: 2.4900498493999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.46548829649361034,
            "unit": "iter/sec",
            "range": "stddev: 0.03538397609086585",
            "extra": "mean: 2.14828172379996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.751555533375573,
            "unit": "iter/sec",
            "range": "stddev: 0.00028109668437950857",
            "extra": "mean: 36.03401614000859 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.4184847742294109,
            "unit": "iter/sec",
            "range": "stddev: 0.004650932925425616",
            "extra": "mean: 704.9776057999975 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3429.6032100723296,
            "unit": "iter/sec",
            "range": "stddev: 0.000029329062417399615",
            "extra": "mean: 291.5789199937535 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.55159657800739,
            "unit": "iter/sec",
            "range": "stddev: 0.00012091114026317821",
            "extra": "mean: 13.235987660002593 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.301284610397045,
            "unit": "iter/sec",
            "range": "stddev: 0.0032093737861219264",
            "extra": "mean: 768.4713951199979 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 30.79731587447374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125858395816949",
            "extra": "mean: 32.47036215999742 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.3021283324470188,
            "unit": "iter/sec",
            "range": "stddev: 0.003242553441649857",
            "extra": "mean: 767.973459359996 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.22176472978504252,
            "unit": "iter/sec",
            "range": "stddev: 0.03312995933748823",
            "extra": "mean: 4.509283333600001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2152429125523312,
            "unit": "iter/sec",
            "range": "stddev: 0.03247680049808985",
            "extra": "mean: 4.6459137173999805 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21672486992641263,
            "unit": "iter/sec",
            "range": "stddev: 0.03247546406831229",
            "extra": "mean: 4.614145115599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.22401447675598976,
            "unit": "iter/sec",
            "range": "stddev: 0.03460645038622859",
            "extra": "mean: 4.463997213400011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2157249362989004,
            "unit": "iter/sec",
            "range": "stddev: 0.025459209307241604",
            "extra": "mean: 4.6355327165999825 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2171911336428911,
            "unit": "iter/sec",
            "range": "stddev: 0.03744175060205211",
            "extra": "mean: 4.604239515800009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.22358237813706267,
            "unit": "iter/sec",
            "range": "stddev: 0.02641574680634041",
            "extra": "mean: 4.4726244005999884 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21754832204366212,
            "unit": "iter/sec",
            "range": "stddev: 0.013705116840205717",
            "extra": "mean: 4.596679903599989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2162031712507876,
            "unit": "iter/sec",
            "range": "stddev: 0.02624363122079766",
            "extra": "mean: 4.625279056799945 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 35.8776963200795,
            "unit": "iter/sec",
            "range": "stddev: 0.0007884173807177774",
            "extra": "mean: 27.872469600015393 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 35.3092126262487,
            "unit": "iter/sec",
            "range": "stddev: 0.0004707057065226991",
            "extra": "mean: 28.321220599991648 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 35.108140163559284,
            "unit": "iter/sec",
            "range": "stddev: 0.00025297767061951314",
            "extra": "mean: 28.483422799990876 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 35.888850621867,
            "unit": "iter/sec",
            "range": "stddev: 0.00029352709855612726",
            "extra": "mean: 27.863806799950908 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 35.137131968889236,
            "unit": "iter/sec",
            "range": "stddev: 0.0001444058742280428",
            "extra": "mean: 28.459920999966926 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 34.8996907851936,
            "unit": "iter/sec",
            "range": "stddev: 0.0001885150514688726",
            "extra": "mean: 28.65354900004604 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 36.090674586214604,
            "unit": "iter/sec",
            "range": "stddev: 0.00033884883101523877",
            "extra": "mean: 27.707988599968303 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 35.292385911984375,
            "unit": "iter/sec",
            "range": "stddev: 0.00024379784329357302",
            "extra": "mean: 28.33472359998268 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 34.995517039304524,
            "unit": "iter/sec",
            "range": "stddev: 0.0003180244989054376",
            "extra": "mean: 28.575088599973242 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.055603962493302135,
            "unit": "iter/sec",
            "range": "stddev: 0.09445867858953741",
            "extra": "mean: 17.984329806000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.055972326629658974,
            "unit": "iter/sec",
            "range": "stddev: 0.03445663538961316",
            "extra": "mean: 17.865971636600033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05634918119070123,
            "unit": "iter/sec",
            "range": "stddev: 0.03212426856083599",
            "extra": "mean: 17.746486796599992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05747527447056648,
            "unit": "iter/sec",
            "range": "stddev: 0.04328066221812429",
            "extra": "mean: 17.398785986000075 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05724482944715124,
            "unit": "iter/sec",
            "range": "stddev: 0.05991766549277621",
            "extra": "mean: 17.468826611199983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05731020403309497,
            "unit": "iter/sec",
            "range": "stddev: 0.037622709759365984",
            "extra": "mean: 17.448899665799992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05750033312058976,
            "unit": "iter/sec",
            "range": "stddev: 0.026217810507424232",
            "extra": "mean: 17.39120359360004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05738694648327301,
            "unit": "iter/sec",
            "range": "stddev: 0.04448824997985774",
            "extra": "mean: 17.42556559079994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05723114514303998,
            "unit": "iter/sec",
            "range": "stddev: 0.04106573680628457",
            "extra": "mean: 17.473003510600073 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "albertbou92@users.noreply.github.com",
            "name": "Albert Bou",
            "username": "albertbou92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03616918fbdaa56977900b92914aa4bcee09e4c7",
          "message": "[Example] PPO simplified example (#1004)",
          "timestamp": "2023-04-19T20:08:45+01:00",
          "tree_id": "9b080f28075ba96d28420861ca3636101c11eb6a",
          "url": "https://github.com/BY571/rl/commit/03616918fbdaa56977900b92914aa4bcee09e4c7"
        },
        "date": 1681978500364,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.0518005025382138,
            "unit": "iter/sec",
            "range": "stddev: 0.19928266240246023",
            "extra": "mean: 19.304832018999992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09644882930052028,
            "unit": "iter/sec",
            "range": "stddev: 0.09168851704227189",
            "extra": "mean: 10.368192203599984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09653960979615307,
            "unit": "iter/sec",
            "range": "stddev: 0.10951035995351313",
            "extra": "mean: 10.358442530599996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9104852850240971,
            "unit": "iter/sec",
            "range": "stddev: 0.04087913500405862",
            "extra": "mean: 1.0983153889999813 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5230445906426335,
            "unit": "iter/sec",
            "range": "stddev: 0.036924049132257226",
            "extra": "mean: 1.9118828831999963 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3502647532179557,
            "unit": "iter/sec",
            "range": "stddev: 0.04801698476279635",
            "extra": "mean: 2.8549832400000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3977596392291604,
            "unit": "iter/sec",
            "range": "stddev: 0.0770930586806607",
            "extra": "mean: 2.514081121799973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 24.63398535116029,
            "unit": "iter/sec",
            "range": "stddev: 0.00232195039433939",
            "extra": "mean: 40.5943246999982 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2139082764749858,
            "unit": "iter/sec",
            "range": "stddev: 0.005453908237879157",
            "extra": "mean: 823.7854699399986 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3305.270485156606,
            "unit": "iter/sec",
            "range": "stddev: 0.00006821877895067245",
            "extra": "mean: 302.54710000008345 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 67.2925851481988,
            "unit": "iter/sec",
            "range": "stddev: 0.00021788389582273746",
            "extra": "mean: 14.860478280002098 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1179264564182196,
            "unit": "iter/sec",
            "range": "stddev: 0.014435143541998229",
            "extra": "mean: 894.5132251400059 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 28.345166197760268,
            "unit": "iter/sec",
            "range": "stddev: 0.0006519611574712465",
            "extra": "mean: 35.2793838999969 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1280346162626698,
            "unit": "iter/sec",
            "range": "stddev: 0.006239156985040993",
            "extra": "mean: 886.4976177000085 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.1912527440253295,
            "unit": "iter/sec",
            "range": "stddev: 0.05486343477239809",
            "extra": "mean: 5.228683149599988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.18869065053630085,
            "unit": "iter/sec",
            "range": "stddev: 0.022493684859666876",
            "extra": "mean: 5.299679645800029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.18926377425120863,
            "unit": "iter/sec",
            "range": "stddev: 0.03887700398670519",
            "extra": "mean: 5.283631291599977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.1932784410461547,
            "unit": "iter/sec",
            "range": "stddev: 0.049665368344314564",
            "extra": "mean: 5.17388279099996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18961721825084546,
            "unit": "iter/sec",
            "range": "stddev: 0.029806628036744966",
            "extra": "mean: 5.273782672400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18811474574109988,
            "unit": "iter/sec",
            "range": "stddev: 0.02460927566346687",
            "extra": "mean: 5.31590437560003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.19076266793850907,
            "unit": "iter/sec",
            "range": "stddev: 0.06264794655976509",
            "extra": "mean: 5.242115822799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.18610575859524353,
            "unit": "iter/sec",
            "range": "stddev: 0.04817384580091359",
            "extra": "mean: 5.373288863000061 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.18830942752495328,
            "unit": "iter/sec",
            "range": "stddev: 0.038720308472382385",
            "extra": "mean: 5.3104085819999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 30.6100018719993,
            "unit": "iter/sec",
            "range": "stddev: 0.0007313982847003904",
            "extra": "mean: 32.66906039998503 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 30.815913369747562,
            "unit": "iter/sec",
            "range": "stddev: 0.0007868236425171572",
            "extra": "mean: 32.450766199963255 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 30.124367426668456,
            "unit": "iter/sec",
            "range": "stddev: 0.0005262146463747444",
            "extra": "mean: 33.195717800026614 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 30.88874416748951,
            "unit": "iter/sec",
            "range": "stddev: 0.0004996820858219914",
            "extra": "mean: 32.374252400086334 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.238413745127772,
            "unit": "iter/sec",
            "range": "stddev: 0.0005690144539122921",
            "extra": "mean: 33.07051779993344 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 30.021655700953875,
            "unit": "iter/sec",
            "range": "stddev: 0.00047291497851846895",
            "extra": "mean: 33.30928880009196 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 30.335342222603003,
            "unit": "iter/sec",
            "range": "stddev: 0.000589078748162387",
            "extra": "mean: 32.96484980000969 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 29.712025875321938,
            "unit": "iter/sec",
            "range": "stddev: 0.0001943798774097777",
            "extra": "mean: 33.656405800002176 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 29.843056559290766,
            "unit": "iter/sec",
            "range": "stddev: 0.0008543946150423135",
            "extra": "mean: 33.50863199998457 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05082496594760249,
            "unit": "iter/sec",
            "range": "stddev: 0.4002203813486849",
            "extra": "mean: 19.675369798199974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.051549797072650574,
            "unit": "iter/sec",
            "range": "stddev: 0.22834599511547507",
            "extra": "mean: 19.39871845839998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.051648821764054866,
            "unit": "iter/sec",
            "range": "stddev: 0.25137795786288947",
            "extra": "mean: 19.361525894400028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.051598744309325456,
            "unit": "iter/sec",
            "range": "stddev: 0.2630376472895732",
            "extra": "mean: 19.38031658300006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05097409498504303,
            "unit": "iter/sec",
            "range": "stddev: 0.19519940836654487",
            "extra": "mean: 19.61780783539998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.0518821470651701,
            "unit": "iter/sec",
            "range": "stddev: 0.46772078483551865",
            "extra": "mean: 19.274452900799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05276315167780063,
            "unit": "iter/sec",
            "range": "stddev: 0.4039762008041539",
            "extra": "mean: 18.952620686999943 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.0521653228819606,
            "unit": "iter/sec",
            "range": "stddev: 0.2773036664259408",
            "extra": "mean: 19.16982287760002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05193463849840275,
            "unit": "iter/sec",
            "range": "stddev: 0.3779425259496474",
            "extra": "mean: 19.25497180520001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Sebastian.dittert@gmx.de",
            "name": "Sebastian Dittert",
            "username": "BY571"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a59eca30976d5a38f12871c491b76fcffe74fa4a",
          "message": "[Feature] Target Return Transform (#1045)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-20T17:13:43+01:00",
          "tree_id": "b0118ba055e2733151b02a38eb457dd5592d3601",
          "url": "https://github.com/BY571/rl/commit/a59eca30976d5a38f12871c491b76fcffe74fa4a"
        },
        "date": 1682063989409,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.049426777760084,
            "unit": "iter/sec",
            "range": "stddev: 0.410124867614282",
            "extra": "mean: 20.231948051600046 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09117752011443402,
            "unit": "iter/sec",
            "range": "stddev: 0.2261078605768317",
            "extra": "mean: 10.967615687999977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09069336456383055,
            "unit": "iter/sec",
            "range": "stddev: 0.20382506806559086",
            "extra": "mean: 11.026164976999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9116886738034832,
            "unit": "iter/sec",
            "range": "stddev: 0.04930190233771361",
            "extra": "mean: 1.0968656611999905 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5296684360104442,
            "unit": "iter/sec",
            "range": "stddev: 0.053116773298876895",
            "extra": "mean: 1.8879735548000098 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3703424125083973,
            "unit": "iter/sec",
            "range": "stddev: 0.05080065633834956",
            "extra": "mean: 2.7002038282000056 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3872182483453036,
            "unit": "iter/sec",
            "range": "stddev: 0.06934967727022462",
            "extra": "mean: 2.5825229163999666 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 24.49272494035928,
            "unit": "iter/sec",
            "range": "stddev: 0.0027906534088972387",
            "extra": "mean: 40.82845018000398 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2213333963653343,
            "unit": "iter/sec",
            "range": "stddev: 0.0195694752066158",
            "extra": "mean: 818.777250320004 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3222.467559446484,
            "unit": "iter/sec",
            "range": "stddev: 0.000045645849731033333",
            "extra": "mean: 310.32119999736096 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 67.7027738494584,
            "unit": "iter/sec",
            "range": "stddev: 0.00046785666043096794",
            "extra": "mean: 14.770443560016702 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.127148819195582,
            "unit": "iter/sec",
            "range": "stddev: 0.0701482644641095",
            "extra": "mean: 887.1942932200159 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 29.507377077971647,
            "unit": "iter/sec",
            "range": "stddev: 0.0023080162876975402",
            "extra": "mean: 33.88983023999572 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1335019521240428,
            "unit": "iter/sec",
            "range": "stddev: 0.018849133479108635",
            "extra": "mean: 882.2216830999923 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.18431728033807201,
            "unit": "iter/sec",
            "range": "stddev: 0.0767448165890532",
            "extra": "mean: 5.425427275000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.18141153581492672,
            "unit": "iter/sec",
            "range": "stddev: 0.1742749299421446",
            "extra": "mean: 5.5123286151999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.19202295278558887,
            "unit": "iter/sec",
            "range": "stddev: 0.04851256935384458",
            "extra": "mean: 5.2077107736000245 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.19359954070184546,
            "unit": "iter/sec",
            "range": "stddev: 0.2102563548738559",
            "extra": "mean: 5.165301510400059 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1890336380504936,
            "unit": "iter/sec",
            "range": "stddev: 0.11919465610050166",
            "extra": "mean: 5.290063770199913 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1865405932325958,
            "unit": "iter/sec",
            "range": "stddev: 0.09314371241874786",
            "extra": "mean: 5.360763481400045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.18566319692516003,
            "unit": "iter/sec",
            "range": "stddev: 0.20439728061467768",
            "extra": "mean: 5.38609706480006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1865631207784879,
            "unit": "iter/sec",
            "range": "stddev: 0.0821269301223887",
            "extra": "mean: 5.360116167800015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.18758408614466626,
            "unit": "iter/sec",
            "range": "stddev: 0.04151935096942531",
            "extra": "mean: 5.330942621799977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 28.275626577846573,
            "unit": "iter/sec",
            "range": "stddev: 0.0014148966200845305",
            "extra": "mean: 35.36614820000068 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.74079552418939,
            "unit": "iter/sec",
            "range": "stddev: 0.00045319289837471603",
            "extra": "mean: 33.62384839997503 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 30.13886681805006,
            "unit": "iter/sec",
            "range": "stddev: 0.0012817494433082788",
            "extra": "mean: 33.17974779997712 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 30.72361876836766,
            "unit": "iter/sec",
            "range": "stddev: 0.0006257322047905024",
            "extra": "mean: 32.548249200044665 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 29.89031104729486,
            "unit": "iter/sec",
            "range": "stddev: 0.0006328320820890666",
            "extra": "mean: 33.455657200011046 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 30.35882651423185,
            "unit": "iter/sec",
            "range": "stddev: 0.0007967358750105268",
            "extra": "mean: 32.939349600064816 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 32.58077923646728,
            "unit": "iter/sec",
            "range": "stddev: 0.0014988258336905706",
            "extra": "mean: 30.692942999985462 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 31.538068321895594,
            "unit": "iter/sec",
            "range": "stddev: 0.0016101090099423095",
            "extra": "mean: 31.707712399929733 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 30.503250124381854,
            "unit": "iter/sec",
            "range": "stddev: 0.0011599169035431771",
            "extra": "mean: 32.78339179996692 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05127822780067377,
            "unit": "iter/sec",
            "range": "stddev: 0.5370748960282434",
            "extra": "mean: 19.501453987200012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05170563641766809,
            "unit": "iter/sec",
            "range": "stddev: 0.5372884324331719",
            "extra": "mean: 19.34025126239999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05253185036366931,
            "unit": "iter/sec",
            "range": "stddev: 0.4333924079623794",
            "extra": "mean: 19.03607036639992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05067536071238735,
            "unit": "iter/sec",
            "range": "stddev: 0.15097663258889998",
            "extra": "mean: 19.73345598219994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.050912385695207535,
            "unit": "iter/sec",
            "range": "stddev: 0.18249550383144345",
            "extra": "mean: 19.641585958800032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.051610626933178694,
            "unit": "iter/sec",
            "range": "stddev: 0.20880930478903978",
            "extra": "mean: 19.37585453659999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05345154452166695,
            "unit": "iter/sec",
            "range": "stddev: 0.5908585261591048",
            "extra": "mean: 18.708533288399984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05177808281359482,
            "unit": "iter/sec",
            "range": "stddev: 0.38771737148200214",
            "extra": "mean: 19.31319094219998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.051463770555261155,
            "unit": "iter/sec",
            "range": "stddev: 0.15784377672170374",
            "extra": "mean: 19.431145235000077 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32339daf0f32baf07bff825718ba8c42480fcf3f",
          "message": "[Refactor] Refactor DQN (#1085)",
          "timestamp": "2023-04-25T21:20:13+01:00",
          "tree_id": "817c335dba383c4e96000e14a6f584b990474b12",
          "url": "https://github.com/BY571/rl/commit/32339daf0f32baf07bff825718ba8c42480fcf3f"
        },
        "date": 1682493294997,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05258147160005386,
            "unit": "iter/sec",
            "range": "stddev: 0.2306113901593515",
            "extra": "mean: 19.018105990000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09502869094149227,
            "unit": "iter/sec",
            "range": "stddev: 0.10039811055105638",
            "extra": "mean: 10.523137697600031 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.0940477161848251,
            "unit": "iter/sec",
            "range": "stddev: 0.12045060525985016",
            "extra": "mean: 10.6329004102 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9342676343272652,
            "unit": "iter/sec",
            "range": "stddev: 0.03902544999236845",
            "extra": "mean: 1.0703571045999751 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.52446341934635,
            "unit": "iter/sec",
            "range": "stddev: 0.028513878377510106",
            "extra": "mean: 1.9067106743999829 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.36247307476418794,
            "unit": "iter/sec",
            "range": "stddev: 0.04756337990336374",
            "extra": "mean: 2.7588256055999865 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4045461083169781,
            "unit": "iter/sec",
            "range": "stddev: 0.06455326822410114",
            "extra": "mean: 2.471906117599974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 26.281581823249144,
            "unit": "iter/sec",
            "range": "stddev: 0.002160599564293265",
            "extra": "mean: 38.04946014000507 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2760439979279474,
            "unit": "iter/sec",
            "range": "stddev: 0.005979181885763876",
            "extra": "mean: 783.6720376599942 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3243.042069487085,
            "unit": "iter/sec",
            "range": "stddev: 0.00003408233638287912",
            "extra": "mean: 308.3524599969678 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 72.58822093633239,
            "unit": "iter/sec",
            "range": "stddev: 0.0005138649132970893",
            "extra": "mean: 13.776339840001128 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1678223741683056,
            "unit": "iter/sec",
            "range": "stddev: 0.022843686515468534",
            "extra": "mean: 856.2946062000015 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 29.69840077759108,
            "unit": "iter/sec",
            "range": "stddev: 0.0011435028613215278",
            "extra": "mean: 33.67184675999624 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1738960541543126,
            "unit": "iter/sec",
            "range": "stddev: 0.009143798037637447",
            "extra": "mean: 851.8641803599985 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.19703119346453488,
            "unit": "iter/sec",
            "range": "stddev: 0.05401551222399162",
            "extra": "mean: 5.075338490399986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.19130012866415505,
            "unit": "iter/sec",
            "range": "stddev: 0.04318295751761268",
            "extra": "mean: 5.227388015799988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.19254978527862024,
            "unit": "iter/sec",
            "range": "stddev: 0.05594278385972364",
            "extra": "mean: 5.193462036600022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.1960599214860683,
            "unit": "iter/sec",
            "range": "stddev: 0.06913950750970688",
            "extra": "mean: 5.100481487599995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19225023425835233,
            "unit": "iter/sec",
            "range": "stddev: 0.04850465558014626",
            "extra": "mean: 5.20155413 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1934894909554548,
            "unit": "iter/sec",
            "range": "stddev: 0.01906984508999783",
            "extra": "mean: 5.168239344999984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1960493879857808,
            "unit": "iter/sec",
            "range": "stddev: 0.08182144132018461",
            "extra": "mean: 5.100755530399965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1664620625524579,
            "unit": "iter/sec",
            "range": "stddev: 1.4000022985198637",
            "extra": "mean: 6.007374801600008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1899396570154394,
            "unit": "iter/sec",
            "range": "stddev: 0.0659673648006095",
            "extra": "mean: 5.264829976599958 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 31.690887790353408,
            "unit": "iter/sec",
            "range": "stddev: 0.0006960022311908842",
            "extra": "mean: 31.55481180001516 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.552590972334148,
            "unit": "iter/sec",
            "range": "stddev: 0.0029818210404075653",
            "extra": "mean: 33.837980599946604 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 30.77069772674362,
            "unit": "iter/sec",
            "range": "stddev: 0.0010137641854245497",
            "extra": "mean: 32.49845059999643 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 31.902836109837796,
            "unit": "iter/sec",
            "range": "stddev: 0.0004870004727125779",
            "extra": "mean: 31.345175599972208 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.96597025045922,
            "unit": "iter/sec",
            "range": "stddev: 0.0008413069741467407",
            "extra": "mean: 32.29351420000057 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 30.57065788514469,
            "unit": "iter/sec",
            "range": "stddev: 0.0009809642692770037",
            "extra": "mean: 32.7111049999985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 32.39350027789151,
            "unit": "iter/sec",
            "range": "stddev: 0.0006884110494790498",
            "extra": "mean: 30.870390399968528 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 31.41780070634494,
            "unit": "iter/sec",
            "range": "stddev: 0.001203534367772",
            "extra": "mean: 31.829089799975918 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 30.072670729119437,
            "unit": "iter/sec",
            "range": "stddev: 0.0008439085254145703",
            "extra": "mean: 33.25278319998688 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05237681619310566,
            "unit": "iter/sec",
            "range": "stddev: 0.1380669390767038",
            "extra": "mean: 19.092416696600004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05232589167973335,
            "unit": "iter/sec",
            "range": "stddev: 0.181967184690129",
            "extra": "mean: 19.110997785200016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05295079151932193,
            "unit": "iter/sec",
            "range": "stddev: 0.03000070070515987",
            "extra": "mean: 18.885458957400033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05317680467194856,
            "unit": "iter/sec",
            "range": "stddev: 0.12405782867026748",
            "extra": "mean: 18.805191590000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.052525848402628146,
            "unit": "iter/sec",
            "range": "stddev: 0.27278214937640427",
            "extra": "mean: 19.03824555739998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.052529458744554565,
            "unit": "iter/sec",
            "range": "stddev: 0.14125264195209727",
            "extra": "mean: 19.03693706160002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.052752400072034474,
            "unit": "iter/sec",
            "range": "stddev: 0.2309280213848706",
            "extra": "mean: 18.956483470600006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05298489667426725,
            "unit": "iter/sec",
            "range": "stddev: 0.0878237900216593",
            "extra": "mean: 18.8733028233999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.0526665760590191,
            "unit": "iter/sec",
            "range": "stddev: 0.1783265898486575",
            "extra": "mean: 18.98737443799996 sec\nrounds: 5"
          }
        ]
      }
    ],
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "albertbou92@users.noreply.github.com",
            "name": "Albert Bou",
            "username": "albertbou92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d3c5537e5ca81670576c6921aa09b0141a6815d",
          "message": "[BugFix] Advantage normalisation in ClipPPOLoss is done after computing gain1 (#1033)",
          "timestamp": "2023-04-11T08:37:19+01:00",
          "tree_id": "280c5e835e37888e1393cee2d346fa4749e73b2c",
          "url": "https://github.com/BY571/rl/commit/4d3c5537e5ca81670576c6921aa09b0141a6815d"
        },
        "date": 1681204597111,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06569738658152481,
            "unit": "iter/sec",
            "range": "stddev: 0.06411483477373409",
            "extra": "mean: 15.221305626200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11571321064205396,
            "unit": "iter/sec",
            "range": "stddev: 0.19809419021205973",
            "extra": "mean: 8.642055599800006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11757084088404,
            "unit": "iter/sec",
            "range": "stddev: 0.06792878565564085",
            "extra": "mean: 8.505510316000027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.111782633998569,
            "unit": "iter/sec",
            "range": "stddev: 0.04729484040155921",
            "extra": "mean: 899.4563950000384 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6287797516533353,
            "unit": "iter/sec",
            "range": "stddev: 0.05572406955697711",
            "extra": "mean: 1.590382001600028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4225011924832153,
            "unit": "iter/sec",
            "range": "stddev: 0.0487135266464272",
            "extra": "mean: 2.366857224999967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5125182626657587,
            "unit": "iter/sec",
            "range": "stddev: 0.04047835223379287",
            "extra": "mean: 1.9511499839999942 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.824432193501597,
            "unit": "iter/sec",
            "range": "stddev: 0.0005754357163288915",
            "extra": "mean: 35.93963726000311 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2588042912411201,
            "unit": "iter/sec",
            "range": "stddev: 0.011583955113112178",
            "extra": "mean: 794.4046639800126 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3086.56684102922,
            "unit": "iter/sec",
            "range": "stddev: 0.000037410448346193195",
            "extra": "mean: 323.9845600319313 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.30987087612903,
            "unit": "iter/sec",
            "range": "stddev: 0.00026084888614409684",
            "extra": "mean: 13.104464579992054 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.156983139360185,
            "unit": "iter/sec",
            "range": "stddev: 0.012492274491518188",
            "extra": "mean: 864.3168305399877 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.78979070579287,
            "unit": "iter/sec",
            "range": "stddev: 0.00030496614754861226",
            "extra": "mean: 31.45663993999733 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1505310991630946,
            "unit": "iter/sec",
            "range": "stddev: 0.0049441147276051214",
            "extra": "mean: 869.1638154999964 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2382521058117111,
            "unit": "iter/sec",
            "range": "stddev: 0.029497912808353576",
            "extra": "mean: 4.197234675400068 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.229898899509601,
            "unit": "iter/sec",
            "range": "stddev: 0.016257008390031354",
            "extra": "mean: 4.349738089799939 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2290574230514643,
            "unit": "iter/sec",
            "range": "stddev: 0.009732229066506996",
            "extra": "mean: 4.365717498599997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.24254813272942552,
            "unit": "iter/sec",
            "range": "stddev: 0.028904411456475994",
            "extra": "mean: 4.122893005800006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2323424249819244,
            "unit": "iter/sec",
            "range": "stddev: 0.02021638175763075",
            "extra": "mean: 4.30399226519994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23157824395267518,
            "unit": "iter/sec",
            "range": "stddev: 0.04067877606677942",
            "extra": "mean: 4.318194934599978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2409317589339875,
            "unit": "iter/sec",
            "range": "stddev: 0.06442994997573132",
            "extra": "mean: 4.150552855399974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2276987317382683,
            "unit": "iter/sec",
            "range": "stddev: 0.09508486909969831",
            "extra": "mean: 4.391767983800037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.22868096655578,
            "unit": "iter/sec",
            "range": "stddev: 0.0308984056782448",
            "extra": "mean: 4.372904378800058 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 37.468732342902584,
            "unit": "iter/sec",
            "range": "stddev: 0.00037131071558737697",
            "extra": "mean: 26.688919999969585 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 36.162212576559405,
            "unit": "iter/sec",
            "range": "stddev: 0.00036271134950922667",
            "extra": "mean: 27.653175200020996 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 36.484451906332964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005917157072379769",
            "extra": "mean: 27.40893580003103 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 37.71937949455428,
            "unit": "iter/sec",
            "range": "stddev: 0.0003571666924859341",
            "extra": "mean: 26.51157079994846 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 36.56312824833147,
            "unit": "iter/sec",
            "range": "stddev: 0.0003163260816218806",
            "extra": "mean: 27.349957399928826 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 36.19563989490519,
            "unit": "iter/sec",
            "range": "stddev: 0.000388440392499044",
            "extra": "mean: 27.627637000023242 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 37.7284349208635,
            "unit": "iter/sec",
            "range": "stddev: 0.0002763687123230421",
            "extra": "mean: 26.505207599984715 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 36.17718677296893,
            "unit": "iter/sec",
            "range": "stddev: 0.00046043024879327657",
            "extra": "mean: 27.641729200104237 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 36.51491113413001,
            "unit": "iter/sec",
            "range": "stddev: 0.0003771165306999296",
            "extra": "mean: 27.38607240003148 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.03480651312726559,
            "unit": "iter/sec",
            "range": "stddev: 0.19396549235564778",
            "extra": "mean: 28.73025506300005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.035054830657601656,
            "unit": "iter/sec",
            "range": "stddev: 0.0877647815460985",
            "extra": "mean: 28.526738861399963 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03514404674841585,
            "unit": "iter/sec",
            "range": "stddev: 0.1459664756981778",
            "extra": "mean: 28.454321358000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.0351901316740532,
            "unit": "iter/sec",
            "range": "stddev: 0.10866722326354819",
            "extra": "mean: 28.417057636000028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03484816116726399,
            "unit": "iter/sec",
            "range": "stddev: 0.07209079173893451",
            "extra": "mean: 28.69591870860004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.0350099423471062,
            "unit": "iter/sec",
            "range": "stddev: 0.125036332889009",
            "extra": "mean: 28.563314674600043 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.03520162085280836,
            "unit": "iter/sec",
            "range": "stddev: 0.0932613185973254",
            "extra": "mean: 28.40778281720004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.035271451337199625,
            "unit": "iter/sec",
            "range": "stddev: 0.15246495530267445",
            "extra": "mean: 28.351541036399976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03507810120438303,
            "unit": "iter/sec",
            "range": "stddev: 0.12104805571416767",
            "extra": "mean: 28.50781443880005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6920823a65655c57cd177c60e90b62d9bf97651c",
          "message": "[Refactor] Import envpool locally to avoid importing gym at root level (#1041)",
          "timestamp": "2023-04-12T10:16:28+01:00",
          "tree_id": "36c4e43e63dd981d3a97d71f3cd20d90d7cf6759",
          "url": "https://github.com/BY571/rl/commit/6920823a65655c57cd177c60e90b62d9bf97651c"
        },
        "date": 1681299955444,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.04587075971346962,
            "unit": "iter/sec",
            "range": "stddev: 0.23087768183436305",
            "extra": "mean: 21.800380160400028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.08350074099772546,
            "unit": "iter/sec",
            "range": "stddev: 0.16500662598306454",
            "extra": "mean: 11.97594162699993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.08760449914287825,
            "unit": "iter/sec",
            "range": "stddev: 0.10960538253822959",
            "extra": "mean: 11.414938842000037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8173271281031828,
            "unit": "iter/sec",
            "range": "stddev: 0.04579039350565849",
            "extra": "mean: 1.2235003165999843 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.45720534686190434,
            "unit": "iter/sec",
            "range": "stddev: 0.053811837942436484",
            "extra": "mean: 2.1872010178000894 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.2958371789435016,
            "unit": "iter/sec",
            "range": "stddev: 0.07162534565420732",
            "extra": "mean: 3.380237749600019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.36968692943194464,
            "unit": "iter/sec",
            "range": "stddev: 0.030874205798087334",
            "extra": "mean: 2.704991495199965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 15.430349516239932,
            "unit": "iter/sec",
            "range": "stddev: 0.009956836946663009",
            "extra": "mean: 64.80734600000687 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2430300565402401,
            "unit": "iter/sec",
            "range": "stddev: 0.021453677640884197",
            "extra": "mean: 804.4857762999936 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2766.1536319458014,
            "unit": "iter/sec",
            "range": "stddev: 0.00005885253575508848",
            "extra": "mean: 361.5128199862738 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 51.087083897429586,
            "unit": "iter/sec",
            "range": "stddev: 0.0007956997700148262",
            "extra": "mean: 19.574419279983886 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1530961393861963,
            "unit": "iter/sec",
            "range": "stddev: 0.013152693701099729",
            "extra": "mean: 867.2303772799978 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 17.911542989489924,
            "unit": "iter/sec",
            "range": "stddev: 0.008430203109578987",
            "extra": "mean: 55.82991932000368 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1559955908485946,
            "unit": "iter/sec",
            "range": "stddev: 0.014245912572329794",
            "extra": "mean: 865.0552025600018 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.20732155284337292,
            "unit": "iter/sec",
            "range": "stddev: 0.07750410455031419",
            "extra": "mean: 4.8234251880000105 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.20354669379702978,
            "unit": "iter/sec",
            "range": "stddev: 0.0806422567188283",
            "extra": "mean: 4.912877636799976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2022872084341476,
            "unit": "iter/sec",
            "range": "stddev: 0.06834862378348622",
            "extra": "mean: 4.943466310800067 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2065251146276412,
            "unit": "iter/sec",
            "range": "stddev: 0.03565704915413991",
            "extra": "mean: 4.842026122600009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20021455464983673,
            "unit": "iter/sec",
            "range": "stddev: 0.05414335333220888",
            "extra": "mean: 4.994641881799953 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19174644232179333,
            "unit": "iter/sec",
            "range": "stddev: 0.09029169505456627",
            "extra": "mean: 5.215220620999981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.20328723855629827,
            "unit": "iter/sec",
            "range": "stddev: 0.11513140291998278",
            "extra": "mean: 4.919147936199943 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1967374214810726,
            "unit": "iter/sec",
            "range": "stddev: 0.06113262011632934",
            "extra": "mean: 5.082917080400011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.19578211959530478,
            "unit": "iter/sec",
            "range": "stddev: 0.04872348314773664",
            "extra": "mean: 5.107718733799947 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 33.18001379830594,
            "unit": "iter/sec",
            "range": "stddev: 0.0006951432899076082",
            "extra": "mean: 30.138625200061142 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 32.56976600212148,
            "unit": "iter/sec",
            "range": "stddev: 0.0006990813651217654",
            "extra": "mean: 30.70332160000362 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 31.622358808860966,
            "unit": "iter/sec",
            "range": "stddev: 0.0009740536423347325",
            "extra": "mean: 31.623194400026478 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 33.23591421574824,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470639461548571",
            "extra": "mean: 30.08793419999165 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.10888226092146,
            "unit": "iter/sec",
            "range": "stddev: 0.0004053739818025886",
            "extra": "mean: 30.203375399969445 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.540506878535616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003911191808387184",
            "extra": "mean: 30.730928799994217 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 32.681217120160944,
            "unit": "iter/sec",
            "range": "stddev: 0.0010042889134557812",
            "extra": "mean: 30.59861560000172 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 31.3283944118988,
            "unit": "iter/sec",
            "range": "stddev: 0.0008796629945800777",
            "extra": "mean: 31.91992500005654 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 32.18543279200697,
            "unit": "iter/sec",
            "range": "stddev: 0.00035969181786103214",
            "extra": "mean: 31.069956600003934 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.043776081567288926,
            "unit": "iter/sec",
            "range": "stddev: 0.42059929269251234",
            "extra": "mean: 22.843524687399984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.043744246592045684,
            "unit": "iter/sec",
            "range": "stddev: 0.452385997689025",
            "extra": "mean: 22.860149114600063 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.0434986862859358,
            "unit": "iter/sec",
            "range": "stddev: 0.18087737468049328",
            "extra": "mean: 22.989200028400045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04275565518415037,
            "unit": "iter/sec",
            "range": "stddev: 0.2974530983918434",
            "extra": "mean: 23.38871888859985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04241806550204767,
            "unit": "iter/sec",
            "range": "stddev: 0.6616315478011947",
            "extra": "mean: 23.574861044800038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04339881383296834,
            "unit": "iter/sec",
            "range": "stddev: 0.5049996798154135",
            "extra": "mean: 23.042104419000044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04347556359002689,
            "unit": "iter/sec",
            "range": "stddev: 0.7207961184047597",
            "extra": "mean: 23.00142694940005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.043130284306852604,
            "unit": "iter/sec",
            "range": "stddev: 0.39086024519271756",
            "extra": "mean: 23.18556476199992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04221848921957345,
            "unit": "iter/sec",
            "range": "stddev: 0.41390430367196573",
            "extra": "mean: 23.686304708799888 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d8d1087948833a0d1141ae8aac62c17b5be2c36",
          "message": "[Doc] Minor changes to contributing.md (#1054)",
          "timestamp": "2023-04-13T14:27:58+01:00",
          "tree_id": "3977e50c9e59d51aca3bbc909795a41209e56c5c",
          "url": "https://github.com/BY571/rl/commit/8d8d1087948833a0d1141ae8aac62c17b5be2c36"
        },
        "date": 1681394661748,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07513520698496796,
            "unit": "iter/sec",
            "range": "stddev: 0.09658167081414104",
            "extra": "mean: 13.309339790599983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1360173186980306,
            "unit": "iter/sec",
            "range": "stddev: 0.09970585288904907",
            "extra": "mean: 7.352004947399974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.13834397885256391,
            "unit": "iter/sec",
            "range": "stddev: 0.030405092091968816",
            "extra": "mean: 7.228359400199997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.3127997408655023,
            "unit": "iter/sec",
            "range": "stddev: 0.025675039345569736",
            "extra": "mean: 761.7308024000067 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7534729939208904,
            "unit": "iter/sec",
            "range": "stddev: 0.0331944304752898",
            "extra": "mean: 1.3271875808000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.48008705605245866,
            "unit": "iter/sec",
            "range": "stddev: 0.02921575334456623",
            "extra": "mean: 2.082955554399973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.554011817691894,
            "unit": "iter/sec",
            "range": "stddev: 0.04059348339762364",
            "extra": "mean: 1.805015647800019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.606742450706204,
            "unit": "iter/sec",
            "range": "stddev: 0.0004219155578072145",
            "extra": "mean: 34.95679390000987 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.5480020257933447,
            "unit": "iter/sec",
            "range": "stddev: 0.005675261664289294",
            "extra": "mean: 645.9939866600007 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4447.841804833439,
            "unit": "iter/sec",
            "range": "stddev: 0.000021606110143485352",
            "extra": "mean: 224.8281400011365 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.01864680922843,
            "unit": "iter/sec",
            "range": "stddev: 0.0001013555902052109",
            "extra": "mean: 12.817448660000537 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.418928444578645,
            "unit": "iter/sec",
            "range": "stddev: 0.019391991960257572",
            "extra": "mean: 704.757173500002 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.70090581857414,
            "unit": "iter/sec",
            "range": "stddev: 0.0003642478432131842",
            "extra": "mean: 31.544839940002017 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.3633891444597224,
            "unit": "iter/sec",
            "range": "stddev: 0.13427224595757545",
            "extra": "mean: 733.4663064200026 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.270309188379029,
            "unit": "iter/sec",
            "range": "stddev: 0.057211246975518756",
            "extra": "mean: 3.699467287800053 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2618578713586415,
            "unit": "iter/sec",
            "range": "stddev: 0.019389487079320773",
            "extra": "mean: 3.8188655350000773 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2622643173618848,
            "unit": "iter/sec",
            "range": "stddev: 0.013242754143029837",
            "extra": "mean: 3.8129472207999697 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2719196416583712,
            "unit": "iter/sec",
            "range": "stddev: 0.029593535669002902",
            "extra": "mean: 3.6775570675999916 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2643339214732063,
            "unit": "iter/sec",
            "range": "stddev: 0.008067346094139831",
            "extra": "mean: 3.7830937264000113 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.26376663243270243,
            "unit": "iter/sec",
            "range": "stddev: 0.02372336947034764",
            "extra": "mean: 3.7912301142000615 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.25980419108694947,
            "unit": "iter/sec",
            "range": "stddev: 0.30940569270607304",
            "extra": "mean: 3.849052610799981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.26087347055676025,
            "unit": "iter/sec",
            "range": "stddev: 0.013380469737418889",
            "extra": "mean: 3.833275947400034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.26158238396935546,
            "unit": "iter/sec",
            "range": "stddev: 0.01293846840712913",
            "extra": "mean: 3.8228874010000253 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 43.313523344738925,
            "unit": "iter/sec",
            "range": "stddev: 0.00019223637246510754",
            "extra": "mean: 23.08747760002916 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 42.32891524424595,
            "unit": "iter/sec",
            "range": "stddev: 0.00031528240117195076",
            "extra": "mean: 23.62451280005189 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 42.82285044076313,
            "unit": "iter/sec",
            "range": "stddev: 0.0002707222256973087",
            "extra": "mean: 23.35201860005327 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 44.15644706908651,
            "unit": "iter/sec",
            "range": "stddev: 0.00038365118415348303",
            "extra": "mean: 22.646749600016847 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 42.55047151829259,
            "unit": "iter/sec",
            "range": "stddev: 0.00018690981854129946",
            "extra": "mean: 23.501502200042523 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 42.55872883278949,
            "unit": "iter/sec",
            "range": "stddev: 0.0004952516626422338",
            "extra": "mean: 23.496942399970067 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 44.01464863851554,
            "unit": "iter/sec",
            "range": "stddev: 0.00041731986751150933",
            "extra": "mean: 22.71970879996843 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 42.763730253555714,
            "unit": "iter/sec",
            "range": "stddev: 0.0001514134464711786",
            "extra": "mean: 23.384302399972512 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 42.60043047228757,
            "unit": "iter/sec",
            "range": "stddev: 0.0003527209310941912",
            "extra": "mean: 23.473941199972614 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.07216092630608897,
            "unit": "iter/sec",
            "range": "stddev: 0.033535311578007494",
            "extra": "mean: 13.857915234600023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.07241577408414353,
            "unit": "iter/sec",
            "range": "stddev: 0.06511962931833079",
            "extra": "mean: 13.809146040999986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.07241372205649761,
            "unit": "iter/sec",
            "range": "stddev: 0.09906050948446121",
            "extra": "mean: 13.80953735840003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.0727942988016019,
            "unit": "iter/sec",
            "range": "stddev: 0.08723853126629333",
            "extra": "mean: 13.737339550800016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.07283873616808612,
            "unit": "iter/sec",
            "range": "stddev: 0.062099954743691954",
            "extra": "mean: 13.728958691599928 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.07400383016911254,
            "unit": "iter/sec",
            "range": "stddev: 0.1353968775364848",
            "extra": "mean: 13.51281410319998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.0751592698569319,
            "unit": "iter/sec",
            "range": "stddev: 0.08791114303619366",
            "extra": "mean: 13.305078693600034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.0749928203114961,
            "unit": "iter/sec",
            "range": "stddev: 0.020978962061019645",
            "extra": "mean: 13.334609844600072 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.07506750596885395,
            "unit": "iter/sec",
            "range": "stddev: 0.04079504289359556",
            "extra": "mean: 13.321343064400025 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "11810424@mail.sustech.edu.cn",
            "name": "btx0424",
            "username": "btx0424"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e21e6ffbd2a4f5e079e3df7e0a228e9c85aeda5",
          "message": "[BugFix] CompositeSpec nested key deletion (#1059)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-13T21:02:36+01:00",
          "tree_id": "7b9b9296ea74d6f34872563fecf532f95048061e",
          "url": "https://github.com/BY571/rl/commit/7e21e6ffbd2a4f5e079e3df7e0a228e9c85aeda5"
        },
        "date": 1681461257737,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.056509242974861304,
            "unit": "iter/sec",
            "range": "stddev: 0.11675871367621464",
            "extra": "mean: 17.69622007579999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10233346308174018,
            "unit": "iter/sec",
            "range": "stddev: 0.18569539910873997",
            "extra": "mean: 9.771974580799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10428669800980107,
            "unit": "iter/sec",
            "range": "stddev: 0.04045046602944321",
            "extra": "mean: 9.588950643599992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9758794893789122,
            "unit": "iter/sec",
            "range": "stddev: 0.04032488602931781",
            "extra": "mean: 1.024716689799925 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5484352732357292,
            "unit": "iter/sec",
            "range": "stddev: 0.05494087785929588",
            "extra": "mean: 1.823369226600016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.36896448346243776,
            "unit": "iter/sec",
            "range": "stddev: 0.04413198462810479",
            "extra": "mean: 2.710287967600016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.44088303910506016,
            "unit": "iter/sec",
            "range": "stddev: 0.06169937833174061",
            "extra": "mean: 2.268175255799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 25.36646393952967,
            "unit": "iter/sec",
            "range": "stddev: 0.0009708931929097108",
            "extra": "mean: 39.4221284599962 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2213315371989126,
            "unit": "iter/sec",
            "range": "stddev: 0.005938465611154827",
            "extra": "mean: 818.7784966999789 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3438.5939668523606,
            "unit": "iter/sec",
            "range": "stddev: 0.00004737571140710955",
            "extra": "mean: 290.816540027663 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 68.88224430869074,
            "unit": "iter/sec",
            "range": "stddev: 0.0003179363313499409",
            "extra": "mean: 14.517529299982925 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.122223664659177,
            "unit": "iter/sec",
            "range": "stddev: 0.009185375549111714",
            "extra": "mean: 891.0879635600122 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 28.1638747723781,
            "unit": "iter/sec",
            "range": "stddev: 0.0006352079671392657",
            "extra": "mean: 35.50647799999297 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1270656665709688,
            "unit": "iter/sec",
            "range": "stddev: 0.0057255435558493046",
            "extra": "mean: 887.2597486200084 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2206831620978814,
            "unit": "iter/sec",
            "range": "stddev: 0.03586169396898293",
            "extra": "mean: 4.531383321199928 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.21258705102363942,
            "unit": "iter/sec",
            "range": "stddev: 0.01405323023362977",
            "extra": "mean: 4.703955368799962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.21356615719400024,
            "unit": "iter/sec",
            "range": "stddev: 0.018505851189122225",
            "extra": "mean: 4.682389818399997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2189828555850938,
            "unit": "iter/sec",
            "range": "stddev: 0.06377497824756383",
            "extra": "mean: 4.5665675393999665 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21083619610149854,
            "unit": "iter/sec",
            "range": "stddev: 0.044706169414205625",
            "extra": "mean: 4.743018601600033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.21362050713395866,
            "unit": "iter/sec",
            "range": "stddev: 0.02863607604850145",
            "extra": "mean: 4.681198511399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2197719642178538,
            "unit": "iter/sec",
            "range": "stddev: 0.0397017581146601",
            "extra": "mean: 4.5501709172000115 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.21131921288096892,
            "unit": "iter/sec",
            "range": "stddev: 0.02519585454111606",
            "extra": "mean: 4.732177383999987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.21333729384746444,
            "unit": "iter/sec",
            "range": "stddev: 0.04808869749545642",
            "extra": "mean: 4.687412978599968 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 35.3600357424178,
            "unit": "iter/sec",
            "range": "stddev: 0.00038427248566598617",
            "extra": "mean: 28.280514400057655 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 34.08594764879932,
            "unit": "iter/sec",
            "range": "stddev: 0.0005395560630746111",
            "extra": "mean: 29.337603000021772 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 34.33551207946132,
            "unit": "iter/sec",
            "range": "stddev: 0.0001603085688363033",
            "extra": "mean: 29.12436540004819 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 35.82783872217465,
            "unit": "iter/sec",
            "range": "stddev: 0.00025421269787141986",
            "extra": "mean: 27.911256600054912 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.78325330496788,
            "unit": "iter/sec",
            "range": "stddev: 0.0002755316056641763",
            "extra": "mean: 28.74946719998661 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 34.84718471054401,
            "unit": "iter/sec",
            "range": "stddev: 0.0003216347441400567",
            "extra": "mean: 28.69672280003215 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 36.15847370983832,
            "unit": "iter/sec",
            "range": "stddev: 0.00023497908368214334",
            "extra": "mean: 27.656034599931445 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.48803029451778,
            "unit": "iter/sec",
            "range": "stddev: 0.00047197709525308444",
            "extra": "mean: 28.995567199990546 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 35.0238284616873,
            "unit": "iter/sec",
            "range": "stddev: 0.00044288327945473906",
            "extra": "mean: 28.55199000000539 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06239072022496731,
            "unit": "iter/sec",
            "range": "stddev: 0.13242626126038695",
            "extra": "mean: 16.02802462279997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06335351734464367,
            "unit": "iter/sec",
            "range": "stddev: 0.07640132003144419",
            "extra": "mean: 15.784443262399964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06330875399655166,
            "unit": "iter/sec",
            "range": "stddev: 0.10559291474621822",
            "extra": "mean: 15.795603875799998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06367078831090314,
            "unit": "iter/sec",
            "range": "stddev: 0.07617286285907611",
            "extra": "mean: 15.705789523399972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06343682890175141,
            "unit": "iter/sec",
            "range": "stddev: 0.10866876701801631",
            "extra": "mean: 15.76371356059999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06289451128441999,
            "unit": "iter/sec",
            "range": "stddev: 0.09177984080058867",
            "extra": "mean: 15.899638610399961 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.0629508278801595,
            "unit": "iter/sec",
            "range": "stddev: 0.048557968730295165",
            "extra": "mean: 15.885414595400016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06331303823547346,
            "unit": "iter/sec",
            "range": "stddev: 0.08436453080325995",
            "extra": "mean: 15.794535025799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06277973123239033,
            "unit": "iter/sec",
            "range": "stddev: 0.11668025939950849",
            "extra": "mean: 15.928707886599932 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Sebastian.dittert@gmx.de",
            "name": "Sebastian Dittert",
            "username": "BY571"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "271fde772dbfd1b98bca4dd2d31759bfdddcf665",
          "message": "[Feature] Reward2go Transform (#1038)\n\nCo-authored-by: Vincent Moens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-17T14:06:46+01:00",
          "tree_id": "38ce53e0f1c88a343478550678b2b96c6adc4862",
          "url": "https://github.com/BY571/rl/commit/271fde772dbfd1b98bca4dd2d31759bfdddcf665"
        },
        "date": 1681821639468,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07389747773758276,
            "unit": "iter/sec",
            "range": "stddev: 0.11921498023642628",
            "extra": "mean: 13.532261595600039 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1279430513024166,
            "unit": "iter/sec",
            "range": "stddev: 0.13848453154991153",
            "extra": "mean: 7.815977419799992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1301998694263531,
            "unit": "iter/sec",
            "range": "stddev: 0.047373007452808966",
            "extra": "mean: 7.680499253999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.287135828642364,
            "unit": "iter/sec",
            "range": "stddev: 0.031640635325834686",
            "extra": "mean: 776.9187818000319 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7479918458339099,
            "unit": "iter/sec",
            "range": "stddev: 0.04648196583202077",
            "extra": "mean: 1.336912969800005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4820322849483211,
            "unit": "iter/sec",
            "range": "stddev: 0.026967034974911125",
            "extra": "mean: 2.0745498408000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.563193549427271,
            "unit": "iter/sec",
            "range": "stddev: 0.02416645244508154",
            "extra": "mean: 1.7755885183999909 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.9261395988468,
            "unit": "iter/sec",
            "range": "stddev: 0.0003137702047139414",
            "extra": "mean: 35.80874457998107 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.5328974872049186,
            "unit": "iter/sec",
            "range": "stddev: 0.012346220504244925",
            "extra": "mean: 652.3593445399911 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3887.4021734975236,
            "unit": "iter/sec",
            "range": "stddev: 0.000026976158726026677",
            "extra": "mean: 257.2412000017721 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.06931220915286,
            "unit": "iter/sec",
            "range": "stddev: 0.00012639962758067048",
            "extra": "mean: 13.321022539994374 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.40258919571213,
            "unit": "iter/sec",
            "range": "stddev: 0.012311191002217921",
            "extra": "mean: 712.9671346799978 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.362845655266888,
            "unit": "iter/sec",
            "range": "stddev: 0.00015058077827500785",
            "extra": "mean: 31.88486181999451 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.4018824097985614,
            "unit": "iter/sec",
            "range": "stddev: 0.0077140852676414575",
            "extra": "mean: 713.3265907400119 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.260209225689982,
            "unit": "iter/sec",
            "range": "stddev: 0.016531674644460585",
            "extra": "mean: 3.843061280200027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.256556003994715,
            "unit": "iter/sec",
            "range": "stddev: 0.022717939936401747",
            "extra": "mean: 3.8977844386000013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2554729130861561,
            "unit": "iter/sec",
            "range": "stddev: 0.04883180728628564",
            "extra": "mean: 3.914309301600042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2605494496413278,
            "unit": "iter/sec",
            "range": "stddev: 0.019689985263013566",
            "extra": "mean: 3.838043033200029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.25581430247738224,
            "unit": "iter/sec",
            "range": "stddev: 0.013316047919379804",
            "extra": "mean: 3.9090855762000047 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.25622575803103903,
            "unit": "iter/sec",
            "range": "stddev: 0.011626568276736245",
            "extra": "mean: 3.902808240999957 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2620136305608133,
            "unit": "iter/sec",
            "range": "stddev: 0.02380452012340608",
            "extra": "mean: 3.8165953345999695 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2590775070152418,
            "unit": "iter/sec",
            "range": "stddev: 0.018535387377164272",
            "extra": "mean: 3.8598487823999674 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.257647093435963,
            "unit": "iter/sec",
            "range": "stddev: 0.013043680689583986",
            "extra": "mean: 3.8812780173999726 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 41.62109226423908,
            "unit": "iter/sec",
            "range": "stddev: 0.0011627000648732281",
            "extra": "mean: 24.02627960004793 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 41.69380968413935,
            "unit": "iter/sec",
            "range": "stddev: 0.00021269874491010478",
            "extra": "mean: 23.98437580004611 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 20.71693557608542,
            "unit": "iter/sec",
            "range": "stddev: 0.053033484099551186",
            "extra": "mean: 48.269687199990585 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 42.33403485630597,
            "unit": "iter/sec",
            "range": "stddev: 0.0003293552455855874",
            "extra": "mean: 23.621655799979635 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 41.04579295232714,
            "unit": "iter/sec",
            "range": "stddev: 0.00009974826573445161",
            "extra": "mean: 24.363032800010842 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 40.89291712852753,
            "unit": "iter/sec",
            "range": "stddev: 0.0007288613678689906",
            "extra": "mean: 24.45411259991488 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 42.09345784829994,
            "unit": "iter/sec",
            "range": "stddev: 0.0003248497046612904",
            "extra": "mean: 23.75666079997245 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 41.753836150424185,
            "unit": "iter/sec",
            "range": "stddev: 0.00013040374777932004",
            "extra": "mean: 23.949895199984894 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 41.38865321968229,
            "unit": "iter/sec",
            "range": "stddev: 0.00022410114222943888",
            "extra": "mean: 24.161211399950844 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.07125395416358365,
            "unit": "iter/sec",
            "range": "stddev: 0.11672228175247892",
            "extra": "mean: 14.034308856799953 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.07167882434903486,
            "unit": "iter/sec",
            "range": "stddev: 0.15528863727524633",
            "extra": "mean: 13.95112167479997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.073220895041054,
            "unit": "iter/sec",
            "range": "stddev: 0.0504684167970257",
            "extra": "mean: 13.657303689599985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.07350379503816731,
            "unit": "iter/sec",
            "range": "stddev: 0.020719401959685423",
            "extra": "mean: 13.604739721000033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.07321735962670066,
            "unit": "iter/sec",
            "range": "stddev: 0.06199499012187288",
            "extra": "mean: 13.657963153799983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.07280963876403516,
            "unit": "iter/sec",
            "range": "stddev: 0.05489375603130376",
            "extra": "mean: 13.734445287400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.07299640368190184,
            "unit": "iter/sec",
            "range": "stddev: 0.06450312291742788",
            "extra": "mean: 13.699305028200069 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.07326171339286143,
            "unit": "iter/sec",
            "range": "stddev: 0.04416117028175345",
            "extra": "mean: 13.649694413199995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.0733267690921227,
            "unit": "iter/sec",
            "range": "stddev: 0.06116402304197301",
            "extra": "mean: 13.637584368999933 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3390db099131d2737208c426601a333fafe26d57",
          "message": "[Refactor] Deprecate interaction_mode (#1067)",
          "timestamp": "2023-04-18T21:42:48+01:00",
          "tree_id": "b788839f27a4dfb7d7177187c47a397e1ff883de",
          "url": "https://github.com/BY571/rl/commit/3390db099131d2737208c426601a333fafe26d57"
        },
        "date": 1681892979696,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06347274907143041,
            "unit": "iter/sec",
            "range": "stddev: 0.08667532790026196",
            "extra": "mean: 15.754792641399991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11160949470586838,
            "unit": "iter/sec",
            "range": "stddev: 0.17019116989821834",
            "extra": "mean: 8.959811193799988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1101145455359092,
            "unit": "iter/sec",
            "range": "stddev: 0.5355902503361911",
            "extra": "mean: 9.081452365199947 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0596447044663768,
            "unit": "iter/sec",
            "range": "stddev: 0.04968127498441572",
            "extra": "mean: 943.7125441999797 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6264145142098256,
            "unit": "iter/sec",
            "range": "stddev: 0.04907983536456286",
            "extra": "mean: 1.5963870205999684 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.41607696906527,
            "unit": "iter/sec",
            "range": "stddev: 0.0500789743461654",
            "extra": "mean: 2.403401472200039 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4903374362244621,
            "unit": "iter/sec",
            "range": "stddev: 0.06358946069432603",
            "extra": "mean: 2.0394118950000575 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.589805337818014,
            "unit": "iter/sec",
            "range": "stddev: 0.001245464706455262",
            "extra": "mean: 36.24527204000515 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2258838333565005,
            "unit": "iter/sec",
            "range": "stddev: 0.013532883875027879",
            "extra": "mean: 815.7379784200066 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2887.2799555110237,
            "unit": "iter/sec",
            "range": "stddev: 0.00003449897900198181",
            "extra": "mean: 346.3467399797082 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 74.09641145272045,
            "unit": "iter/sec",
            "range": "stddev: 0.00015187071783686202",
            "extra": "mean: 13.495930239996596 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1235926477032643,
            "unit": "iter/sec",
            "range": "stddev: 0.00865539274908757",
            "extra": "mean: 890.0022637600023 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 30.980614821457184,
            "unit": "iter/sec",
            "range": "stddev: 0.00025897257044502184",
            "extra": "mean: 32.27824902000975 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1367695766244243,
            "unit": "iter/sec",
            "range": "stddev: 0.009206553879416447",
            "extra": "mean: 879.6857521200081 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.23657646194503426,
            "unit": "iter/sec",
            "range": "stddev: 0.05480652938986836",
            "extra": "mean: 4.226963205799985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2290974868603103,
            "unit": "iter/sec",
            "range": "stddev: 0.026878982223474804",
            "extra": "mean: 4.3649540363999675 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.23152677967448884,
            "unit": "iter/sec",
            "range": "stddev: 0.06972589108208156",
            "extra": "mean: 4.319154792399968 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2442985931105435,
            "unit": "iter/sec",
            "range": "stddev: 0.06133424004176381",
            "extra": "mean: 4.09335144860006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23378156220511462,
            "unit": "iter/sec",
            "range": "stddev: 0.020872418011913172",
            "extra": "mean: 4.277497295199964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.230608082345077,
            "unit": "iter/sec",
            "range": "stddev: 0.05287350208749041",
            "extra": "mean: 4.336361457200018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2417946194345732,
            "unit": "iter/sec",
            "range": "stddev: 0.024027454062017634",
            "extra": "mean: 4.1357413259999705 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2320745158460641,
            "unit": "iter/sec",
            "range": "stddev: 0.05284424464241047",
            "extra": "mean: 4.308960836799952 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.23321634284103437,
            "unit": "iter/sec",
            "range": "stddev: 0.015530861024091385",
            "extra": "mean: 4.287864168599981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 38.501036675095335,
            "unit": "iter/sec",
            "range": "stddev: 0.00042377381843207353",
            "extra": "mean: 25.973326599978463 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 37.20163083017535,
            "unit": "iter/sec",
            "range": "stddev: 0.00015799945420890855",
            "extra": "mean: 26.880542000026253 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 37.177151110401574,
            "unit": "iter/sec",
            "range": "stddev: 0.0003363108401085077",
            "extra": "mean: 26.898241799926836 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 38.35434338235213,
            "unit": "iter/sec",
            "range": "stddev: 0.0006762435318364417",
            "extra": "mean: 26.07266640002308 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 36.8275786828399,
            "unit": "iter/sec",
            "range": "stddev: 0.0004168072353050838",
            "extra": "mean: 27.153563600040798 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 36.898813534840656,
            "unit": "iter/sec",
            "range": "stddev: 0.00042835980690368597",
            "extra": "mean: 27.101142400033496 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 37.69327386371179,
            "unit": "iter/sec",
            "range": "stddev: 0.0005988480980482865",
            "extra": "mean: 26.52993219999189 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 36.98161611317913,
            "unit": "iter/sec",
            "range": "stddev: 0.0003995433024215139",
            "extra": "mean: 27.040462400009346 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 32.39041173845637,
            "unit": "iter/sec",
            "range": "stddev: 0.007278958694947271",
            "extra": "mean: 30.873334000034447 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06935088504176107,
            "unit": "iter/sec",
            "range": "stddev: 0.18192437582660143",
            "extra": "mean: 14.419426650400055 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06969594118631997,
            "unit": "iter/sec",
            "range": "stddev: 0.039797541015155216",
            "extra": "mean: 14.348037819400043 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06978594516076454,
            "unit": "iter/sec",
            "range": "stddev: 0.047137981747886526",
            "extra": "mean: 14.329532941000071 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06966453144877295,
            "unit": "iter/sec",
            "range": "stddev: 0.05633333563150144",
            "extra": "mean: 14.354506937800034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06962501413553851,
            "unit": "iter/sec",
            "range": "stddev: 0.1351655420810492",
            "extra": "mean: 14.362654175599982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06979421439554047,
            "unit": "iter/sec",
            "range": "stddev: 0.03853834268121711",
            "extra": "mean: 14.327835174600022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06993335417741664,
            "unit": "iter/sec",
            "range": "stddev: 0.04303893990024088",
            "extra": "mean: 14.299328435799907 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06990857303799497,
            "unit": "iter/sec",
            "range": "stddev: 0.05173106514275302",
            "extra": "mean: 14.304397251199862 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06949123783841073,
            "unit": "iter/sec",
            "range": "stddev: 0.12258530318138788",
            "extra": "mean: 14.390303455599952 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "albertbou92@users.noreply.github.com",
            "name": "Albert Bou",
            "username": "albertbou92"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03616918fbdaa56977900b92914aa4bcee09e4c7",
          "message": "[Example] PPO simplified example (#1004)",
          "timestamp": "2023-04-19T20:08:45+01:00",
          "tree_id": "9b080f28075ba96d28420861ca3636101c11eb6a",
          "url": "https://github.com/BY571/rl/commit/03616918fbdaa56977900b92914aa4bcee09e4c7"
        },
        "date": 1681979188384,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.04395648849313231,
            "unit": "iter/sec",
            "range": "stddev: 0.19682618239991276",
            "extra": "mean: 22.749769926599992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.0807192830126824,
            "unit": "iter/sec",
            "range": "stddev: 0.15896563223396357",
            "extra": "mean: 12.388613509400011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.08251151558790241,
            "unit": "iter/sec",
            "range": "stddev: 0.07434566857948686",
            "extra": "mean: 12.119520443599958 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.7598715179024766,
            "unit": "iter/sec",
            "range": "stddev: 0.04751479943483785",
            "extra": "mean: 1.316011952600047 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4470135724632693,
            "unit": "iter/sec",
            "range": "stddev: 0.056718872993273314",
            "extra": "mean: 2.237068540200016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.28945914971859177,
            "unit": "iter/sec",
            "range": "stddev: 0.05254978446276525",
            "extra": "mean: 3.454718916200045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.34196609194138655,
            "unit": "iter/sec",
            "range": "stddev: 0.06644444737627797",
            "extra": "mean: 2.9242665385999773 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 16.303732393860333,
            "unit": "iter/sec",
            "range": "stddev: 0.0038600846970374596",
            "extra": "mean: 61.33564853999815 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.155416926938062,
            "unit": "iter/sec",
            "range": "stddev: 0.02315237459040791",
            "extra": "mean: 865.488445499991 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2561.6629414195545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000609394454163394",
            "extra": "mean: 390.37141999870073 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 46.505701004154474,
            "unit": "iter/sec",
            "range": "stddev: 0.0014911403367396305",
            "extra": "mean: 21.502740059991083 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.0467146776920104,
            "unit": "iter/sec",
            "range": "stddev: 0.02341410852812439",
            "extra": "mean: 955.3701895200174 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 17.28660010246699,
            "unit": "iter/sec",
            "range": "stddev: 0.0030534628248520576",
            "extra": "mean: 57.848275200008175 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.0565835707947726,
            "unit": "iter/sec",
            "range": "stddev: 0.02146706732179099",
            "extra": "mean: 946.4466679600082 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.19310001811851937,
            "unit": "iter/sec",
            "range": "stddev: 0.013737583339852725",
            "extra": "mean: 5.178663418800033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.18776775072181234,
            "unit": "iter/sec",
            "range": "stddev: 0.027339390105315043",
            "extra": "mean: 5.325728173000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1912229294778962,
            "unit": "iter/sec",
            "range": "stddev: 0.027073439754463174",
            "extra": "mean: 5.229498380399991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.197111941559321,
            "unit": "iter/sec",
            "range": "stddev: 0.139536965351157",
            "extra": "mean: 5.073259347400063 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18709037037213158,
            "unit": "iter/sec",
            "range": "stddev: 0.10419756720797504",
            "extra": "mean: 5.345010531600065 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1926087975816864,
            "unit": "iter/sec",
            "range": "stddev: 0.05053873614100803",
            "extra": "mean: 5.19187084160003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.19461907814675944,
            "unit": "iter/sec",
            "range": "stddev: 0.19072679680343163",
            "extra": "mean: 5.138242404200037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.18890392684373564,
            "unit": "iter/sec",
            "range": "stddev: 0.04952172605431631",
            "extra": "mean: 5.29369620159996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.18763780386057663,
            "unit": "iter/sec",
            "range": "stddev: 0.06375918182572501",
            "extra": "mean: 5.3294164577999705 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 32.51526593360987,
            "unit": "iter/sec",
            "range": "stddev: 0.0009366026398946475",
            "extra": "mean: 30.754784600003404 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.041895664452394,
            "unit": "iter/sec",
            "range": "stddev: 0.001412947891353607",
            "extra": "mean: 34.43301399997836 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 31.060995010175635,
            "unit": "iter/sec",
            "range": "stddev: 0.0009519894877015575",
            "extra": "mean: 32.194718799974 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 31.100487709770515,
            "unit": "iter/sec",
            "range": "stddev: 0.00159710758461926",
            "extra": "mean: 32.15383659999134 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.09557874279572,
            "unit": "iter/sec",
            "range": "stddev: 0.0019406829102122877",
            "extra": "mean: 33.22747199999867 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 30.376471590440403,
            "unit": "iter/sec",
            "range": "stddev: 0.00180573875577914",
            "extra": "mean: 32.92021580000437 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 29.407014435153357,
            "unit": "iter/sec",
            "range": "stddev: 0.004333650804535368",
            "extra": "mean: 34.00549220000357 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 31.164129966729387,
            "unit": "iter/sec",
            "range": "stddev: 0.0018110750674326464",
            "extra": "mean: 32.088173200008896 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 31.45813706206025,
            "unit": "iter/sec",
            "range": "stddev: 0.0005561124853780296",
            "extra": "mean: 31.788277800023934 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04000131683631008,
            "unit": "iter/sec",
            "range": "stddev: 0.08738085665124985",
            "extra": "mean: 24.99917700439996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.03962630134975177,
            "unit": "iter/sec",
            "range": "stddev: 0.1790776965232421",
            "extra": "mean: 25.235764276199962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.039231228199412715,
            "unit": "iter/sec",
            "range": "stddev: 0.2744763554040818",
            "extra": "mean: 25.48989786699999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.039285737273483175,
            "unit": "iter/sec",
            "range": "stddev: 0.19297135814264774",
            "extra": "mean: 25.454530559999785 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03924082744762341,
            "unit": "iter/sec",
            "range": "stddev: 0.1685670594309798",
            "extra": "mean: 25.483662426200045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03979707731410024,
            "unit": "iter/sec",
            "range": "stddev: 0.12346551900926825",
            "extra": "mean: 25.127473359600117 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.039563013650240036,
            "unit": "iter/sec",
            "range": "stddev: 0.13472652776479088",
            "extra": "mean: 25.27613312880003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.040112214858408525,
            "unit": "iter/sec",
            "range": "stddev: 0.1672041659328691",
            "extra": "mean: 24.93006191580007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03989799737773574,
            "unit": "iter/sec",
            "range": "stddev: 0.27573101406472605",
            "extra": "mean: 25.063914625399956 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Sebastian.dittert@gmx.de",
            "name": "Sebastian Dittert",
            "username": "BY571"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a59eca30976d5a38f12871c491b76fcffe74fa4a",
          "message": "[Feature] Target Return Transform (#1045)\n\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-04-20T17:13:43+01:00",
          "tree_id": "b0118ba055e2733151b02a38eb457dd5592d3601",
          "url": "https://github.com/BY571/rl/commit/a59eca30976d5a38f12871c491b76fcffe74fa4a"
        },
        "date": 1682063770805,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07057800563295545,
            "unit": "iter/sec",
            "range": "stddev: 0.08028359440833333",
            "extra": "mean: 14.168720000400004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.12652659340973524,
            "unit": "iter/sec",
            "range": "stddev: 0.09552694609551758",
            "extra": "mean: 7.903476834799994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.12729704170203912,
            "unit": "iter/sec",
            "range": "stddev: 0.22142997860961006",
            "extra": "mean: 7.855642100000045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.298810660920389,
            "unit": "iter/sec",
            "range": "stddev: 0.025200811333475393",
            "extra": "mean: 769.9351646000196 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7230501852862296,
            "unit": "iter/sec",
            "range": "stddev: 0.039030716715037245",
            "extra": "mean: 1.3830298647999597 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.48892699598498174,
            "unit": "iter/sec",
            "range": "stddev: 0.03148034883485685",
            "extra": "mean: 2.0452951222000366 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.5555494035249161,
            "unit": "iter/sec",
            "range": "stddev: 0.08535893154659502",
            "extra": "mean: 1.8000199328000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.881672790394354,
            "unit": "iter/sec",
            "range": "stddev: 0.0003834409025834674",
            "extra": "mean: 35.86585380000997 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.5682705866418438,
            "unit": "iter/sec",
            "range": "stddev: 0.005696831990600647",
            "extra": "mean: 637.6450649000003 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4439.84003430051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000220437513009998",
            "extra": "mean: 225.23334000197792 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.18019516212294,
            "unit": "iter/sec",
            "range": "stddev: 0.00009844837845932936",
            "extra": "mean: 13.301375419996475 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.4420907020429083,
            "unit": "iter/sec",
            "range": "stddev: 0.013110154036540365",
            "extra": "mean: 693.437658660007 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.331259756615747,
            "unit": "iter/sec",
            "range": "stddev: 0.002041269847537154",
            "extra": "mean: 31.917005820005215 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.441718147584398,
            "unit": "iter/sec",
            "range": "stddev: 0.004336004581180659",
            "extra": "mean: 693.6168499200085 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.28434113660967636,
            "unit": "iter/sec",
            "range": "stddev: 0.05123330649344563",
            "extra": "mean: 3.5169023094000296 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2709283817727114,
            "unit": "iter/sec",
            "range": "stddev: 0.019925361184705115",
            "extra": "mean: 3.691012338599967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.26771138182117105,
            "unit": "iter/sec",
            "range": "stddev: 0.04236824518211787",
            "extra": "mean: 3.735366024400082 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2824574653843149,
            "unit": "iter/sec",
            "range": "stddev: 0.043401356724037506",
            "extra": "mean: 3.54035606260004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.27094782658569116,
            "unit": "iter/sec",
            "range": "stddev: 0.02568746609295705",
            "extra": "mean: 3.6907474498000283 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.26804071181660954,
            "unit": "iter/sec",
            "range": "stddev: 0.03515460280465776",
            "extra": "mean: 3.7307765422000103 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2861073676457572,
            "unit": "iter/sec",
            "range": "stddev: 0.01915547126713054",
            "extra": "mean: 3.495191361999969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.25431667851364703,
            "unit": "iter/sec",
            "range": "stddev: 0.4330085506980315",
            "extra": "mean: 3.9321054594000544 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2673315893222477,
            "unit": "iter/sec",
            "range": "stddev: 0.03956140943739556",
            "extra": "mean: 3.7406727821999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 45.68330543711491,
            "unit": "iter/sec",
            "range": "stddev: 0.0006645353901050495",
            "extra": "mean: 21.889834600005997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 43.266136782981775,
            "unit": "iter/sec",
            "range": "stddev: 0.0002477771860817916",
            "extra": "mean: 23.112763799917957 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 43.083347294432215,
            "unit": "iter/sec",
            "range": "stddev: 0.0002014423568550126",
            "extra": "mean: 23.21082420003222 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 45.87371864389266,
            "unit": "iter/sec",
            "range": "stddev: 0.0003845779763221299",
            "extra": "mean: 21.79897399996662 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 43.70160609783151,
            "unit": "iter/sec",
            "range": "stddev: 0.00017080213931738367",
            "extra": "mean: 22.882454199998392 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 43.093657471172556,
            "unit": "iter/sec",
            "range": "stddev: 0.000314701871327259",
            "extra": "mean: 23.205271000006178 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 46.33812847078052,
            "unit": "iter/sec",
            "range": "stddev: 0.00028612501361533057",
            "extra": "mean: 21.580500400023084 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 44.310096232768565,
            "unit": "iter/sec",
            "range": "stddev: 0.00037564714288165004",
            "extra": "mean: 22.56821999994827 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 43.69148137760503,
            "unit": "iter/sec",
            "range": "stddev: 0.0005569170534962851",
            "extra": "mean: 22.887756799946146 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.07270805992543214,
            "unit": "iter/sec",
            "range": "stddev: 0.0645098373819472",
            "extra": "mean: 13.753633380199926 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.07307796409995405,
            "unit": "iter/sec",
            "range": "stddev: 0.04346409198735773",
            "extra": "mean: 13.684015589599994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.0735475042192858,
            "unit": "iter/sec",
            "range": "stddev: 0.03249608935481944",
            "extra": "mean: 13.596654442799945 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.07330893477682034,
            "unit": "iter/sec",
            "range": "stddev: 0.056290598024798764",
            "extra": "mean: 13.640902067999923 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.073895745347249,
            "unit": "iter/sec",
            "range": "stddev: 0.09155499821811569",
            "extra": "mean: 13.532578841999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.07459383793726615,
            "unit": "iter/sec",
            "range": "stddev: 0.031782372639954",
            "extra": "mean: 13.405933085800006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.07463087525217302,
            "unit": "iter/sec",
            "range": "stddev: 0.04988566074186947",
            "extra": "mean: 13.399280078400034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.07491725947199517,
            "unit": "iter/sec",
            "range": "stddev: 0.06464387706956158",
            "extra": "mean: 13.348059005999948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.07445823527864512,
            "unit": "iter/sec",
            "range": "stddev: 0.08505745207937272",
            "extra": "mean: 13.430347848800057 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}