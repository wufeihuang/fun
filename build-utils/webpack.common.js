const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // https://github.com/jantimon/html-webpack-plugin

const {appEntry, outputPath} = require('./common-paths')

const config = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom'],
    app: `${appEntry}/index.js`
  },
  output: {
    // filename: '[name].[hash].js',
    path: outputPath,
    publicPath: '/', //  Hot reloading won’t work as expected for nested routes without it
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  }
}

module.exports = config
