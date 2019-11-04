const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')

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
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Your pet photos app',
      shotname: 'Petgram - 🐶',
      description: 'Petgram',
      background_color: '#ffffff',
      theme_color: '#fff',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ]
}
