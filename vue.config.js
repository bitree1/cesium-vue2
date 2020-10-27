const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    baseUrl:'./',
    assetsDir:'./static',
    productionSourceMap:false,
    devServer:{
        open: true,
    },
    chainWebpack: config => {
        config
          .node.set('fs', 'empty').end()
          .amd({
            toUrlUndefined: true
          })
          .module
          .set('unknownContextCritical', false)
          .rule()
          .include
          .end()
          .post()
          .pre()
          .test(/\.js$/)
          .use('strip')
          .loader('strip-pragma-loader')
          .options({
            pragmas: {
              debug: false
            }
          })
          .end()
          .end()
      },
    configureWebpack: config => {
        let plugins = [
          new CopyWebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/Workers', to: 'Workers' }]),
          new CopyWebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/ThirdParty', to: 'ThirdParty' }]),
          new CopyWebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/Assets', to: 'Assets' }]),
          new CopyWebpackPlugin([{ from: 'node_modules/cesium/Build/Cesium/Widgets', to: 'Widgets' }]),
          new webpack.DefinePlugin({
              // Define relative base path in cesium for loading assets
              CESIUM_BASE_URL: JSON.stringify('')
          })
        ];
        return {
            plugins:plugins
        }
      } 
  }