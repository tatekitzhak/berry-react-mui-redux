const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (envVars) => {
  const { env } = envVars;
  console.log('webpack.config:',envVars)
  const webpack_env_type = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, webpack_env_type);
  return config;
};
