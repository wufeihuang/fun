const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // https://github.com/jantimon/html-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // https://github.com/johnagan/clean-webpack-plugin

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}