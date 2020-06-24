const commonPaths = require('./common-paths')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  mode: 'production',
  output: {
    filename: 'static/[name].[hash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader'
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[hash].css'
    })
  ]
}

module.exports = config
