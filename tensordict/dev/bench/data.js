window.BENCHMARK_DATA = {
  "lastUpdate": 1674663085583,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "tomcbegley@gmail.com",
            "name": "Tom Begley",
            "username": "tcbegley"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65b0f7fb9ab7c411a6187007e5c6bbc0e877dedb",
          "message": "[BugFix] Relax error matching in tensorclass tests (#188)",
          "timestamp": "2023-01-25T16:04:52Z",
          "tree_id": "82c645c43b80d95fefe679ffa48f3d0d300f5471",
          "url": "https://github.com/pytorch-labs/tensordict/commit/65b0f7fb9ab7c411a6187007e5c6bbc0e877dedb"
        },
        "date": 1674663084094,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1272.1193236181398,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 786.0897805999969 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 223927.01842278065,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.4657406999988325 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 112904.5191095038,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.857041400000298 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 49229.97573444801,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 20.312827399999378 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 62152.15652166396,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 16.089546299997437 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 45098.32302561626,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.173773500003335 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 38915.3723780235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.6967861000021 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 40193.52733243283,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 24.879627799998616 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7458.099902513218,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.08240879999767 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 38417.261976077185,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.029965399999355 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 25633.409100732748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.01158820000319 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 32103.651441384347,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.149104700000407 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 17545.968274337985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 56.99314990000062 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 35637.84152598297,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.060060800004294 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 25077.4668655892,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.87643589999834 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38878.21468066063,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.721345699997755 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 141579.98821233932,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.063145099999701 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 37921.50084745439,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.37026429999878 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 8837.384517654762,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.15565119999746 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 30470.618055996918,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.8185006999945 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 10253.504129397084,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 97.52763419999724 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 27946.743400225696,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.78234450000082 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 11325.117630938843,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 88.29930360000162 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 14727.540505863499,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 67.89999997636187 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1500.1943636815022,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 666.5802940000276 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 17066.39695386828,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 58.59467600004109 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2911.7859098927192,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 343.4318425000015 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 3014.6888449940766,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 331.70919170000275 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}