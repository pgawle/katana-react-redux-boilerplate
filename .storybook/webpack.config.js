// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
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
  }
};
