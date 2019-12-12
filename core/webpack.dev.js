const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpack = require('./webpack.base')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const { styleLoaders, htmlPage } = require('./tools')
const ChromeReloadPlugin = require('wcer')
module.exports = merge(baseWebpack, {
  // cheap-module-eval-source-map быстрее для разработки
  watch: true,
  module: {
    rules: styleLoaders({
      sourceMap: false
    })
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    htmlPage('home', 'app', ['tab']),
    htmlPage('popup', 'popup', ['popup']),
    htmlPage('CocosPay', 'prompt', ['prompt']),
    htmlPage('background', 'background', ['background']),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    // new ChromeReloadPlugin({
    //   port: 9090,
    //   manifest: path.join(__dirname, '..', 'src', 'manifest.js')
    // }),
    new FriendlyErrorsPlugin()
  ]
})
