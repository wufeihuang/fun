const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // https://github.com/jantimon/html-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // https://github.com/johnagan/clean-webpack-plugin

const port = process.env.PORT || 3000

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', //  Hot reloading won’t work as expected for nested routes without it
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom', // replaces react-dom with the custom react-dom from hot-loader
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    // open: true
    hot: true, // Enable HMR on the server
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Prints more readable module names in the browser terminal on HMR updates
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}