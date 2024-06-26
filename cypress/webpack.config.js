const { defineConfig } = require('cypress')
const { startDevServer } = require('@cypress/webpack-dev-server')
const webpackConfig = require('./webpack.config')

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'webpack',
      webpackConfig,
    },
  },
})
