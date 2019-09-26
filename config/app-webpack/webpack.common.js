const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonRules = require('./webpack.common.rules');
const merge = require('webpack-merge'); // to merge common with dev confing

module.exports = merge(commonRules, {
  entry: {
    main: './src/app.jsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/base_template.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ]
});
