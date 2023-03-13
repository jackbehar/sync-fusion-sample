const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const config = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/inline",
    },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: "svg-url-loader",
      //       options: {
      //         // limit: 10000,
      //         encoding: "base64",

      //       },
      //     },
      //   ],
      // },
      {
        test: /\.svg/,
        type: 'asset/inline'
      }
    ]
  },
  devServer: {
    'static': {
      directory: './public'
    }
  },
  plugins: [new NodePolyfillPlugin()],
};

module.exports = config;