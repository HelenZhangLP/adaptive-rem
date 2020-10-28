
## webpack 基本配置 —— 预处理器

* branch draft-webpack-v0.1 —— webpack 的基础
* branch draft-webpack-v0.2 —— webpack.config.js 的基本配置
* branch draft-webpack-v0.3 —— html-webpack-plugin 的基本使用
* branch draft-webpack-v0.4 —— html-webpack-plugin 多入口文件的使用

### loader，处理 webpack 不同类型的资源文件
#### 常用的 loader
1.  babel-loader 处理 ES6+ 并将其编译为 ES5, 使得我们在工程中使用新的语言特性的同时，不用担心不同平台的兼容性问题。
需要的各模块：
* babel-loader: 告诉 webpack 要与 babel 一起合作
* @babel/core:  babel 编译器的核心代码
* @babel/preset-env:  babel 官方推荐的预置器，根据用户设置的目标环境自动添加所需要的插件和补丁来编译 ES6+

> 
