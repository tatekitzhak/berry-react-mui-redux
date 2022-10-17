const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (envVars) => {
  const { env } = envVars;
  console.log('envVars:',envVars)
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};