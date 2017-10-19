var path = require('path');

var webpack = require('webpack');

module.exports = {
  entry: {
    'bundle': [ './lib/index.js' ],
    'bundle.min': [ './lib/index.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            [ 'env', { loose: true, modules: false } ]
          ]
        }
      }
    ],
    noParse: /sax/
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      parallel: true
    })
  ],
  devtool: 'source-map'
};