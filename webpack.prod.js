const merge = require('webpack-merge');
const common = require('./webpack.common');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new terserPlugin({ test: /\.(js|jsx)(\?.*)?$/i }),
      new optimizeCssAssetsPlugin(),
    ],
  },
});
