/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'vendor'
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
      'styled-components'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: 'favicon.ico'
    })
  ]
};
