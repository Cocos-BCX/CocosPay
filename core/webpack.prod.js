const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpack = require('./webpack.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const {
  styleLoaders,
  htmlPage
} = require('./tools')
const ZipPlugin = require('zip-webpack-plugin')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
const manifest = require('../src/manifest')
module.exports = merge(baseWebpack, {
  devtool: 'none',
  module: {
    rules: styleLoaders({
      extract: true,
      sourceMap: true
    })
  },
  plugins: [
    new GenerateJsonPlugin('manifest.json', manifest, null, 2),
    htmlPage('home', 'app', ['manifest', 'cocospay', 'tab']),
    htmlPage('popup', 'popup', ['manifest', 'cocospay', 'popup']),
    htmlPage('CocosPay', 'prompt', ['manifest', 'cocospay', 'prompt']),
    htmlPage('background', 'background', ['manifest', 'cocospay', 'background']),
    htmlPage('inject', 'inject', ['manifest', 'cocospay', 'inject']),
    htmlPage('content', 'content', ['manifest', 'cocospay', 'content']),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"developmentNewTest"'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'cocospay',
      minChunks: function (module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        )
      }
    }),
    new ZipPlugin({
      path: '../release',
      filename: 'COCOSPay_' + manifest.version
    }),
    new webpack.HashedModuleIdsPlugin(),
  ]
})
