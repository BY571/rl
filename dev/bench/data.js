window.BENCHMARK_DATA = {
  "lastUpdate": 1681300025777,
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
      }
    ]
  }
}