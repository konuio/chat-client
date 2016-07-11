const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/entrypoint.js'),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    inline: true,
  },
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  postcss: [autoprefixer],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?localIdentName=chat-[name]-[local]&modules', 'postcss', 'sass'],
        exclude: [nodeModulesPath],
      },
    ],
  },
};

module.exports = config;
