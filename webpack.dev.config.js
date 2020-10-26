
// CommonJS模块规范 只有 node 支持该导出
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  }, // 入口文件
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash].js',
    publicPath: 'http://gulu.top/' // 上线前配置
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: '入口 index',
      inject: false,
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      title: '入口 a',
      filename: 'a.html',
      inject: false,
    })
  ]
}
