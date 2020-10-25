
##webpack 基本配置 —— html-webpack-plugin 使用

* branch draft-webpack-v0.1 —— webpack 的基础
* branch draft-webpack-v0.2 —— webpack.config.js 的基本配置

### html-webpack-plugin 自动生成 html 模板，解决因每次编译生成不同的哈希文件的引用

```javascript
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
    template: 'index.html'
  })]
}
```
>`注意：` 使用 `html-webpack-plugin` webpack 版本需要在 ‘webpack@^4.0.0 || ^5.0.0’ 否则报错 ’Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'

### html-webpack-plugin 参数
```javascript
var htmlWebpackPlugin = require('html-webpack-plugin')
{
  ...
  plugins: [new htmlWebpackPlugin({
    template: 'index.html',
  //    filename: 'inex-[hash].html', //修改生成的模板名称
    inject: 'head', // 修改生成的 js 文件插入的位置
    title: 'webpack.config.js 添加参数，通过 ejs 模板在 index.html 中引用', // 这里的参数要在 html 模板中引用
    date: new Date()
  })]
}
```

### 运用 ejs 模板语法，了解 `html-webpack-plugin`
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
```
<% for(var key in htmlWebpackPlugin.tags){ %>
  <%= key%>
<% } %>
```
> headTags bodyTags
---
```
<% for(var key in htmlWebpackPlugin.options){ %>
  <%= key%>
<% } %>
```
> template templateContent templateParameters filename publicPath hash inject scriptLoading compile favicon minify cache showErrors chunks excludeChunks chunksSortMode meta base title xhtml date
