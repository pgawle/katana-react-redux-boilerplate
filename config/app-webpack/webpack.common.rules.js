const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpg|gif|ttf)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets'
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2
              }
            }
          }
        ]
      }
    ]
  }
};
