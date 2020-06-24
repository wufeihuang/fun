const path = require('path')
const webpack = require('webpack')

const port = process.env.PORT || 3000

const config = {
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = config
