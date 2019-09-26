const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [/node_modules/],
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader //3. Extrac css into files
          },
          {
            loader: 'css-loader', //2. css => commonjs
            options: {
              modules: true,
              importLoaders: 1
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
  }
};
