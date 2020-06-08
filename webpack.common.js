const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenvPlugin = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new htmlWebPackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new miniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
    }),
    new dotenvPlugin({
      path: './.env',
      allowEmptyValues: false,
      systemvars: true,
      silent: true,
      safe: true,
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.css', '.json'],
  },
};
