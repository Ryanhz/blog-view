const webpack = require('webpack');
const config = require('./webpack.common.config');
const path = require('path');

config.mode = "production";

module.exports = config;
