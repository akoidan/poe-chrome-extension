const merge = require('webpack-merge');
const config = require('./webpack.config.base');
const path = require('path')
const {sassLoader, fileLoader, getDefinitions, getConfig} = require('./utils');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: 'production',
  stats: 'errors-only',
  output: {
    crossOriginLoading: getConfig('APP_FILE_MODE') ? false: 'anonymous',
    publicPath: getConfig('APP_PUBLIC_PATH')
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: getConfig('APP_PUBLIC_PATH'),
            }
          },
          'css-loader',
          sassLoader,
        ],
      },
      fileLoader(getConfig('APP_PUBLIC_PATH'))
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ZipPlugin({
      // OPTIONAL: defaults to the Webpack output filename (above) or,
      // if not present, the basename of the path
      filename: 'package.zip',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/package'),
        to: '',
        ignore: ['.*']
      }
    ]),
    getDefinitions(false),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    })
  ]
});
