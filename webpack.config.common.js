/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        baseUrl: 'src'
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader/webpack', 'babel-loader']
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'vendor'
    },
    splitChunks: {
      chunks: 'all',
      minChunks: 2
    }
  },
  entry: {
    app: ['./src/index.tsx'],
    vendor: [
      'react',
      'react-dom',
      'immer',
      'react-redux',
      'redux-logger',
      'redux-saga',
      'reselect',
      'styled-components',
      'styled-normalize'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: 'favicon.ico'
    })
  ]
};
