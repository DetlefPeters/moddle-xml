var path = require('path');

var webpack = require('webpack');

var LodashPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'ModdleXML',
    libraryTarget: 'umd'
  },
  target: 'node',
  externals: {
    moddle: {
      commonjs: 'moddle',
      commonjs2: 'moddle',
      amd: 'moddle',
      root: 'Moddle'
    }
  },
  resolve: {
    alias: {
      lodash: 'lodash-es'
    }
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new LodashPlugin({
      'collections': true
    })
  ],
  devtool: 'source-map'
};