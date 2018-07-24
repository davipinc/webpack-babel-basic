
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require("babel-register");

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
    new HtmlWebpackPlugin()
  ],  
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Plugins
  plugins: []
};
// Exports
module.exports = config;