const webpack = require('webpack');
const config = require('./webpack.common.config');
const path = require('path');

config.mode = "production";

module.exports = config;
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: { warnings: false },
  output: { comments: false },
  sourceMap: true
}));