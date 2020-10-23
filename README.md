
### webpack 打包的基础

  1.  打包命令 webpack app.js app.bunder.js
  ```
  Hash: de108ad9182d3c950981
  Version: webpack 3.10.0
  Time: 105ms

  Asset          Size  Chunks             Chunk Names
  app.bunder.js  2.88 kB       0  [emitted]  main
  [0] ./app.js   76 bytes {0} [built]
  [1] ./pages/index.js 34 bytes {0} [built]
  ```
  ---
  ```javascript
  /* 0 */
  /***/ (function(module, exports, __webpack_require__) {


  let str = __webpack_require__(1)

  function test(str) {
    alert(str)
  }


  /***/ }),
  /* 1 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });

  let str = 'hello webpack'
  ```
  > let str = __webpack_require__(1) 说明了两个模块间是如何引用的

  2. require('./reset.css') You may need an appropriate loader to handle this file type.
  > npm i css-loader
    require('css-loader!./reset.css')
    加入 css-loader 让 webpack 处理 css 文件

  ```
  Hash: b64a80c7ede4d72aa3fa
  Version: webpack 3.10.0
  Time: 857ms
          Asset    Size  Chunks             Chunk Names
  app.bundle.js  4.7 kB       0  [emitted]  main
     [0] ./app.js 103 bytes {0} [built]
     [1] ./node_modules/css-loader!./reset.css 199 bytes {0} [built]

     [3] ./pages/index.js 34 bytes {0} [built]
      + 1 hidden module
  ```
  ---
  ```javascript
  /* 1 */
  /***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.i, "html, body {\n  margin: 0;\n  padding: 0;\n}\n", ""]);

  // exports


  /***/ }),
  ```
  3. require('style-loader!css-loader!./reset.css'); 加入 style-loader 使 css 样式生效
