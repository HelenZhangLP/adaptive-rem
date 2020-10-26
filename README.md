
## webpack 基本配置 —— html-webpack-plugin 多入口文件的使用

* branch draft-webpack-v0.1 —— webpack 的基础
* branch draft-webpack-v0.2 —— webpack.config.js 的基本配置
* branch draft-webpack-v0.3 —— html-webpack-plugin 的基本使用


### html-webpack-plugin 支持多页面应用，生成多个 html 入口文件

```javascript
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  }, // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash].js',
    publicPath: 'http://gulu.top/' // 上线前配置
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: '入口 index',
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      title: '入口 a',
      filename: 'a.html',
    })
  ]
}
```
> 以上 webpack.config.js 配置可生成 a.html/index.html 两个 html 文件 title 不同

### html-webpack-plugin 参数 chunks|excludeChunks 设置模块引用
```javascript
var htmlWebpackPlugin = require('html-webpack-plugin')
{
  ...
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: '入口 index',
      excludeChunks: ['a','c'],
      minify: {
        whitespace: false
      }
    }),
    new htmlWebpackPlugin({
      template: 'index.html',
      title: '入口 a',
      filename: 'a.html',
      chunks: ['main','c'],
      minify: {
        whitespace: false
      }
    })
  ]
}
```

### htmlWebpackPlugin.files 动态加载 js，减少链接请求数
```
<% for(var key in htmlWebpackPlugin){ %>
  <%= key%>
<% } %>
```
> tags files options
---
```
<% for(var key in htmlWebpackPlugin.files){ %>
  <%= key%>
<% } %>
```
> publicPath js css manifest favicon
---
1.  head 加载所有模板都要使用的 js 脚本，减少链接请请求数
```html
<head>
  <script type="text/javascript">
    <%= compilation.assets[htmlWebpackPlugin.files.js.filter(item => item.indexOf('js/main-') !== -1)[0].substr(htmlWebpackPlugin.files.publicPath.length)].source() %>
  </script>
</head>
```
2.  body 动态加载其余需要加载的 js 脚本
```html
<% for (var i=0; i<htmlWebpackPlugin.files.js.length; i++){%>
  <% if(htmlWebpackPlugin.files.js[i].indexOf('js/main-') === -1) {%>
    <script src="<%= htmlWebpackPlugin.files.js[i] %>"></script>
  <%} %>
<%}%>
```
> `注意：`如果 `main.js` 为多数或所有模板头部静态引用的脚本，`webpack.config.js` 中实例 `html-webpack-plugin` 时 参数 chunks 中必须包含 `main`，否则 html 模板中使用 htmlWebpackPlugin.files.js 中取不到 main.js 的压缩文件 
