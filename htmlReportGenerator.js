const reporter = require("cucumber-html-reporter");
var date = new Date();
var currentDate = date.getDate() + "_" + (date.getMonth() + 1) + "_" + date.getFullYear() + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds() + "_" + date.getMilliseconds();
var options = {
  brandTitle: "demo test scenarios",
  theme: "bootstrap",
  jsonFile: "utils/cucumber_report.json",
  output: "Reports/cucumber_report_" + currentDate + ".html",
  screenshotsDirectory: "./Screenshots/",
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.3.1",
    "Test Environment": "QA",
    Platform: "Web/Vue",
    Sprint: "001",
  },
};
reporter.generate(options);
