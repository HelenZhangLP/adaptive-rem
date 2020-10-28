
## webpack 基本配置 —— 预处理器

* branch draft-webpack-v0.1 —— webpack 的基础
* branch draft-webpack-v0.2 —— webpack.config.js 的基本配置
* branch draft-webpack-v0.3 —— html-webpack-plugin 的基本使用
* branch draft-webpack-v0.4 —— html-webpack-plugin 多入口文件的使用

### loader，处理 webpack 不同类型的资源文件
#### 常用的 babel-loader
1.  安装
> npm install --save-dev babel-loader @babel/core @babel/preset-env

2.  解释
* babel-loader 处理 ES6+ 并将其编译为 ES5, 使得我们在工程中使用新的语言特性的同时，不用担心不同平台的兼容性问题。
需要的各模块：
* babel-loader: 告诉 webpack 要与 babel 一起合作
* @babel/core:  babel 编译器的核心代码
* @babel/preset-env:  babel 官方推荐的预置器，根据用户设置的目标环境自动添加所需要的插件和补丁来编译 ES6+

3.  使用
```javascript
// webpack.config.js
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...
  // module 列表中指定如何处理项目中的不同类型的模块
  module: {
    // 创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)
    rules: [{
      // 引入所有通过断言测试的模块。如果你提供了一个 Rule.test 选项，就不能再提供 Rule.resource
      test: /\.js$/,
      // 排除所有符合条件的模块。如果你提供了 Rule.exclude 选项，就不能再提供 Rule.resource。
      exclude: path.resolve(__dirname, 'node_modules'),
      // Rule.use 可以是一个应用于模块的 UseEntries 数组。每个入口(entry)指定使用一个 loader。
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }]
    }]
  }
}
```
