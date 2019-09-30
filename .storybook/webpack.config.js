const path = require('path');
const merge = require('webpack-merge');
const commonRules = require('../config/app-webpack/webpack.common.rules');
const devRules = require('../config/app-webpack/webpack.dev.rules');
const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(commonRules, devRules, {
  plugins: [
    new styleLintPlugin({
      configFile: path.resolve(__dirname, '../config/code-style/stylelint.config.json'),
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      emitErrors: false,
      emitWarning: true,
      quiet: true
    })
  ]
});
