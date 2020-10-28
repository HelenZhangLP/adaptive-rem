
// CommonJS模块规范 只有 node 支持该导出
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js', // 入口文件
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-bindle.js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: '资源文件处理',
      inject: 'body',
    })
  ],
  module: {
    rules: [{
      test: /.js$/,
      use: {
        loader: 'babel-loader',
        options: {}
      }
    }]
  }
}
