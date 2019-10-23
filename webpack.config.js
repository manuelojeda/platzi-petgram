const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')

const HOST = 'localhost'
const PORT = 8080

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  stats: 'minimal',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: PORT
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanTerminalPlugin({
      message: `dev server running on http://${HOST}:${PORT}`,
      onlyInWatchMode: false
    })
  ]
}
