let options = [
  "--require-module ts-node/register",
  "--require ./stepDefinitions/*.steps.ts",
  "--format progress",
  "--format json:./utils/cucumber_report.json",
].join(" ");
let run_features = ["./features", options].join(" ");
module.exports = { test_runner: run_features };
