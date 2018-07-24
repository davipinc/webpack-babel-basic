
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("babel-register");

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

const extractCss = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
  disable: isDev
});

const config = {
  mode: 'production',

  // Entry
  entry: {
    bundle: './src/index.js'
  },
  // Output
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    extractCss
  ],
  // Loaders
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      }
    ]
  }
};
// Exports
module.exports = config;