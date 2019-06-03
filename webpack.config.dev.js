/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin({ 'process.env.NODE_ENV': 'development' })]
});
