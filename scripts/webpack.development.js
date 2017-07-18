const webpack = require('webpack');
const eslintFormatter = require('eslint-friendly-formatter');

const config = {
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    inline: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [{
        test: /\.(less|css)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
        }],
      },
    ],
  },
};

module.exports = config;
