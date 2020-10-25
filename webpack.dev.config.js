
// CommonJS模块规范 只有 node 支持该导出
const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: './app.js',
    main: './main.js'
  }, // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash].js'
  },
  plugins: [new htmlWebpackPlugin({
    template: 'index.html',
    filename: 'inex-[hash].html', //修改生成的模板名称
    inject: 'head' // 修改生成的 js 文件插入的位置
  })]
}
