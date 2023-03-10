/** @type {import('jest').Config} */

const { defaults } = require("jest-config");
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions],
  testTimeout: 60000,
  testEnvironment: "selenium4all/src/env/CustomNodeEnvironment.js",
};
