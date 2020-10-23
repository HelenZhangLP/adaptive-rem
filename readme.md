
# webpack 打包的基础

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
