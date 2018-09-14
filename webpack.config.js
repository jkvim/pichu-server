const webpack = require('webpack')
const path = require('path')
const nodeExternal = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: ['webpack/hot/poll?1000', './src/main.hmr.ts'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  },
  watch: true,
  externals: [
    nodeExternal({
      whitelist: ['webpack/hot/poll?1000']
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}