const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const prodRules = require('./webpack.prod.rules');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
  merge(common, prodRules, {
    stats: 'minimal', // logs in console
    mode: 'production',
    output: {
      filename: '[name].[contentHash].bundle.js',
      path: path.resolve(__dirname, '../../dist')
    },
    optimization: {
      minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin({
          sourceMap: false,
          parallel: true
        })
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name].[contentHash].bundle.css' }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        // Create HTML file that includes references to bundled CSS and JS.
        template: 'src/base_template.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        inject: true
      })
    ]
  })
);
