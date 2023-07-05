window.BENCHMARK_DATA = {
  "lastUpdate": 1688545927037,
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
          "id": "8e1af207142814a8ed4270d8bd8a65efc93c5fb1",
          "message": "[BugFix] Fix EnvPoool (#1106)",
          "timestamp": "2023-04-28T11:38:30+01:00",
          "tree_id": "03b2a2f1fe75b42bd33c0d79354a0f6d481c66a5",
          "url": "https://github.com/BY571/rl/commit/8e1af207142814a8ed4270d8bd8a65efc93c5fb1"
        },
        "date": 1682686638085,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.037427798033877156,
            "unit": "iter/sec",
            "range": "stddev: 0.32814074375858476",
            "extra": "mean: 26.718109333999998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.07072351629977738,
            "unit": "iter/sec",
            "range": "stddev: 0.21074302524132077",
            "extra": "mean: 14.139568453600031 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.07001684784672343,
            "unit": "iter/sec",
            "range": "stddev: 0.37538684820038487",
            "extra": "mean: 14.282276776999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.7019849147566668,
            "unit": "iter/sec",
            "range": "stddev: 0.04341629799581403",
            "extra": "mean: 1.424532036200003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.38976103878164076,
            "unit": "iter/sec",
            "range": "stddev: 0.07117540068314547",
            "extra": "mean: 2.5656746070000054 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.2550818856642871,
            "unit": "iter/sec",
            "range": "stddev: 0.04540257589716819",
            "extra": "mean: 3.9203097366000295 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.30842875137326053,
            "unit": "iter/sec",
            "range": "stddev: 0.1486935754945963",
            "extra": "mean: 3.2422398870000277 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 17.371463121858177,
            "unit": "iter/sec",
            "range": "stddev: 0.002810475415823306",
            "extra": "mean: 57.56567498000322 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2150546290546838,
            "unit": "iter/sec",
            "range": "stddev: 0.015938907334138445",
            "extra": "mean: 823.0082632399854 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2585.4454829024994,
            "unit": "iter/sec",
            "range": "stddev: 0.00005144313787125845",
            "extra": "mean: 386.7805399931967 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 49.72390874254538,
            "unit": "iter/sec",
            "range": "stddev: 0.00112661540244858",
            "extra": "mean: 20.111049700008152 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.112383948137972,
            "unit": "iter/sec",
            "range": "stddev: 0.04168285350603944",
            "extra": "mean: 898.9701817199966 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 18.0265674115565,
            "unit": "iter/sec",
            "range": "stddev: 0.004397152483143089",
            "extra": "mean: 55.47367822000979 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.107669588787836,
            "unit": "iter/sec",
            "range": "stddev: 0.018043526476202776",
            "extra": "mean: 902.7962942399972 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.16264180612174592,
            "unit": "iter/sec",
            "range": "stddev: 0.07215419277388162",
            "extra": "mean: 6.14848066339996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.16239349204445572,
            "unit": "iter/sec",
            "range": "stddev: 0.0793264011460078",
            "extra": "mean: 6.157882236600017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1607548729226031,
            "unit": "iter/sec",
            "range": "stddev: 0.06434230239914385",
            "extra": "mean: 6.220651242600025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.16164868856135525,
            "unit": "iter/sec",
            "range": "stddev: 0.04773721958951449",
            "extra": "mean: 6.186254951399997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1613686734951428,
            "unit": "iter/sec",
            "range": "stddev: 0.03465274751073949",
            "extra": "mean: 6.196989653199944 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.16152282444797586,
            "unit": "iter/sec",
            "range": "stddev: 0.11975139434908134",
            "extra": "mean: 6.191075492999971 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.16385551357533956,
            "unit": "iter/sec",
            "range": "stddev: 0.15811198599046922",
            "extra": "mean: 6.1029377540000045 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.158904381049619,
            "unit": "iter/sec",
            "range": "stddev: 0.05460144180201143",
            "extra": "mean: 6.293092697599969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.15954547032756156,
            "unit": "iter/sec",
            "range": "stddev: 0.040831085656791256",
            "extra": "mean: 6.267805647800015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 26.318626206040125,
            "unit": "iter/sec",
            "range": "stddev: 0.0038988188828645606",
            "extra": "mean: 37.99590419998822 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 26.333627595808764,
            "unit": "iter/sec",
            "range": "stddev: 0.0018576909210521817",
            "extra": "mean: 37.97425920001842 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 27.455191027958836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005038136545245989",
            "extra": "mean: 36.422984599948904 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 27.842115648030795,
            "unit": "iter/sec",
            "range": "stddev: 0.0009371784080708435",
            "extra": "mean: 35.91681079992668 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 26.70841783518708,
            "unit": "iter/sec",
            "range": "stddev: 0.0018602987161620928",
            "extra": "mean: 37.44137920002686 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 27.066737588743482,
            "unit": "iter/sec",
            "range": "stddev: 0.0028003458856210987",
            "extra": "mean: 36.94571599999108 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 27.190412451714593,
            "unit": "iter/sec",
            "range": "stddev: 0.004528675747742667",
            "extra": "mean: 36.77766940004403 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 26.869819122666613,
            "unit": "iter/sec",
            "range": "stddev: 0.0018641393232028361",
            "extra": "mean: 37.216476800040255 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 27.8780820328051,
            "unit": "iter/sec",
            "range": "stddev: 0.0019661197877021987",
            "extra": "mean: 35.87047339997298 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.03445021822586401,
            "unit": "iter/sec",
            "range": "stddev: 0.48877603791042484",
            "extra": "mean: 29.027392321400022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.034189643667906035,
            "unit": "iter/sec",
            "range": "stddev: 0.4343810641852121",
            "extra": "mean: 29.248623054200017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.034043824152502865,
            "unit": "iter/sec",
            "range": "stddev: 0.3751770392551261",
            "extra": "mean: 29.373903340599917 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.034255133170057545,
            "unit": "iter/sec",
            "range": "stddev: 0.5351638284208622",
            "extra": "mean: 29.19270507680003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03437040731603884,
            "unit": "iter/sec",
            "range": "stddev: 0.2690822158132409",
            "extra": "mean: 29.094796311399932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.034679341614646274,
            "unit": "iter/sec",
            "range": "stddev: 0.39050778408896375",
            "extra": "mean: 28.835610869200174 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.034706195606301685,
            "unit": "iter/sec",
            "range": "stddev: 0.4028537621466123",
            "extra": "mean: 28.813299254800132 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03514138815841274,
            "unit": "iter/sec",
            "range": "stddev: 0.32963539781015794",
            "extra": "mean: 28.456474043999968 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03435667881867355,
            "unit": "iter/sec",
            "range": "stddev: 0.4572378083099509",
            "extra": "mean: 29.10642222660008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rohitnigam@gmail.com",
            "name": "Rohit Nigam",
            "username": "rohitnig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a93629d255a1c79f1e49b63536451e21cde3783",
          "message": "Added the entry for skip-tests in the environment.yml (#1113)",
          "timestamp": "2023-05-01T04:48:01+01:00",
          "tree_id": "0ee298a226ed34319e0cdca2556e40726f42550a",
          "url": "https://github.com/BY571/rl/commit/7a93629d255a1c79f1e49b63536451e21cde3783"
        },
        "date": 1683014798116,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.039832352863539255,
            "unit": "iter/sec",
            "range": "stddev: 0.19978941049773408",
            "extra": "mean: 25.105220457999984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.07246035850742427,
            "unit": "iter/sec",
            "range": "stddev: 0.0702279479238781",
            "extra": "mean: 13.800649356400026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.07366888279214112,
            "unit": "iter/sec",
            "range": "stddev: 0.08340119656322854",
            "extra": "mean: 13.57425227719998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.7520673328097026,
            "unit": "iter/sec",
            "range": "stddev: 0.04435016528837726",
            "extra": "mean: 1.329668177800022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.41920006400145077,
            "unit": "iter/sec",
            "range": "stddev: 0.04941076797250581",
            "extra": "mean: 2.385495819000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.27547268353221865,
            "unit": "iter/sec",
            "range": "stddev: 0.04507593434628411",
            "extra": "mean: 3.6301240006000173 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3253765634622501,
            "unit": "iter/sec",
            "range": "stddev: 0.03478180767463461",
            "extra": "mean: 3.0733621049999784 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 18.199518908166826,
            "unit": "iter/sec",
            "range": "stddev: 0.008659692219517989",
            "extra": "mean: 54.94650737999791 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2106596980399722,
            "unit": "iter/sec",
            "range": "stddev: 0.015571259159601641",
            "extra": "mean: 825.9959438799979 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3000.349360630602,
            "unit": "iter/sec",
            "range": "stddev: 0.00004493174765520669",
            "extra": "mean: 333.29452000543824 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 57.54545004382775,
            "unit": "iter/sec",
            "range": "stddev: 0.0012358223141788777",
            "extra": "mean: 17.37756850000096 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1128477565522528,
            "unit": "iter/sec",
            "range": "stddev: 0.06213640564282005",
            "extra": "mean: 898.5955123799954 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 20.834724910650397,
            "unit": "iter/sec",
            "range": "stddev: 0.0023336033275665772",
            "extra": "mean: 47.9967940200072 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1080829233592717,
            "unit": "iter/sec",
            "range": "stddev: 0.024279480554581838",
            "extra": "mean: 902.4595352199754 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.18089488597270276,
            "unit": "iter/sec",
            "range": "stddev: 0.08859566765147388",
            "extra": "mean: 5.5280722537999285 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.17352571246823575,
            "unit": "iter/sec",
            "range": "stddev: 0.045978379772218005",
            "extra": "mean: 5.762834716400039 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.17198926702574965,
            "unit": "iter/sec",
            "range": "stddev: 0.035620454521188005",
            "extra": "mean: 5.814316307600075 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.18312715644638464,
            "unit": "iter/sec",
            "range": "stddev: 0.07948679318264285",
            "extra": "mean: 5.460686549199909 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1745056998636026,
            "unit": "iter/sec",
            "range": "stddev: 0.06993314304137509",
            "extra": "mean: 5.730471845800002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.17365470849441567,
            "unit": "iter/sec",
            "range": "stddev: 0.07419363281059899",
            "extra": "mean: 5.758553906599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1806276198546079,
            "unit": "iter/sec",
            "range": "stddev: 0.09292257747802456",
            "extra": "mean: 5.536251880000009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.17339179088122322,
            "unit": "iter/sec",
            "range": "stddev: 0.05338000406892405",
            "extra": "mean: 5.767285722799988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.17409581853954764,
            "unit": "iter/sec",
            "range": "stddev: 0.03866468544871003",
            "extra": "mean: 5.743963343799896 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 30.469306664752505,
            "unit": "iter/sec",
            "range": "stddev: 0.0009538744467263012",
            "extra": "mean: 32.81991319995541 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.17227048959747,
            "unit": "iter/sec",
            "range": "stddev: 0.0012774576442817918",
            "extra": "mean: 34.27912820006895 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 26.037993682111185,
            "unit": "iter/sec",
            "range": "stddev: 0.004245490055385524",
            "extra": "mean: 38.40541680010574 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 29.25397102320568,
            "unit": "iter/sec",
            "range": "stddev: 0.00295446922893263",
            "extra": "mean: 34.18339340005332 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 27.83818338795774,
            "unit": "iter/sec",
            "range": "stddev: 0.002562716264805218",
            "extra": "mean: 35.921884199979104 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 28.43430616099214,
            "unit": "iter/sec",
            "range": "stddev: 0.0015061747892010893",
            "extra": "mean: 35.168784999996205 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 29.570239971109466,
            "unit": "iter/sec",
            "range": "stddev: 0.0024881362944755583",
            "extra": "mean: 33.81778440002563 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 28.705376222456273,
            "unit": "iter/sec",
            "range": "stddev: 0.0013824761027790935",
            "extra": "mean: 34.83667979999154 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 29.039831596376242,
            "unit": "iter/sec",
            "range": "stddev: 0.0013413269204041176",
            "extra": "mean: 34.43546140001672 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.03549766158764882,
            "unit": "iter/sec",
            "range": "stddev: 0.23527829353985122",
            "extra": "mean: 28.170869721400003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.036089869167236624,
            "unit": "iter/sec",
            "range": "stddev: 0.2470401266015935",
            "extra": "mean: 27.708606960199994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03564198333852624,
            "unit": "iter/sec",
            "range": "stddev: 0.19163109101329137",
            "extra": "mean: 28.05680005239992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.034862567258169545,
            "unit": "iter/sec",
            "range": "stddev: 0.6937341489529015",
            "extra": "mean: 28.68406083220002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.034992228058745405,
            "unit": "iter/sec",
            "range": "stddev: 0.19468018845495103",
            "extra": "mean: 28.577774422399944 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.035280386768902265,
            "unit": "iter/sec",
            "range": "stddev: 0.2214878490144209",
            "extra": "mean: 28.344360467200023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.035475335190306795,
            "unit": "iter/sec",
            "range": "stddev: 0.47081672485300463",
            "extra": "mean: 28.188599054399855 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03599763174377064,
            "unit": "iter/sec",
            "range": "stddev: 0.3022016895401452",
            "extra": "mean: 27.779605256199922 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.036143167392340476,
            "unit": "iter/sec",
            "range": "stddev: 0.39477568569431337",
            "extra": "mean: 27.667746690399962 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mischab@users.noreply.github.com",
            "name": "Mischa Böhm",
            "username": "mischab"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "697a278047ddca035db680717bf497981611b22e",
          "message": "Revert \"Fix in windows unit test\" (#1117)",
          "timestamp": "2023-05-03T09:10:46+02:00",
          "tree_id": "b4859432e516ca1ee47e0a6863e323dc0e748ec1",
          "url": "https://github.com/BY571/rl/commit/697a278047ddca035db680717bf497981611b22e"
        },
        "date": 1683187858682,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05379710851200675,
            "unit": "iter/sec",
            "range": "stddev: 0.054485792392716795",
            "extra": "mean: 18.588359628600006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09949309106045642,
            "unit": "iter/sec",
            "range": "stddev: 0.0423723970368774",
            "extra": "mean: 10.050949159800007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10056905187155175,
            "unit": "iter/sec",
            "range": "stddev: 0.04342687813436026",
            "extra": "mean: 9.943416800599994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9870145628112137,
            "unit": "iter/sec",
            "range": "stddev: 0.04079224296525558",
            "extra": "mean: 1.0131562772000051 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5489998972742184,
            "unit": "iter/sec",
            "range": "stddev: 0.03454617033991838",
            "extra": "mean: 1.8214939655999842 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3703797173826612,
            "unit": "iter/sec",
            "range": "stddev: 0.0317460310734526",
            "extra": "mean: 2.699931861999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4310620596937606,
            "unit": "iter/sec",
            "range": "stddev: 0.05915629066890087",
            "extra": "mean: 2.3198515794000287 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.423292190972674,
            "unit": "iter/sec",
            "range": "stddev: 0.001123541426837581",
            "extra": "mean: 36.46535189998758 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.4129281236789146,
            "unit": "iter/sec",
            "range": "stddev: 0.0069140843262828836",
            "extra": "mean: 707.7500852599974 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3397.9027737639312,
            "unit": "iter/sec",
            "range": "stddev: 0.00002894707792621017",
            "extra": "mean: 294.29917998868405 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 74.42313544859852,
            "unit": "iter/sec",
            "range": "stddev: 0.00009905623548686533",
            "extra": "mean: 13.436681939995196 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2980383941346683,
            "unit": "iter/sec",
            "range": "stddev: 0.002773285928815777",
            "extra": "mean: 770.3932368399978 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.268666025618707,
            "unit": "iter/sec",
            "range": "stddev: 0.00013487934786253163",
            "extra": "mean: 31.980897399994316 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2983986418767153,
            "unit": "iter/sec",
            "range": "stddev: 0.006030049426923315",
            "extra": "mean: 770.1794870599929 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2109200067652538,
            "unit": "iter/sec",
            "range": "stddev: 0.0450229012725408",
            "extra": "mean: 4.741133927200008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.20519111172270824,
            "unit": "iter/sec",
            "range": "stddev: 0.03201731582426179",
            "extra": "mean: 4.8735054438000365 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20578900496158353,
            "unit": "iter/sec",
            "range": "stddev: 0.03096457598244138",
            "extra": "mean: 4.859346106399994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.20954267746492122,
            "unit": "iter/sec",
            "range": "stddev: 0.039153272191464104",
            "extra": "mean: 4.7722975199999835 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20508480461489192,
            "unit": "iter/sec",
            "range": "stddev: 0.019548719256858697",
            "extra": "mean: 4.876031658599959 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2058438958356731,
            "unit": "iter/sec",
            "range": "stddev: 0.009188038047082406",
            "extra": "mean: 4.858050300400009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.20716808743067952,
            "unit": "iter/sec",
            "range": "stddev: 0.022708459180138117",
            "extra": "mean: 4.826998271799994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20424736279808292,
            "unit": "iter/sec",
            "range": "stddev: 0.0297765200903068",
            "extra": "mean: 4.896024048000027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.20680421182368305,
            "unit": "iter/sec",
            "range": "stddev: 0.013925219713995256",
            "extra": "mean: 4.835491459199966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.398108907633,
            "unit": "iter/sec",
            "range": "stddev: 0.00031969380631613985",
            "extra": "mean: 29.071365599929777 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.21806796623088,
            "unit": "iter/sec",
            "range": "stddev: 0.0004598982727993586",
            "extra": "mean: 30.104098799984058 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.25613321082503,
            "unit": "iter/sec",
            "range": "stddev: 0.00017185449284380817",
            "extra": "mean: 30.069641399995817 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 33.51124722575077,
            "unit": "iter/sec",
            "range": "stddev: 0.0010025366702129382",
            "extra": "mean: 29.840727600003447 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 32.86941982018284,
            "unit": "iter/sec",
            "range": "stddev: 0.0002873119611427231",
            "extra": "mean: 30.423415000041132 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.0714843441999,
            "unit": "iter/sec",
            "range": "stddev: 0.0002827837301075386",
            "extra": "mean: 30.237529999931212 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 33.87683038979406,
            "unit": "iter/sec",
            "range": "stddev: 0.00026336535000206715",
            "extra": "mean: 29.518700199923842 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 32.91053194882901,
            "unit": "iter/sec",
            "range": "stddev: 0.000592778784135295",
            "extra": "mean: 30.38540979996469 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.09180989085788,
            "unit": "iter/sec",
            "range": "stddev: 0.00021171382657709365",
            "extra": "mean: 30.218957600027352 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05272586136737857,
            "unit": "iter/sec",
            "range": "stddev: 0.12560555251120586",
            "extra": "mean: 18.966024908199962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.052835151501933166,
            "unit": "iter/sec",
            "range": "stddev: 0.08878862342327593",
            "extra": "mean: 18.92679346179998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05305951554857277,
            "unit": "iter/sec",
            "range": "stddev: 0.07605479263484981",
            "extra": "mean: 18.846760843199945 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05355258803078606,
            "unit": "iter/sec",
            "range": "stddev: 0.08177133680644447",
            "extra": "mean: 18.673233858000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.053273742506931926,
            "unit": "iter/sec",
            "range": "stddev: 0.08944508061464268",
            "extra": "mean: 18.770973333999972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05351690969826912,
            "unit": "iter/sec",
            "range": "stddev: 0.03711919246470844",
            "extra": "mean: 18.685682817600036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05345511877910229,
            "unit": "iter/sec",
            "range": "stddev: 0.07560466803908149",
            "extra": "mean: 18.707282349000025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05327064011364175,
            "unit": "iter/sec",
            "range": "stddev: 0.04726980320497183",
            "extra": "mean: 18.7720665242 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05342408503971665,
            "unit": "iter/sec",
            "range": "stddev: 0.0990886381870965",
            "extra": "mean: 18.718149300200047 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "osalpekar@gmail.com",
            "name": "Omkar Salpekar",
            "username": "osalpekar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "257f152ebedc397478b6fa38d3a6a7e446ff5087",
          "message": "[Nova] Remove CircleCI Wheels Builds (#1121)",
          "timestamp": "2023-05-04T10:50:35+01:00",
          "tree_id": "4900fb7a97cd416d07aa48912e94320df4ceb3f2",
          "url": "https://github.com/BY571/rl/commit/257f152ebedc397478b6fa38d3a6a7e446ff5087"
        },
        "date": 1683197929834,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05303005989012999,
            "unit": "iter/sec",
            "range": "stddev: 0.05134602436248936",
            "extra": "mean: 18.857229316199984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09803465622512642,
            "unit": "iter/sec",
            "range": "stddev: 0.08290135176379666",
            "extra": "mean: 10.200474388399993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09868578142736047,
            "unit": "iter/sec",
            "range": "stddev: 0.04082910243497056",
            "extra": "mean: 10.133172028800004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9590537581565823,
            "unit": "iter/sec",
            "range": "stddev: 0.04541331004550174",
            "extra": "mean: 1.0426944178000213 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5422193432476404,
            "unit": "iter/sec",
            "range": "stddev: 0.039949490306407515",
            "extra": "mean: 1.8442720874000316 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.36855898774149226,
            "unit": "iter/sec",
            "range": "stddev: 0.045417486591081184",
            "extra": "mean: 2.7132698787999745 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4271119044075776,
            "unit": "iter/sec",
            "range": "stddev: 0.06216895014480453",
            "extra": "mean: 2.3413067855999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.848391179561162,
            "unit": "iter/sec",
            "range": "stddev: 0.00041615144381507813",
            "extra": "mean: 35.90871707999895 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2665427804567082,
            "unit": "iter/sec",
            "range": "stddev: 0.005527266634334942",
            "extra": "mean: 789.5509061600001 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2894.011907386692,
            "unit": "iter/sec",
            "range": "stddev: 0.00022530995774109862",
            "extra": "mean: 345.54107999611006 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.95975853745168,
            "unit": "iter/sec",
            "range": "stddev: 0.00017905291625756626",
            "extra": "mean: 13.164865439994173 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.150420630386552,
            "unit": "iter/sec",
            "range": "stddev: 0.04204242845825445",
            "extra": "mean: 869.2472766800006 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.55436032380567,
            "unit": "iter/sec",
            "range": "stddev: 0.000310180026417186",
            "extra": "mean: 31.691341219982405 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.1563555553707217,
            "unit": "iter/sec",
            "range": "stddev: 0.01202667630461592",
            "extra": "mean: 864.7859175799999 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2040434092345225,
            "unit": "iter/sec",
            "range": "stddev: 0.03318391973823953",
            "extra": "mean: 4.900917916200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2007104783633881,
            "unit": "iter/sec",
            "range": "stddev: 0.03392004089627325",
            "extra": "mean: 4.982300915000019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.20039550087314079,
            "unit": "iter/sec",
            "range": "stddev: 0.02970906738612971",
            "extra": "mean: 4.990131992199986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.20579365656642368,
            "unit": "iter/sec",
            "range": "stddev: 0.04671833242859833",
            "extra": "mean: 4.8592362693999345 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19873976921434142,
            "unit": "iter/sec",
            "range": "stddev: 0.024098284495183933",
            "extra": "mean: 5.031705551199957 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20075616275829167,
            "unit": "iter/sec",
            "range": "stddev: 0.02397911891076771",
            "extra": "mean: 4.9811671345999455 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.20610030514984845,
            "unit": "iter/sec",
            "range": "stddev: 0.016636332304604883",
            "extra": "mean: 4.852006401800009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1999904993953272,
            "unit": "iter/sec",
            "range": "stddev: 0.02507269717770268",
            "extra": "mean: 5.000237526400042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.20085611774783313,
            "unit": "iter/sec",
            "range": "stddev: 0.02808762788363643",
            "extra": "mean: 4.978688282999974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 33.27309505664619,
            "unit": "iter/sec",
            "range": "stddev: 0.0004562777446603258",
            "extra": "mean: 30.054312599941113 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 31.701411857908017,
            "unit": "iter/sec",
            "range": "stddev: 0.0007607514769069363",
            "extra": "mean: 31.54433639997478 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 32.02164950413999,
            "unit": "iter/sec",
            "range": "stddev: 0.00023489280758387472",
            "extra": "mean: 31.22887220006305 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 33.437490000025356,
            "unit": "iter/sec",
            "range": "stddev: 0.00046983324796796876",
            "extra": "mean: 29.90655100006734 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 32.012799383029666,
            "unit": "iter/sec",
            "range": "stddev: 0.00029268603065763296",
            "extra": "mean: 31.23750560002918 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.11479709119169,
            "unit": "iter/sec",
            "range": "stddev: 0.0005149291887420151",
            "extra": "mean: 31.1382942000364 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 33.01273456329768,
            "unit": "iter/sec",
            "range": "stddev: 0.0004013382117005031",
            "extra": "mean: 30.29134100002011 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 32.06961456419467,
            "unit": "iter/sec",
            "range": "stddev: 0.00025549928603370623",
            "extra": "mean: 31.18216460002259 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 32.17961953106549,
            "unit": "iter/sec",
            "range": "stddev: 0.00022646053757940934",
            "extra": "mean: 31.075569399899905 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05226892781625798,
            "unit": "iter/sec",
            "range": "stddev: 0.12895316719114597",
            "extra": "mean: 19.131825384199963 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.0526319531915807,
            "unit": "iter/sec",
            "range": "stddev: 0.07569360314706826",
            "extra": "mean: 18.999864898800023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.052658121139743524,
            "unit": "iter/sec",
            "range": "stddev: 0.04959065801769382",
            "extra": "mean: 18.99042309820002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05277448900212281,
            "unit": "iter/sec",
            "range": "stddev: 0.06630163632562554",
            "extra": "mean: 18.94854917419998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.052454501799506774,
            "unit": "iter/sec",
            "range": "stddev: 0.14467646039168527",
            "extra": "mean: 19.064140649399953 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.0527587646629496,
            "unit": "iter/sec",
            "range": "stddev: 0.036504064367229104",
            "extra": "mean: 18.95419664180008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.052752528006731365,
            "unit": "iter/sec",
            "range": "stddev: 0.06795545764425943",
            "extra": "mean: 18.956437497600064 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.052537365603650514,
            "unit": "iter/sec",
            "range": "stddev: 0.039219938569195104",
            "extra": "mean: 19.034072007800024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05235760337174832,
            "unit": "iter/sec",
            "range": "stddev: 0.062071924370373566",
            "extra": "mean: 19.09942273140009 sec\nrounds: 5"
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
          "id": "0452133c7e8bc4310328a638ea23567ffeb5378f",
          "message": "[BugFix] Instruct the value key to PPOLoss (#1124)\n\nCo-authored-by: xmaples <5900204+xmaples@users.noreply.github.com>",
          "timestamp": "2023-05-04T16:05:42+01:00",
          "tree_id": "aebc014637c9eb1768362fffcf9912eae177819b",
          "url": "https://github.com/BY571/rl/commit/0452133c7e8bc4310328a638ea23567ffeb5378f"
        },
        "date": 1683270668320,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.053883060607007066,
            "unit": "iter/sec",
            "range": "stddev: 0.017581135735423085",
            "extra": "mean: 18.558708223600014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.1005048275152533,
            "unit": "iter/sec",
            "range": "stddev: 0.03726020255026121",
            "extra": "mean: 9.949770819200035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10102951106305509,
            "unit": "iter/sec",
            "range": "stddev: 0.052480427897595196",
            "extra": "mean: 9.898097986200037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9926834337007304,
            "unit": "iter/sec",
            "range": "stddev: 0.04112920882737652",
            "extra": "mean: 1.007370492999962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5533842037717058,
            "unit": "iter/sec",
            "range": "stddev: 0.03281264146136742",
            "extra": "mean: 1.8070627842000022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.37229362636557517,
            "unit": "iter/sec",
            "range": "stddev: 0.02794178794674615",
            "extra": "mean: 2.6860518933999855 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4368524587225327,
            "unit": "iter/sec",
            "range": "stddev: 0.0316535413110919",
            "extra": "mean: 2.2891023731999893 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 28.06639663410698,
            "unit": "iter/sec",
            "range": "stddev: 0.0008020997795623216",
            "extra": "mean: 35.629796479993274 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3818376611445238,
            "unit": "iter/sec",
            "range": "stddev: 0.018128204113103646",
            "extra": "mean: 723.6740089799969 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3873.3444260272363,
            "unit": "iter/sec",
            "range": "stddev: 0.000030053831449939787",
            "extra": "mean: 258.17482000320524 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.5259358074723,
            "unit": "iter/sec",
            "range": "stddev: 0.00013251164044257585",
            "extra": "mean: 13.067465159992935 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.2664726768674117,
            "unit": "iter/sec",
            "range": "stddev: 0.03530979701216665",
            "extra": "mean: 789.5946104999871 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.503317486786333,
            "unit": "iter/sec",
            "range": "stddev: 0.0001779867894367364",
            "extra": "mean: 31.74268869998968 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2755569107455333,
            "unit": "iter/sec",
            "range": "stddev: 0.005051254376643748",
            "extra": "mean: 783.9712925200047 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.21498508667221797,
            "unit": "iter/sec",
            "range": "stddev: 0.032890753948774276",
            "extra": "mean: 4.651485437800034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.2087904486498878,
            "unit": "iter/sec",
            "range": "stddev: 0.03766123034974216",
            "extra": "mean: 4.7894911211999895 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2096468059417206,
            "unit": "iter/sec",
            "range": "stddev: 0.02125299575122282",
            "extra": "mean: 4.769927190200019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.21580686578350783,
            "unit": "iter/sec",
            "range": "stddev: 0.019251271044559228",
            "extra": "mean: 4.633772870800021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2093316004022228,
            "unit": "iter/sec",
            "range": "stddev: 0.023286156272698623",
            "extra": "mean: 4.777109610199977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20896369679960305,
            "unit": "iter/sec",
            "range": "stddev: 0.0410134784934628",
            "extra": "mean: 4.785520237799983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.21633801464007327,
            "unit": "iter/sec",
            "range": "stddev: 0.028216061378453765",
            "extra": "mean: 4.62239612240005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20913875775526833,
            "unit": "iter/sec",
            "range": "stddev: 0.012774584364778113",
            "extra": "mean: 4.781514487000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2098525020605908,
            "unit": "iter/sec",
            "range": "stddev: 0.022236727936558044",
            "extra": "mean: 4.765251737200015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.7954521508574,
            "unit": "iter/sec",
            "range": "stddev: 0.0002849983257835455",
            "extra": "mean: 28.739388000030885 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 33.724843012265175,
            "unit": "iter/sec",
            "range": "stddev: 0.0003316145243712007",
            "extra": "mean: 29.65173180009515 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.85704768980527,
            "unit": "iter/sec",
            "range": "stddev: 0.0003546460066969609",
            "extra": "mean: 29.535948000011558 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 34.70233031626344,
            "unit": "iter/sec",
            "range": "stddev: 0.00028558405405283444",
            "extra": "mean: 28.816508600039015 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 33.765703618339934,
            "unit": "iter/sec",
            "range": "stddev: 0.0003340758613752597",
            "extra": "mean: 29.615849600031652 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 33.81676792805967,
            "unit": "iter/sec",
            "range": "stddev: 0.00025762435213264994",
            "extra": "mean: 29.57112879998931 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 35.29214452550751,
            "unit": "iter/sec",
            "range": "stddev: 0.00039293279891511226",
            "extra": "mean: 28.334917400025006 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 33.72868842701737,
            "unit": "iter/sec",
            "range": "stddev: 0.00037926628892919514",
            "extra": "mean: 29.648351200012257 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.87310303679329,
            "unit": "iter/sec",
            "range": "stddev: 0.00037470655160011605",
            "extra": "mean: 29.5219483999972 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0529078925665855,
            "unit": "iter/sec",
            "range": "stddev: 0.16494530602423618",
            "extra": "mean: 18.90077172780002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05302291941749425,
            "unit": "iter/sec",
            "range": "stddev: 0.08070874311430368",
            "extra": "mean: 18.859768775199928 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05311662389938256,
            "unit": "iter/sec",
            "range": "stddev: 0.014947739669093707",
            "extra": "mean: 18.82649774380002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05337938913176916,
            "unit": "iter/sec",
            "range": "stddev: 0.07029273465583116",
            "extra": "mean: 18.733822478400043 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.053175298252163404,
            "unit": "iter/sec",
            "range": "stddev: 0.05980830514428116",
            "extra": "mean: 18.805724328199993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05341263933601406,
            "unit": "iter/sec",
            "range": "stddev: 0.04522088259107073",
            "extra": "mean: 18.72216038060001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.053496882326030115,
            "unit": "iter/sec",
            "range": "stddev: 0.05253920888373697",
            "extra": "mean: 18.692678087400008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05328757299692496,
            "unit": "iter/sec",
            "range": "stddev: 0.05950161698854032",
            "extra": "mean: 18.76610143339999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05324767728395837,
            "unit": "iter/sec",
            "range": "stddev: 0.08732265257278604",
            "extra": "mean: 18.780161896400024 sec\nrounds: 5"
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
          "id": "09f71b16fb984c3a8af5b2490e7b6e969ae145f9",
          "message": "[Feature] CatFrames for offline data (#1122)",
          "timestamp": "2023-05-05T07:49:24+01:00",
          "tree_id": "13899ae601ac071a9457713c74aed5b27e86a9b5",
          "url": "https://github.com/BY571/rl/commit/09f71b16fb984c3a8af5b2490e7b6e969ae145f9"
        },
        "date": 1683271451118,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05244276072940045,
            "unit": "iter/sec",
            "range": "stddev: 0.024620919406045834",
            "extra": "mean: 19.0684087964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09662112890116972,
            "unit": "iter/sec",
            "range": "stddev: 0.0965142357236785",
            "extra": "mean: 10.349703127799966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09670122796436291,
            "unit": "iter/sec",
            "range": "stddev: 0.06285634838570403",
            "extra": "mean: 10.34113031500001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9537353772414457,
            "unit": "iter/sec",
            "range": "stddev: 0.04831707395387893",
            "extra": "mean: 1.0485088672000074 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5312676661009178,
            "unit": "iter/sec",
            "range": "stddev: 0.04060358433328449",
            "extra": "mean: 1.882290347800017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.36121456504153104,
            "unit": "iter/sec",
            "range": "stddev: 0.03971982838065076",
            "extra": "mean: 2.768437645599988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.40920769097287746,
            "unit": "iter/sec",
            "range": "stddev: 0.055421715778318045",
            "extra": "mean: 2.443746835800016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 26.94256843924273,
            "unit": "iter/sec",
            "range": "stddev: 0.00036665350525312134",
            "extra": "mean: 37.11598625999841 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.242466111510362,
            "unit": "iter/sec",
            "range": "stddev: 0.008433726838038759",
            "extra": "mean: 804.8509257000046 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2196.1160632851265,
            "unit": "iter/sec",
            "range": "stddev: 0.00014796004336632373",
            "extra": "mean: 455.3493400089792 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 71.67980679623061,
            "unit": "iter/sec",
            "range": "stddev: 0.00008746162582464549",
            "extra": "mean: 13.950930459993742 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.1393488772426617,
            "unit": "iter/sec",
            "range": "stddev: 0.017628909048840517",
            "extra": "mean: 877.6942865999922 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 30.026483749012293,
            "unit": "iter/sec",
            "range": "stddev: 0.000163388495052356",
            "extra": "mean: 33.30393289999847 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.134662840513131,
            "unit": "iter/sec",
            "range": "stddev: 0.012201872881275442",
            "extra": "mean: 881.3190705599982 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.19928252961321394,
            "unit": "iter/sec",
            "range": "stddev: 0.049403408999492804",
            "extra": "mean: 5.018001336800035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.19322093548267186,
            "unit": "iter/sec",
            "range": "stddev: 0.021245490608240117",
            "extra": "mean: 5.17542261919998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.19406469533226914,
            "unit": "iter/sec",
            "range": "stddev: 0.030941860749928957",
            "extra": "mean: 5.152920773599976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.1984747567277812,
            "unit": "iter/sec",
            "range": "stddev: 0.04782867420671196",
            "extra": "mean: 5.038424112400117 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19483423848450282,
            "unit": "iter/sec",
            "range": "stddev: 0.011471011531921054",
            "extra": "mean: 5.132568114200012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1939759409365488,
            "unit": "iter/sec",
            "range": "stddev: 0.032796109884060946",
            "extra": "mean: 5.155278511200049 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.20047184259714457,
            "unit": "iter/sec",
            "range": "stddev: 0.019978718541627187",
            "extra": "mean: 4.988231698999925 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.19411207572573297,
            "unit": "iter/sec",
            "range": "stddev: 0.03990648304313624",
            "extra": "mean: 5.15166300840001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.19320537377133,
            "unit": "iter/sec",
            "range": "stddev: 0.12307998546997946",
            "extra": "mean: 5.175839473199948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 32.30329204268461,
            "unit": "iter/sec",
            "range": "stddev: 0.0004999446884865393",
            "extra": "mean: 30.956597200020042 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 31.107445078049178,
            "unit": "iter/sec",
            "range": "stddev: 0.00032942045875205156",
            "extra": "mean: 32.14664519991857 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 31.461044026036273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002397338948385309",
            "extra": "mean: 31.78534060002676 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 32.068902474180184,
            "unit": "iter/sec",
            "range": "stddev: 0.0004969139935024795",
            "extra": "mean: 31.182857000021613 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 31.24160186690182,
            "unit": "iter/sec",
            "range": "stddev: 0.0005541877189784298",
            "extra": "mean: 32.008601999996245 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 30.965405090236917,
            "unit": "iter/sec",
            "range": "stddev: 0.0006106667086144093",
            "extra": "mean: 32.29410359999747 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 31.343952518181283,
            "unit": "iter/sec",
            "range": "stddev: 0.000510461707420424",
            "extra": "mean: 31.90408099999331 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 30.92002726655532,
            "unit": "iter/sec",
            "range": "stddev: 0.0005370427714527544",
            "extra": "mean: 32.341497999959756 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 30.878345912780222,
            "unit": "iter/sec",
            "range": "stddev: 0.0004173387725389613",
            "extra": "mean: 32.385154399935345 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.050858904296924586,
            "unit": "iter/sec",
            "range": "stddev: 0.14954361645888922",
            "extra": "mean: 19.662240345600004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.051550179085244376,
            "unit": "iter/sec",
            "range": "stddev: 0.03329336254426507",
            "extra": "mean: 19.398574704199973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.051632444079766845,
            "unit": "iter/sec",
            "range": "stddev: 0.0857856887098025",
            "extra": "mean: 19.367667322800024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05182257723474809,
            "unit": "iter/sec",
            "range": "stddev: 0.05885264643031439",
            "extra": "mean: 19.296608801799994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05151078643120078,
            "unit": "iter/sec",
            "range": "stddev: 0.16691613482287887",
            "extra": "mean: 19.41340968139998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05198205306655634,
            "unit": "iter/sec",
            "range": "stddev: 0.017246017169230528",
            "extra": "mean: 19.237408701799996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.051890931892283804,
            "unit": "iter/sec",
            "range": "stddev: 0.10616275385535037",
            "extra": "mean: 19.271189850200017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.0517082975733552,
            "unit": "iter/sec",
            "range": "stddev: 0.05976106867538983",
            "extra": "mean: 19.339255920800042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.051872649074198904,
            "unit": "iter/sec",
            "range": "stddev: 0.07716917848173611",
            "extra": "mean: 19.277982093599938 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55539777+matteobettini@users.noreply.github.com",
            "name": "Matteo Bettini",
            "username": "matteobettini"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c68e83939dbcff4f5128a94ec9eb49d758da37eb",
          "message": "[Performance] Vmas vectorized reset (#1146)",
          "timestamp": "2023-05-11T09:53:36+01:00",
          "tree_id": "f96567b610082e9185cf36cbaac07949fb65db31",
          "url": "https://github.com/BY571/rl/commit/c68e83939dbcff4f5128a94ec9eb49d758da37eb"
        },
        "date": 1683881235848,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.035429047079797514,
            "unit": "iter/sec",
            "range": "stddev: 0.28120089634018347",
            "extra": "mean: 28.22542750719998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.06616095108628745,
            "unit": "iter/sec",
            "range": "stddev: 0.3404751684458842",
            "extra": "mean: 15.114655753599958 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.06684841116153714,
            "unit": "iter/sec",
            "range": "stddev: 0.2011746905497447",
            "extra": "mean: 14.959218665399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.6544207973402858,
            "unit": "iter/sec",
            "range": "stddev: 0.06397012563965095",
            "extra": "mean: 1.5280687961999775 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.36396376269948133,
            "unit": "iter/sec",
            "range": "stddev: 0.05148286904475797",
            "extra": "mean: 2.747526271799984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.24665676807765938,
            "unit": "iter/sec",
            "range": "stddev: 0.06208293789294902",
            "extra": "mean: 4.054216747399982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3007469820369062,
            "unit": "iter/sec",
            "range": "stddev: 0.01863191984981646",
            "extra": "mean: 3.325054147600008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 16.92198901569131,
            "unit": "iter/sec",
            "range": "stddev: 0.0027571919275901865",
            "extra": "mean: 59.09470802000442 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 5.539235906120192,
            "unit": "iter/sec",
            "range": "stddev: 0.03997504661117472",
            "extra": "mean: 180.53031445999977 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2460.4128188480386,
            "unit": "iter/sec",
            "range": "stddev: 0.00018272762037306118",
            "extra": "mean: 406.4358600066953 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 48.60297626897729,
            "unit": "iter/sec",
            "range": "stddev: 0.0023896084829790466",
            "extra": "mean: 20.574871679993976 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.0510770399219718,
            "unit": "iter/sec",
            "range": "stddev: 0.02555811421807177",
            "extra": "mean: 951.4050464599973 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 19.51976617843597,
            "unit": "iter/sec",
            "range": "stddev: 0.0024681645644631764",
            "extra": "mean: 51.23012186000096 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.0759721660943733,
            "unit": "iter/sec",
            "range": "stddev: 0.016251138124815257",
            "extra": "mean: 929.3920711999999 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 18.974776071173537,
            "unit": "iter/sec",
            "range": "stddev: 0.005749825174277165",
            "extra": "mean: 52.70154421053743 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 208.36569423537958,
            "unit": "iter/sec",
            "range": "stddev: 0.0011449020730171836",
            "extra": "mean: 4.799254520613904 msec\nrounds: 194"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 827.2258009139032,
            "unit": "iter/sec",
            "range": "stddev: 0.0004833899302834561",
            "extra": "mean: 1.2088597803589047 msec\nrounds: 560"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 13.068302646862989,
            "unit": "iter/sec",
            "range": "stddev: 0.0056222966958559195",
            "extra": "mean: 76.5210316153833 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 59.36557194914058,
            "unit": "iter/sec",
            "range": "stddev: 0.010912623020692621",
            "extra": "mean: 16.844780015877145 msec\nrounds: 63"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.13267890085011097,
            "unit": "iter/sec",
            "range": "stddev: 0.0355188064119217",
            "extra": "mean: 7.536993399799963 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.12737943186805112,
            "unit": "iter/sec",
            "range": "stddev: 0.09188058907458552",
            "extra": "mean: 7.850560999799972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1268458346940615,
            "unit": "iter/sec",
            "range": "stddev: 0.27689266452128186",
            "extra": "mean: 7.883585633000029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.1282511760105025,
            "unit": "iter/sec",
            "range": "stddev: 0.11171854259062303",
            "extra": "mean: 7.797199457399984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1268240492729604,
            "unit": "iter/sec",
            "range": "stddev: 0.14169685318154202",
            "extra": "mean: 7.884939849600005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.12696118322977146,
            "unit": "iter/sec",
            "range": "stddev: 0.10638143637583453",
            "extra": "mean: 7.876423128399983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1315447305692882,
            "unit": "iter/sec",
            "range": "stddev: 0.0384994490637111",
            "extra": "mean: 7.6019768764000215 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.12910032617317735,
            "unit": "iter/sec",
            "range": "stddev: 0.051579499803662957",
            "extra": "mean: 7.745913814799996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1291311294448552,
            "unit": "iter/sec",
            "range": "stddev: 0.08974816256884166",
            "extra": "mean: 7.7440660846000355 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 23.21924213521978,
            "unit": "iter/sec",
            "range": "stddev: 0.002088486896941182",
            "extra": "mean: 43.06772779991661 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 22.14547280475647,
            "unit": "iter/sec",
            "range": "stddev: 0.0017377631256531494",
            "extra": "mean: 45.155956200005676 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 22.764923738153033,
            "unit": "iter/sec",
            "range": "stddev: 0.0027508841895423387",
            "extra": "mean: 43.92722819993651 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 22.88617392953696,
            "unit": "iter/sec",
            "range": "stddev: 0.0021552106296421807",
            "extra": "mean: 43.694503200003965 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 22.55614489496442,
            "unit": "iter/sec",
            "range": "stddev: 0.001580467142251671",
            "extra": "mean: 44.33381700005157 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 22.20440678784257,
            "unit": "iter/sec",
            "range": "stddev: 0.004024056983872379",
            "extra": "mean: 45.03610519996073 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 23.239273859689465,
            "unit": "iter/sec",
            "range": "stddev: 0.0025664744934480945",
            "extra": "mean: 43.030604400019 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 22.937489501222256,
            "unit": "iter/sec",
            "range": "stddev: 0.0016576933014704831",
            "extra": "mean: 43.59675020000395 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 23.166872129015896,
            "unit": "iter/sec",
            "range": "stddev: 0.0026888596502496467",
            "extra": "mean: 43.165084800011755 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.03095331358733416,
            "unit": "iter/sec",
            "range": "stddev: 0.2885285509412741",
            "extra": "mean: 32.30671886480004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.030745356798176637,
            "unit": "iter/sec",
            "range": "stddev: 0.3201803265419493",
            "extra": "mean: 32.52523646300001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.030670770224500692,
            "unit": "iter/sec",
            "range": "stddev: 0.2342530854639527",
            "extra": "mean: 32.60433281199998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.030427892371883744,
            "unit": "iter/sec",
            "range": "stddev: 0.6121910398493577",
            "extra": "mean: 32.864583184999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03033019649257831,
            "unit": "iter/sec",
            "range": "stddev: 0.24906410738605744",
            "extra": "mean: 32.97044251739999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.030482830611869675,
            "unit": "iter/sec",
            "range": "stddev: 0.4650585798889698",
            "extra": "mean: 32.80535238779994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.030791106921849574,
            "unit": "iter/sec",
            "range": "stddev: 0.09540817214068295",
            "extra": "mean: 32.476909730399896 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03079972814013581,
            "unit": "iter/sec",
            "range": "stddev: 0.4701816944717129",
            "extra": "mean: 32.46781904859991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.030836655141885924,
            "unit": "iter/sec",
            "range": "stddev: 0.21635495380086806",
            "extra": "mean: 32.42893872240002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marenz@meta.com",
            "name": "Martin Marenz",
            "username": "Blonck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8a43b9021fce8470ff04b348289aeae84f33b36",
          "message": "[Performance] Accelerate TD lambda return estimate  (#1158)",
          "timestamp": "2023-05-18T07:43:16+01:00",
          "tree_id": "d1326c4359981236d84c28eddbc38df96a3fcedc",
          "url": "https://github.com/BY571/rl/commit/e8a43b9021fce8470ff04b348289aeae84f33b36"
        },
        "date": 1684398041068,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.037564586802103804,
            "unit": "iter/sec",
            "range": "stddev: 0.3180542801644271",
            "extra": "mean: 26.62081724120003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.06950087705421096,
            "unit": "iter/sec",
            "range": "stddev: 0.11581484252371636",
            "extra": "mean: 14.388307635599995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.06985856307422939,
            "unit": "iter/sec",
            "range": "stddev: 0.11677205584584618",
            "extra": "mean: 14.314637404399992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.6553436125540404,
            "unit": "iter/sec",
            "range": "stddev: 0.05708022930407144",
            "extra": "mean: 1.5259170622000056 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.3694340687305854,
            "unit": "iter/sec",
            "range": "stddev: 0.054162678616378426",
            "extra": "mean: 2.7068429380000225 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.25482981038139435,
            "unit": "iter/sec",
            "range": "stddev: 0.056194469618749035",
            "extra": "mean: 3.9241876705999856 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.30560194203902497,
            "unit": "iter/sec",
            "range": "stddev: 0.08254785535801704",
            "extra": "mean: 3.2722305144000075 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 48.95759906015437,
            "unit": "iter/sec",
            "range": "stddev: 0.0019268140059770114",
            "extra": "mean: 20.425838259986904 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 14.71785512896287,
            "unit": "iter/sec",
            "range": "stddev: 0.007342834618132024",
            "extra": "mean: 67.94468292000829 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3613.7363902202146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000968396840254779",
            "extra": "mean: 276.7218999997567 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 53.750906611140316,
            "unit": "iter/sec",
            "range": "stddev: 0.0011316766712762929",
            "extra": "mean: 18.60433736000914 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 5.765849880435747,
            "unit": "iter/sec",
            "range": "stddev: 0.00538576801174962",
            "extra": "mean: 173.43496981999579 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 20.056617239149176,
            "unit": "iter/sec",
            "range": "stddev: 0.003552642114616385",
            "extra": "mean: 49.85885646000497 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 10.3942361519142,
            "unit": "iter/sec",
            "range": "stddev: 0.0038897259551078063",
            "extra": "mean: 96.20716571999765 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 62.309935106279625,
            "unit": "iter/sec",
            "range": "stddev: 0.0011913921552573633",
            "extra": "mean: 16.048805030760168 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 223.05120201994572,
            "unit": "iter/sec",
            "range": "stddev: 0.0004959954924615177",
            "extra": "mean: 4.483275548143326 msec\nrounds: 135"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1411.1769406774922,
            "unit": "iter/sec",
            "range": "stddev: 0.00017521520695141528",
            "extra": "mean: 708.6283591906695 usec\nrounds: 838"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 14.03769935528314,
            "unit": "iter/sec",
            "range": "stddev: 0.003468686055496258",
            "extra": "mean: 71.2367443332975 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 174.93309088762322,
            "unit": "iter/sec",
            "range": "stddev: 0.0010304022630765683",
            "extra": "mean: 5.716471337274881 msec\nrounds: 169"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.13662087998623476,
            "unit": "iter/sec",
            "range": "stddev: 0.06397476803884987",
            "extra": "mean: 7.319525390999933 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.137247012048799,
            "unit": "iter/sec",
            "range": "stddev: 0.37025415100266834",
            "extra": "mean: 7.286133119200031 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.12785338771775723,
            "unit": "iter/sec",
            "range": "stddev: 0.26488176877755104",
            "extra": "mean: 7.821458765000034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.13780127362644176,
            "unit": "iter/sec",
            "range": "stddev: 0.21068256894065773",
            "extra": "mean: 7.256826977599985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1425437209409531,
            "unit": "iter/sec",
            "range": "stddev: 0.08275826405862186",
            "extra": "mean: 7.015391442000009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.13613040801777132,
            "unit": "iter/sec",
            "range": "stddev: 0.24142421151074567",
            "extra": "mean: 7.345897324199996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1413121665837207,
            "unit": "iter/sec",
            "range": "stddev: 0.1883386838239948",
            "extra": "mean: 7.0765315129999635 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.13545186930659578,
            "unit": "iter/sec",
            "range": "stddev: 0.383440148104926",
            "extra": "mean: 7.382696194000073 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.14366996857719674,
            "unit": "iter/sec",
            "range": "stddev: 0.24588726401601696",
            "extra": "mean: 6.960396872800038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 26.314007184407494,
            "unit": "iter/sec",
            "range": "stddev: 0.001122633988442315",
            "extra": "mean: 38.002573800031314 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 25.28103280903969,
            "unit": "iter/sec",
            "range": "stddev: 0.001358872815387775",
            "extra": "mean: 39.555346000042846 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 26.014147898440548,
            "unit": "iter/sec",
            "range": "stddev: 0.0020663074764633834",
            "extra": "mean: 38.44062099992698 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 26.998895928703508,
            "unit": "iter/sec",
            "range": "stddev: 0.0022091650509735816",
            "extra": "mean: 37.03855160006242 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 25.634129140097777,
            "unit": "iter/sec",
            "range": "stddev: 0.0016419398758336188",
            "extra": "mean: 39.01049239998429 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 26.554543047279775,
            "unit": "iter/sec",
            "range": "stddev: 0.0016321346134934617",
            "extra": "mean: 37.65833960010241 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 25.3441609063455,
            "unit": "iter/sec",
            "range": "stddev: 0.005896985481146565",
            "extra": "mean: 39.4568201999391 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 26.334368786670275,
            "unit": "iter/sec",
            "range": "stddev: 0.0011923078434125157",
            "extra": "mean: 37.9731903999982 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 24.636095308993195,
            "unit": "iter/sec",
            "range": "stddev: 0.005172776912907296",
            "extra": "mean: 40.59084799996526 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.035067093969992406,
            "unit": "iter/sec",
            "range": "stddev: 2.004862491434694",
            "extra": "mean: 28.516762776399993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.034739752487319434,
            "unit": "iter/sec",
            "range": "stddev: 0.7795760505095687",
            "extra": "mean: 28.785467034199975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03513852059468715,
            "unit": "iter/sec",
            "range": "stddev: 0.7209181228527333",
            "extra": "mean: 28.458796303200007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.0344146588792215,
            "unit": "iter/sec",
            "range": "stddev: 0.4558817262741394",
            "extra": "mean: 29.057385212200053 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03320861389934317,
            "unit": "iter/sec",
            "range": "stddev: 0.7838943892827839",
            "extra": "mean: 30.112669051199966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03426884705486005,
            "unit": "iter/sec",
            "range": "stddev: 0.3770913230772662",
            "extra": "mean: 29.181022588799898 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.03323727079181538,
            "unit": "iter/sec",
            "range": "stddev: 0.5558144643002474",
            "extra": "mean: 30.086706163799953 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.033351703057604966,
            "unit": "iter/sec",
            "range": "stddev: 0.3328356498479067",
            "extra": "mean: 29.983476354200047 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.033670666174518166,
            "unit": "iter/sec",
            "range": "stddev: 0.39404129660141607",
            "extra": "mean: 29.699442084599923 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "osalpekar@fb.com",
            "name": "Omkar Salpekar",
            "username": "osalpekar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a8ac32af68cdd012a44916ff6956c879419ee05",
          "message": "[CI] Linux Gym Unittests to GHA (#1139)",
          "timestamp": "2023-05-18T18:34:07+01:00",
          "tree_id": "fc4a633b84386adc1cf78bd757805126a6f83e61",
          "url": "https://github.com/BY571/rl/commit/9a8ac32af68cdd012a44916ff6956c879419ee05"
        },
        "date": 1684484395342,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.052215382609863054,
            "unit": "iter/sec",
            "range": "stddev: 0.047128616339558345",
            "extra": "mean: 19.151444459800018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09683923405301756,
            "unit": "iter/sec",
            "range": "stddev: 0.05673530263972793",
            "extra": "mean: 10.326393117199995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09727878112537425,
            "unit": "iter/sec",
            "range": "stddev: 0.06785687299536575",
            "extra": "mean: 10.279734063600017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8929466181811958,
            "unit": "iter/sec",
            "range": "stddev: 0.04147762340513604",
            "extra": "mean: 1.1198877734000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5024477678063985,
            "unit": "iter/sec",
            "range": "stddev: 0.029540418138431928",
            "extra": "mean: 1.9902566277999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3611066475881987,
            "unit": "iter/sec",
            "range": "stddev: 0.03079951151453374",
            "extra": "mean: 2.7692649987999856 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4184760352316073,
            "unit": "iter/sec",
            "range": "stddev: 0.05092022702029642",
            "extra": "mean: 2.3896230986000093 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 74.27851142629244,
            "unit": "iter/sec",
            "range": "stddev: 0.0007709829797348098",
            "extra": "mean: 13.462843840002279 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 23.831451002761824,
            "unit": "iter/sec",
            "range": "stddev: 0.0040158617904136485",
            "extra": "mean: 41.961356019996856 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4796.655388339416,
            "unit": "iter/sec",
            "range": "stddev: 0.000028494267374077748",
            "extra": "mean: 208.47859999093998 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.72053247479798,
            "unit": "iter/sec",
            "range": "stddev: 0.0001146902958460597",
            "extra": "mean: 13.034320379990731 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 13.410427747514104,
            "unit": "iter/sec",
            "range": "stddev: 0.003195502649685381",
            "extra": "mean: 74.56883693999771 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.494014581737883,
            "unit": "iter/sec",
            "range": "stddev: 0.00024219320957051638",
            "extra": "mean: 31.75206506000222 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 19.953053195409176,
            "unit": "iter/sec",
            "range": "stddev: 0.0004514537487022342",
            "extra": "mean: 50.11764315999926 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 86.38921450540704,
            "unit": "iter/sec",
            "range": "stddev: 0.00004306193468181804",
            "extra": "mean: 11.575519070582713 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 299.73033598642945,
            "unit": "iter/sec",
            "range": "stddev: 0.00009885151643269933",
            "extra": "mean: 3.336332295858354 msec\nrounds: 169"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2196.0534307218477,
            "unit": "iter/sec",
            "range": "stddev: 0.000057850310734827006",
            "extra": "mean: 455.36232680426986 usec\nrounds: 817"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 19.24453229111739,
            "unit": "iter/sec",
            "range": "stddev: 0.002180285878125614",
            "extra": "mean: 51.96281129999534 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 344.8991685249564,
            "unit": "iter/sec",
            "range": "stddev: 0.00010530613542694685",
            "extra": "mean: 2.899398117649105 msec\nrounds: 238"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.17849454962382183,
            "unit": "iter/sec",
            "range": "stddev: 0.06762832381464681",
            "extra": "mean: 5.602411962199994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.17525886800553497,
            "unit": "iter/sec",
            "range": "stddev: 0.05596353693694212",
            "extra": "mean: 5.705845366800031 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1763037712641796,
            "unit": "iter/sec",
            "range": "stddev: 0.04006349390107657",
            "extra": "mean: 5.672028413399994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.18169910313715998,
            "unit": "iter/sec",
            "range": "stddev: 0.028893274973213635",
            "extra": "mean: 5.503604490799967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.17653810419270755,
            "unit": "iter/sec",
            "range": "stddev: 0.04437067220654827",
            "extra": "mean: 5.664499483399959 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.17414542692778123,
            "unit": "iter/sec",
            "range": "stddev: 0.12356093328216941",
            "extra": "mean: 5.742327074799983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1822398682729708,
            "unit": "iter/sec",
            "range": "stddev: 0.02033744823637385",
            "extra": "mean: 5.487273500999981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.17542875616908593,
            "unit": "iter/sec",
            "range": "stddev: 0.0865367823181367",
            "extra": "mean: 5.700319730000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.17713323169126124,
            "unit": "iter/sec",
            "range": "stddev: 0.05363971967478434",
            "extra": "mean: 5.645468049400097 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 31.151586880235776,
            "unit": "iter/sec",
            "range": "stddev: 0.0005557422437675463",
            "extra": "mean: 32.10109339997871 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 30.724870862426965,
            "unit": "iter/sec",
            "range": "stddev: 0.00025150325255571867",
            "extra": "mean: 32.546922800020184 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 30.534940958897106,
            "unit": "iter/sec",
            "range": "stddev: 0.0003223334649048499",
            "extra": "mean: 32.74936739999248 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 31.218282615108976,
            "unit": "iter/sec",
            "range": "stddev: 0.0006024832968412733",
            "extra": "mean: 32.03251159998217 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.87700386350588,
            "unit": "iter/sec",
            "range": "stddev: 0.00040212602485776585",
            "extra": "mean: 32.3865620000106 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 30.61109948063286,
            "unit": "iter/sec",
            "range": "stddev: 0.000321690083454564",
            "extra": "mean: 32.66788899995845 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 31.216583622742522,
            "unit": "iter/sec",
            "range": "stddev: 0.00035546425002000274",
            "extra": "mean: 32.03425500000776 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 30.596190015513493,
            "unit": "iter/sec",
            "range": "stddev: 0.0005853171033038727",
            "extra": "mean: 32.683808000047065 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 30.751816346783105,
            "unit": "iter/sec",
            "range": "stddev: 0.00024756957717647247",
            "extra": "mean: 32.51840440002525 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04923512116706212,
            "unit": "iter/sec",
            "range": "stddev: 0.08823180190556737",
            "extra": "mean: 20.310704559999976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.049357054359903604,
            "unit": "iter/sec",
            "range": "stddev: 0.08888609889186853",
            "extra": "mean: 20.260528367599953 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.04985316964351639,
            "unit": "iter/sec",
            "range": "stddev: 0.17582623869820588",
            "extra": "mean: 20.058905123799967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05036879587380866,
            "unit": "iter/sec",
            "range": "stddev: 0.026846619508768647",
            "extra": "mean: 19.853561766799977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05049819215327299,
            "unit": "iter/sec",
            "range": "stddev: 0.10184818702362597",
            "extra": "mean: 19.802689113399992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.050327646058005854,
            "unit": "iter/sec",
            "range": "stddev: 0.06332726058498526",
            "extra": "mean: 19.869794801200033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.050347752203902224,
            "unit": "iter/sec",
            "range": "stddev: 0.044199546136891046",
            "extra": "mean: 19.861859889000062 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05041537595881391,
            "unit": "iter/sec",
            "range": "stddev: 0.03796622288622109",
            "extra": "mean: 19.83521854159999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.050283008011376105,
            "unit": "iter/sec",
            "range": "stddev: 0.04397139227418885",
            "extra": "mean: 19.887433937400054 sec\nrounds: 5"
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
          "id": "3c8197b41e351de2ebefbe2df5d5900d82e43882",
          "message": "[BugFix] Fix examples (#1173)",
          "timestamp": "2023-05-21T08:28:59+01:00",
          "tree_id": "7c048719ea40e63bf74a98cfd1d807742b720c94",
          "url": "https://github.com/BY571/rl/commit/3c8197b41e351de2ebefbe2df5d5900d82e43882"
        },
        "date": 1684744832858,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.039053702010081,
            "unit": "iter/sec",
            "range": "stddev: 0.09313806436525655",
            "extra": "mean: 25.605767149600013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.06981689075274221,
            "unit": "iter/sec",
            "range": "stddev: 0.2505736895077594",
            "extra": "mean: 14.323181528400028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.07239883908583725,
            "unit": "iter/sec",
            "range": "stddev: 0.08568588137527532",
            "extra": "mean: 13.812376173800022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.6846147897925713,
            "unit": "iter/sec",
            "range": "stddev: 0.04114605653813875",
            "extra": "mean: 1.4606754263999846 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.3840785023126907,
            "unit": "iter/sec",
            "range": "stddev: 0.036101217316903085",
            "extra": "mean: 2.603634397599967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.2717377065587367,
            "unit": "iter/sec",
            "range": "stddev: 0.040181578130604315",
            "extra": "mean: 3.6800192828000036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.31753268336046525,
            "unit": "iter/sec",
            "range": "stddev: 0.032708369413256305",
            "extra": "mean: 3.1492821129999813 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 43.36310967932227,
            "unit": "iter/sec",
            "range": "stddev: 0.003677337053119749",
            "extra": "mean: 23.06107674000259 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 15.156183697001877,
            "unit": "iter/sec",
            "range": "stddev: 0.005130840939349453",
            "extra": "mean: 65.97967007999614 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3566.871638039056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000860639463018402",
            "extra": "mean: 280.35772000748693 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 51.40787820656163,
            "unit": "iter/sec",
            "range": "stddev: 0.000848924792266955",
            "extra": "mean: 19.452271419993394 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 5.915521459295887,
            "unit": "iter/sec",
            "range": "stddev: 0.0040696504174521",
            "extra": "mean: 169.04680455998687 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 19.070252691447894,
            "unit": "iter/sec",
            "range": "stddev: 0.0024736565897171482",
            "extra": "mean: 52.43769005999866 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 10.679263301418953,
            "unit": "iter/sec",
            "range": "stddev: 0.0025147123215632687",
            "extra": "mean: 93.63941797999587 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 63.83540409243906,
            "unit": "iter/sec",
            "range": "stddev: 0.00047236968379445996",
            "extra": "mean: 15.66528816128297 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 227.49968253779105,
            "unit": "iter/sec",
            "range": "stddev: 0.0004337632700671694",
            "extra": "mean: 4.395610529407597 msec\nrounds: 136"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1494.3870502754498,
            "unit": "iter/sec",
            "range": "stddev: 0.00008453149054546656",
            "extra": "mean: 669.1706809261209 usec\nrounds: 561"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 13.960108593230302,
            "unit": "iter/sec",
            "range": "stddev: 0.004854002409076914",
            "extra": "mean: 71.632680599987 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 187.95228739512245,
            "unit": "iter/sec",
            "range": "stddev: 0.0004146095299589058",
            "extra": "mean: 5.320499228071384 msec\nrounds: 171"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.14890197658146453,
            "unit": "iter/sec",
            "range": "stddev: 0.0818875081659724",
            "extra": "mean: 6.715827573000001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.14123418216765224,
            "unit": "iter/sec",
            "range": "stddev: 0.12367486350494176",
            "extra": "mean: 7.080438918200048 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1395364652908299,
            "unit": "iter/sec",
            "range": "stddev: 0.204739107760552",
            "extra": "mean: 7.166585436400032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.16084881966073156,
            "unit": "iter/sec",
            "range": "stddev: 0.11632353192338087",
            "extra": "mean: 6.2170179557999745 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1536988549642177,
            "unit": "iter/sec",
            "range": "stddev: 0.20811043542168428",
            "extra": "mean: 6.506229342000029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.14399927177702126,
            "unit": "iter/sec",
            "range": "stddev: 0.2581404093951048",
            "extra": "mean: 6.9444795633999545 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.14051676200514002,
            "unit": "iter/sec",
            "range": "stddev: 0.08099927312100653",
            "extra": "mean: 7.1165886954000594 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1404148386725672,
            "unit": "iter/sec",
            "range": "stddev: 0.16229102626331904",
            "extra": "mean: 7.121754434600007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.13669217987018897,
            "unit": "iter/sec",
            "range": "stddev: 0.17233698908316775",
            "extra": "mean: 7.315707459999976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 23.982296153900815,
            "unit": "iter/sec",
            "range": "stddev: 0.0024975966615723645",
            "extra": "mean: 41.69742519993633 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 23.665827272882588,
            "unit": "iter/sec",
            "range": "stddev: 0.0009767918182401738",
            "extra": "mean: 42.25501980004083 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 23.52708750989151,
            "unit": "iter/sec",
            "range": "stddev: 0.0018901804572616266",
            "extra": "mean: 42.504198599999654 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 24.783866591129673,
            "unit": "iter/sec",
            "range": "stddev: 0.0008918372597336073",
            "extra": "mean: 40.348829199956526 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 24.233213858721147,
            "unit": "iter/sec",
            "range": "stddev: 0.003358350404092559",
            "extra": "mean: 41.26567800003613 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 25.12676061260091,
            "unit": "iter/sec",
            "range": "stddev: 0.0006961259541997882",
            "extra": "mean: 39.79820620006649 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 24.933520253593453,
            "unit": "iter/sec",
            "range": "stddev: 0.0011190806131643812",
            "extra": "mean: 40.10665120003978 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 23.2529036633253,
            "unit": "iter/sec",
            "range": "stddev: 0.00416704939789676",
            "extra": "mean: 43.005381800003306 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 23.271914546385524,
            "unit": "iter/sec",
            "range": "stddev: 0.002889851985587711",
            "extra": "mean: 42.970250600001236 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.029378114665818335,
            "unit": "iter/sec",
            "range": "stddev: 13.062924775112984",
            "extra": "mean: 34.03894400219997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.035714961378853806,
            "unit": "iter/sec",
            "range": "stddev: 0.21604096953559537",
            "extra": "mean: 27.99947028900001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.035575844459777406,
            "unit": "iter/sec",
            "range": "stddev: 0.28274008025766684",
            "extra": "mean: 28.10896031240004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.035078108978760465,
            "unit": "iter/sec",
            "range": "stddev: 0.7697961992164324",
            "extra": "mean: 28.50780812060002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.036529154853872724,
            "unit": "iter/sec",
            "range": "stddev: 0.6426726576320724",
            "extra": "mean: 27.375393818999964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03984929736931841,
            "unit": "iter/sec",
            "range": "stddev: 0.3590236970919703",
            "extra": "mean: 25.09454535000009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.0371774210271737,
            "unit": "iter/sec",
            "range": "stddev: 1.3113364227367705",
            "extra": "mean: 26.898046512400107 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.035420140183771785,
            "unit": "iter/sec",
            "range": "stddev: 0.26924060340803496",
            "extra": "mean: 28.23252519079988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.035954136961281725,
            "unit": "iter/sec",
            "range": "stddev: 0.20891538737148838",
            "extra": "mean: 27.813211065999987 sec\nrounds: 5"
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
          "id": "079dee716344f501c8ed9757d8f2e3b2372f4cb3",
          "message": "[BugFix] include buffers in policy_weights (#1185)",
          "timestamp": "2023-05-23T10:27:33+01:00",
          "tree_id": "6587cb54865e98b33c6824269cb493144ba49dfc",
          "url": "https://github.com/BY571/rl/commit/079dee716344f501c8ed9757d8f2e3b2372f4cb3"
        },
        "date": 1684840995543,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.04528369027433351,
            "unit": "iter/sec",
            "range": "stddev: 0.2503842588239651",
            "extra": "mean: 22.083005910999997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.08060974084103313,
            "unit": "iter/sec",
            "range": "stddev: 0.23885285745505394",
            "extra": "mean: 12.405448641399994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.08303904614388244,
            "unit": "iter/sec",
            "range": "stddev: 0.13714483683294743",
            "extra": "mean: 12.042527539000048 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8030219432263117,
            "unit": "iter/sec",
            "range": "stddev: 0.040250124909415305",
            "extra": "mean: 1.2452959828000303 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4473796424689983,
            "unit": "iter/sec",
            "range": "stddev: 0.029905599862591274",
            "extra": "mean: 2.23523805079999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3239708304138947,
            "unit": "iter/sec",
            "range": "stddev: 0.05024950013125725",
            "extra": "mean: 3.0866976472000034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.3355176340579032,
            "unit": "iter/sec",
            "range": "stddev: 0.07804589425985987",
            "extra": "mean: 2.9804692764000036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 59.8243251274231,
            "unit": "iter/sec",
            "range": "stddev: 0.0013732688333062148",
            "extra": "mean: 16.715608540005178 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 19.059923226438556,
            "unit": "iter/sec",
            "range": "stddev: 0.006983727539507619",
            "extra": "mean: 52.466108500000246 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3777.311187264079,
            "unit": "iter/sec",
            "range": "stddev: 0.00003510398386216448",
            "extra": "mean: 264.73858001736517 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 65.05676011052294,
            "unit": "iter/sec",
            "range": "stddev: 0.00015676708565866295",
            "extra": "mean: 15.371192760001122 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 11.11553977434906,
            "unit": "iter/sec",
            "range": "stddev: 0.0037180528875116205",
            "extra": "mean: 89.96414211999536 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 27.639372560176017,
            "unit": "iter/sec",
            "range": "stddev: 0.0005493671961444881",
            "extra": "mean: 36.18027137999661 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 16.81953886674277,
            "unit": "iter/sec",
            "range": "stddev: 0.0012729056075423577",
            "extra": "mean: 59.454662099999496 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 75.06710827455709,
            "unit": "iter/sec",
            "range": "stddev: 0.00030684421390680434",
            "extra": "mean: 13.321413638880445 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 231.02847568706713,
            "unit": "iter/sec",
            "range": "stddev: 0.00043461105848339754",
            "extra": "mean: 4.328470752473478 msec\nrounds: 101"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1845.0575696073654,
            "unit": "iter/sec",
            "range": "stddev: 0.0001363613950921616",
            "extra": "mean: 541.9885083655159 usec\nrounds: 777"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 15.814988296158644,
            "unit": "iter/sec",
            "range": "stddev: 0.0010550467415084855",
            "extra": "mean: 63.23115649999522 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 296.22747628055885,
            "unit": "iter/sec",
            "range": "stddev: 0.00014702687540467214",
            "extra": "mean: 3.3757840851092897 msec\nrounds: 188"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.1559141910992146,
            "unit": "iter/sec",
            "range": "stddev: 0.04992664015776936",
            "extra": "mean: 6.413784357600003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.15081521856565464,
            "unit": "iter/sec",
            "range": "stddev: 0.1472437235177481",
            "extra": "mean: 6.630630579000012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.15180643934403337,
            "unit": "iter/sec",
            "range": "stddev: 0.04842567014786091",
            "extra": "mean: 6.587335849000032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.15603962718445658,
            "unit": "iter/sec",
            "range": "stddev: 0.055425687228971544",
            "extra": "mean: 6.4086284878000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.15394631705630743,
            "unit": "iter/sec",
            "range": "stddev: 0.108968857093016",
            "extra": "mean: 6.495770857799994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.15578148569697498,
            "unit": "iter/sec",
            "range": "stddev: 0.18292968865042233",
            "extra": "mean: 6.419248060999962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.15587555339289144,
            "unit": "iter/sec",
            "range": "stddev: 0.1338723932049417",
            "extra": "mean: 6.4153741766000625 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.15559539252841906,
            "unit": "iter/sec",
            "range": "stddev: 0.13923890736500272",
            "extra": "mean: 6.426925526199966 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.15620721156440193,
            "unit": "iter/sec",
            "range": "stddev: 0.13731810914107542",
            "extra": "mean: 6.4017530943999645 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 26.71403785077691,
            "unit": "iter/sec",
            "range": "stddev: 0.0007065196927726044",
            "extra": "mean: 37.433502399971985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 26.54083043209894,
            "unit": "iter/sec",
            "range": "stddev: 0.0007731090969963369",
            "extra": "mean: 37.677796200023295 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 23.560607783385166,
            "unit": "iter/sec",
            "range": "stddev: 0.004175458542230507",
            "extra": "mean: 42.44372680000197 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 28.192564644133604,
            "unit": "iter/sec",
            "range": "stddev: 0.0010712252029590425",
            "extra": "mean: 35.47034519997396 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 26.23738471124354,
            "unit": "iter/sec",
            "range": "stddev: 0.0011974946227507391",
            "extra": "mean: 38.113554799974736 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 27.18069654765226,
            "unit": "iter/sec",
            "range": "stddev: 0.002298214229159663",
            "extra": "mean: 36.790815799986376 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 27.879664009946172,
            "unit": "iter/sec",
            "range": "stddev: 0.0013794998344208523",
            "extra": "mean: 35.868437999943126 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 26.995859358877453,
            "unit": "iter/sec",
            "range": "stddev: 0.0012630162826025996",
            "extra": "mean: 37.04271780002273 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 25.787171592795328,
            "unit": "iter/sec",
            "range": "stddev: 0.0033769171222282454",
            "extra": "mean: 38.77897180004766 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04456938065086858,
            "unit": "iter/sec",
            "range": "stddev: 0.3635468379433312",
            "extra": "mean: 22.436928344000034 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04475666604607884,
            "unit": "iter/sec",
            "range": "stddev: 0.7390185584378486",
            "extra": "mean: 22.343040452800004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.045120336876003836,
            "unit": "iter/sec",
            "range": "stddev: 0.4722588322328369",
            "extra": "mean: 22.162955093799972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04611406586273355,
            "unit": "iter/sec",
            "range": "stddev: 0.5069115629397563",
            "extra": "mean: 21.68535741300002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04448774250087623,
            "unit": "iter/sec",
            "range": "stddev: 0.28612920533056835",
            "extra": "mean: 22.478101692399967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04439503517748944,
            "unit": "iter/sec",
            "range": "stddev: 0.18594214171949341",
            "extra": "mean: 22.52504127999996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04549555578174251,
            "unit": "iter/sec",
            "range": "stddev: 0.5062655877949309",
            "extra": "mean: 21.98016889380001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04579687667931433,
            "unit": "iter/sec",
            "range": "stddev: 0.6905575046635996",
            "extra": "mean: 21.83555020580002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.045586972740864644,
            "unit": "iter/sec",
            "range": "stddev: 0.49465693298374325",
            "extra": "mean: 21.936091384800147 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3e9a1d03909d797c06f4db33635f38dc7f7efff",
          "message": "[Refactor] Nested reward and done specs (#1115)",
          "timestamp": "2023-05-29T05:29:03+01:00",
          "tree_id": "fbb3d68a10241b56a3a889cb30a05562f94bc30d",
          "url": "https://github.com/BY571/rl/commit/f3e9a1d03909d797c06f4db33635f38dc7f7efff"
        },
        "date": 1685367207432,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05086973619414442,
            "unit": "iter/sec",
            "range": "stddev: 0.01237337988983389",
            "extra": "mean: 19.658053585799983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09554718123508012,
            "unit": "iter/sec",
            "range": "stddev: 0.03414441678017896",
            "extra": "mean: 10.46603350380001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09622518584119315,
            "unit": "iter/sec",
            "range": "stddev: 0.03333326386037589",
            "extra": "mean: 10.392289619999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0683852167669095,
            "unit": "iter/sec",
            "range": "stddev: 0.04536748785125442",
            "extra": "mean: 935.9919852000075 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4896456514330756,
            "unit": "iter/sec",
            "range": "stddev: 0.03395393654578277",
            "extra": "mean: 2.0422932319999973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3948313019615566,
            "unit": "iter/sec",
            "range": "stddev: 0.039096940553621624",
            "extra": "mean: 2.5327272559999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.46228891952193385,
            "unit": "iter/sec",
            "range": "stddev: 0.03639931315574377",
            "extra": "mean: 2.163149402399972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 78.89615007858978,
            "unit": "iter/sec",
            "range": "stddev: 0.0009195615012579545",
            "extra": "mean: 12.674889699990217 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 24.33117831730082,
            "unit": "iter/sec",
            "range": "stddev: 0.00584549704677035",
            "extra": "mean: 41.099530280000636 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 5393.634454142972,
            "unit": "iter/sec",
            "range": "stddev: 0.00002481954217736511",
            "extra": "mean: 185.40374000167503 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 81.33616580570843,
            "unit": "iter/sec",
            "range": "stddev: 0.00007130831312560062",
            "extra": "mean: 12.29465379999283 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 24.797939003217852,
            "unit": "iter/sec",
            "range": "stddev: 0.0007295290122513993",
            "extra": "mean: 40.32593191999695 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 33.256231598245655,
            "unit": "iter/sec",
            "range": "stddev: 0.00027233534746001417",
            "extra": "mean: 30.069552439993004 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 24.898275171242428,
            "unit": "iter/sec",
            "range": "stddev: 0.0003553280953282234",
            "extra": "mean: 40.163424699996995 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 89.47322732977749,
            "unit": "iter/sec",
            "range": "stddev: 0.00004236727480150014",
            "extra": "mean: 11.176527659097763 msec\nrounds: 88"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 304.60980641298426,
            "unit": "iter/sec",
            "range": "stddev: 0.00006590438780882673",
            "extra": "mean: 3.282888400001866 msec\nrounds: 125"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2296.7131949532745,
            "unit": "iter/sec",
            "range": "stddev: 0.000019017888379203",
            "extra": "mean: 435.40482207241575 usec\nrounds: 888"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 18.773030308965165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005652016696241493",
            "extra": "mean: 53.26790526313935 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 366.68170856102444,
            "unit": "iter/sec",
            "range": "stddev: 0.000053484928118806064",
            "extra": "mean: 2.727160850003448 msec\nrounds: 240"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.18946655560915185,
            "unit": "iter/sec",
            "range": "stddev: 0.036819762983382465",
            "extra": "mean: 5.277976352000019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.1807267787815343,
            "unit": "iter/sec",
            "range": "stddev: 0.07944487344008473",
            "extra": "mean: 5.5332143179999775 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.18231515596810008,
            "unit": "iter/sec",
            "range": "stddev: 0.08752189776331856",
            "extra": "mean: 5.485007511799904 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.1898737412038834,
            "unit": "iter/sec",
            "range": "stddev: 0.021250535134840303",
            "extra": "mean: 5.266657694000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18353803142218073,
            "unit": "iter/sec",
            "range": "stddev: 0.03292658134034259",
            "extra": "mean: 5.44846205580011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18276956089338883,
            "unit": "iter/sec",
            "range": "stddev: 0.02745193624297044",
            "extra": "mean: 5.471370588800118 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1895380491573198,
            "unit": "iter/sec",
            "range": "stddev: 0.02573576082169836",
            "extra": "mean: 5.275985505000017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.18349549991025152,
            "unit": "iter/sec",
            "range": "stddev: 0.04021579883764408",
            "extra": "mean: 5.449724927799889 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.18401465292281888,
            "unit": "iter/sec",
            "range": "stddev: 0.044942465536550576",
            "extra": "mean: 5.434349841799985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 32.315243107241464,
            "unit": "iter/sec",
            "range": "stddev: 0.00032759300303042817",
            "extra": "mean: 30.94514860003983 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 31.33268970971601,
            "unit": "iter/sec",
            "range": "stddev: 0.00029113516984473337",
            "extra": "mean: 31.9155492000391 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 31.329284040078694,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929098944473948",
            "extra": "mean: 31.919018600001436 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 32.36047100122574,
            "unit": "iter/sec",
            "range": "stddev: 0.000427403605784212",
            "extra": "mean: 30.901898799993432 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.434404190000514,
            "unit": "iter/sec",
            "range": "stddev: 0.0028677344814743615",
            "extra": "mean: 32.85755139995672 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 31.390149562675845,
            "unit": "iter/sec",
            "range": "stddev: 0.0004424968335529316",
            "extra": "mean: 31.85712759996022 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 32.34448752609928,
            "unit": "iter/sec",
            "range": "stddev: 0.0004297238013245957",
            "extra": "mean: 30.917169399981503 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 31.61524579712708,
            "unit": "iter/sec",
            "range": "stddev: 0.0004066923341920472",
            "extra": "mean: 31.630309200090778 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 31.67601347683518,
            "unit": "iter/sec",
            "range": "stddev: 0.00013027437299093295",
            "extra": "mean: 31.569629200066633 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.049810224185511155,
            "unit": "iter/sec",
            "range": "stddev: 0.0954511871190095",
            "extra": "mean: 20.07619954239999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05010873707487272,
            "unit": "iter/sec",
            "range": "stddev: 0.030506832602028154",
            "extra": "mean: 19.956599554800096 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05001086881560964,
            "unit": "iter/sec",
            "range": "stddev: 0.058864379995061764",
            "extra": "mean: 19.99565341859998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04991167516214587,
            "unit": "iter/sec",
            "range": "stddev: 0.07661985490790697",
            "extra": "mean: 20.035392455800046 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04992246350939396,
            "unit": "iter/sec",
            "range": "stddev: 0.034932847356997754",
            "extra": "mean: 20.031062766200012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04986125424850759,
            "unit": "iter/sec",
            "range": "stddev: 0.03137569184708984",
            "extra": "mean: 20.055652732199995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.049832497451746637,
            "unit": "iter/sec",
            "range": "stddev: 0.09777767814150296",
            "extra": "mean: 20.067226230600046 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04981261296636443,
            "unit": "iter/sec",
            "range": "stddev: 0.028117696663061",
            "extra": "mean: 20.075236781399962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04999359285163594,
            "unit": "iter/sec",
            "range": "stddev: 0.029810767731587376",
            "extra": "mean: 20.002563187800114 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73a440830a8a12f5973e2ce503eeb8a2bdcc3872",
          "message": "[BugFix] Fix TD3 inplace updates (#1219)",
          "timestamp": "2023-06-01T14:32:44+01:00",
          "tree_id": "0594dfc706cc49f4be14610f09627eea5c4f8a36",
          "url": "https://github.com/BY571/rl/commit/73a440830a8a12f5973e2ce503eeb8a2bdcc3872"
        },
        "date": 1685631443153,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.0568518143773341,
            "unit": "iter/sec",
            "range": "stddev: 0.07858842351429653",
            "extra": "mean: 17.589588141599997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10272739121672517,
            "unit": "iter/sec",
            "range": "stddev: 0.08691499264936793",
            "extra": "mean: 9.73450204620001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10417141104507063,
            "unit": "iter/sec",
            "range": "stddev: 0.06960932280313396",
            "extra": "mean: 9.599562778000017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.1848028820483565,
            "unit": "iter/sec",
            "range": "stddev: 0.03786084870310038",
            "extra": "mean: 844.0222548000065 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5622263219518193,
            "unit": "iter/sec",
            "range": "stddev: 0.023905553832712683",
            "extra": "mean: 1.7786431566000147 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.43620382680083986,
            "unit": "iter/sec",
            "range": "stddev: 0.01172912176216572",
            "extra": "mean: 2.2925062517999777 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.46854330895705826,
            "unit": "iter/sec",
            "range": "stddev: 0.0410239649102797",
            "extra": "mean: 2.1342744221999963 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 68.63866154453817,
            "unit": "iter/sec",
            "range": "stddev: 0.0020037642892807286",
            "extra": "mean: 14.569048660005137 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 18.864724672342877,
            "unit": "iter/sec",
            "range": "stddev: 0.0038720782219385567",
            "extra": "mean: 53.00898992001066 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4098.570623487368,
            "unit": "iter/sec",
            "range": "stddev: 0.00004954501389247959",
            "extra": "mean: 243.98750000045766 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 73.26987489060593,
            "unit": "iter/sec",
            "range": "stddev: 0.00009771398380100936",
            "extra": "mean: 13.648173980002412 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 19.070646253607396,
            "unit": "iter/sec",
            "range": "stddev: 0.0011608334317102294",
            "extra": "mean: 52.43660789999922 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.305895600447926,
            "unit": "iter/sec",
            "range": "stddev: 0.00026162512991083375",
            "extra": "mean: 31.942865100006657 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 18.88061995690624,
            "unit": "iter/sec",
            "range": "stddev: 0.0008928828441674558",
            "extra": "mean: 52.96436252000376 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 82.14185149558227,
            "unit": "iter/sec",
            "range": "stddev: 0.00006615965787967531",
            "extra": "mean: 12.174062086411354 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 405.10246285200094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000625444877010339",
            "extra": "mean: 2.4685112822069843 msec\nrounds: 163"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2579.3748849221456,
            "unit": "iter/sec",
            "range": "stddev: 0.000014368179315689906",
            "extra": "mean: 387.6908338704645 usec\nrounds: 933"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 19.23634407124544,
            "unit": "iter/sec",
            "range": "stddev: 0.000926148690622302",
            "extra": "mean: 51.98493000002031 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 259.45655996595076,
            "unit": "iter/sec",
            "range": "stddev: 0.0001470991256726796",
            "extra": "mean: 3.854209737966282 msec\nrounds: 187"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.17523294366805506,
            "unit": "iter/sec",
            "range": "stddev: 0.07595845236515658",
            "extra": "mean: 5.706689501799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.17239698264989162,
            "unit": "iter/sec",
            "range": "stddev: 0.06608526963990535",
            "extra": "mean: 5.800565558799986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.17187135034947207,
            "unit": "iter/sec",
            "range": "stddev: 0.09675871513833895",
            "extra": "mean: 5.818305366000004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.17455681248168578,
            "unit": "iter/sec",
            "range": "stddev: 0.04059886295601766",
            "extra": "mean: 5.728793885400023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.17275972169547535,
            "unit": "iter/sec",
            "range": "stddev: 0.0343849410200712",
            "extra": "mean: 5.788386263799998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1726138946120014,
            "unit": "iter/sec",
            "range": "stddev: 0.023657057939782945",
            "extra": "mean: 5.79327638860002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.17566158390686332,
            "unit": "iter/sec",
            "range": "stddev: 0.04692315865675207",
            "extra": "mean: 5.692764335600009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.172061455758506,
            "unit": "iter/sec",
            "range": "stddev: 0.03949501006255313",
            "extra": "mean: 5.811876899400022 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.17194103960237356,
            "unit": "iter/sec",
            "range": "stddev: 0.005959371337305173",
            "extra": "mean: 5.815947154399987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 30.24967537557902,
            "unit": "iter/sec",
            "range": "stddev: 0.0005291417196956338",
            "extra": "mean: 33.05820600003244 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.940959900245097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005320934737546002",
            "extra": "mean: 33.39906279998104 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 29.989302935547766,
            "unit": "iter/sec",
            "range": "stddev: 0.0003598302023261192",
            "extra": "mean: 33.34522320005817 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 30.325060080729795,
            "unit": "iter/sec",
            "range": "stddev: 0.000301913567176469",
            "extra": "mean: 32.97602700004063 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 30.2550564186591,
            "unit": "iter/sec",
            "range": "stddev: 0.00048576499707300957",
            "extra": "mean: 33.05232640000213 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 30.72707246949708,
            "unit": "iter/sec",
            "range": "stddev: 0.00034603736315733254",
            "extra": "mean: 32.54459079994376 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 30.92005097657615,
            "unit": "iter/sec",
            "range": "stddev: 0.00025150202111027327",
            "extra": "mean: 32.34147319994918 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 30.347828479975426,
            "unit": "iter/sec",
            "range": "stddev: 0.00046734104922908275",
            "extra": "mean: 32.95128679997106 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 30.64263426149497,
            "unit": "iter/sec",
            "range": "stddev: 0.0002411920328450597",
            "extra": "mean: 32.634269999971366 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05157636456724866,
            "unit": "iter/sec",
            "range": "stddev: 0.02420021889242369",
            "extra": "mean: 19.388725986999997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05142395364045936,
            "unit": "iter/sec",
            "range": "stddev: 0.09048085532159751",
            "extra": "mean: 19.446190524199984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05149482360565173,
            "unit": "iter/sec",
            "range": "stddev: 0.13504028338580798",
            "extra": "mean: 19.41942762359995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05206023504597241,
            "unit": "iter/sec",
            "range": "stddev: 0.03388394121462249",
            "extra": "mean: 19.20851873060001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05209827220626827,
            "unit": "iter/sec",
            "range": "stddev: 0.014954233516100849",
            "extra": "mean: 19.194494513000063 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05200241307388127,
            "unit": "iter/sec",
            "range": "stddev: 0.05963098116242925",
            "extra": "mean: 19.229876863200026 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05193992345687896,
            "unit": "iter/sec",
            "range": "stddev: 0.020881567952241307",
            "extra": "mean: 19.253012585399937 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05182863883203142,
            "unit": "iter/sec",
            "range": "stddev: 0.01622299695994084",
            "extra": "mean: 19.294351974799973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05200506801207493,
            "unit": "iter/sec",
            "range": "stddev: 0.07734939606389621",
            "extra": "mean: 19.228895148599985 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marenz@meta.com",
            "name": "Martin Marenz",
            "username": "Blonck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9467036bcc462b47229faebef3a4fdb54353ba4d",
          "message": "[BugFix] Fix missing (\"next\", \"observation\") key in dispatch of losses (#1235)",
          "timestamp": "2023-06-06T11:58:26+01:00",
          "tree_id": "1aae03dfb82bf88e9a4aa3068dcdfc8ce4c82c60",
          "url": "https://github.com/BY571/rl/commit/9467036bcc462b47229faebef3a4fdb54353ba4d"
        },
        "date": 1686052765401,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.042292919362655224,
            "unit": "iter/sec",
            "range": "stddev: 0.08473905541653912",
            "extra": "mean: 23.64461983399999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.07835503323496568,
            "unit": "iter/sec",
            "range": "stddev: 0.10604871725379972",
            "extra": "mean: 12.762422000400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.07888095864990774,
            "unit": "iter/sec",
            "range": "stddev: 0.08123034547097897",
            "extra": "mean: 12.677330715999982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9093557968289995,
            "unit": "iter/sec",
            "range": "stddev: 0.04205439632740494",
            "extra": "mean: 1.0996795792000058 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4081976173848849,
            "unit": "iter/sec",
            "range": "stddev: 0.05450965258061549",
            "extra": "mean: 2.449793818999956 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.33430547412866174,
            "unit": "iter/sec",
            "range": "stddev: 0.03564235605537465",
            "extra": "mean: 2.9912761751999826 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.38188715405713763,
            "unit": "iter/sec",
            "range": "stddev: 0.0404275176949249",
            "extra": "mean: 2.618574595599989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 66.49493082942975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005637145192078594",
            "extra": "mean: 15.038740360000702 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 20.800033787909342,
            "unit": "iter/sec",
            "range": "stddev: 0.006800834493020376",
            "extra": "mean: 48.07684497999617 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4391.366292856554,
            "unit": "iter/sec",
            "range": "stddev: 0.00003470735205049872",
            "extra": "mean: 227.71955999814963 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 67.54762267154034,
            "unit": "iter/sec",
            "range": "stddev: 0.00022201084123794272",
            "extra": "mean: 14.8043700199878 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 21.317001413318426,
            "unit": "iter/sec",
            "range": "stddev: 0.0009965963853621489",
            "extra": "mean: 46.910913059996346 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 28.554337429874064,
            "unit": "iter/sec",
            "range": "stddev: 0.0006073247097909541",
            "extra": "mean: 35.020949179993295 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 21.110925484147696,
            "unit": "iter/sec",
            "range": "stddev: 0.0023750500981725596",
            "extra": "mean: 47.368837560006796 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 76.96374804078283,
            "unit": "iter/sec",
            "range": "stddev: 0.0001853168106690226",
            "extra": "mean: 12.99313021333243 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 248.92551990790585,
            "unit": "iter/sec",
            "range": "stddev: 0.00015196701855149268",
            "extra": "mean: 4.017265888889042 msec\nrounds: 90"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1911.0425402632522,
            "unit": "iter/sec",
            "range": "stddev: 0.00004052762608739954",
            "extra": "mean: 523.2745890953566 usec\nrounds: 752"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 15.676337266954016,
            "unit": "iter/sec",
            "range": "stddev: 0.001521770464383763",
            "extra": "mean: 63.79041117646894 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 296.72469953129655,
            "unit": "iter/sec",
            "range": "stddev: 0.00017524141694975",
            "extra": "mean: 3.3701272646988616 msec\nrounds: 204"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.14708593452566632,
            "unit": "iter/sec",
            "range": "stddev: 0.05505441962466833",
            "extra": "mean: 6.798746618600035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.14248324116498828,
            "unit": "iter/sec",
            "range": "stddev: 0.052083234572807696",
            "extra": "mean: 7.018369260999975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.14253670293096857,
            "unit": "iter/sec",
            "range": "stddev: 0.06635236162442607",
            "extra": "mean: 7.015736855400019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.1458873995269817,
            "unit": "iter/sec",
            "range": "stddev: 0.03673278854867634",
            "extra": "mean: 6.854601584800003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.14174416232047504,
            "unit": "iter/sec",
            "range": "stddev: 0.12936526254681038",
            "extra": "mean: 7.05496426539994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1430219369622734,
            "unit": "iter/sec",
            "range": "stddev: 0.01612266671124816",
            "extra": "mean: 6.99193439300002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.14633108949689405,
            "unit": "iter/sec",
            "range": "stddev: 0.15162777068473898",
            "extra": "mean: 6.83381777200002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.14242164992381137,
            "unit": "iter/sec",
            "range": "stddev: 0.11928438421017874",
            "extra": "mean: 7.021404404000032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1442845508462072,
            "unit": "iter/sec",
            "range": "stddev: 0.012588050412697374",
            "extra": "mean: 6.930748955000036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 25.144125245859048,
            "unit": "iter/sec",
            "range": "stddev: 0.0005167318791404564",
            "extra": "mean: 39.77072140000928 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 24.87102124659704,
            "unit": "iter/sec",
            "range": "stddev: 0.000909126835528092",
            "extra": "mean: 40.20743619994391 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 24.799503331433254,
            "unit": "iter/sec",
            "range": "stddev: 0.0008350778417421556",
            "extra": "mean: 40.32338819997676 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 25.331600401902534,
            "unit": "iter/sec",
            "range": "stddev: 0.00033552035439777015",
            "extra": "mean: 39.47638460003873 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 25.434358176745047,
            "unit": "iter/sec",
            "range": "stddev: 0.0008024155939049462",
            "extra": "mean: 39.316895399952045 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 24.848901409409493,
            "unit": "iter/sec",
            "range": "stddev: 0.0003414885328788553",
            "extra": "mean: 40.24322780005605 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 25.3380720866121,
            "unit": "iter/sec",
            "range": "stddev: 0.0006283081562544029",
            "extra": "mean: 39.46630179998465 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 24.892105789786346,
            "unit": "iter/sec",
            "range": "stddev: 0.0003705943694903024",
            "extra": "mean: 40.17337899995255 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 25.417787470357197,
            "unit": "iter/sec",
            "range": "stddev: 0.0009479667478151307",
            "extra": "mean: 39.342527400003746 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04323393415404566,
            "unit": "iter/sec",
            "range": "stddev: 0.20818899408798464",
            "extra": "mean: 23.12997925280006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04359506403019577,
            "unit": "iter/sec",
            "range": "stddev: 0.07297507134950076",
            "extra": "mean: 22.938376677399948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.04337207062623828,
            "unit": "iter/sec",
            "range": "stddev: 0.04149260246902765",
            "extra": "mean: 23.056312174200002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04343146342806667,
            "unit": "iter/sec",
            "range": "stddev: 0.0741494923523659",
            "extra": "mean: 23.024782521 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.043414250124143544,
            "unit": "iter/sec",
            "range": "stddev: 0.05769012929229474",
            "extra": "mean: 23.033911610599944 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04333744637460009,
            "unit": "iter/sec",
            "range": "stddev: 0.1274902397271476",
            "extra": "mean: 23.074732907799945 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04364431129490651,
            "unit": "iter/sec",
            "range": "stddev: 0.04933368634913921",
            "extra": "mean: 22.91249352619993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04349824680855617,
            "unit": "iter/sec",
            "range": "stddev: 0.09867252105451164",
            "extra": "mean: 22.989432295999997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04353118043482557,
            "unit": "iter/sec",
            "range": "stddev: 0.17251024802539683",
            "extra": "mean: 22.972039582000072 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marenz@meta.com",
            "name": "Martin Marenz",
            "username": "Blonck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fdc78be1136db7f1bb6c9102cfb26b6e79f188e2",
          "message": "[Feature] Dispatch SAC loss module (#1244)\n\nCo-authored-by: Vincent Moens <vincentmoens@gmail.com>",
          "timestamp": "2023-06-08T09:59:37+01:00",
          "tree_id": "362f58a2471f9c46e5fae521289e1ed16a82f65b",
          "url": "https://github.com/BY571/rl/commit/fdc78be1136db7f1bb6c9102cfb26b6e79f188e2"
        },
        "date": 1686217021841,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.04969269608390674,
            "unit": "iter/sec",
            "range": "stddev: 0.03303715052819524",
            "extra": "mean: 20.123681723999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09003403341816127,
            "unit": "iter/sec",
            "range": "stddev: 0.05997936876179084",
            "extra": "mean: 11.106911042800004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09050373151304324,
            "unit": "iter/sec",
            "range": "stddev: 0.10023032124113314",
            "extra": "mean: 11.049268171400001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0811882991934738,
            "unit": "iter/sec",
            "range": "stddev: 0.009432701131673117",
            "extra": "mean: 924.9082706000081 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4759855486815844,
            "unit": "iter/sec",
            "range": "stddev: 0.03858546194070802",
            "extra": "mean: 2.100904119399979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.38104785836505894,
            "unit": "iter/sec",
            "range": "stddev: 0.05190235839838615",
            "extra": "mean: 2.62434226580001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.41942373087587564,
            "unit": "iter/sec",
            "range": "stddev: 0.10010923589685249",
            "extra": "mean: 2.3842237012000167 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 72.8746835311131,
            "unit": "iter/sec",
            "range": "stddev: 0.000970478487846054",
            "extra": "mean: 13.722186520001287 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 22.44220713004878,
            "unit": "iter/sec",
            "range": "stddev: 0.004828413109548399",
            "extra": "mean: 44.558897179995256 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3362.3296154724594,
            "unit": "iter/sec",
            "range": "stddev: 0.00003154701384302596",
            "extra": "mean: 297.4128400137488 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.13688962632456,
            "unit": "iter/sec",
            "range": "stddev: 0.00005692222096325596",
            "extra": "mean: 13.13423762000184 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 23.07329959271249,
            "unit": "iter/sec",
            "range": "stddev: 0.000682851599801759",
            "extra": "mean: 43.34013849999337 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.41879743670573,
            "unit": "iter/sec",
            "range": "stddev: 0.00010939597171744309",
            "extra": "mean: 30.84630149999839 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 22.82577328473806,
            "unit": "iter/sec",
            "range": "stddev: 0.0006803152322662449",
            "extra": "mean: 43.810125840013825 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 88.58215371168006,
            "unit": "iter/sec",
            "range": "stddev: 0.00003375080803616188",
            "extra": "mean: 11.288955597702342 msec\nrounds: 87"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 287.0764900237122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000678046242130784",
            "extra": "mean: 3.4833921785702517 msec\nrounds: 112"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2160.6766461895427,
            "unit": "iter/sec",
            "range": "stddev: 0.00003258433069849292",
            "extra": "mean: 462.8179796192772 usec\nrounds: 785"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 17.37617663165624,
            "unit": "iter/sec",
            "range": "stddev: 0.0007848419547775301",
            "extra": "mean: 57.550059555574585 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 322.89306074471244,
            "unit": "iter/sec",
            "range": "stddev: 0.0001742036314241643",
            "extra": "mean: 3.097000591135731 msec\nrounds: 203"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.17028190134268095,
            "unit": "iter/sec",
            "range": "stddev: 0.0490675397176896",
            "extra": "mean: 5.872614717800024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.16587023893408404,
            "unit": "iter/sec",
            "range": "stddev: 0.09547520636391921",
            "extra": "mean: 6.0288090644000025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.16498567635802186,
            "unit": "iter/sec",
            "range": "stddev: 0.14152635581382567",
            "extra": "mean: 6.061132227200028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.17098540491567527,
            "unit": "iter/sec",
            "range": "stddev: 0.09491968337756229",
            "extra": "mean: 5.8484523897999905 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.16684131877857328,
            "unit": "iter/sec",
            "range": "stddev: 0.048768551440144345",
            "extra": "mean: 5.993719105799983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.16568360204545404,
            "unit": "iter/sec",
            "range": "stddev: 0.15259028594943352",
            "extra": "mean: 6.035600310799964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1693161501086536,
            "unit": "iter/sec",
            "range": "stddev: 0.09877489256961147",
            "extra": "mean: 5.906111138000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.16504224224832278,
            "unit": "iter/sec",
            "range": "stddev: 0.10443939697598571",
            "extra": "mean: 6.059054860000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.16423569391315762,
            "unit": "iter/sec",
            "range": "stddev: 0.15315038972916079",
            "extra": "mean: 6.088810392999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 29.997799781366346,
            "unit": "iter/sec",
            "range": "stddev: 0.0003962715537365176",
            "extra": "mean: 33.3357782000121 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.588264446914856,
            "unit": "iter/sec",
            "range": "stddev: 0.0007655550930767076",
            "extra": "mean: 33.797183399997266 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 29.498069811492854,
            "unit": "iter/sec",
            "range": "stddev: 0.00039548617676497306",
            "extra": "mean: 33.90052320000905 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 29.85386693349206,
            "unit": "iter/sec",
            "range": "stddev: 0.000486797149976929",
            "extra": "mean: 33.49649819997467 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 29.2336589824688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005600853568737448",
            "extra": "mean: 34.20714459998635 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 29.709105315497556,
            "unit": "iter/sec",
            "range": "stddev: 0.0004769343605268468",
            "extra": "mean: 33.65971440002795 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 29.654218292378438,
            "unit": "iter/sec",
            "range": "stddev: 0.0004344048022207741",
            "extra": "mean: 33.72201520000999 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 11.79788996012037,
            "unit": "iter/sec",
            "range": "stddev: 0.11461455610346813",
            "extra": "mean: 84.76091940001425 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 29.609470098682234,
            "unit": "iter/sec",
            "range": "stddev: 0.0003672265225209304",
            "extra": "mean: 33.77297859999544 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04872533568820815,
            "unit": "iter/sec",
            "range": "stddev: 0.018488880440215835",
            "extra": "mean: 20.523203911799964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04891940520917058,
            "unit": "iter/sec",
            "range": "stddev: 0.03871891763051906",
            "extra": "mean: 20.44178574380003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.048852385666256576,
            "unit": "iter/sec",
            "range": "stddev: 0.2126045567395169",
            "extra": "mean: 20.469829392400015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04915571583916859,
            "unit": "iter/sec",
            "range": "stddev: 0.07959447999476442",
            "extra": "mean: 20.343514135199985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04956696005572801,
            "unit": "iter/sec",
            "range": "stddev: 0.0357640661743603",
            "extra": "mean: 20.174729272799915 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04935201215734372,
            "unit": "iter/sec",
            "range": "stddev: 0.08696717874532747",
            "extra": "mean: 20.26259834780003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04949385818098345,
            "unit": "iter/sec",
            "range": "stddev: 0.04011335253221648",
            "extra": "mean: 20.204527122199988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04941778868276547,
            "unit": "iter/sec",
            "range": "stddev: 0.04323128105377393",
            "extra": "mean: 20.235628235400007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04925732758677581,
            "unit": "iter/sec",
            "range": "stddev: 0.06647671464497167",
            "extra": "mean: 20.30154799279999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd344a31d16fa98f35835cab77c1d91b42ce6c85",
          "message": "[Feature] Make losses inherit from TDMBase (#1246)",
          "timestamp": "2023-06-08T15:08:46+01:00",
          "tree_id": "d5634c7a7cd775e6067fff07c8bb2905b9430c12",
          "url": "https://github.com/BY571/rl/commit/cd344a31d16fa98f35835cab77c1d91b42ce6c85"
        },
        "date": 1686237761600,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.04995337888114519,
            "unit": "iter/sec",
            "range": "stddev: 0.17762403829273885",
            "extra": "mean: 20.018665852000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09156079727279222,
            "unit": "iter/sec",
            "range": "stddev: 0.04116885335562512",
            "extra": "mean: 10.92170481019998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09179076621740719,
            "unit": "iter/sec",
            "range": "stddev: 0.17964792644552338",
            "extra": "mean: 10.894342004199984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0670381231813486,
            "unit": "iter/sec",
            "range": "stddev: 0.005066959261144195",
            "extra": "mean: 937.1736382000336 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4824983795583785,
            "unit": "iter/sec",
            "range": "stddev: 0.037508131908598884",
            "extra": "mean: 2.072545820600021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3838695126577989,
            "unit": "iter/sec",
            "range": "stddev: 0.0447350136110901",
            "extra": "mean: 2.605051891400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4418381043063372,
            "unit": "iter/sec",
            "range": "stddev: 0.05940728516827586",
            "extra": "mean: 2.2632724300000064 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 73.59385920587634,
            "unit": "iter/sec",
            "range": "stddev: 0.0003920558982561433",
            "extra": "mean: 13.588090240009478 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 23.603819757430465,
            "unit": "iter/sec",
            "range": "stddev: 0.0038936356852496985",
            "extra": "mean: 42.36602424000466 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4344.973517288098,
            "unit": "iter/sec",
            "range": "stddev: 0.00003771629433113244",
            "extra": "mean: 230.1510000052076 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.8186947007966,
            "unit": "iter/sec",
            "range": "stddev: 0.00007769167212106106",
            "extra": "mean: 13.189359219995822 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 23.657775917706182,
            "unit": "iter/sec",
            "range": "stddev: 0.0005505984760053903",
            "extra": "mean: 42.26940027999717 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.65345958563126,
            "unit": "iter/sec",
            "range": "stddev: 0.00015206990451153767",
            "extra": "mean: 31.592123359998823 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 23.099710365490214,
            "unit": "iter/sec",
            "range": "stddev: 0.000989870307162667",
            "extra": "mean: 43.29058607998604 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 86.14196054029777,
            "unit": "iter/sec",
            "range": "stddev: 0.000045489319408681014",
            "extra": "mean: 11.60874437646672 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 296.3965165636674,
            "unit": "iter/sec",
            "range": "stddev: 0.00007310271630064413",
            "extra": "mean: 3.373858814515437 msec\nrounds: 124"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2231.4195860098393,
            "unit": "iter/sec",
            "range": "stddev: 0.000030159259465019616",
            "extra": "mean: 448.1452104613689 usec\nrounds: 822"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 18.102673640087346,
            "unit": "iter/sec",
            "range": "stddev: 0.0005775720615525921",
            "extra": "mean: 55.24045894444877 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 330.7296697596095,
            "unit": "iter/sec",
            "range": "stddev: 0.00011249479091593436",
            "extra": "mean: 3.0236174478293676 msec\nrounds: 230"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.17238160993240917,
            "unit": "iter/sec",
            "range": "stddev: 0.04897060701552116",
            "extra": "mean: 5.801082844000007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.16730508563545035,
            "unit": "iter/sec",
            "range": "stddev: 0.1405010602557165",
            "extra": "mean: 5.977104618200019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.16789887547842688,
            "unit": "iter/sec",
            "range": "stddev: 0.10742563441489779",
            "extra": "mean: 5.9559660369999845 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.1718698490751247,
            "unit": "iter/sec",
            "range": "stddev: 0.018620718170449437",
            "extra": "mean: 5.818356188600001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.16898671989627367,
            "unit": "iter/sec",
            "range": "stddev: 0.0698700945747387",
            "extra": "mean: 5.917624773200009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.16719155491193383,
            "unit": "iter/sec",
            "range": "stddev: 0.146442692632072",
            "extra": "mean: 5.981163345999971 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1738403058826012,
            "unit": "iter/sec",
            "range": "stddev: 0.07084864547416653",
            "extra": "mean: 5.752405893000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1675628069687375,
            "unit": "iter/sec",
            "range": "stddev: 0.1391286930364371",
            "extra": "mean: 5.967911483999979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.167329847163867,
            "unit": "iter/sec",
            "range": "stddev: 0.1167651496025634",
            "extra": "mean: 5.976220124199926 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 30.244416806474213,
            "unit": "iter/sec",
            "range": "stddev: 0.0004954423975337083",
            "extra": "mean: 33.06395380009235 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 29.885125581859636,
            "unit": "iter/sec",
            "range": "stddev: 0.000545381769911001",
            "extra": "mean: 33.46146220001174 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 30.081795108289192,
            "unit": "iter/sec",
            "range": "stddev: 0.0005272513966381344",
            "extra": "mean: 33.24269699996876 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 30.188902893852735,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378537268788669",
            "extra": "mean: 33.124754599930384 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 29.955814813751026,
            "unit": "iter/sec",
            "range": "stddev: 0.0004825574545012079",
            "extra": "mean: 33.3825003999209 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 29.883518408207866,
            "unit": "iter/sec",
            "range": "stddev: 0.0005019738262214416",
            "extra": "mean: 33.46326180003416 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 29.794889655569477,
            "unit": "iter/sec",
            "range": "stddev: 0.0005059146453773153",
            "extra": "mean: 33.56280260004496 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 12.983882960667794,
            "unit": "iter/sec",
            "range": "stddev: 0.09669066036213733",
            "extra": "mean: 77.01856239996232 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 29.538538378685804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005101635008062003",
            "extra": "mean: 33.85407859996121 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04854277485227283,
            "unit": "iter/sec",
            "range": "stddev: 0.02852019772429403",
            "extra": "mean: 20.600388070999998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04865612721959373,
            "unit": "iter/sec",
            "range": "stddev: 0.07785332152629237",
            "extra": "mean: 20.552396114200018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.04891863700813315,
            "unit": "iter/sec",
            "range": "stddev: 0.19163609747905527",
            "extra": "mean: 20.442106754399994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.049248685594428084,
            "unit": "iter/sec",
            "range": "stddev: 0.06575388448204574",
            "extra": "mean: 20.305110439600004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.049287955303502475,
            "unit": "iter/sec",
            "range": "stddev: 0.03788383807629725",
            "extra": "mean: 20.288932536199944 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.049124141793283595,
            "unit": "iter/sec",
            "range": "stddev: 0.09760989395136443",
            "extra": "mean: 20.356589723399974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04924735651142843,
            "unit": "iter/sec",
            "range": "stddev: 0.04463979939930584",
            "extra": "mean: 20.305658432000065 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04918881989074461,
            "unit": "iter/sec",
            "range": "stddev: 0.01667218235922103",
            "extra": "mean: 20.329822960199955 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.049077141642675556,
            "unit": "iter/sec",
            "range": "stddev: 0.09665811702894685",
            "extra": "mean: 20.376084803000005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marenz@meta.com",
            "name": "Martin Marenz",
            "username": "Blonck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "acd65f62f92169a135c3df3ce8c4340ee68f5180",
          "message": "[Feature] Dispatch reinforce loss module (#1252)",
          "timestamp": "2023-06-12T07:49:19+01:00",
          "tree_id": "e87cafe1183e06621ac97f393b798873d09b2f68",
          "url": "https://github.com/BY571/rl/commit/acd65f62f92169a135c3df3ce8c4340ee68f5180"
        },
        "date": 1686558307837,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06031152200636592,
            "unit": "iter/sec",
            "range": "stddev: 0.04947415887771453",
            "extra": "mean: 16.580579742199994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11033523491122066,
            "unit": "iter/sec",
            "range": "stddev: 0.05167052581871197",
            "extra": "mean: 9.06328790440001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11157287602514117,
            "unit": "iter/sec",
            "range": "stddev: 0.04408209801387421",
            "extra": "mean: 8.96275184100001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.6438427506258744,
            "unit": "iter/sec",
            "range": "stddev: 0.042104605532891415",
            "extra": "mean: 608.33069319998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6249654600339245,
            "unit": "iter/sec",
            "range": "stddev: 0.002741983890864826",
            "extra": "mean: 1.6000884271999893 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.5032743746977256,
            "unit": "iter/sec",
            "range": "stddev: 0.008656111439749974",
            "extra": "mean: 1.986987715400005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.6198607545519919,
            "unit": "iter/sec",
            "range": "stddev: 0.038562716463962095",
            "extra": "mean: 1.6132655482000247 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 73.92988079644539,
            "unit": "iter/sec",
            "range": "stddev: 0.0012698956985570363",
            "extra": "mean: 13.526330480003708 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 22.91461267430568,
            "unit": "iter/sec",
            "range": "stddev: 0.005176183159174989",
            "extra": "mean: 43.64027505999729 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4566.174600238107,
            "unit": "iter/sec",
            "range": "stddev: 0.000038963981414384635",
            "extra": "mean: 219.00170001117658 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 78.65486761012481,
            "unit": "iter/sec",
            "range": "stddev: 0.0001550154829629271",
            "extra": "mean: 12.713771319999978 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 23.896273849381277,
            "unit": "iter/sec",
            "range": "stddev: 0.0009132273839132528",
            "extra": "mean: 41.84752846000265 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 32.38900511430758,
            "unit": "iter/sec",
            "range": "stddev: 0.00014797430443642587",
            "extra": "mean: 30.874674800006687 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 23.746500574383628,
            "unit": "iter/sec",
            "range": "stddev: 0.0007558919832692411",
            "extra": "mean: 42.11146804000009 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 86.88532403811325,
            "unit": "iter/sec",
            "range": "stddev: 0.000029538410809944287",
            "extra": "mean: 11.50942361176369 msec\nrounds: 85"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 299.432751788112,
            "unit": "iter/sec",
            "range": "stddev: 0.00006962217563737195",
            "extra": "mean: 3.339648031246867 msec\nrounds: 128"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2144.0329300172693,
            "unit": "iter/sec",
            "range": "stddev: 0.000029671302441604002",
            "extra": "mean: 466.41074677521175 usec\nrounds: 853"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 19.144572633312404,
            "unit": "iter/sec",
            "range": "stddev: 0.0003961965148219937",
            "extra": "mean: 52.23412499999899 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 325.9996338232629,
            "unit": "iter/sec",
            "range": "stddev: 0.00014712206150736788",
            "extra": "mean: 3.0674881081067067 msec\nrounds: 222"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.19210225184236276,
            "unit": "iter/sec",
            "range": "stddev: 0.016274726966364717",
            "extra": "mean: 5.205561051000018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.18649408919111954,
            "unit": "iter/sec",
            "range": "stddev: 0.12923289397874843",
            "extra": "mean: 5.362100237800019 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.18808593676935909,
            "unit": "iter/sec",
            "range": "stddev: 0.026903904143120636",
            "extra": "mean: 5.316718608400015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.1938594219321468,
            "unit": "iter/sec",
            "range": "stddev: 0.036271146412528696",
            "extra": "mean: 5.1583770860000415 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18679590843346408,
            "unit": "iter/sec",
            "range": "stddev: 0.09826180484052154",
            "extra": "mean: 5.353436316600027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18779152591931528,
            "unit": "iter/sec",
            "range": "stddev: 0.11061326333432864",
            "extra": "mean: 5.325053913399961 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.19392507658403374,
            "unit": "iter/sec",
            "range": "stddev: 0.06758573153841013",
            "extra": "mean: 5.156630682400009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.18886973457913503,
            "unit": "iter/sec",
            "range": "stddev: 0.017233535950363144",
            "extra": "mean: 5.294654552400016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.18769492229123852,
            "unit": "iter/sec",
            "range": "stddev: 0.026806702274061425",
            "extra": "mean: 5.327794634999987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 32.90862688071523,
            "unit": "iter/sec",
            "range": "stddev: 0.00035826663133746217",
            "extra": "mean: 30.387168799984465 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 32.688910899598795,
            "unit": "iter/sec",
            "range": "stddev: 0.0008116286443817321",
            "extra": "mean: 30.591413799970724 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 32.89578799237867,
            "unit": "iter/sec",
            "range": "stddev: 0.00035741243716912863",
            "extra": "mean: 30.399028600004385 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 33.027819616507465,
            "unit": "iter/sec",
            "range": "stddev: 0.0004665985193785203",
            "extra": "mean: 30.277505799995197 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 32.66087146537579,
            "unit": "iter/sec",
            "range": "stddev: 0.00048355869643496377",
            "extra": "mean: 30.617676599968036 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.57825729064912,
            "unit": "iter/sec",
            "range": "stddev: 0.0008365772031415914",
            "extra": "mean: 30.6953189999831 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 33.16630274720657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005442713923060291",
            "extra": "mean: 30.151084599992828 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 14.003319817436758,
            "unit": "iter/sec",
            "range": "stddev: 0.09229766593081719",
            "extra": "mean: 71.411637600022 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 33.21360735722537,
            "unit": "iter/sec",
            "range": "stddev: 0.0002465205585112401",
            "extra": "mean: 30.108141799973964 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0468480612307765,
            "unit": "iter/sec",
            "range": "stddev: 0.03688400192592552",
            "extra": "mean: 21.345600516399962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04681460554753568,
            "unit": "iter/sec",
            "range": "stddev: 0.020039321916936213",
            "extra": "mean: 21.36085497900003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.04656069408441767,
            "unit": "iter/sec",
            "range": "stddev: 0.16575178828613765",
            "extra": "mean: 21.477343060800013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.046723881801362756,
            "unit": "iter/sec",
            "range": "stddev: 0.10592634140810904",
            "extra": "mean: 21.402331344199958 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04696472400456665,
            "unit": "iter/sec",
            "range": "stddev: 0.032845704227244955",
            "extra": "mean: 21.292576954200012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04701201077522797,
            "unit": "iter/sec",
            "range": "stddev: 0.10311965432346686",
            "extra": "mean: 21.271159933599982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04707736147957073,
            "unit": "iter/sec",
            "range": "stddev: 0.0402198317998606",
            "extra": "mean: 21.241632253199896 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.0469954684854208,
            "unit": "iter/sec",
            "range": "stddev: 0.039437090682863614",
            "extra": "mean: 21.278647329800016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04685830772492993,
            "unit": "iter/sec",
            "range": "stddev: 0.08832725847569262",
            "extra": "mean: 21.340932879399997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marenz@meta.com",
            "name": "Martin Marenz",
            "username": "Blonck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2dbdec9cbe7a3e6fd3abb7653e6cfb91bccbbd9d",
          "message": "[BugFix] DQN loss dispatch respect configured tensordict keys (#1285)",
          "timestamp": "2023-06-15T15:23:30+01:00",
          "tree_id": "26010c04be46e8377d8d20c2de01404189b53c9f",
          "url": "https://github.com/BY571/rl/commit/2dbdec9cbe7a3e6fd3abb7653e6cfb91bccbbd9d"
        },
        "date": 1686842347552,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05938797710220136,
            "unit": "iter/sec",
            "range": "stddev: 0.12475666469002901",
            "extra": "mean: 16.838425028000028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10895239147594535,
            "unit": "iter/sec",
            "range": "stddev: 0.039234471733569504",
            "extra": "mean: 9.17832079179998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10921510876200094,
            "unit": "iter/sec",
            "range": "stddev: 0.06127389883428476",
            "extra": "mean: 9.156242312399991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.6072455364257245,
            "unit": "iter/sec",
            "range": "stddev: 0.04492588034967605",
            "extra": "mean: 622.182471400015 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6085709781642289,
            "unit": "iter/sec",
            "range": "stddev: 0.037918740358665506",
            "extra": "mean: 1.6431937043999825 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.49416102222045116,
            "unit": "iter/sec",
            "range": "stddev: 0.005805398681489052",
            "extra": "mean: 2.0236318831999824 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.6251901411876538,
            "unit": "iter/sec",
            "range": "stddev: 0.04775177609896169",
            "extra": "mean: 1.599513386600006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 73.74856538757653,
            "unit": "iter/sec",
            "range": "stddev: 0.00036269263579228575",
            "extra": "mean: 13.559585800003333 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 23.86464982100836,
            "unit": "iter/sec",
            "range": "stddev: 0.003131403318025298",
            "extra": "mean: 41.90298234000011 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4989.371142809445,
            "unit": "iter/sec",
            "range": "stddev: 0.00003164913871376706",
            "extra": "mean: 200.42605999378793 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.95044203931313,
            "unit": "iter/sec",
            "range": "stddev: 0.0001130289486689253",
            "extra": "mean: 12.995376939993548 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 23.912741987455586,
            "unit": "iter/sec",
            "range": "stddev: 0.0017056542141778673",
            "extra": "mean: 41.81870905998949 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.29587613583639,
            "unit": "iter/sec",
            "range": "stddev: 0.0005749045999302873",
            "extra": "mean: 31.953091699992914 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 23.266097157206943,
            "unit": "iter/sec",
            "range": "stddev: 0.0008695007811589804",
            "extra": "mean: 42.9809947600188 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 85.94213049200182,
            "unit": "iter/sec",
            "range": "stddev: 0.000054936341757980304",
            "extra": "mean: 11.63573667856727 msec\nrounds: 84"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 296.192023605228,
            "unit": "iter/sec",
            "range": "stddev: 0.00006823483102140921",
            "extra": "mean: 3.376188149255581 msec\nrounds: 134"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2225.738137296333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000191968912038715",
            "extra": "mean: 449.2891518742309 usec\nrounds: 856"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 17.832377170352466,
            "unit": "iter/sec",
            "range": "stddev: 0.0005537164116350791",
            "extra": "mean: 56.0777730555502 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 352.54184536908446,
            "unit": "iter/sec",
            "range": "stddev: 0.00008157945788123309",
            "extra": "mean: 2.836542705882407 msec\nrounds: 221"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.1906068600615169,
            "unit": "iter/sec",
            "range": "stddev: 0.03430492001449408",
            "extra": "mean: 5.24640088860001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.1830885940383935,
            "unit": "iter/sec",
            "range": "stddev: 0.14495381020407982",
            "extra": "mean: 5.461836687599998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.18632760582150354,
            "unit": "iter/sec",
            "range": "stddev: 0.04449652286863925",
            "extra": "mean: 5.366891264400033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.19343487924257027,
            "unit": "iter/sec",
            "range": "stddev: 0.05478610076352912",
            "extra": "mean: 5.169698473799985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.185807143071339,
            "unit": "iter/sec",
            "range": "stddev: 0.11357970447719402",
            "extra": "mean: 5.3819244161999675 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18555318295801077,
            "unit": "iter/sec",
            "range": "stddev: 0.1024809698975665",
            "extra": "mean: 5.38929046679998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1920882963992273,
            "unit": "iter/sec",
            "range": "stddev: 0.07534739172347305",
            "extra": "mean: 5.2059392412000305 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.18550456951554742,
            "unit": "iter/sec",
            "range": "stddev: 0.11235549114263506",
            "extra": "mean: 5.390702787600003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.18312689975889307,
            "unit": "iter/sec",
            "range": "stddev: 0.11878530000533653",
            "extra": "mean: 5.460694203399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 33.24675125712539,
            "unit": "iter/sec",
            "range": "stddev: 0.0005227812654019883",
            "extra": "mean: 30.0781268000037 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 32.761711147035626,
            "unit": "iter/sec",
            "range": "stddev: 0.0006373731955458943",
            "extra": "mean: 30.523436200019205 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 32.780657136024026,
            "unit": "iter/sec",
            "range": "stddev: 0.0005226792205625979",
            "extra": "mean: 30.505794799978503 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 33.09666942057397,
            "unit": "iter/sec",
            "range": "stddev: 0.0004885645654842484",
            "extra": "mean: 30.214520600020478 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 32.46290207723566,
            "unit": "iter/sec",
            "range": "stddev: 0.0006106793079984068",
            "extra": "mean: 30.804393199991864 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.46642165213389,
            "unit": "iter/sec",
            "range": "stddev: 0.0004064274742562419",
            "extra": "mean: 30.801053799973488 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 32.87749043541964,
            "unit": "iter/sec",
            "range": "stddev: 0.0006988658873529249",
            "extra": "mean: 30.415946799962512 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 32.85970882483811,
            "unit": "iter/sec",
            "range": "stddev: 0.0003663820082729452",
            "extra": "mean: 30.432406000022638 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 28.009653672796848,
            "unit": "iter/sec",
            "range": "stddev: 0.010661935365220948",
            "extra": "mean: 35.70197659998939 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.04669201136018826,
            "unit": "iter/sec",
            "range": "stddev: 0.14139706448782452",
            "extra": "mean: 21.41693987620001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.046543709212387416,
            "unit": "iter/sec",
            "range": "stddev: 0.03543821050129658",
            "extra": "mean: 21.485180638200063 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.04705048241856035,
            "unit": "iter/sec",
            "range": "stddev: 0.03539277052892443",
            "extra": "mean: 21.253767200599896 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04711349891695225,
            "unit": "iter/sec",
            "range": "stddev: 0.11897295701156375",
            "extra": "mean: 21.225339297400023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.04730737484770692,
            "unit": "iter/sec",
            "range": "stddev: 0.028104500714167948",
            "extra": "mean: 21.13835323180001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.0474279254221492,
            "unit": "iter/sec",
            "range": "stddev: 0.06549899241823086",
            "extra": "mean: 21.084624535000057 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.047476935441289614,
            "unit": "iter/sec",
            "range": "stddev: 0.10260163856903795",
            "extra": "mean: 21.06285906419989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.047326574888738385,
            "unit": "iter/sec",
            "range": "stddev: 0.07133435767969759",
            "extra": "mean: 21.129777558399972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.04745734735735625,
            "unit": "iter/sec",
            "range": "stddev: 0.04799528003798367",
            "extra": "mean: 21.071552787599966 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "osalpekar@fb.com",
            "name": "Omkar Salpekar",
            "username": "osalpekar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b518f30e19ef7fdf8028ac685a2f38f65d802805",
          "message": "[Nova] Remove old CircleCI Lint (#1134)",
          "timestamp": "2023-06-15T17:27:06+01:00",
          "tree_id": "d670257c02ba8686292833a2b4fe094b120cc7a5",
          "url": "https://github.com/BY571/rl/commit/b518f30e19ef7fdf8028ac685a2f38f65d802805"
        },
        "date": 1686900869059,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.07634112063975522,
            "unit": "iter/sec",
            "range": "stddev: 0.055904361334605586",
            "extra": "mean: 13.099100348799993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.13744221306612037,
            "unit": "iter/sec",
            "range": "stddev: 0.02373828871851441",
            "extra": "mean: 7.275785056799998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.13957593523539957,
            "unit": "iter/sec",
            "range": "stddev: 0.02706543808212925",
            "extra": "mean: 7.1645588353999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 2.0027389000573055,
            "unit": "iter/sec",
            "range": "stddev: 0.03145214404267606",
            "extra": "mean: 499.3162113999915 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.7990988048796809,
            "unit": "iter/sec",
            "range": "stddev: 0.024074299131761925",
            "extra": "mean: 1.251409705400033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.6117824444178781,
            "unit": "iter/sec",
            "range": "stddev: 0.005709912935946541",
            "extra": "mean: 1.6345679892000136 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.7122144342591599,
            "unit": "iter/sec",
            "range": "stddev: 0.04147595239807347",
            "extra": "mean: 1.4040715153999828 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 72.48919133602051,
            "unit": "iter/sec",
            "range": "stddev: 0.0011326514221420203",
            "extra": "mean: 13.795160100000885 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 19.71603214982204,
            "unit": "iter/sec",
            "range": "stddev: 0.0031078287623177315",
            "extra": "mean: 50.72014452000303 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 5239.774710624849,
            "unit": "iter/sec",
            "range": "stddev: 0.000041012479519126066",
            "extra": "mean: 190.8479000007901 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 75.42983210840987,
            "unit": "iter/sec",
            "range": "stddev: 0.0005405958164278561",
            "extra": "mean: 13.257354180011589 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 20.11605425634487,
            "unit": "iter/sec",
            "range": "stddev: 0.0004778886623712843",
            "extra": "mean: 49.71153822000588 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.341707992320824,
            "unit": "iter/sec",
            "range": "stddev: 0.0002924744829259035",
            "extra": "mean: 31.906365800007283 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 20.021760642547584,
            "unit": "iter/sec",
            "range": "stddev: 0.0007003505316530517",
            "extra": "mean: 49.945657519995166 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 81.6017839431936,
            "unit": "iter/sec",
            "range": "stddev: 0.000040760758968345144",
            "extra": "mean: 12.254634049374971 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 408.3849971617786,
            "unit": "iter/sec",
            "range": "stddev: 0.00007962942766500923",
            "extra": "mean: 2.448669777170726 msec\nrounds: 184"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2563.831274979213,
            "unit": "iter/sec",
            "range": "stddev: 0.00003414188273035985",
            "extra": "mean: 390.0412674418709 usec\nrounds: 946"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 22.308256554290722,
            "unit": "iter/sec",
            "range": "stddev: 0.001820752132442222",
            "extra": "mean: 44.82645237499128 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 268.95493741554424,
            "unit": "iter/sec",
            "range": "stddev: 0.00010049505132578297",
            "extra": "mean: 3.7180949701435186 msec\nrounds: 201"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 499.009423189496,
            "unit": "iter/sec",
            "range": "stddev: 0.000694426910433495",
            "extra": "mean: 2.003970172764164 msec\nrounds: 492"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 250.46233445658106,
            "unit": "iter/sec",
            "range": "stddev: 0.00010742834571186676",
            "extra": "mean: 3.992616303643673 msec\nrounds: 247"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 108.76822459375092,
            "unit": "iter/sec",
            "range": "stddev: 0.00012020206067387682",
            "extra": "mean: 9.193861568808336 msec\nrounds: 109"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 75.33883168687557,
            "unit": "iter/sec",
            "range": "stddev: 0.00026843333282325165",
            "extra": "mean: 13.273367499992775 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 81.31180910821764,
            "unit": "iter/sec",
            "range": "stddev: 0.0000977960907825739",
            "extra": "mean: 12.2983366249926 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 95.36160109394346,
            "unit": "iter/sec",
            "range": "stddev: 0.00018030650761854982",
            "extra": "mean: 10.486401114583543 msec\nrounds: 96"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 36.21392182881484,
            "unit": "iter/sec",
            "range": "stddev: 0.0004978494480242432",
            "extra": "mean: 27.613689694451043 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 185.38499351377789,
            "unit": "iter/sec",
            "range": "stddev: 0.00006792365699181938",
            "extra": "mean: 5.394179868855888 msec\nrounds: 183"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 176.2821440294245,
            "unit": "iter/sec",
            "range": "stddev: 0.00012098059380649707",
            "extra": "mean: 5.672724288133703 msec\nrounds: 177"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 239.77625640350698,
            "unit": "iter/sec",
            "range": "stddev: 0.000442054558356241",
            "extra": "mean: 4.17055472880998 msec\nrounds: 236"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 46.73325334387574,
            "unit": "iter/sec",
            "range": "stddev: 0.0005665692931568631",
            "extra": "mean: 21.398039478264725 msec\nrounds: 46"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.23702132111466348,
            "unit": "iter/sec",
            "range": "stddev: 0.054460578536546296",
            "extra": "mean: 4.219029728199985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.22818300550806683,
            "unit": "iter/sec",
            "range": "stddev: 0.034345742616600915",
            "extra": "mean: 4.382447315799982 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2294670207829257,
            "unit": "iter/sec",
            "range": "stddev: 0.021855950919824705",
            "extra": "mean: 4.35792471000002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.24039009446428644,
            "unit": "iter/sec",
            "range": "stddev: 0.013665819310142298",
            "extra": "mean: 4.159905183399997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.22894305895018233,
            "unit": "iter/sec",
            "range": "stddev: 0.021765127099855043",
            "extra": "mean: 4.367898308799999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.22677285580427958,
            "unit": "iter/sec",
            "range": "stddev: 0.03580032064682973",
            "extra": "mean: 4.409698843599995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.23273639542524996,
            "unit": "iter/sec",
            "range": "stddev: 0.009831151868358935",
            "extra": "mean: 4.296706573000006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2241093177498272,
            "unit": "iter/sec",
            "range": "stddev: 0.03990260824266977",
            "extra": "mean: 4.462108091000028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.22845011243416424,
            "unit": "iter/sec",
            "range": "stddev: 0.04081126020713642",
            "extra": "mean: 4.377323299800014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 40.26527212248672,
            "unit": "iter/sec",
            "range": "stddev: 0.0004189745860177437",
            "extra": "mean: 24.835297199979323 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 39.70085564081058,
            "unit": "iter/sec",
            "range": "stddev: 0.00013245713268826226",
            "extra": "mean: 25.188373999981195 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 39.74450009649063,
            "unit": "iter/sec",
            "range": "stddev: 0.00011936981192559378",
            "extra": "mean: 25.160713999980544 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 40.77685786093062,
            "unit": "iter/sec",
            "range": "stddev: 0.00022464455705390593",
            "extra": "mean: 24.5237139999972 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 39.53916470910618,
            "unit": "iter/sec",
            "range": "stddev: 0.0002634347110436421",
            "extra": "mean: 25.291378999963854 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 39.42533878511561,
            "unit": "iter/sec",
            "range": "stddev: 0.00017693329873292023",
            "extra": "mean: 25.364398399983656 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 40.20255817726464,
            "unit": "iter/sec",
            "range": "stddev: 0.00039225554551767833",
            "extra": "mean: 24.87403899997389 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 39.36239284553563,
            "unit": "iter/sec",
            "range": "stddev: 0.00039701674764147096",
            "extra": "mean: 25.40495959999589 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 38.566201198356225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000841413869855659",
            "extra": "mean: 25.929439999981696 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06169549208194157,
            "unit": "iter/sec",
            "range": "stddev: 0.023307270446328677",
            "extra": "mean: 16.208639663200007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06166361714567589,
            "unit": "iter/sec",
            "range": "stddev: 0.01880469679245132",
            "extra": "mean: 16.217018175199996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06181887043283153,
            "unit": "iter/sec",
            "range": "stddev: 0.014341961192133738",
            "extra": "mean: 16.176290394800027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06169268145024298,
            "unit": "iter/sec",
            "range": "stddev: 0.01563835125510512",
            "extra": "mean: 16.209378105999985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06142817246542094,
            "unit": "iter/sec",
            "range": "stddev: 0.1470378430620001",
            "extra": "mean: 16.27917549660001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.0620988392489214,
            "unit": "iter/sec",
            "range": "stddev: 0.03264731930096422",
            "extra": "mean: 16.10336057960003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06244379608678828,
            "unit": "iter/sec",
            "range": "stddev: 0.06117701725204446",
            "extra": "mean: 16.014401152199934 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06241160697154495,
            "unit": "iter/sec",
            "range": "stddev: 0.07377177763763301",
            "extra": "mean: 16.02266066399998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.062438615092731534,
            "unit": "iter/sec",
            "range": "stddev: 0.052840228021511775",
            "extra": "mean: 16.015729985600046 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c73658d20d04bd9db2ee8fe377bc367dea387cf",
          "message": "[Refactor] Better batch-size handling by RBs (#1311)",
          "timestamp": "2023-06-24T21:08:06+01:00",
          "tree_id": "cf6b79c971771c70b6b926452264d068d914c682",
          "url": "https://github.com/BY571/rl/commit/7c73658d20d04bd9db2ee8fe377bc367dea387cf"
        },
        "date": 1687771077728,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05293715508428161,
            "unit": "iter/sec",
            "range": "stddev: 0.058874532424232344",
            "extra": "mean: 18.890323788800004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.09246879029891875,
            "unit": "iter/sec",
            "range": "stddev: 0.5100060302885597",
            "extra": "mean: 10.814459633000013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.09626622304397046,
            "unit": "iter/sec",
            "range": "stddev: 0.044378529822408315",
            "extra": "mean: 10.387859504400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.4078480207473483,
            "unit": "iter/sec",
            "range": "stddev: 0.04791378648508208",
            "extra": "mean: 710.3039427999875 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5407375619833472,
            "unit": "iter/sec",
            "range": "stddev: 0.008064824189536534",
            "extra": "mean: 1.8493259397999737 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4391076928930826,
            "unit": "iter/sec",
            "range": "stddev: 0.03792136310686944",
            "extra": "mean: 2.2773456630000055 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.516108175361078,
            "unit": "iter/sec",
            "range": "stddev: 0.05300548779856956",
            "extra": "mean: 1.937578297999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 60.37006378209677,
            "unit": "iter/sec",
            "range": "stddev: 0.0012029258385090817",
            "extra": "mean: 16.564501300006214 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 20.066632771157547,
            "unit": "iter/sec",
            "range": "stddev: 0.006292162320377025",
            "extra": "mean: 49.83397121999133 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4109.169792992315,
            "unit": "iter/sec",
            "range": "stddev: 0.000046793986375530425",
            "extra": "mean: 243.35816001212152 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 66.17028138988884,
            "unit": "iter/sec",
            "range": "stddev: 0.0003271931670001275",
            "extra": "mean: 15.112524520000079 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 20.85153858578305,
            "unit": "iter/sec",
            "range": "stddev: 0.0013545943463635574",
            "extra": "mean: 47.95809171999508 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 27.450736504744075,
            "unit": "iter/sec",
            "range": "stddev: 0.0003601473487346267",
            "extra": "mean: 36.428895079998256 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 19.183079468068325,
            "unit": "iter/sec",
            "range": "stddev: 0.0035984129682136647",
            "extra": "mean: 52.129273700011254 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 74.87093596779526,
            "unit": "iter/sec",
            "range": "stddev: 0.0001322580850352845",
            "extra": "mean: 13.356317602736217 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 238.73475150920638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003777129962782018",
            "extra": "mean: 4.188749202528384 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1736.5673471484442,
            "unit": "iter/sec",
            "range": "stddev: 0.00016343233349165592",
            "extra": "mean: 575.8486716003642 usec\nrounds: 743"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 16.17515795302448,
            "unit": "iter/sec",
            "range": "stddev: 0.0006060130350015809",
            "extra": "mean: 61.82319844444035 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 284.23794025081844,
            "unit": "iter/sec",
            "range": "stddev: 0.001157368837496005",
            "extra": "mean: 3.5181791674875487 msec\nrounds: 203"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 408.1188234973615,
            "unit": "iter/sec",
            "range": "stddev: 0.000107666506740511",
            "extra": "mean: 2.450266791005941 msec\nrounds: 378"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 182.31852277605026,
            "unit": "iter/sec",
            "range": "stddev: 0.0003363924259800934",
            "extra": "mean: 5.484906222218262 msec\nrounds: 171"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 75.4105591344985,
            "unit": "iter/sec",
            "range": "stddev: 0.0004078771520848419",
            "extra": "mean: 13.260742414287765 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 51.97455460940907,
            "unit": "iter/sec",
            "range": "stddev: 0.0010417397705391638",
            "extra": "mean: 19.240184115381872 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 55.99645167281208,
            "unit": "iter/sec",
            "range": "stddev: 0.0006741387789507118",
            "extra": "mean: 17.858274410725375 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 64.64274752474384,
            "unit": "iter/sec",
            "range": "stddev: 0.0006009539773399068",
            "extra": "mean: 15.469639492306879 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 26.88952326429232,
            "unit": "iter/sec",
            "range": "stddev: 0.0015005962100465356",
            "extra": "mean: 37.18920525928179 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 137.1701156350205,
            "unit": "iter/sec",
            "range": "stddev: 0.0011253237223914033",
            "extra": "mean: 7.2902176641797105 msec\nrounds: 134"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 134.4549421950323,
            "unit": "iter/sec",
            "range": "stddev: 0.00063742750065296",
            "extra": "mean: 7.437435795773575 msec\nrounds: 142"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 177.5272526261957,
            "unit": "iter/sec",
            "range": "stddev: 0.0008789972285910378",
            "extra": "mean: 5.632937958577078 msec\nrounds: 169"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 34.45163457277239,
            "unit": "iter/sec",
            "range": "stddev: 0.000998353869159429",
            "extra": "mean: 29.026198971421632 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.18740066403574562,
            "unit": "iter/sec",
            "range": "stddev: 0.14773979197500298",
            "extra": "mean: 5.336160387399991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.18229962041904443,
            "unit": "iter/sec",
            "range": "stddev: 0.02881147310054174",
            "extra": "mean: 5.485474943400004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1844320040281354,
            "unit": "iter/sec",
            "range": "stddev: 0.07723068712568125",
            "extra": "mean: 5.422052453799983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.19022137111587528,
            "unit": "iter/sec",
            "range": "stddev: 0.06751627091247511",
            "extra": "mean: 5.257032867199973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18638971947613653,
            "unit": "iter/sec",
            "range": "stddev: 0.04823195695826936",
            "extra": "mean: 5.365102768600013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.18635089009218242,
            "unit": "iter/sec",
            "range": "stddev: 0.05371781247752647",
            "extra": "mean: 5.3662206792000235 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.1921532097222357,
            "unit": "iter/sec",
            "range": "stddev: 0.0374623747388526",
            "extra": "mean: 5.204180567400021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1816703655270853,
            "unit": "iter/sec",
            "range": "stddev: 0.2201602377712835",
            "extra": "mean: 5.5044750809999865 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.18372432696833377,
            "unit": "iter/sec",
            "range": "stddev: 0.02898921765031181",
            "extra": "mean: 5.442937342600021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 32.82525355474002,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591899548765596",
            "extra": "mean: 30.4643495999926 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 32.577057380641946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006821530527896455",
            "extra": "mean: 30.69644959996367 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 32.47522867495048,
            "unit": "iter/sec",
            "range": "stddev: 0.00006327911994685827",
            "extra": "mean: 30.79270080002061 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 32.87694090004727,
            "unit": "iter/sec",
            "range": "stddev: 0.0006298767333737774",
            "extra": "mean: 30.41645520002021 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 32.414309854554766,
            "unit": "iter/sec",
            "range": "stddev: 0.00015016865157295664",
            "extra": "mean: 30.850572000053944 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 32.347906966820204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005199816316209954",
            "extra": "mean: 30.913901200028704 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 32.73687682222592,
            "unit": "iter/sec",
            "range": "stddev: 0.0002961415233939093",
            "extra": "mean: 30.54659139997966 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 32.36584926735785,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424156289586614",
            "extra": "mean: 30.89676380000128 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 32.06409885259204,
            "unit": "iter/sec",
            "range": "stddev: 0.0007521567330455221",
            "extra": "mean: 31.18752860004861 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.046484162527233974,
            "unit": "iter/sec",
            "range": "stddev: 0.1253958695306733",
            "extra": "mean: 21.51270337319993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.04631505807475046,
            "unit": "iter/sec",
            "range": "stddev: 0.39200328229189063",
            "extra": "mean: 21.591250050600046 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.046857287076868016,
            "unit": "iter/sec",
            "range": "stddev: 0.10308430125223851",
            "extra": "mean: 21.341397728799983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.04718851560006882,
            "unit": "iter/sec",
            "range": "stddev: 0.17355564074368532",
            "extra": "mean: 21.191596880799988 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.047326908033361634,
            "unit": "iter/sec",
            "range": "stddev: 0.0958201735956708",
            "extra": "mean: 21.129628821200004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04703735847114317,
            "unit": "iter/sec",
            "range": "stddev: 0.20669509978547973",
            "extra": "mean: 21.259697238599983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.047313133820361696,
            "unit": "iter/sec",
            "range": "stddev: 0.04528854595009132",
            "extra": "mean: 21.13578026339992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.047285870767907315,
            "unit": "iter/sec",
            "range": "stddev: 0.10206289220488304",
            "extra": "mean: 21.14796626900006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.047469092123205,
            "unit": "iter/sec",
            "range": "stddev: 0.047780704177343473",
            "extra": "mean: 21.06633928040001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48548729+MateuszGuzek@users.noreply.github.com",
            "name": "MateuszGuzek",
            "username": "MateuszGuzek"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56518a72a29a18bfcca24bae2c87c795734f8371",
          "message": "[Feature] Separate losses (#1240)",
          "timestamp": "2023-06-26T14:37:52+01:00",
          "tree_id": "2110d6d46295c3b84d59569189d86963cb426a17",
          "url": "https://github.com/BY571/rl/commit/56518a72a29a18bfcca24bae2c87c795734f8371"
        },
        "date": 1687862109883,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.036753666265771985,
            "unit": "iter/sec",
            "range": "stddev: 0.44411220319647865",
            "extra": "mean: 27.208170003199974 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.06957434523661021,
            "unit": "iter/sec",
            "range": "stddev: 0.2349201948341157",
            "extra": "mean: 14.373114063800017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.0716636476310538,
            "unit": "iter/sec",
            "range": "stddev: 0.16907246962539188",
            "extra": "mean: 13.954076202600003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.9753535458509381,
            "unit": "iter/sec",
            "range": "stddev: 0.05948860310059163",
            "extra": "mean: 1.0252692516000024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.3918658269459371,
            "unit": "iter/sec",
            "range": "stddev: 0.03456079408143142",
            "extra": "mean: 2.551893865800048 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.2858270442709166,
            "unit": "iter/sec",
            "range": "stddev: 0.07655274464732709",
            "extra": "mean: 3.498619252600065 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.37407430651885704,
            "unit": "iter/sec",
            "range": "stddev: 0.06710392004510972",
            "extra": "mean: 2.6732656656000247 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 41.293068251053604,
            "unit": "iter/sec",
            "range": "stddev: 0.0035886111774233783",
            "extra": "mean: 24.21713964000446 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 12.363475267283793,
            "unit": "iter/sec",
            "range": "stddev: 0.010731861277363145",
            "extra": "mean: 80.88340684000059 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2134.9602299880244,
            "unit": "iter/sec",
            "range": "stddev: 0.00019276618503422465",
            "extra": "mean: 468.39279999403516 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 45.408507172655845,
            "unit": "iter/sec",
            "range": "stddev: 0.0016038387666573797",
            "extra": "mean: 22.02230512000142 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 12.317268126380064,
            "unit": "iter/sec",
            "range": "stddev: 0.007514484919858917",
            "extra": "mean: 81.18683377999105 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 16.595260491315546,
            "unit": "iter/sec",
            "range": "stddev: 0.0043574686444828705",
            "extra": "mean: 60.25816832000373 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 12.588392526339883,
            "unit": "iter/sec",
            "range": "stddev: 0.00548378699875283",
            "extra": "mean: 79.4382601199959 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 52.09461061859774,
            "unit": "iter/sec",
            "range": "stddev: 0.002785619731337616",
            "extra": "mean: 19.195843641510983 msec\nrounds: 53"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 182.5481235393057,
            "unit": "iter/sec",
            "range": "stddev: 0.001101697992235269",
            "extra": "mean: 5.478007555551144 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1265.1759847508454,
            "unit": "iter/sec",
            "range": "stddev: 0.00022525651614976682",
            "extra": "mean: 790.4038742854676 usec\nrounds: 350"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 12.396534230796135,
            "unit": "iter/sec",
            "range": "stddev: 0.003983737490158119",
            "extra": "mean: 80.6677077142857 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 135.0893135625816,
            "unit": "iter/sec",
            "range": "stddev: 0.0009234618738316558",
            "extra": "mean: 7.402510040416625 msec\nrounds: 99"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 264.3104532916836,
            "unit": "iter/sec",
            "range": "stddev: 0.0007663540624437933",
            "extra": "mean: 3.783429628098877 msec\nrounds: 121"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 111.07274372074482,
            "unit": "iter/sec",
            "range": "stddev: 0.002224820867599445",
            "extra": "mean: 9.003108832119649 msec\nrounds: 137"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 44.595870177500636,
            "unit": "iter/sec",
            "range": "stddev: 0.0033579370218028313",
            "extra": "mean: 22.423601020000206 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 31.383622576990334,
            "unit": "iter/sec",
            "range": "stddev: 0.002808797789234995",
            "extra": "mean: 31.863753062502553 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 32.733421373141674,
            "unit": "iter/sec",
            "range": "stddev: 0.00314105701249947",
            "extra": "mean: 30.549816000001663 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 41.76522976513206,
            "unit": "iter/sec",
            "range": "stddev: 0.002261855777823751",
            "extra": "mean: 23.943361634151852 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 13.990019534052756,
            "unit": "iter/sec",
            "range": "stddev: 0.006567377488016166",
            "extra": "mean: 71.47952850000853 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 66.17436797068832,
            "unit": "iter/sec",
            "range": "stddev: 0.0017417399686600087",
            "extra": "mean: 15.111591249997977 msec\nrounds: 60"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 57.192895779297444,
            "unit": "iter/sec",
            "range": "stddev: 0.0023034983584190602",
            "extra": "mean: 17.484689075001825 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 78.91670668457486,
            "unit": "iter/sec",
            "range": "stddev: 0.0016072055211323725",
            "extra": "mean: 12.671588083331168 msec\nrounds: 60"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 15.47545145293945,
            "unit": "iter/sec",
            "range": "stddev: 0.005577595173013339",
            "extra": "mean: 64.61847029412878 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.14636143070927626,
            "unit": "iter/sec",
            "range": "stddev: 0.12276779420357335",
            "extra": "mean: 6.8324010988000055 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.1403396592186475,
            "unit": "iter/sec",
            "range": "stddev: 0.3958009731778359",
            "extra": "mean: 7.125569533000021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.14414395032325328,
            "unit": "iter/sec",
            "range": "stddev: 0.1731061745114159",
            "extra": "mean: 6.937509328400028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.15059582393348583,
            "unit": "iter/sec",
            "range": "stddev: 0.2159256803883003",
            "extra": "mean: 6.640290373799962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.14431508685083497,
            "unit": "iter/sec",
            "range": "stddev: 0.44194051995770006",
            "extra": "mean: 6.929282459799969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1404517489175768,
            "unit": "iter/sec",
            "range": "stddev: 0.45831589016062174",
            "extra": "mean: 7.11988286159999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.15047924551259692,
            "unit": "iter/sec",
            "range": "stddev: 0.10342532835013976",
            "extra": "mean: 6.645434701600015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1437638455802282,
            "unit": "iter/sec",
            "range": "stddev: 0.2525601893265894",
            "extra": "mean: 6.955851771799916 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.14416453246482744,
            "unit": "iter/sec",
            "range": "stddev: 0.15871779240344047",
            "extra": "mean: 6.936518871199996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 14.201897446205418,
            "unit": "iter/sec",
            "range": "stddev: 0.07368306582126119",
            "extra": "mean: 70.41312640003525 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 25.701698784617907,
            "unit": "iter/sec",
            "range": "stddev: 0.0027423269295318705",
            "extra": "mean: 38.90793400000803 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 6.846108257603027,
            "unit": "iter/sec",
            "range": "stddev: 0.2425964514273084",
            "extra": "mean: 146.0683883999991 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 8.444143905727524,
            "unit": "iter/sec",
            "range": "stddev: 0.17563853729571596",
            "extra": "mean: 118.42526740001631 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 25.818789729536945,
            "unit": "iter/sec",
            "range": "stddev: 0.0012646783533979788",
            "extra": "mean: 38.731482400044115 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 26.45690041551296,
            "unit": "iter/sec",
            "range": "stddev: 0.003022264792206816",
            "extra": "mean: 37.797322599953986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 11.48997107642225,
            "unit": "iter/sec",
            "range": "stddev: 0.11406508126398912",
            "extra": "mean: 87.03242099991257 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 25.28862463648825,
            "unit": "iter/sec",
            "range": "stddev: 0.0028304448802388515",
            "extra": "mean: 39.54347119997692 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 25.74909591706894,
            "unit": "iter/sec",
            "range": "stddev: 0.0019462025015096088",
            "extra": "mean: 38.83631499998046 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.030317123433753153,
            "unit": "iter/sec",
            "range": "stddev: 0.9219752819283109",
            "extra": "mean: 32.984659715 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.03061049474398419,
            "unit": "iter/sec",
            "range": "stddev: 0.7071482418602868",
            "extra": "mean: 32.66853438220001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.031038738061872517,
            "unit": "iter/sec",
            "range": "stddev: 0.5018959762979965",
            "extra": "mean: 32.217804667399925 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.031052448264888524,
            "unit": "iter/sec",
            "range": "stddev: 0.37385132709092106",
            "extra": "mean: 32.20357993900002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03103987559976325,
            "unit": "iter/sec",
            "range": "stddev: 0.7212748925218572",
            "extra": "mean: 32.2166239612 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.030741178619498506,
            "unit": "iter/sec",
            "range": "stddev: 0.7718602576638447",
            "extra": "mean: 32.529657121400035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.031488779890635823,
            "unit": "iter/sec",
            "range": "stddev: 0.7199102201409056",
            "extra": "mean: 31.75734351960018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03075255657881788,
            "unit": "iter/sec",
            "range": "stddev: 0.7453237834540306",
            "extra": "mean: 32.51762166299996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03221101517034633,
            "unit": "iter/sec",
            "range": "stddev: 0.8293271668097344",
            "extra": "mean: 31.045280464199912 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55539777+matteobettini@users.noreply.github.com",
            "name": "Matteo Bettini",
            "username": "matteobettini"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac0c560f0b3b4273dec02b1a1421b4ffcf02956e",
          "message": "[BugFix] Check env specs for nested envs (#1332)\n\nSigned-off-by: Matteo Bettini <matbet@meta.com>\r\nCo-authored-by: vmoens <vincentmoens@gmail.com>",
          "timestamp": "2023-06-29T13:46:10+01:00",
          "tree_id": "66f58a617b4b97eaddb068e4a52e65eab8f27104",
          "url": "https://github.com/BY571/rl/commit/ac0c560f0b3b4273dec02b1a1421b4ffcf02956e"
        },
        "date": 1688044514909,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06170087784210315,
            "unit": "iter/sec",
            "range": "stddev: 0.04435806905345275",
            "extra": "mean: 16.207224839800006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11322455800604271,
            "unit": "iter/sec",
            "range": "stddev: 0.03618334848388402",
            "extra": "mean: 8.832006215000025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.11152441594230714,
            "unit": "iter/sec",
            "range": "stddev: 0.10698281136900613",
            "extra": "mean: 8.966646375600044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.6985633866468655,
            "unit": "iter/sec",
            "range": "stddev: 0.008378344941724698",
            "extra": "mean: 588.7328126000057 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6223096341014024,
            "unit": "iter/sec",
            "range": "stddev: 0.044453759817461205",
            "extra": "mean: 1.6069171119999965 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.5059065904735878,
            "unit": "iter/sec",
            "range": "stddev: 0.03626585099266578",
            "extra": "mean: 1.9766494819999934 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.6257442016463612,
            "unit": "iter/sec",
            "range": "stddev: 0.03571283248052088",
            "extra": "mean: 1.5980971095999847 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 72.74042684155228,
            "unit": "iter/sec",
            "range": "stddev: 0.0011346968096445263",
            "extra": "mean: 13.747513499999968 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 24.146769971287252,
            "unit": "iter/sec",
            "range": "stddev: 0.0038588333790959364",
            "extra": "mean: 41.41340648000096 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 5125.13110076528,
            "unit": "iter/sec",
            "range": "stddev: 0.00003137242541489372",
            "extra": "mean: 195.11696000336087 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 76.81037011283242,
            "unit": "iter/sec",
            "range": "stddev: 0.00013077887728199793",
            "extra": "mean: 13.019075399988651 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 24.42811439110929,
            "unit": "iter/sec",
            "range": "stddev: 0.00047740934109497777",
            "extra": "mean: 40.93643840000823 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.671342897150573,
            "unit": "iter/sec",
            "range": "stddev: 0.00020342826465643375",
            "extra": "mean: 31.574284780010654 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 24.431167359110727,
            "unit": "iter/sec",
            "range": "stddev: 0.0008072429332777374",
            "extra": "mean: 40.93132290001222 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 85.74550880384133,
            "unit": "iter/sec",
            "range": "stddev: 0.00003652028372658712",
            "extra": "mean: 11.662418404766651 msec\nrounds: 84"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 299.35065894072306,
            "unit": "iter/sec",
            "range": "stddev: 0.00006993715843308905",
            "extra": "mean: 3.340563884304054 msec\nrounds: 121"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2266.152368337898,
            "unit": "iter/sec",
            "range": "stddev: 0.000017614415386984478",
            "extra": "mean: 441.2765946243264 usec\nrounds: 893"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 18.96823819728792,
            "unit": "iter/sec",
            "range": "stddev: 0.0005250532836524824",
            "extra": "mean: 52.719709105244156 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 364.7998338629911,
            "unit": "iter/sec",
            "range": "stddev: 0.00008282380656978427",
            "extra": "mean: 2.7412293185845384 msec\nrounds: 226"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 485.4849938214894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000388754708631446",
            "extra": "mean: 2.059795900442796 msec\nrounds: 452"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 223.74548984174777,
            "unit": "iter/sec",
            "range": "stddev: 0.00018829551062037018",
            "extra": "mean: 4.469363832572835 msec\nrounds: 221"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 92.75634907569363,
            "unit": "iter/sec",
            "range": "stddev: 0.00013348898452030495",
            "extra": "mean: 10.78093316484408 msec\nrounds: 91"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 63.429154657827276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003522564877617521",
            "extra": "mean: 15.765620800002228 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 70.7827599276772,
            "unit": "iter/sec",
            "range": "stddev: 0.0002824647349477349",
            "extra": "mean: 14.127733942866273 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 80.39283807893734,
            "unit": "iter/sec",
            "range": "stddev: 0.00024039960443309524",
            "extra": "mean: 12.438918987013553 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 33.828338535864255,
            "unit": "iter/sec",
            "range": "stddev: 0.0008347107938972132",
            "extra": "mean: 29.561014323532806 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 179.2205373180561,
            "unit": "iter/sec",
            "range": "stddev: 0.00010084468775723498",
            "extra": "mean: 5.579717676135168 msec\nrounds: 176"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 171.65559220032878,
            "unit": "iter/sec",
            "range": "stddev: 0.00011770272222087638",
            "extra": "mean: 5.825618537571214 msec\nrounds: 173"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 229.3181855525842,
            "unit": "iter/sec",
            "range": "stddev: 0.00008690695339327172",
            "extra": "mean: 4.360753149996878 msec\nrounds: 220"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 42.08583688407602,
            "unit": "iter/sec",
            "range": "stddev: 0.00036563213426621947",
            "extra": "mean: 23.76096269047626 msec\nrounds: 42"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.23854538142003437,
            "unit": "iter/sec",
            "range": "stddev: 0.12619994856329725",
            "extra": "mean: 4.192074455800025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.23249341615774607,
            "unit": "iter/sec",
            "range": "stddev: 0.030602427638278452",
            "extra": "mean: 4.301197068400006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.23291126780189775,
            "unit": "iter/sec",
            "range": "stddev: 0.025030326283823432",
            "extra": "mean: 4.293480557800012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.24484405579140892,
            "unit": "iter/sec",
            "range": "stddev: 0.016883086027653805",
            "extra": "mean: 4.084232295400033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2315401301247867,
            "unit": "iter/sec",
            "range": "stddev: 0.033562109321380804",
            "extra": "mean: 4.318905752799992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23324219873186686,
            "unit": "iter/sec",
            "range": "stddev: 0.027268629563821655",
            "extra": "mean: 4.2873888405999425 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2433502273589486,
            "unit": "iter/sec",
            "range": "stddev: 0.02066405748191747",
            "extra": "mean: 4.109303742399925 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.23369041529159731,
            "unit": "iter/sec",
            "range": "stddev: 0.01850247657800408",
            "extra": "mean: 4.279165659200044 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.2326525281372121,
            "unit": "iter/sec",
            "range": "stddev: 0.03016928223759093",
            "extra": "mean: 4.298255462799989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 41.227904533215195,
            "unit": "iter/sec",
            "range": "stddev: 0.0002537711548255333",
            "extra": "mean: 24.255416600044555 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 40.39582250641407,
            "unit": "iter/sec",
            "range": "stddev: 0.0003373395816562685",
            "extra": "mean: 24.755034999998315 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 40.30406937612117,
            "unit": "iter/sec",
            "range": "stddev: 0.0003549642752251598",
            "extra": "mean: 24.81139040000926 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 41.36305939774692,
            "unit": "iter/sec",
            "range": "stddev: 0.00043906509119086",
            "extra": "mean: 24.176161400055207 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 40.23359949730352,
            "unit": "iter/sec",
            "range": "stddev: 0.0003547003569685989",
            "extra": "mean: 24.854848000040874 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 40.24344807083224,
            "unit": "iter/sec",
            "range": "stddev: 0.00040032949964220776",
            "extra": "mean: 24.848765400020056 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 41.52943024182884,
            "unit": "iter/sec",
            "range": "stddev: 0.00017511232805466592",
            "extra": "mean: 24.07930940003098 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 40.44786595270042,
            "unit": "iter/sec",
            "range": "stddev: 0.00023823826331525758",
            "extra": "mean: 24.723183200057974 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 40.314282405366676,
            "unit": "iter/sec",
            "range": "stddev: 0.0003195307700476345",
            "extra": "mean: 24.80510479995246 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0524445421554048,
            "unit": "iter/sec",
            "range": "stddev: 0.2147694054693687",
            "extra": "mean: 19.067761084399944 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.053164952103573325,
            "unit": "iter/sec",
            "range": "stddev: 0.04385500448049667",
            "extra": "mean: 18.809384010199985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05319182913469636,
            "unit": "iter/sec",
            "range": "stddev: 0.07715227556447302",
            "extra": "mean: 18.799879911400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05344023879359081,
            "unit": "iter/sec",
            "range": "stddev: 0.04052235129262011",
            "extra": "mean: 18.71249123460002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05313466233155145,
            "unit": "iter/sec",
            "range": "stddev: 0.11934887599282165",
            "extra": "mean: 18.820106426200027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.053238752791711474,
            "unit": "iter/sec",
            "range": "stddev: 0.05419491337846887",
            "extra": "mean: 18.78331004320007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.053006526981779,
            "unit": "iter/sec",
            "range": "stddev: 0.162103207596678",
            "extra": "mean: 18.86560121819998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.05302969984486594,
            "unit": "iter/sec",
            "range": "stddev: 0.06605578722936131",
            "extra": "mean: 18.85735734740001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.05328536085602372,
            "unit": "iter/sec",
            "range": "stddev: 0.08751107055611579",
            "extra": "mean: 18.76688050779999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75a45be5aaddf9150345f8e955235aff366b5174",
          "message": "[Refactor] Migration due to tensordict 473 and 474 (#1354)",
          "timestamp": "2023-07-04T16:41:59+01:00",
          "tree_id": "ede2c16de382d84c68debe436f9255011a0b4ffc",
          "url": "https://github.com/BY571/rl/commit/75a45be5aaddf9150345f8e955235aff366b5174"
        },
        "date": 1688545923868,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 5.970247035091011,
            "unit": "iter/sec",
            "range": "stddev: 0.0010457142419957762",
            "extra": "mean: 167.49725666665918 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 11.604589690264632,
            "unit": "iter/sec",
            "range": "stddev: 0.00036458520987742556",
            "extra": "mean: 86.17280116667321 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 11.736655673746792,
            "unit": "iter/sec",
            "range": "stddev: 0.031942041997980744",
            "extra": "mean: 85.20314711428877 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.5637304457345127,
            "unit": "iter/sec",
            "range": "stddev: 0.03877249573188103",
            "extra": "mean: 639.4964060000007 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5893456803833899,
            "unit": "iter/sec",
            "range": "stddev: 0.03385899310691542",
            "extra": "mean: 1.6967970298000068 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.5061180794444774,
            "unit": "iter/sec",
            "range": "stddev: 0.03490807811950184",
            "extra": "mean: 1.975823509600002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.6533310051177418,
            "unit": "iter/sec",
            "range": "stddev: 0.04465957167184997",
            "extra": "mean: 1.5306176993999885 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-True]",
            "value": 21155.26841780501,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035399580161829707",
            "extra": "mean: 47.26954913785755 usec\nrounds: 13106"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-True-False]",
            "value": 44786.43827848547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015224079272976597",
            "extra": "mean: 22.32818769337995 usec\nrounds: 13245"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-True]",
            "value": 31998.872048798843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022917545647163757",
            "extra": "mean: 31.25110155367297 usec\nrounds: 17183"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-True-False-False]",
            "value": 58953.49454313031,
            "unit": "iter/sec",
            "range": "stddev: 9.721819782704295e-7",
            "extra": "mean: 16.96252287925699 usec\nrounds: 24214"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-True]",
            "value": 22670.338529885958,
            "unit": "iter/sec",
            "range": "stddev: 0.000004480462457973764",
            "extra": "mean: 44.11050142377518 usec\nrounds: 13699"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-True-False]",
            "value": 42398.218630598945,
            "unit": "iter/sec",
            "range": "stddev: 9.091941062796803e-7",
            "extra": "mean: 23.585896584775295 usec\nrounds: 20790"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-True]",
            "value": 31201.629200807427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013290347446641345",
            "extra": "mean: 32.049608485640306 usec\nrounds: 17182"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-True-False-False-False]",
            "value": 54627.97202071587,
            "unit": "iter/sec",
            "range": "stddev: 8.610523092556817e-7",
            "extra": "mean: 18.305640187792118 usec\nrounds: 24510"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-True]",
            "value": 23168.777927727988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032174472170806553",
            "extra": "mean: 43.16153416116167 usec\nrounds: 14578"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-True-False]",
            "value": 40553.63631329957,
            "unit": "iter/sec",
            "range": "stddev: 9.086002012084197e-7",
            "extra": "mean: 24.658701189566322 usec\nrounds: 21097"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-True]",
            "value": 31398.2501531695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010143514787103076",
            "extra": "mean: 31.848908621395093 usec\nrounds: 17422"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-True-False-False]",
            "value": 55435.31055978124,
            "unit": "iter/sec",
            "range": "stddev: 6.341310095129915e-7",
            "extra": "mean: 18.03904388560435 usec\nrounds: 24450"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-True]",
            "value": 22944.30867830845,
            "unit": "iter/sec",
            "range": "stddev: 0.00000122518282082093",
            "extra": "mean: 43.58379300159085 usec\nrounds: 14145"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-True-False]",
            "value": 38434.25949004156,
            "unit": "iter/sec",
            "range": "stddev: 8.151315438461387e-7",
            "extra": "mean: 26.018453673059664 usec\nrounds: 18553"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-True]",
            "value": 30500.161559705302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012323619462469013",
            "extra": "mean: 32.78671157339477 usec\nrounds: 17065"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[True-False-False-False-False]",
            "value": 52011.868767399465,
            "unit": "iter/sec",
            "range": "stddev: 6.433513814357352e-7",
            "extra": "mean: 19.22638089533115 usec\nrounds: 24214"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-True]",
            "value": 22282.744661173616,
            "unit": "iter/sec",
            "range": "stddev: 0.000004709772196152962",
            "extra": "mean: 44.877774942260224 usec\nrounds: 13441"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-True-False]",
            "value": 40422.61545935593,
            "unit": "iter/sec",
            "range": "stddev: 8.848713380130972e-7",
            "extra": "mean: 24.73862684628802 usec\nrounds: 21053"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-True]",
            "value": 27286.42701242027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015058418754317655",
            "extra": "mean: 36.648257375171134 usec\nrounds: 14881"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-True-False-False]",
            "value": 49712.844490246,
            "unit": "iter/sec",
            "range": "stddev: 9.742410403334016e-7",
            "extra": "mean: 20.115525680615736 usec\nrounds: 22371"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-True]",
            "value": 21818.651166088523,
            "unit": "iter/sec",
            "range": "stddev: 0.000004674243116686319",
            "extra": "mean: 45.832347398002426 usec\nrounds: 13106"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-True-False]",
            "value": 38502.95837921562,
            "unit": "iter/sec",
            "range": "stddev: 0.000001007726359290805",
            "extra": "mean: 25.97203025676626 usec\nrounds: 21053"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-True]",
            "value": 26581.668838910984,
            "unit": "iter/sec",
            "range": "stddev: 0.000001317534506145755",
            "extra": "mean: 37.61991039991335 usec\nrounds: 15625"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-True-False-False-False]",
            "value": 47127.64939664067,
            "unit": "iter/sec",
            "range": "stddev: 8.197420148449375e-7",
            "extra": "mean: 21.218966207792263 usec\nrounds: 22372"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-True]",
            "value": 22427.379839457408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027075159465725582",
            "extra": "mean: 44.58835615922726 usec\nrounds: 14165"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-True-False]",
            "value": 36564.36072434104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021565996779240353",
            "extra": "mean: 27.349035514089984 usec\nrounds: 20161"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-True]",
            "value": 26522.432239278827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013983408058665006",
            "extra": "mean: 37.70393269283327 usec\nrounds: 208"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-True-False-False]",
            "value": 47781.365588974375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010838920712992066",
            "extra": "mean: 20.928660947077486 usec\nrounds: 22728"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-True]",
            "value": 22044.565205339568,
            "unit": "iter/sec",
            "range": "stddev: 0.000001913158422159542",
            "extra": "mean: 45.36265472624441 usec\nrounds: 13986"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-True-False]",
            "value": 35097.33709210611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022474931200833426",
            "extra": "mean: 28.49219008768943 usec\nrounds: 18018"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-True]",
            "value": 26154.72600582435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013707142182278785",
            "extra": "mean: 38.234007872126504 usec\nrounds: 15244"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_step_mdp_speed[False-False-False-False-False]",
            "value": 45287.93411515732,
            "unit": "iter/sec",
            "range": "stddev: 8.446691648527594e-7",
            "extra": "mean: 22.08093655712399 usec\nrounds: 22272"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 63.93256724234493,
            "unit": "iter/sec",
            "range": "stddev: 0.004741792875955657",
            "extra": "mean: 15.641480439998075 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 22.943816288108863,
            "unit": "iter/sec",
            "range": "stddev: 0.003253185842490166",
            "extra": "mean: 43.58472833999599 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4450.358872469528,
            "unit": "iter/sec",
            "range": "stddev: 0.000030592091284493305",
            "extra": "mean: 224.70098000098915 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 71.15708093833518,
            "unit": "iter/sec",
            "range": "stddev: 0.00011911501542994499",
            "extra": "mean: 14.05341515999794 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 23.41555260985456,
            "unit": "iter/sec",
            "range": "stddev: 0.001099956946126372",
            "extra": "mean: 42.706658120002885 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 29.52755055141092,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194286474438219",
            "extra": "mean: 33.86667642000589 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 23.265374485806856,
            "unit": "iter/sec",
            "range": "stddev: 0.0006575434586865879",
            "extra": "mean: 42.982329839996964 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 80.19368541320104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000698358934863999",
            "extra": "mean: 12.469809746833079 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 294.52341409242774,
            "unit": "iter/sec",
            "range": "stddev: 0.0001403520870446593",
            "extra": "mean: 3.395315795457195 msec\nrounds: 132"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1998.8361909461842,
            "unit": "iter/sec",
            "range": "stddev: 0.00039671272462229085",
            "extra": "mean: 500.2911216684707 usec\nrounds: 863"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 17.550999724250996,
            "unit": "iter/sec",
            "range": "stddev: 0.003407774752476027",
            "extra": "mean: 56.97681133333137 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 329.399313268154,
            "unit": "iter/sec",
            "range": "stddev: 0.00012459274628673307",
            "extra": "mean: 3.0358290370384906 msec\nrounds: 243"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_dqn_speed",
            "value": 556.9779236741934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870931977138544",
            "extra": "mean: 1.795403296064844 msec\nrounds: 483"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ddpg_speed",
            "value": 352.0803861270248,
            "unit": "iter/sec",
            "range": "stddev: 0.0001472410497663526",
            "extra": "mean: 2.8402604615390774 msec\nrounds: 351"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_sac_speed",
            "value": 117.7465604702202,
            "unit": "iter/sec",
            "range": "stddev: 0.000321252042614188",
            "extra": "mean: 8.492817081080805 msec\nrounds: 111"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_speed",
            "value": 67.13002239501314,
            "unit": "iter/sec",
            "range": "stddev: 0.0006292194129888263",
            "extra": "mean: 14.89646456716044 msec\nrounds: 67"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_redq_deprec_speed",
            "value": 78.92642273117153,
            "unit": "iter/sec",
            "range": "stddev: 0.00046645163812792224",
            "extra": "mean: 12.670028178092707 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_td3_speed",
            "value": 88.20764323151064,
            "unit": "iter/sec",
            "range": "stddev: 0.0003895418932388493",
            "extra": "mean: 11.336886049379988 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_cql_speed",
            "value": 35.743392082877904,
            "unit": "iter/sec",
            "range": "stddev: 0.0013969829478901177",
            "extra": "mean: 27.977199189190227 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_a2c_speed",
            "value": 170.69123766331307,
            "unit": "iter/sec",
            "range": "stddev: 0.0003434622878455825",
            "extra": "mean: 5.858531543209565 msec\nrounds: 162"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_ppo_speed",
            "value": 159.01097909731735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003859229215270074",
            "extra": "mean: 6.288873923529415 msec\nrounds: 170"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_reinforce_speed",
            "value": 228.84371947351914,
            "unit": "iter/sec",
            "range": "stddev: 0.00021624463981709824",
            "extra": "mean: 4.3697943832612625 msec\nrounds: 227"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_iql_speed",
            "value": 44.557611668518774,
            "unit": "iter/sec",
            "range": "stddev: 0.0005811160005736836",
            "extra": "mean: 22.44285460000381 msec\nrounds: 45"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 206.80178902424643,
            "unit": "iter/sec",
            "range": "stddev: 0.008089442189693414",
            "extra": "mean: 4.835548109705933 msec\nrounds: 237"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 223.4756297571714,
            "unit": "iter/sec",
            "range": "stddev: 0.00029269664566830084",
            "extra": "mean: 4.474760854624731 msec\nrounds: 227"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 224.69497376440583,
            "unit": "iter/sec",
            "range": "stddev: 0.0003040682200931257",
            "extra": "mean: 4.450477833333765 msec\nrounds: 228"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 229.7780343374709,
            "unit": "iter/sec",
            "range": "stddev: 0.00008884091546777008",
            "extra": "mean: 4.352026088495987 msec\nrounds: 226"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 223.22366924381694,
            "unit": "iter/sec",
            "range": "stddev: 0.0003232965360196952",
            "extra": "mean: 4.47981167672567 msec\nrounds: 232"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 224.88986296436613,
            "unit": "iter/sec",
            "range": "stddev: 0.00034394085330714087",
            "extra": "mean: 4.446621056274334 msec\nrounds: 231"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 207.292100611875,
            "unit": "iter/sec",
            "range": "stddev: 0.0075880101532977045",
            "extra": "mean: 4.824110504202753 msec\nrounds: 238"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 221.35808194278377,
            "unit": "iter/sec",
            "range": "stddev: 0.0002495044585358609",
            "extra": "mean: 4.517567152838261 msec\nrounds: 229"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 222.39953616276432,
            "unit": "iter/sec",
            "range": "stddev: 0.0003063564301710123",
            "extra": "mean: 4.49641225541111 msec\nrounds: 231"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 230.79030660733875,
            "unit": "iter/sec",
            "range": "stddev: 0.00012049228000294701",
            "extra": "mean: 4.332937612069543 msec\nrounds: 232"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 220.94883053392232,
            "unit": "iter/sec",
            "range": "stddev: 0.0003135996507623554",
            "extra": "mean: 4.525934794873105 msec\nrounds: 234"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 193.7003391415107,
            "unit": "iter/sec",
            "range": "stddev: 0.010233005303896403",
            "extra": "mean: 5.162613573275341 msec\nrounds: 232"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 225.7214102043047,
            "unit": "iter/sec",
            "range": "stddev: 0.00013985370357324763",
            "extra": "mean: 4.430239909873331 msec\nrounds: 233"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 220.80064240811046,
            "unit": "iter/sec",
            "range": "stddev: 0.0002695107918315729",
            "extra": "mean: 4.528972330396027 msec\nrounds: 227"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 223.87879269130698,
            "unit": "iter/sec",
            "range": "stddev: 0.00029093839346570996",
            "extra": "mean: 4.466702665217781 msec\nrounds: 230"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 205.90073493897748,
            "unit": "iter/sec",
            "range": "stddev: 0.007949151011493849",
            "extra": "mean: 4.8567092307677715 msec\nrounds: 234"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 221.56286754055003,
            "unit": "iter/sec",
            "range": "stddev: 0.0002616661817192599",
            "extra": "mean: 4.513391666665362 msec\nrounds: 228"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 190.32396519194992,
            "unit": "iter/sec",
            "range": "stddev: 0.010788724965665467",
            "extra": "mean: 5.254199065217335 msec\nrounds: 230"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 28.22844294037848,
            "unit": "iter/sec",
            "range": "stddev: 0.05684708763924747",
            "extra": "mean: 35.42526245999852 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 27.237044723647745,
            "unit": "iter/sec",
            "range": "stddev: 0.04613731281604909",
            "extra": "mean: 36.714702719997376 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 29.628109527648068,
            "unit": "iter/sec",
            "range": "stddev: 0.042214223302184085",
            "extra": "mean: 33.75173157999939 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 29.324591613142378,
            "unit": "iter/sec",
            "range": "stddev: 0.0428544493083336",
            "extra": "mean: 34.10107165999989 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 29.48897602138033,
            "unit": "iter/sec",
            "range": "stddev: 0.04199882501288002",
            "extra": "mean: 33.9109774200017 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 27.003703388339456,
            "unit": "iter/sec",
            "range": "stddev: 0.04688405675851242",
            "extra": "mean: 37.03195763999588 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 29.30011645700828,
            "unit": "iter/sec",
            "range": "stddev: 0.043071640415015745",
            "extra": "mean: 34.1295571799958 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 29.577808677827854,
            "unit": "iter/sec",
            "range": "stddev: 0.042336004167471804",
            "extra": "mean: 33.80913072000567 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 30.114834997039697,
            "unit": "iter/sec",
            "range": "stddev: 0.04055095366810547",
            "extra": "mean: 33.206225439996615 msec\nrounds: 50"
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
          "id": "8e1af207142814a8ed4270d8bd8a65efc93c5fb1",
          "message": "[BugFix] Fix EnvPoool (#1106)",
          "timestamp": "2023-04-28T11:38:30+01:00",
          "tree_id": "03b2a2f1fe75b42bd33c0d79354a0f6d481c66a5",
          "url": "https://github.com/BY571/rl/commit/8e1af207142814a8ed4270d8bd8a65efc93c5fb1"
        },
        "date": 1682686250508,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.0474182408504362,
            "unit": "iter/sec",
            "range": "stddev: 0.07855529973130856",
            "extra": "mean: 21.088930800999993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.08777626843476415,
            "unit": "iter/sec",
            "range": "stddev: 0.12016978415504063",
            "extra": "mean: 11.392600959599985 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.08932322615194738,
            "unit": "iter/sec",
            "range": "stddev: 0.098377849624684",
            "extra": "mean: 11.195296487600036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.8606967077853086,
            "unit": "iter/sec",
            "range": "stddev: 0.04545405860144558",
            "extra": "mean: 1.1618494540000484 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.48590411000792333,
            "unit": "iter/sec",
            "range": "stddev: 0.04284064354922525",
            "extra": "mean: 2.0580192251999962 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3294833801993658,
            "unit": "iter/sec",
            "range": "stddev: 0.03561539978839727",
            "extra": "mean: 3.035054452200029 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.38419458816344304,
            "unit": "iter/sec",
            "range": "stddev: 0.10728214666950071",
            "extra": "mean: 2.6028476996000336 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 23.64358150162938,
            "unit": "iter/sec",
            "range": "stddev: 0.001178444670841146",
            "extra": "mean: 42.294776700014154 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.2044112824962578,
            "unit": "iter/sec",
            "range": "stddev: 0.013961087370741124",
            "extra": "mean: 830.2811627000074 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3142.786798576186,
            "unit": "iter/sec",
            "range": "stddev: 0.000038378661336098634",
            "extra": "mean: 318.1889399729698 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 65.74219492522157,
            "unit": "iter/sec",
            "range": "stddev: 0.000495354462923355",
            "extra": "mean: 15.210931139999957 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.114211328738359,
            "unit": "iter/sec",
            "range": "stddev: 0.017738491629227977",
            "extra": "mean: 897.4958108999999 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 27.283736771448112,
            "unit": "iter/sec",
            "range": "stddev: 0.0023566397847376327",
            "extra": "mean: 36.65187098002207 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.105140946685856,
            "unit": "iter/sec",
            "range": "stddev: 0.019460525934347245",
            "extra": "mean: 904.861957199978 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.2089726361443611,
            "unit": "iter/sec",
            "range": "stddev: 0.027677388814994795",
            "extra": "mean: 4.785315524800035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.19700564036581042,
            "unit": "iter/sec",
            "range": "stddev: 0.030161708043607544",
            "extra": "mean: 5.075996799599989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.19661169304073317,
            "unit": "iter/sec",
            "range": "stddev: 0.059382094524356825",
            "extra": "mean: 5.086167483400004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2079473414348398,
            "unit": "iter/sec",
            "range": "stddev: 0.047917570291349326",
            "extra": "mean: 4.808909760999995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.2001979180160771,
            "unit": "iter/sec",
            "range": "stddev: 0.03914623366728163",
            "extra": "mean: 4.995056941200028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.20045070019369005,
            "unit": "iter/sec",
            "range": "stddev: 0.05368543356466608",
            "extra": "mean: 4.988757829400083 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.213247633742779,
            "unit": "iter/sec",
            "range": "stddev: 0.03268199185212759",
            "extra": "mean: 4.68938380439995 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.20133542181385136,
            "unit": "iter/sec",
            "range": "stddev: 0.017512152404746843",
            "extra": "mean: 4.966835894999986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.20327865931431507,
            "unit": "iter/sec",
            "range": "stddev: 0.05431761684429828",
            "extra": "mean: 4.919355545599956 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.08698986177502,
            "unit": "iter/sec",
            "range": "stddev: 0.0016308720490897525",
            "extra": "mean: 29.336706000003687 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 32.11772765922744,
            "unit": "iter/sec",
            "range": "stddev: 0.0019136298627836638",
            "extra": "mean: 31.135452999978952 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 33.04507038956872,
            "unit": "iter/sec",
            "range": "stddev: 0.00012999688352272127",
            "extra": "mean: 30.26169980003033 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 33.29132367782664,
            "unit": "iter/sec",
            "range": "stddev: 0.002754151434026106",
            "extra": "mean: 30.037856399985685 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 32.71169682080856,
            "unit": "iter/sec",
            "range": "stddev: 0.0008482216458209653",
            "extra": "mean: 30.570104800062836 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 31.545481000060345,
            "unit": "iter/sec",
            "range": "stddev: 0.0012571202573054825",
            "extra": "mean: 31.70026160000816 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.74261275810985,
            "unit": "iter/sec",
            "range": "stddev: 0.00027648904122525903",
            "extra": "mean: 28.783097200039265 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 32.836901984379935,
            "unit": "iter/sec",
            "range": "stddev: 0.0004901088612474861",
            "extra": "mean: 30.453542799978095 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 31.965124565918057,
            "unit": "iter/sec",
            "range": "stddev: 0.0009468322714976925",
            "extra": "mean: 31.284095199998774 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.054714604656016554,
            "unit": "iter/sec",
            "range": "stddev: 0.10553150681017244",
            "extra": "mean: 18.276655863400038 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05518843974504206,
            "unit": "iter/sec",
            "range": "stddev: 0.0769339846821808",
            "extra": "mean: 18.11973675319996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05493702845503095,
            "unit": "iter/sec",
            "range": "stddev: 0.05474034915030318",
            "extra": "mean: 18.202659083000025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05519892750049743,
            "unit": "iter/sec",
            "range": "stddev: 0.05034144780482273",
            "extra": "mean: 18.116294016600023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05519278107733096,
            "unit": "iter/sec",
            "range": "stddev: 0.06605747369176383",
            "extra": "mean: 18.118311497999958 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.05507340512917775,
            "unit": "iter/sec",
            "range": "stddev: 0.12730795226758737",
            "extra": "mean: 18.157584366799984 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05490010576037716,
            "unit": "iter/sec",
            "range": "stddev: 0.10494034008582413",
            "extra": "mean: 18.214901158200064 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.055067046719459396,
            "unit": "iter/sec",
            "range": "stddev: 0.060928952732165885",
            "extra": "mean: 18.159680963000028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.055076350480116006,
            "unit": "iter/sec",
            "range": "stddev: 0.02284928371629582",
            "extra": "mean: 18.156613342799936 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rohitnigam@gmail.com",
            "name": "Rohit Nigam",
            "username": "rohitnig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a93629d255a1c79f1e49b63536451e21cde3783",
          "message": "Added the entry for skip-tests in the environment.yml (#1113)",
          "timestamp": "2023-05-01T04:48:01+01:00",
          "tree_id": "0ee298a226ed34319e0cdca2556e40726f42550a",
          "url": "https://github.com/BY571/rl/commit/7a93629d255a1c79f1e49b63536451e21cde3783"
        },
        "date": 1683014203908,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.05862753807755006,
            "unit": "iter/sec",
            "range": "stddev: 0.07422527593915297",
            "extra": "mean: 17.056830847600008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.10693132617466652,
            "unit": "iter/sec",
            "range": "stddev: 0.11739622626433603",
            "extra": "mean: 9.351796482600003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.10845947794006669,
            "unit": "iter/sec",
            "range": "stddev: 0.06385192370934967",
            "extra": "mean: 9.220033315600016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0642035683590092,
            "unit": "iter/sec",
            "range": "stddev: 0.037928382900004505",
            "extra": "mean: 939.669843000047 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.5899759298799965,
            "unit": "iter/sec",
            "range": "stddev: 0.043082608817308486",
            "extra": "mean: 1.6949844042000222 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4002087593903857,
            "unit": "iter/sec",
            "range": "stddev: 0.03574484284554229",
            "extra": "mean: 2.498695934399939 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.472624905857415,
            "unit": "iter/sec",
            "range": "stddev: 0.11485637929070874",
            "extra": "mean: 2.115842791200021 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 27.714388980780495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005383499807971908",
            "extra": "mean: 36.08233978001408 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 1.3965907245913078,
            "unit": "iter/sec",
            "range": "stddev: 0.004006498145866687",
            "extra": "mean: 716.0293866999837 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4341.971598981277,
            "unit": "iter/sec",
            "range": "stddev: 0.00002308593501402374",
            "extra": "mean: 230.31012000046758 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 74.37679711447409,
            "unit": "iter/sec",
            "range": "stddev: 0.00014455341762373362",
            "extra": "mean: 13.445053280001957 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 1.283976407798397,
            "unit": "iter/sec",
            "range": "stddev: 0.006371726861377788",
            "extra": "mean: 778.8305095999976 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.271672402582848,
            "unit": "iter/sec",
            "range": "stddev: 0.00024019287334267142",
            "extra": "mean: 31.97782283999004 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 1.2820256439380868,
            "unit": "iter/sec",
            "range": "stddev: 0.004754165343147373",
            "extra": "mean: 780.0155985400033 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.24912239743532458,
            "unit": "iter/sec",
            "range": "stddev: 0.04325552976925191",
            "extra": "mean: 4.014091106599972 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.23820333320250636,
            "unit": "iter/sec",
            "range": "stddev: 0.03729726133767727",
            "extra": "mean: 4.19809406760005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.2372355859278117,
            "unit": "iter/sec",
            "range": "stddev: 0.010428915000336145",
            "extra": "mean: 4.215219213799946 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.2503313843433446,
            "unit": "iter/sec",
            "range": "stddev: 0.024902548519390763",
            "extra": "mean: 3.9947048693999934 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23765185531781788,
            "unit": "iter/sec",
            "range": "stddev: 0.011311553973456973",
            "extra": "mean: 4.207835864200069 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.23767082339807527,
            "unit": "iter/sec",
            "range": "stddev: 0.023534645306957185",
            "extra": "mean: 4.207500044400058 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.2471188159503487,
            "unit": "iter/sec",
            "range": "stddev: 0.032920972625929634",
            "extra": "mean: 4.046636417199897 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.2355219539821396,
            "unit": "iter/sec",
            "range": "stddev: 0.03983778090746351",
            "extra": "mean: 4.245888687199977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.23211529878314346,
            "unit": "iter/sec",
            "range": "stddev: 0.01502875613338204",
            "extra": "mean: 4.308203747200059 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 39.51416199811338,
            "unit": "iter/sec",
            "range": "stddev: 0.00023828782549574986",
            "extra": "mean: 25.30738220002604 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 37.4550806834907,
            "unit": "iter/sec",
            "range": "stddev: 0.00029820275411746744",
            "extra": "mean: 26.698647600051117 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 37.43187623122637,
            "unit": "iter/sec",
            "range": "stddev: 0.000502858966887339",
            "extra": "mean: 26.715198399961082 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 39.84974097270438,
            "unit": "iter/sec",
            "range": "stddev: 0.00012074989446467239",
            "extra": "mean: 25.094265999996423 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 37.91754995596148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005350187472569351",
            "extra": "mean: 26.373012000021845 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 37.732587252420885,
            "unit": "iter/sec",
            "range": "stddev: 0.00029420666560505787",
            "extra": "mean: 26.502290799999173 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 39.67474674353725,
            "unit": "iter/sec",
            "range": "stddev: 0.0003944139232208032",
            "extra": "mean: 25.204949800036047 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 38.655855201229365,
            "unit": "iter/sec",
            "range": "stddev: 0.0001803294680215836",
            "extra": "mean: 25.869302199998856 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 38.34473009014394,
            "unit": "iter/sec",
            "range": "stddev: 0.0004282971948207931",
            "extra": "mean: 26.07920299997204 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.06516942662193814,
            "unit": "iter/sec",
            "range": "stddev: 0.08196512869001418",
            "extra": "mean: 15.344618662999983 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.06529904138127317,
            "unit": "iter/sec",
            "range": "stddev: 0.12065230067218065",
            "extra": "mean: 15.314160496799968 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.06563783691930883,
            "unit": "iter/sec",
            "range": "stddev: 0.024514763679601044",
            "extra": "mean: 15.235115094200001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.06586538284201614,
            "unit": "iter/sec",
            "range": "stddev: 0.0253610461451297",
            "extra": "mean: 15.182482160600012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06527097210061379,
            "unit": "iter/sec",
            "range": "stddev: 0.07399670468402933",
            "extra": "mean: 15.320746234000035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.0656845446922635,
            "unit": "iter/sec",
            "range": "stddev: 0.033802105118147324",
            "extra": "mean: 15.224281521400007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06531914802854556,
            "unit": "iter/sec",
            "range": "stddev: 0.22563942891989738",
            "extra": "mean: 15.309446466799955 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.06568519878549305,
            "unit": "iter/sec",
            "range": "stddev: 0.04270364879464331",
            "extra": "mean: 15.22412991799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06597343436450205,
            "unit": "iter/sec",
            "range": "stddev: 0.028761942163113487",
            "extra": "mean: 15.157616237999946 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marenz@meta.com",
            "name": "Martin Marenz",
            "username": "Blonck"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8a43b9021fce8470ff04b348289aeae84f33b36",
          "message": "[Performance] Accelerate TD lambda return estimate  (#1158)",
          "timestamp": "2023-05-18T07:43:16+01:00",
          "tree_id": "d1326c4359981236d84c28eddbc38df96a3fcedc",
          "url": "https://github.com/BY571/rl/commit/e8a43b9021fce8470ff04b348289aeae84f33b36"
        },
        "date": 1684397388792,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.06225859965437135,
            "unit": "iter/sec",
            "range": "stddev: 0.08030106045716069",
            "extra": "mean: 16.06203810479999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.11062530467290314,
            "unit": "iter/sec",
            "range": "stddev: 0.15931327779874563",
            "extra": "mean: 9.039523126799963 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.1119239507649148,
            "unit": "iter/sec",
            "range": "stddev: 0.044084945194265424",
            "extra": "mean: 8.934638146399971 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0640603494153376,
            "unit": "iter/sec",
            "range": "stddev: 0.031934172403992246",
            "extra": "mean: 939.7963193999885 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.6026313111091597,
            "unit": "iter/sec",
            "range": "stddev: 0.043243292389561205",
            "extra": "mean: 1.6593893837999758 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.4202490487948061,
            "unit": "iter/sec",
            "range": "stddev: 0.038943778841647354",
            "extra": "mean: 2.379541376400039 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.4743550040915259,
            "unit": "iter/sec",
            "range": "stddev: 0.040580314484691585",
            "extra": "mean: 2.108125752599949 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 73.27744189271985,
            "unit": "iter/sec",
            "range": "stddev: 0.00047141099802678444",
            "extra": "mean: 13.646764599998278 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 19.386660168795604,
            "unit": "iter/sec",
            "range": "stddev: 0.002817791470590525",
            "extra": "mean: 51.581860480000614 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4568.138676034084,
            "unit": "iter/sec",
            "range": "stddev: 0.000026878885718547465",
            "extra": "mean: 218.9075400110596 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 74.7737508931474,
            "unit": "iter/sec",
            "range": "stddev: 0.00006850411602647095",
            "extra": "mean: 13.373677099989436 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 8.810983729319235,
            "unit": "iter/sec",
            "range": "stddev: 0.0031854443851873845",
            "extra": "mean: 113.49470510000174 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 31.07339575353945,
            "unit": "iter/sec",
            "range": "stddev: 0.00011840121489146619",
            "extra": "mean: 32.18187055999806 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 14.568116567729744,
            "unit": "iter/sec",
            "range": "stddev: 0.0012016348690953732",
            "extra": "mean: 68.64305316001719 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 84.16236448012381,
            "unit": "iter/sec",
            "range": "stddev: 0.000042355807109156246",
            "extra": "mean: 11.881795457828003 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 402.00343328876204,
            "unit": "iter/sec",
            "range": "stddev: 0.0002383599342932047",
            "extra": "mean: 2.487540944163262 msec\nrounds: 197"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 2397.477083559004,
            "unit": "iter/sec",
            "range": "stddev: 0.000016991933620108436",
            "extra": "mean: 417.10513391665927 usec\nrounds: 911"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 18.24007441365886,
            "unit": "iter/sec",
            "range": "stddev: 0.0016780425334372308",
            "extra": "mean: 54.82433773686592 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 256.9231226816331,
            "unit": "iter/sec",
            "range": "stddev: 0.0001988882082385501",
            "extra": "mean: 3.8922148756503803 msec\nrounds: 193"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.19868441213463084,
            "unit": "iter/sec",
            "range": "stddev: 0.07032386412876",
            "extra": "mean: 5.033107475599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.1985766350716276,
            "unit": "iter/sec",
            "range": "stddev: 0.034762897126479717",
            "extra": "mean: 5.035839184399992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.19901593076720125,
            "unit": "iter/sec",
            "range": "stddev: 0.09149225177484216",
            "extra": "mean: 5.02472337840004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.20432490856937707,
            "unit": "iter/sec",
            "range": "stddev: 0.06399061310438182",
            "extra": "mean: 4.89416589980001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19935906901404668,
            "unit": "iter/sec",
            "range": "stddev: 0.05554122278959159",
            "extra": "mean: 5.016074788800006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.19435092511149174,
            "unit": "iter/sec",
            "range": "stddev: 0.09594252149262959",
            "extra": "mean: 5.145331824000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.20176600248746526,
            "unit": "iter/sec",
            "range": "stddev: 0.01963018489764853",
            "extra": "mean: 4.956236371199975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.19924758609864854,
            "unit": "iter/sec",
            "range": "stddev: 0.04670490307616554",
            "extra": "mean: 5.0188813805999875 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1960961853213447,
            "unit": "iter/sec",
            "range": "stddev: 0.12613074025351204",
            "extra": "mean: 5.099538261599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 34.94809027347119,
            "unit": "iter/sec",
            "range": "stddev: 0.0005130240499571704",
            "extra": "mean: 28.613866800014875 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 34.74436306769305,
            "unit": "iter/sec",
            "range": "stddev: 0.0003944824916326607",
            "extra": "mean: 28.781647199912186 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 34.602594085939664,
            "unit": "iter/sec",
            "range": "stddev: 0.00038526228079298385",
            "extra": "mean: 28.89956739995796 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 35.12986700322532,
            "unit": "iter/sec",
            "range": "stddev: 0.0005213921087760381",
            "extra": "mean: 28.46580660007021 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 34.901775862381335,
            "unit": "iter/sec",
            "range": "stddev: 0.0003870428575316294",
            "extra": "mean: 28.651837200004593 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 35.01886459232262,
            "unit": "iter/sec",
            "range": "stddev: 0.0002204032245524117",
            "extra": "mean: 28.556037199996354 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 34.89782955463827,
            "unit": "iter/sec",
            "range": "stddev: 0.00044808557667241097",
            "extra": "mean: 28.65507719998277 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 34.97019832703621,
            "unit": "iter/sec",
            "range": "stddev: 0.00033596519250089237",
            "extra": "mean: 28.595777200007433 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 34.68330322056951,
            "unit": "iter/sec",
            "range": "stddev: 0.00018646711429512157",
            "extra": "mean: 28.832317200021862 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.05988359319581238,
            "unit": "iter/sec",
            "range": "stddev: 0.11945799149179809",
            "extra": "mean: 16.69906474600007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.060224090118203864,
            "unit": "iter/sec",
            "range": "stddev: 0.042470216923833196",
            "extra": "mean: 16.60465102979997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.060418238796945516,
            "unit": "iter/sec",
            "range": "stddev: 0.12733333076867126",
            "extra": "mean: 16.551293448999967 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.061311233954239756,
            "unit": "iter/sec",
            "range": "stddev: 0.12421785220886365",
            "extra": "mean: 16.31022466040008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.06169578783016231,
            "unit": "iter/sec",
            "range": "stddev: 0.044152873002344335",
            "extra": "mean: 16.208561964599994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.06151951461676025,
            "unit": "iter/sec",
            "range": "stddev: 0.027854624752830383",
            "extra": "mean: 16.255004712400023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.06156848870409242,
            "unit": "iter/sec",
            "range": "stddev: 0.10292596235211277",
            "extra": "mean: 16.24207481860003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.0612973803042245,
            "unit": "iter/sec",
            "range": "stddev: 0.05223742443578265",
            "extra": "mean: 16.313910888799956 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.06170821747337364,
            "unit": "iter/sec",
            "range": "stddev: 0.027704445661594967",
            "extra": "mean: 16.20529713779997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "osalpekar@fb.com",
            "name": "Omkar Salpekar",
            "username": "osalpekar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a8ac32af68cdd012a44916ff6956c879419ee05",
          "message": "[CI] Linux Gym Unittests to GHA (#1139)",
          "timestamp": "2023-05-18T18:34:07+01:00",
          "tree_id": "fc4a633b84386adc1cf78bd757805126a6f83e61",
          "url": "https://github.com/BY571/rl/commit/9a8ac32af68cdd012a44916ff6956c879419ee05"
        },
        "date": 1684485235671,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.03514026709933028,
            "unit": "iter/sec",
            "range": "stddev: 0.8734195346978348",
            "extra": "mean: 28.457381874 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.06314919750311337,
            "unit": "iter/sec",
            "range": "stddev: 0.30672936977786425",
            "extra": "mean: 15.835513981799977 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.06727565841026763,
            "unit": "iter/sec",
            "range": "stddev: 0.2083403266150604",
            "extra": "mean: 14.864217216599991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.639784444684757,
            "unit": "iter/sec",
            "range": "stddev: 0.05855721759929426",
            "extra": "mean: 1.5630264354000247 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.3586578655748908,
            "unit": "iter/sec",
            "range": "stddev: 0.08826570745650922",
            "extra": "mean: 2.788172506399951 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.2494202274949962,
            "unit": "iter/sec",
            "range": "stddev: 0.08480702445768354",
            "extra": "mean: 4.009297922800033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.28603450523296053,
            "unit": "iter/sec",
            "range": "stddev: 0.05239115092829055",
            "extra": "mean: 3.4960817024000335 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 47.293433858339554,
            "unit": "iter/sec",
            "range": "stddev: 0.004523724432295779",
            "extra": "mean: 21.14458431999992 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 13.059748063208978,
            "unit": "iter/sec",
            "range": "stddev: 0.006205093323463981",
            "extra": "mean: 76.5711555200005 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2800.04795926433,
            "unit": "iter/sec",
            "range": "stddev: 0.000056708307833136904",
            "extra": "mean: 357.1367399945302 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 41.759578213409995,
            "unit": "iter/sec",
            "range": "stddev: 0.005166331096627128",
            "extra": "mean: 23.946602020009777 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 5.17501739021361,
            "unit": "iter/sec",
            "range": "stddev: 0.005562104675889088",
            "extra": "mean: 193.23606562000805 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 15.926838738591242,
            "unit": "iter/sec",
            "range": "stddev: 0.014406894705608691",
            "extra": "mean: 62.78709896000692 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 8.934109260128137,
            "unit": "iter/sec",
            "range": "stddev: 0.006765544538186721",
            "extra": "mean: 111.93057649998536 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 57.46756154291294,
            "unit": "iter/sec",
            "range": "stddev: 0.004087273534254717",
            "extra": "mean: 17.40112113950175 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 210.65491448721204,
            "unit": "iter/sec",
            "range": "stddev: 0.0005414736839391272",
            "extra": "mean: 4.747100263168584 msec\nrounds: 114"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1100.0111309817771,
            "unit": "iter/sec",
            "range": "stddev: 0.00011747054890308607",
            "extra": "mean: 909.0817100255017 usec\nrounds: 569"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 13.300173859210126,
            "unit": "iter/sec",
            "range": "stddev: 0.001415636870755578",
            "extra": "mean: 75.18698707141473 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 156.57700109264619,
            "unit": "iter/sec",
            "range": "stddev: 0.0004773130580411616",
            "extra": "mean: 6.386634007687392 msec\nrounds: 130"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.15485533755202613,
            "unit": "iter/sec",
            "range": "stddev: 0.1728248768787692",
            "extra": "mean: 6.457639857999948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.14673872548550487,
            "unit": "iter/sec",
            "range": "stddev: 0.3084963753814155",
            "extra": "mean: 6.814833621399975 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.14652483830772922,
            "unit": "iter/sec",
            "range": "stddev: 0.28913936998815226",
            "extra": "mean: 6.824781460599979 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.15422711150606494,
            "unit": "iter/sec",
            "range": "stddev: 0.2467374978199191",
            "extra": "mean: 6.483944296400023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.14897956443762728,
            "unit": "iter/sec",
            "range": "stddev: 0.10076131009513124",
            "extra": "mean: 6.712330001600094 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.15091631158919847,
            "unit": "iter/sec",
            "range": "stddev: 0.0946673075851361",
            "extra": "mean: 6.6261889749999225 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.16366936575765578,
            "unit": "iter/sec",
            "range": "stddev: 0.1998576880747144",
            "extra": "mean: 6.109878872999934 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.15583316193843816,
            "unit": "iter/sec",
            "range": "stddev: 0.1353461819469706",
            "extra": "mean: 6.417119357399997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1530683479439636,
            "unit": "iter/sec",
            "range": "stddev: 0.18815523840239728",
            "extra": "mean: 6.533029286799956 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 28.683066837312175,
            "unit": "iter/sec",
            "range": "stddev: 0.0021516388197731764",
            "extra": "mean: 34.8637754000265 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 26.73273387388694,
            "unit": "iter/sec",
            "range": "stddev: 0.0011668857748724348",
            "extra": "mean: 37.40732259998367 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 26.92495060969025,
            "unit": "iter/sec",
            "range": "stddev: 0.0013116396933836253",
            "extra": "mean: 37.14027239998359 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 27.55194853771125,
            "unit": "iter/sec",
            "range": "stddev: 0.0017260462048175411",
            "extra": "mean: 36.295073600012984 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 27.607749318458666,
            "unit": "iter/sec",
            "range": "stddev: 0.0003588346206885629",
            "extra": "mean: 36.221714000112115 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 27.66691261631429,
            "unit": "iter/sec",
            "range": "stddev: 0.0006733275521928919",
            "extra": "mean: 36.1442569999781 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 27.315016480540834,
            "unit": "iter/sec",
            "range": "stddev: 0.0008575966680433644",
            "extra": "mean: 36.60989920003885 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 27.398211029424566,
            "unit": "iter/sec",
            "range": "stddev: 0.0009078473649763216",
            "extra": "mean: 36.4987334000034 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 28.009618368508647,
            "unit": "iter/sec",
            "range": "stddev: 0.0011376026982639778",
            "extra": "mean: 35.702021599990985 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0383303966757244,
            "unit": "iter/sec",
            "range": "stddev: 0.8522075896525837",
            "extra": "mean: 26.08895515640006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.03981682058272746,
            "unit": "iter/sec",
            "range": "stddev: 0.7902776539381607",
            "extra": "mean: 25.115013840000074 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.040446743209388694,
            "unit": "iter/sec",
            "range": "stddev: 0.2889646698039694",
            "extra": "mean: 24.72386947999994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.03999288759704178,
            "unit": "iter/sec",
            "range": "stddev: 0.6146817760672405",
            "extra": "mean: 25.004446042400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03907832612460973,
            "unit": "iter/sec",
            "range": "stddev: 1.1391081376753545",
            "extra": "mean: 25.589632391399846 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.04000765265899985,
            "unit": "iter/sec",
            "range": "stddev: 0.7928541375326604",
            "extra": "mean: 24.9952180029999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.04041296307455298,
            "unit": "iter/sec",
            "range": "stddev: 0.34289869055605915",
            "extra": "mean: 24.744535513400024 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.04000190477902047,
            "unit": "iter/sec",
            "range": "stddev: 0.37106298747721655",
            "extra": "mean: 24.998809569799867 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.038779750050171535,
            "unit": "iter/sec",
            "range": "stddev: 0.7685395942285503",
            "extra": "mean: 25.786654083800023 sec\nrounds: 5"
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
          "id": "3c8197b41e351de2ebefbe2df5d5900d82e43882",
          "message": "[BugFix] Fix examples (#1173)",
          "timestamp": "2023-05-21T08:28:59+01:00",
          "tree_id": "7c048719ea40e63bf74a98cfd1d807742b720c94",
          "url": "https://github.com/BY571/rl/commit/3c8197b41e351de2ebefbe2df5d5900d82e43882"
        },
        "date": 1684745295980,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.03558297313678064,
            "unit": "iter/sec",
            "range": "stddev: 0.21815197374351952",
            "extra": "mean: 28.10332897579999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.0646430864542419,
            "unit": "iter/sec",
            "range": "stddev: 0.2022284765122259",
            "extra": "mean: 15.469558383600042 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.06543189121316303,
            "unit": "iter/sec",
            "range": "stddev: 0.2601227484814117",
            "extra": "mean: 15.28306734619996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.628265668005735,
            "unit": "iter/sec",
            "range": "stddev: 0.06203795726326823",
            "extra": "mean: 1.591683344999956 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.34439346098215234,
            "unit": "iter/sec",
            "range": "stddev: 0.10437121574777306",
            "extra": "mean: 2.903655595400005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.2473401846825668,
            "unit": "iter/sec",
            "range": "stddev: 0.04795276104948152",
            "extra": "mean: 4.043014689600023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.27731648640677753,
            "unit": "iter/sec",
            "range": "stddev: 0.08372022052185507",
            "extra": "mean: 3.6059882805999677 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 47.91818524184221,
            "unit": "iter/sec",
            "range": "stddev: 0.002528385238473893",
            "extra": "mean: 20.868903840014355 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 12.571510855201709,
            "unit": "iter/sec",
            "range": "stddev: 0.006521454813116706",
            "extra": "mean: 79.54493389998788 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2908.589320197649,
            "unit": "iter/sec",
            "range": "stddev: 0.00008559078013048063",
            "extra": "mean: 343.8092800024606 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 50.50907811932696,
            "unit": "iter/sec",
            "range": "stddev: 0.0018647767897084018",
            "extra": "mean: 19.79842114000803 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 4.944481073748353,
            "unit": "iter/sec",
            "range": "stddev: 0.006530571215419206",
            "extra": "mean: 202.24569273998895 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 19.034122527795745,
            "unit": "iter/sec",
            "range": "stddev: 0.0028684393821939128",
            "extra": "mean: 52.53722616000232 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 8.890636010293287,
            "unit": "iter/sec",
            "range": "stddev: 0.0038879765173895566",
            "extra": "mean: 112.47789234001175 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 61.215811778874155,
            "unit": "iter/sec",
            "range": "stddev: 0.0012335697600196495",
            "extra": "mean: 16.335648763627184 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 202.88059026671704,
            "unit": "iter/sec",
            "range": "stddev: 0.0010758791344276397",
            "extra": "mean: 4.929007741378067 msec\nrounds: 116"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1291.6092910719162,
            "unit": "iter/sec",
            "range": "stddev: 0.0002537818124477794",
            "extra": "mean: 774.22793944916 usec\nrounds: 611"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 12.681456611300165,
            "unit": "iter/sec",
            "range": "stddev: 0.002434332233153561",
            "extra": "mean: 78.85529483331766 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 142.45925872651853,
            "unit": "iter/sec",
            "range": "stddev: 0.0017986508427389036",
            "extra": "mean: 7.019550775002396 msec\nrounds: 120"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.14201581558653245,
            "unit": "iter/sec",
            "range": "stddev: 0.14427083837238086",
            "extra": "mean: 7.041469260799931 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.13996412034834932,
            "unit": "iter/sec",
            "range": "stddev: 0.08911933845618651",
            "extra": "mean: 7.14468820660004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.13885063328309602,
            "unit": "iter/sec",
            "range": "stddev: 0.17258478294429813",
            "extra": "mean: 7.20198371700003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.14345472999619124,
            "unit": "iter/sec",
            "range": "stddev: 0.05382823657416322",
            "extra": "mean: 6.970840208800018 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1427848603754889,
            "unit": "iter/sec",
            "range": "stddev: 0.09647393386823158",
            "extra": "mean: 7.003543634599964 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.14152004585224937,
            "unit": "iter/sec",
            "range": "stddev: 0.18587734661121935",
            "extra": "mean: 7.066136772199934 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.14701155992256257,
            "unit": "iter/sec",
            "range": "stddev: 0.11184854591187195",
            "extra": "mean: 6.802186171799986 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.1465886758820275,
            "unit": "iter/sec",
            "range": "stddev: 0.022731240546418646",
            "extra": "mean: 6.821809351800039 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.142166665905388,
            "unit": "iter/sec",
            "range": "stddev: 0.2818376983217851",
            "extra": "mean: 7.033997692999992 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 26.072016802700382,
            "unit": "iter/sec",
            "range": "stddev: 0.0031206363015388507",
            "extra": "mean: 38.355298999977094 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 25.534033718621657,
            "unit": "iter/sec",
            "range": "stddev: 0.0037519964200103543",
            "extra": "mean: 39.163416599967604 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 25.65074740585959,
            "unit": "iter/sec",
            "range": "stddev: 0.0013204120995051552",
            "extra": "mean: 38.98521879996224 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 25.70365067464872,
            "unit": "iter/sec",
            "range": "stddev: 0.001946167244651428",
            "extra": "mean: 38.90497939992201 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 25.278005865396448,
            "unit": "iter/sec",
            "range": "stddev: 0.002378502440760145",
            "extra": "mean: 39.56008260006456 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 26.566875531172087,
            "unit": "iter/sec",
            "range": "stddev: 0.001006859694865901",
            "extra": "mean: 37.640858400027355 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 25.228236958536076,
            "unit": "iter/sec",
            "range": "stddev: 0.0025373349885685547",
            "extra": "mean: 39.63812459996916 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 24.061024764475146,
            "unit": "iter/sec",
            "range": "stddev: 0.006665825798798913",
            "extra": "mean: 41.5609895999296 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 24.911059670012907,
            "unit": "iter/sec",
            "range": "stddev: 0.002594791796946961",
            "extra": "mean: 40.14281259997006 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.03478408896177657,
            "unit": "iter/sec",
            "range": "stddev: 2.1099837783846938",
            "extra": "mean: 28.748776519600007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.03529487471356759,
            "unit": "iter/sec",
            "range": "stddev: 0.39319852439071534",
            "extra": "mean: 28.332725590200017 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.036339551876341476,
            "unit": "iter/sec",
            "range": "stddev: 0.6007468827486809",
            "extra": "mean: 27.518225964999875 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.03612544087470339,
            "unit": "iter/sec",
            "range": "stddev: 0.34696821728131105",
            "extra": "mean: 27.681323072800023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.035976092023289045,
            "unit": "iter/sec",
            "range": "stddev: 0.34959916527940826",
            "extra": "mean: 27.796237549999933 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03597345258138,
            "unit": "iter/sec",
            "range": "stddev: 0.2526533630219793",
            "extra": "mean: 27.798277013799996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.03558830609225655,
            "unit": "iter/sec",
            "range": "stddev: 0.31173117144921847",
            "extra": "mean: 28.09911765420002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03549335347542221,
            "unit": "iter/sec",
            "range": "stddev: 0.24293328275095535",
            "extra": "mean: 28.17428904520002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03565598022590948,
            "unit": "iter/sec",
            "range": "stddev: 0.27341695476120426",
            "extra": "mean: 28.04578625139993 sec\nrounds: 5"
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
          "id": "079dee716344f501c8ed9757d8f2e3b2372f4cb3",
          "message": "[BugFix] include buffers in policy_weights (#1185)",
          "timestamp": "2023-05-23T10:27:33+01:00",
          "tree_id": "6587cb54865e98b33c6824269cb493144ba49dfc",
          "url": "https://github.com/BY571/rl/commit/079dee716344f501c8ed9757d8f2e3b2372f4cb3"
        },
        "date": 1684841650933,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.03747599282802703,
            "unit": "iter/sec",
            "range": "stddev: 0.32490542526053656",
            "extra": "mean: 26.68374936959999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.06996427426409053,
            "unit": "iter/sec",
            "range": "stddev: 0.23327082110937322",
            "extra": "mean: 14.293008975199996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.07053146063740735,
            "unit": "iter/sec",
            "range": "stddev: 0.21577453559452944",
            "extra": "mean: 14.178070196800036 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.6901551917541101,
            "unit": "iter/sec",
            "range": "stddev: 0.048612146845970865",
            "extra": "mean: 1.448949470999969 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.38870758954913226,
            "unit": "iter/sec",
            "range": "stddev: 0.04884567192047315",
            "extra": "mean: 2.572627926200039 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.26281945218262537,
            "unit": "iter/sec",
            "range": "stddev: 0.08892456276760033",
            "extra": "mean: 3.804893403799997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.30746955426880457,
            "unit": "iter/sec",
            "range": "stddev: 0.031382236752092084",
            "extra": "mean: 3.252354537600013 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 41.29714896633942,
            "unit": "iter/sec",
            "range": "stddev: 0.0022276979058096103",
            "extra": "mean: 24.2147466599954 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 14.449302017219779,
            "unit": "iter/sec",
            "range": "stddev: 0.005244972375706385",
            "extra": "mean: 69.2074951999939 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 3229.710859612073,
            "unit": "iter/sec",
            "range": "stddev: 0.00006495829537302318",
            "extra": "mean: 309.625239988236 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 43.227220366004694,
            "unit": "iter/sec",
            "range": "stddev: 0.0017899618169296863",
            "extra": "mean: 23.133571660009693 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 5.588092021420884,
            "unit": "iter/sec",
            "range": "stddev: 0.006099856233972974",
            "extra": "mean: 178.95195643999614 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 16.795180736021603,
            "unit": "iter/sec",
            "range": "stddev: 0.0038250707379959034",
            "extra": "mean: 59.5408894799948 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 10.11722670529077,
            "unit": "iter/sec",
            "range": "stddev: 0.004491089174317412",
            "extra": "mean: 98.8413158199819 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 57.27415278623777,
            "unit": "iter/sec",
            "range": "stddev: 0.001552669462718159",
            "extra": "mean: 17.45988288525652 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 207.8572746439142,
            "unit": "iter/sec",
            "range": "stddev: 0.0011412711932720628",
            "extra": "mean: 4.8109935132803345 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1245.2605537603793,
            "unit": "iter/sec",
            "range": "stddev: 0.0005184405451432422",
            "extra": "mean: 803.0447900885056 usec\nrounds: 767"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 13.195216177097885,
            "unit": "iter/sec",
            "range": "stddev: 0.004515308563157807",
            "extra": "mean: 75.78504107690466 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 174.92330576664094,
            "unit": "iter/sec",
            "range": "stddev: 0.0008887093246620551",
            "extra": "mean: 5.716791113781403 msec\nrounds: 167"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.1497448231337966,
            "unit": "iter/sec",
            "range": "stddev: 0.13414990647569627",
            "extra": "mean: 6.678027186999998 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.14601897380124315,
            "unit": "iter/sec",
            "range": "stddev: 0.23696704262950144",
            "extra": "mean: 6.848425064000049 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.14346571147691792,
            "unit": "iter/sec",
            "range": "stddev: 0.186942747748161",
            "extra": "mean: 6.970306630799996 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.15071978299188174,
            "unit": "iter/sec",
            "range": "stddev: 0.10134330480978919",
            "extra": "mean: 6.634829085799993 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.14591777969280115,
            "unit": "iter/sec",
            "range": "stddev: 0.11668085505926097",
            "extra": "mean: 6.853174452799976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.14553857652844573,
            "unit": "iter/sec",
            "range": "stddev: 0.15181399102516013",
            "extra": "mean: 6.871030512000016 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.15478386756819035,
            "unit": "iter/sec",
            "range": "stddev: 0.15317732810656287",
            "extra": "mean: 6.460621612000023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.14757252171095744,
            "unit": "iter/sec",
            "range": "stddev: 0.21073202359054719",
            "extra": "mean: 6.776329281400012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.14758179628392445,
            "unit": "iter/sec",
            "range": "stddev: 0.08338614439211446",
            "extra": "mean: 6.775903432399991 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 26.408258128498506,
            "unit": "iter/sec",
            "range": "stddev: 0.003870565967502799",
            "extra": "mean: 37.86694280001939 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 28.33408880518099,
            "unit": "iter/sec",
            "range": "stddev: 0.0012841099795592706",
            "extra": "mean: 35.29317659995286 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 26.286067955052832,
            "unit": "iter/sec",
            "range": "stddev: 0.004327567306785004",
            "extra": "mean: 38.04296639991662 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 27.669482497626817,
            "unit": "iter/sec",
            "range": "stddev: 0.002152794198735692",
            "extra": "mean: 36.1409000000549 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 25.914195817197424,
            "unit": "iter/sec",
            "range": "stddev: 0.0025444769463084946",
            "extra": "mean: 38.58888800000386 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 27.515117699907456,
            "unit": "iter/sec",
            "range": "stddev: 0.0025015749849245463",
            "extra": "mean: 36.34365699999762 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 28.608194842612683,
            "unit": "iter/sec",
            "range": "stddev: 0.001498139112267696",
            "extra": "mean: 34.95501919996968 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 28.040943591213175,
            "unit": "iter/sec",
            "range": "stddev: 0.0018995787750705582",
            "extra": "mean: 35.66213799999787 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 27.43082297562608,
            "unit": "iter/sec",
            "range": "stddev: 0.002758941894763749",
            "extra": "mean: 36.45534079996651 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.036775964470978216,
            "unit": "iter/sec",
            "range": "stddev: 0.7414955822128605",
            "extra": "mean: 27.191672995800037 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.037107354642605256,
            "unit": "iter/sec",
            "range": "stddev: 0.15932193094797364",
            "extra": "mean: 26.948835604999932 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.037155723780461586,
            "unit": "iter/sec",
            "range": "stddev: 0.19111380340004233",
            "extra": "mean: 26.91375374380009 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.036830241466697854,
            "unit": "iter/sec",
            "range": "stddev: 0.3765568326328538",
            "extra": "mean: 27.151600428799973 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03698502469325961,
            "unit": "iter/sec",
            "range": "stddev: 0.10868166525916548",
            "extra": "mean: 27.037970321600096 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03785708048257327,
            "unit": "iter/sec",
            "range": "stddev: 0.29734422250896897",
            "extra": "mean: 26.415137861999938 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.03720345586540924,
            "unit": "iter/sec",
            "range": "stddev: 0.7508491996258986",
            "extra": "mean: 26.879223360800005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03622228092339389,
            "unit": "iter/sec",
            "range": "stddev: 0.7544514926320722",
            "extra": "mean: 27.60731722319997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03683397936452813,
            "unit": "iter/sec",
            "range": "stddev: 0.21357173998179974",
            "extra": "mean: 27.148845094999977 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3e9a1d03909d797c06f4db33635f38dc7f7efff",
          "message": "[Refactor] Nested reward and done specs (#1115)",
          "timestamp": "2023-05-29T05:29:03+01:00",
          "tree_id": "fbb3d68a10241b56a3a889cb30a05562f94bc30d",
          "url": "https://github.com/BY571/rl/commit/f3e9a1d03909d797c06f4db33635f38dc7f7efff"
        },
        "date": 1685367259766,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.04873181179599865,
            "unit": "iter/sec",
            "range": "stddev: 0.09909843655772843",
            "extra": "mean: 20.520476525399978 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.08851351078912727,
            "unit": "iter/sec",
            "range": "stddev: 0.21001384481620788",
            "extra": "mean: 11.297710271400025 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.08827731506262612,
            "unit": "iter/sec",
            "range": "stddev: 0.10944142622864997",
            "extra": "mean: 11.327938545600023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 1.0156534025886814,
            "unit": "iter/sec",
            "range": "stddev: 0.03386998026879759",
            "extra": "mean: 984.5878500000254 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.4674341109841295,
            "unit": "iter/sec",
            "range": "stddev: 0.06937407674577807",
            "extra": "mean: 2.1393389496000053 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.3738673433854746,
            "unit": "iter/sec",
            "range": "stddev: 0.0400206953178301",
            "extra": "mean: 2.674745515199902 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.43654688350586723,
            "unit": "iter/sec",
            "range": "stddev: 0.09339989536166886",
            "extra": "mean: 2.290704705000053 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 67.26990062082359,
            "unit": "iter/sec",
            "range": "stddev: 0.0010605962839351723",
            "extra": "mean: 14.865489480007454 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 25.602803491406434,
            "unit": "iter/sec",
            "range": "stddev: 0.008034124239296775",
            "extra": "mean: 39.058222680014296 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 4638.063174652399,
            "unit": "iter/sec",
            "range": "stddev: 0.00002930817453723114",
            "extra": "mean: 215.60723999300535 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 70.4028673273874,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879459660306689",
            "extra": "mean: 14.203966940008286 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 26.285317914541185,
            "unit": "iter/sec",
            "range": "stddev: 0.006662576470860818",
            "extra": "mean: 38.04405193999173 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 28.697533371576988,
            "unit": "iter/sec",
            "range": "stddev: 0.001674082999562448",
            "extra": "mean: 34.84620044001531 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 27.589690838992777,
            "unit": "iter/sec",
            "range": "stddev: 0.006217834295634174",
            "extra": "mean: 36.24542245999692 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 78.36686749995657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005440498688720189",
            "extra": "mean: 12.760494733320229 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 259.1203422926969,
            "unit": "iter/sec",
            "range": "stddev: 0.00014404857713284087",
            "extra": "mean: 3.8592107094024333 msec\nrounds: 117"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1872.749278035916,
            "unit": "iter/sec",
            "range": "stddev: 0.00004618813231020595",
            "extra": "mean: 533.9743081085421 usec\nrounds: 740"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 20.15726419160652,
            "unit": "iter/sec",
            "range": "stddev: 0.0009364321623159924",
            "extra": "mean: 49.60990690474752 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 306.2965890653342,
            "unit": "iter/sec",
            "range": "stddev: 0.00017015270360332365",
            "extra": "mean: 3.264809454951835 msec\nrounds: 222"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.18780982746841213,
            "unit": "iter/sec",
            "range": "stddev: 0.11671435318838887",
            "extra": "mean: 5.324535001599907 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.17900216813086078,
            "unit": "iter/sec",
            "range": "stddev: 0.23294403353504456",
            "extra": "mean: 5.586524512200003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.1817698317369698,
            "unit": "iter/sec",
            "range": "stddev: 0.09031925548370787",
            "extra": "mean: 5.501462979000007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.18227852115934284,
            "unit": "iter/sec",
            "range": "stddev: 0.1141484777693036",
            "extra": "mean: 5.486109902799944 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.1773356719965467,
            "unit": "iter/sec",
            "range": "stddev: 0.16130655093029997",
            "extra": "mean: 5.63902337720001 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.17283773473200972,
            "unit": "iter/sec",
            "range": "stddev: 0.11625632091339688",
            "extra": "mean: 5.7857735844000215 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.18177603371330708,
            "unit": "iter/sec",
            "range": "stddev: 0.11659015592573277",
            "extra": "mean: 5.501275275799981 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.17110428017904028,
            "unit": "iter/sec",
            "range": "stddev: 0.0648089471271039",
            "extra": "mean: 5.844389158200011 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.1702126728576326,
            "unit": "iter/sec",
            "range": "stddev: 0.16611358923037664",
            "extra": "mean: 5.875003213400032 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 31.086206969778928,
            "unit": "iter/sec",
            "range": "stddev: 0.0007116784876739604",
            "extra": "mean: 32.16860779998569 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 30.928657434991198,
            "unit": "iter/sec",
            "range": "stddev: 0.0006875653390587994",
            "extra": "mean: 32.33247359999041 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 30.99532382231425,
            "unit": "iter/sec",
            "range": "stddev: 0.0010832991775911694",
            "extra": "mean: 32.26293119996626 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 31.36273354164908,
            "unit": "iter/sec",
            "range": "stddev: 0.0011680963812050816",
            "extra": "mean: 31.88497580008516 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 31.109728760727826,
            "unit": "iter/sec",
            "range": "stddev: 0.0008750782754150295",
            "extra": "mean: 32.14428539995424 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 31.784584125778103,
            "unit": "iter/sec",
            "range": "stddev: 0.0009206456459162611",
            "extra": "mean: 31.461792800018888 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 31.878575170261186,
            "unit": "iter/sec",
            "range": "stddev: 0.0009515457667303938",
            "extra": "mean: 31.369030599989856 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 31.353081682117164,
            "unit": "iter/sec",
            "range": "stddev: 0.0011733487836900276",
            "extra": "mean: 31.8947914000546 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 32.52606417617797,
            "unit": "iter/sec",
            "range": "stddev: 0.0009740595822541116",
            "extra": "mean: 30.744574399886915 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.0535964194034409,
            "unit": "iter/sec",
            "range": "stddev: 0.35920044426863407",
            "extra": "mean: 18.657962810399976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.05388799556366017,
            "unit": "iter/sec",
            "range": "stddev: 0.3459035544410584",
            "extra": "mean: 18.557008653599997 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.05395177662298741,
            "unit": "iter/sec",
            "range": "stddev: 0.18800379426289232",
            "extra": "mean: 18.53507080939994 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.05430175926916241,
            "unit": "iter/sec",
            "range": "stddev: 0.24997247453161064",
            "extra": "mean: 18.415609613000015 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.05469980415941781,
            "unit": "iter/sec",
            "range": "stddev: 0.23145769286002715",
            "extra": "mean: 18.28160110200006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.054696994522157184,
            "unit": "iter/sec",
            "range": "stddev: 0.09195390287791864",
            "extra": "mean: 18.282540178599948 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.05447415038464825,
            "unit": "iter/sec",
            "range": "stddev: 0.2464525361008351",
            "extra": "mean: 18.357330824600012 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.055225091848871796,
            "unit": "iter/sec",
            "range": "stddev: 0.5382099159466598",
            "extra": "mean: 18.107710943000075 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.0556218311644501,
            "unit": "iter/sec",
            "range": "stddev: 0.22818690242117315",
            "extra": "mean: 17.97855228900007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73a440830a8a12f5973e2ce503eeb8a2bdcc3872",
          "message": "[BugFix] Fix TD3 inplace updates (#1219)",
          "timestamp": "2023-06-01T14:32:44+01:00",
          "tree_id": "0594dfc706cc49f4be14610f09627eea5c4f8a36",
          "url": "https://github.com/BY571/rl/commit/73a440830a8a12f5973e2ce503eeb8a2bdcc3872"
        },
        "date": 1685632393424,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_single",
            "value": 0.03531009644574265,
            "unit": "iter/sec",
            "range": "stddev: 0.3604400990662391",
            "extra": "mean: 28.32051171359999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_sync",
            "value": 0.06369253846553521,
            "unit": "iter/sec",
            "range": "stddev: 0.1591838239664209",
            "extra": "mean: 15.700426205200028 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_collectors_benchmark.py::test_async",
            "value": 0.0646671159214077,
            "unit": "iter/sec",
            "range": "stddev: 0.21609901682723884",
            "extra": "mean: 15.463810095000008 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_simple",
            "value": 0.7366934285715695,
            "unit": "iter/sec",
            "range": "stddev: 0.07105666570814954",
            "extra": "mean: 1.3574167506000094 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_transformed",
            "value": 0.3483950316270299,
            "unit": "iter/sec",
            "range": "stddev: 0.055808295006199896",
            "extra": "mean: 2.8703049964000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_serial",
            "value": 0.2654767117364903,
            "unit": "iter/sec",
            "range": "stddev: 0.0718069372875762",
            "extra": "mean: 3.7668087474000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_envs_benchmark.py::test_parallel",
            "value": 0.311924408442981,
            "unit": "iter/sec",
            "range": "stddev: 0.08917799700241968",
            "extra": "mean: 3.205904933800002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[generalized_advantage_estimate-True-True]",
            "value": 49.331489743232126,
            "unit": "iter/sec",
            "range": "stddev: 0.0017441618408340898",
            "extra": "mean: 20.271027799990406 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_generalized_advantage_estimate-True-True]",
            "value": 13.511167635204641,
            "unit": "iter/sec",
            "range": "stddev: 0.005883057088809206",
            "extra": "mean: 74.01284826001302 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td0_return_estimate-False-False]",
            "value": 2723.0764663903856,
            "unit": "iter/sec",
            "range": "stddev: 0.00015481814239459891",
            "extra": "mean: 367.23170000641403 usec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td1_return_estimate-False-False]",
            "value": 53.390234452686116,
            "unit": "iter/sec",
            "range": "stddev: 0.0007784141045384591",
            "extra": "mean: 18.730017019988736 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td1_return_estimate-False-False]",
            "value": 13.863491565391564,
            "unit": "iter/sec",
            "range": "stddev: 0.0037484673188581613",
            "extra": "mean: 72.13190091999422 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[td_lambda_return_estimate-True-False]",
            "value": 17.850993973887647,
            "unit": "iter/sec",
            "range": "stddev: 0.0032139720432778495",
            "extra": "mean: 56.01928953999959 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_values[vec_td_lambda_return_estimate-True-False]",
            "value": 13.8468050366824,
            "unit": "iter/sec",
            "range": "stddev: 0.004397515933498059",
            "extra": "mean: 72.21882574000574 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[generalized_advantage_estimate-False-1-512]",
            "value": 65.60437912193674,
            "unit": "iter/sec",
            "range": "stddev: 0.0014979753250359666",
            "extra": "mean: 15.242884901651644 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-1-512]",
            "value": 214.91183810233537,
            "unit": "iter/sec",
            "range": "stddev: 0.00037534995681835114",
            "extra": "mean: 4.653070807220151 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-1-512]",
            "value": 1288.185840293225,
            "unit": "iter/sec",
            "range": "stddev: 0.00010043994032817319",
            "extra": "mean: 776.2855084421466 usec\nrounds: 651"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-True-32-512]",
            "value": 15.95951966148222,
            "unit": "iter/sec",
            "range": "stddev: 0.0033247964266731635",
            "extra": "mean: 62.658527400011124 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/test_objectives_benchmarks.py::test_gae_speed[vec_generalized_advantage_estimate-False-32-512]",
            "value": 156.48448202940307,
            "unit": "iter/sec",
            "range": "stddev: 0.0007053201173185535",
            "extra": "mean: 6.390410007633232 msec\nrounds: 131"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 0.15926720312794254,
            "unit": "iter/sec",
            "range": "stddev: 0.12046306191071839",
            "extra": "mean: 6.278756582399955 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 0.14752107929542918,
            "unit": "iter/sec",
            "range": "stddev: 0.11629637241965673",
            "extra": "mean: 6.778692270800002 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 0.14457020608889032,
            "unit": "iter/sec",
            "range": "stddev: 0.41085169446223446",
            "extra": "mean: 6.917054537399918 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 0.15043640393227742,
            "unit": "iter/sec",
            "range": "stddev: 0.3068132028500825",
            "extra": "mean: 6.647327201799999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 0.14202185338210235,
            "unit": "iter/sec",
            "range": "stddev: 0.2559442437191123",
            "extra": "mean: 7.041169905800007 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 0.14174614963365914,
            "unit": "iter/sec",
            "range": "stddev: 0.2752884176097084",
            "extra": "mean: 7.0548653531999665 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 0.14840195558050562,
            "unit": "iter/sec",
            "range": "stddev: 0.1779748763084495",
            "extra": "mean: 6.738455676600006 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 0.14423190174382336,
            "unit": "iter/sec",
            "range": "stddev: 0.18406737226871608",
            "extra": "mean: 6.9332788925999465 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_sample_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 0.14209505161622082,
            "unit": "iter/sec",
            "range": "stddev: 0.15128102573139304",
            "extra": "mean: 7.037542747799989 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-4000]",
            "value": 26.03496632398137,
            "unit": "iter/sec",
            "range": "stddev: 0.003292143165713095",
            "extra": "mean: 38.40988260003542 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-10000]",
            "value": 25.502755195289176,
            "unit": "iter/sec",
            "range": "stddev: 0.0033308785441245005",
            "extra": "mean: 39.211449599952175 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-10000]",
            "value": 25.706286652313523,
            "unit": "iter/sec",
            "range": "stddev: 0.0007119103996666584",
            "extra": "mean: 38.900990000047386 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-4000]",
            "value": 25.25477968802102,
            "unit": "iter/sec",
            "range": "stddev: 0.0040694859194931425",
            "extra": "mean: 39.59646500002236 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-10000]",
            "value": 26.42123230100589,
            "unit": "iter/sec",
            "range": "stddev: 0.000705414996056175",
            "extra": "mean: 37.84834819994103 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-10000]",
            "value": 25.06420057125141,
            "unit": "iter/sec",
            "range": "stddev: 0.0051966577492011425",
            "extra": "mean: 39.89754219996939 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-4000]",
            "value": 24.096265815636848,
            "unit": "iter/sec",
            "range": "stddev: 0.004590444640553088",
            "extra": "mean: 41.500206200043976 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-10000]",
            "value": 26.650723990430283,
            "unit": "iter/sec",
            "range": "stddev: 0.0018345198179184877",
            "extra": "mean: 37.522432799914895 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_iterate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-10000]",
            "value": 24.92843072465633,
            "unit": "iter/sec",
            "range": "stddev: 0.002199837347095457",
            "extra": "mean: 40.11483960002806 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-RandomSampler-400]",
            "value": 0.03714883792623881,
            "unit": "iter/sec",
            "range": "stddev: 0.13784829786590894",
            "extra": "mean: 26.918742437800027 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-RandomSampler-400]",
            "value": 0.037305232375419606,
            "unit": "iter/sec",
            "range": "stddev: 0.15206515929747946",
            "extra": "mean: 26.805891193399976 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-RandomSampler-400]",
            "value": 0.03727060226185381,
            "unit": "iter/sec",
            "range": "stddev: 0.40329106820496324",
            "extra": "mean: 26.830797983200092 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-ListStorage-SamplerWithoutReplacement-400]",
            "value": 0.03707838409921903,
            "unit": "iter/sec",
            "range": "stddev: 0.11535357112121485",
            "extra": "mean: 26.969891603800033 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyMemmapStorage-SamplerWithoutReplacement-400]",
            "value": 0.03721735192793899,
            "unit": "iter/sec",
            "range": "stddev: 0.4818828009944976",
            "extra": "mean: 26.8691873064 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictReplayBuffer-LazyTensorStorage-SamplerWithoutReplacement-400]",
            "value": 0.03847619285803537,
            "unit": "iter/sec",
            "range": "stddev: 0.24637652654314862",
            "extra": "mean: 25.990097401000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-ListStorage-None-400]",
            "value": 0.03700541131891175,
            "unit": "iter/sec",
            "range": "stddev: 0.9072912805764622",
            "extra": "mean: 27.02307485199999 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyMemmapStorage-None-400]",
            "value": 0.03860987747059694,
            "unit": "iter/sec",
            "range": "stddev: 0.30482756539859873",
            "extra": "mean: 25.900108094400004 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_replaybuffer_benchmark.py::test_populate_rb[TensorDictPrioritizedReplayBuffer-LazyTensorStorage-None-400]",
            "value": 0.03847813534990937,
            "unit": "iter/sec",
            "range": "stddev: 0.5509548400021612",
            "extra": "mean: 25.98878534280002 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}