const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge'); // to merge common with dev confing
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Create HTML file that includes references to bundled CSS and JS.

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/base_template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' //4. injects styles in to DOM
          },
          {
            loader: 'css-loader', //3. css => commonjs
            options: {
              modules: {
                // CSS Modules
                localIdentName: '[name]_[local]_[hash:base64]' //Namespace for classes in DOM
              },
              importLoaders: 1
              // localIdentName: "[name]_[local]_[hash:base64]",
              // sourceMap: true,
              // minimize: true
            }
          },
          {
            loader: 'postcss-loader', //2. autoprefixer
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader' //1. sass => css
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true //Needed for react-router BrowserHistory
  }
});
