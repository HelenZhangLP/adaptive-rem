
// CommonJS模块规范 只有 node 支持该导出
const path = require('path');
console.log(__dirname); //
console.log(path.resolve(__dirname, 'dist/js'))

module.exports = {
  entry: './app.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  }
}
