const {getConfig, getEntry} =  require("./utils");
const merge = require('webpack-merge');
const {sassLoader, fileLoader, getDefinitions} = require('./utils');
const config = require('./webpack.config.base');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

let target = getConfig('APP_TARGET');

module.exports = merge(config, {
  mode: 'development',
  stats: 'normal',
  output: {
    publicPath: "/"
  },
  entry: getEntry(`../src/sites/${target}/index.ts`),
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ["vue-style-loader", 'css-loader?sourceMap', sassLoader],
      },
      fileLoader("/")
    ]
  },
  devServer: {
    disableHostCheck: true, // allow joining under different hostnames to dev server, like ngrok
    ...(function(){ // load dev-server if it exists
      try {
        let result =  {setup: require(`../src/sites/${target}/devserver`)};
        console.log(`Creating devserver for ${target}`);
      } catch(e) {
        return {}
      }
    })(),
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: `../src/sites/${target}/static`,
        to: './',
        ignore: ['.*']
      }
    ]),
    getDefinitions(true),
    new HtmlWebpackPlugin({
      template: `../src/sites/${target}/index.html`
    })
  ]
});
