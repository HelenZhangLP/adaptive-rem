
// CommonJS模块规范 只有 node 支持该导出
const path = require('path');
module.exports = {
  entry: {
    app: './app.js',
    main: './main.js'
  }, // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name]-[chunkhash].js'
  }
}
