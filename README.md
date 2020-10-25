
### webpack 基本配置
这块属于在 webpack 基础的一个进阶，有关 webpack 提基础可以查看（draft-webpack-v0.1)

### 单入口打包配置
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
webpack 1.13.2 可以使用相对路径，但当前使用的是 webpack 3.10.0 需要 absolute path

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
### 多入口打包配置

```
Hash: f6054cdbde83f1fa4078
Version: webpack 3.10.0
Time: 72ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.91 kB       0  [emitted]  main
   [0] ./app.js 115 bytes {0} [built]
   [1] ./src/script/index.js 34 bytes {0} [built]
```
```javascript
/* 0 */
/***/ (function(module, exports, __webpack_require__) {
// require('./reset.css');
__webpack_require__(1);

function main0(str) {
  alert('this is entry 1')
}
/***/ }),
```
---
```javascript
const path = require('path');
module.exports = {
  entry: ['./app.js', './main.js'], // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  }
}
```

```
Hash: a0a01ecbc7d5b12f40a2
Version: webpack 3.10.0
Time: 143ms
    Asset     Size  Chunks             Chunk Names
bundle.js  3.16 kB       0  [emitted]  main
   [0] multi ./app.js ./main.js 40 bytes {0} [built]

   [1] ./app.js 115 bytes {0} [built]
   [2] ./src/script/index.js 34 bytes {0} [built]
   [3] ./main.js 49 bytes {0} [built]
```
```javascript
/* 0 */
/***/ (function(module, exports, __webpack_require__) {
__webpack_require__(1);
module.exports = __webpack_require__(3);
/***/ }),
```
> 多入口是将两个入口模块打包到 module 0 中

### webpack 运行自命名的 webpack 配置文件，如 webpack.dev.config.js
>  webpack --config webpack.dev.config.js

### 结合脚本设置
1. `package.json` 添加配置
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "webpack-dev": "webpack --config webpack.dev.config.js --color --display-reasons --display-modules --watch --progress"
},
```
2. 运行脚本
`npm run webpack-dev`
