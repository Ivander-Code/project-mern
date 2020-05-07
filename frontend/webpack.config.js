const path = require("path");
const htmlWebPackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: ["./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/app.bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebPackPlugin({
      template: "./public/index.html",
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
      filename: "css/app.bundle.css",
    }),
  ],
  resolve: {
    extensions: [".js", ".css"],
  },
};
