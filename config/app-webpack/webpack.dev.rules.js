const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: path.resolve(__dirname, '../code-style/eslint.config.json'),
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', //4. injects styles in to DOM
            options: {
              hmr: false
            }
          },
          {
            loader: 'css-loader', //3. css => commonjs
            options: {
              modules: {
                // CSS Modules
                localIdentName: '[name]_[local]_[hash:base64]' //Namespace for classes in DOM
              },
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
