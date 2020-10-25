### webpack 基本配置
这块属于在 webpack 基础的一个进阶，有关 webpack 提基础可以查看（draft-webpack-v0.1)
```javascript
module.exports = {
  entry: './app.js', // 入口文件
  output: {
    path: './dist/js',
    filename: 'bundle.js'
  }
}
```
> `configuration.output.path: The provided value "./dist/js" is not an absolute path!`
```javascript
const path = require('path');
module.exports = {
  entry: './app.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  }
}
```
