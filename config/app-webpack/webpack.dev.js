const path = require('path');
const common = require('./webpack.common');
const devRules = require('./webpack.dev.rules');
const merge = require('webpack-merge'); // to merge common with dev confing
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Create HTML file that includes references to bundled CSS and JS.
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, devRules, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' //dynamic load js fix for hot reload
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/base_template.html'
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new styleLintPlugin({
      configFile: path.resolve(__dirname, '../code-style/stylelint.config.json'),
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      emitErrors: false,
      emitWarning: true,
      quiet: true
    })
  ],
  devServer: {
    hot: true,
    clientLogLevel: 'trace',
    historyApiFallback: true, //Needed for react-router BrowserHistory
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  }
});
