/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_axios.js":
/*!**************************!*\
  !*** ./src/js/_axios.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "index_get": () => (/* binding */ index_get),
/* harmony export */   "rank_get": () => (/* binding */ rank_get),
/* harmony export */   "search_get": () => (/* binding */ search_get)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // 默认配置 

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = "http://124.221.249.219:8000/api";
(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.timeout) = 5000; // 主题页面请求

var axios_get = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  method: "GET"
});
function index_get(url) {
  // 主题页面拦截器
  axios_get.interceptors.response.use(function (res) {
    return res.data || res;
  }, function (err) {
    var response = err.response;

    if (response) {
      switch (response.status) {
        case 401:
          console.log(response);
          break;

        case 403:
          console.log("也许是token");
          break;

        case 404:
          console.log("找不到页面"); // window.location.reload("www.baidu.com");

          break;
      }
    } else {
      if (!window.navigator.onLine) {
        console.log("网络有问题");
        return;
      }
    }

    return Promise.reject(err);
  });
  return axios_get(url);
}
; // 模糊搜索请求

var axios_search = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  method: "GET"
}); // 默认拦截器

axios_search.interceptors.response.use(function (res) {
  return res.data;
}, function (err) {
  return new Promise.reject(err);
});
function search_get(url, data) {
  return axios_search({
    url: url,
    params: {
      keyword: data
    }
  });
} // 排行榜请求

var axios_rank = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  method: "GET"
});
function rank_get(url, number) {
  axios_rank.interceptors.response.use(function (res) {
    return res.data[number];
  }, function (err) {
    var response = err.response;

    if (response) {
      switch (response.status) {
        case 401:
          console.log(response);
          break;

        case 403:
          console.log("也许是token");
          break;

        case 404:
          console.log("找不到页面"); // window.location.reload("www.baidu.com");

          break;
      }
    } else {
      if (!window.navigator.onLine) {
        console.log("网络有问题");
        return;
      }
    }

    return Promise.reject(err);
  });
  return axios_rank(url);
}

/***/ }),

/***/ "./src/js/flexible.js":
/*!****************************!*\
  !*** ./src/js/flexible.js ***!
  \****************************/
/***/ (() => {

(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  function setRemUnit() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + 'px';
  }

  setRemUnit();
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  if (dpr >= 2) {
    var fakeBody = document.createElement('body');
    var testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);

    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }

    docEl.removeChild(fakeBody);
  }
})(window, document);

/***/ }),

/***/ "./src/js/history_component.js":
/*!*************************************!*\
  !*** ./src/js/history_component.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

customElements.define('history-card', /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(history_component, _HTMLElement);

  var _super = _createSuper(history_component);

  function history_component() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, history_component);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_delete", function () {
      _this._shadowRoot.querySelector(".content").innerHTML = "";
    });

    _this._shadowRoot = _this.attachShadow({
      'mode': 'open'
    });
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(history_component, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var template = document.createElement('template');
      var style = document.createElement("style");
      style.innerHTML = "\n<style>\n* {\n    text-decoration: none;\n    list-style-type: none;\n    box-sizing: border-box;\n    \n}\n@font-face {\n    font-family: \"iconfont\";\n    /* Project id 3448352 */\n    src: url('../font/iconfont.woff2') format('woff2'), url(\"../font/iconfont.woff\") format('woff'), url('../font/iconfont.ttf') format('truetype');\n}\n\n.iconfont {\n    font-family: \"iconfont\" !important;\n    font-size: 16px;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n\n.history_card .title {\n    height: 1rem;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.history_card h4 {\n    font-weight: 700;\n    font-size: .4533rem;\n}\n\n.history_card .content {\n    display: flex;\n    align-items: center;\n    flex-flow: wrap row;\n    justify-content: start;\n}\n\n.history_card span {\n    font-size: .3rem;\n    line-height: .28rem;\n    margin: 0 0.3rem 0.3rem 0;\n    color: rgba(26, 26, 26, 1);\n    background-color: #fff;\n}\n";
      template.innerHTML = "\n  \n        <div class=\"history_card\">\n        <section class=\"title\">\n            <h4>\u641C\u7D22\u5386\u53F2</h4>\n            <i class=\"iconfont\">&#xe61a;</i>\n        </section>\n        <section class=\"content\">\n        </section>\n    </div>\n           ";

      this._shadowRoot.appendChild(template.content.cloneNode(true));

      this._shadowRoot.appendChild(style);

      this._shadowRoot.querySelector('i').addEventListener("click", this._delete);
    }
  }, {
    key: "add_data",
    value: function add_data(newValue) {
      var span = document.createElement("span");
      span.innerText = newValue;

      this._shadowRoot.querySelector(".content").appendChild(span);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
      // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作
      switch (name) {
        case 'data':
          this.add_data(newValue);
          break;
      }
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(val) {
      this._data = val;
      this.setAttribute("data", val);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['data'];
    }
  }]);

  return history_component;
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(HTMLElement)));

/***/ }),

/***/ "./src/js/hot_component.js":
/*!*********************************!*\
  !*** ./src/js/hot_component.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// width: ${this.getAttribute("_width")}
// height: ${this.getAttribute("_height")}
customElements.define('hot-card', /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(hot_component, _HTMLElement);

  var _super = _createSuper(hot_component);

  function hot_component() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, hot_component);

    _this = _super.call(this);
    _this._shadowRoot = _this.attachShadow({
      'mode': 'open'
    });
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(hot_component, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var template = document.createElement('template');
      var style = document.createElement("style");
      style.innerHTML = "\n<style>\n* {\n    text-decoration: none;\n    \n}\n.hot_mod h2 {\n    font-weight: 700;\n    font-size: 17px;\n}\n\n.hot_mod a {\n    font-size: .32rem;\n    background-color: #fff;\n    color: rgba(26, 26, 26, 1);\n    margin: .2667rem .4rem 0 0;\n}\n</style>\n";
      template.innerHTML = "\n        <div class=\"hot_mod\">\n        <h2>\u70ED\u95E8\u641C\u7D22\uFF01\uFF01</h2>\n        <div>\n            <a href=\"javascript:;\"></a>\n            <a href=\"javascript:;\"></a>\n            <a href=\"javascript:;\"></a>\n            <a href=\"javascript:;\"></a>\n            <a href=\"javascript:;\"></a>\n            <a href=\"javascript:;\"></a>\n            <a href=\"javascript:;\"></a>\n            <a href=\"javascript:;\"></a>\n            <a href=\"javascript:;\"></a>\n\n        </div>\n    </div>\n           ";

      this._shadowRoot.appendChild(template.content.cloneNode(true));

      this._shadowRoot.appendChild(style);
    }
  }, {
    key: "render_data",
    value: function render_data(newValue) {
      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._shadowRoot.querySelectorAll("a")).forEach(function (item, index) {
        item.innerHTML = newValue.split(",")[index];
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
      // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作
      switch (name) {
        case '_data':
          this.render_data(newValue);
          break;
      }
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(val) {
      this.setAttribute("_data", val);
    }
  }], [{
    key: "observedAttributes",
    get: // 监听属性并且 渲染 图片 模块
    function get() {
      return ['_data'];
    }
  }]);

  return hot_component;
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(HTMLElement)));

/***/ }),

/***/ "./src/js/img_component.js":
/*!*********************************!*\
  !*** ./src/js/img_component.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// width: ${this.getAttribute("_width")}
// height: ${this.getAttribute("_height")}
// 设置 锁头 解决 问题  webcomponent 生命周期导致其 一直被调用 
var body = document.querySelector("body");
var key = 0;
body.setAttribute("key", key++);
customElements.define('img-card', /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(img_component, _HTMLElement);

  var _super = _createSuper(img_component);

  function img_component() {
    var _this2;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, img_component);

    _this2 = _super.call(this);
    _this2._shadowRoot = _this2.attachShadow({
      'mode': 'open'
    });
    return _this2;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(img_component, [{
    key: "connectedCallback",
    value: function connectedCallback() {}
  }, {
    key: "render",
    value: function render() {
      var template = document.createElement('template');
      var style = document.createElement("style");
      style.innerHTML = "\n<style>\n* {\n    text-decoration: none;\n    list-style-type: none;\n    box-sizing: border-box;\n    \n}\n\n\n\n .image_list {\n    width: 2.353rem;\n    height:2.353rem;\n    position: relative;\n    /* background: url(../image/p1.jpg) center center no-repeat;\n    background-size: contain; */\n}\n\n\n\n .image_list div {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n \n    transform: scale(".concat(this.getAttribute("number"), ");\n    border-radius: .2933rem;\n    background: url(http://124.221.249.219:8000/images/covers/1.jpg) center center no-repeat;\n    background-size: 100% 100%;\n}\n\n .image_list p {\n    bottom: -0.2193rem;\n    right: .0;\n    font-size: .3467rem;\n    border-radius: 9px;\n    height: 0.4533rem;\n    width: 2rem;\n    background: rgba(0, 0, 0, .4);\n    color: #fff;\n    text-align: center;\n    position: absolute;\n    white-space: nowrap;\n   text-overflow: ellipsis;\n   -o-text-overflow:ellipsis;\n}\n.image_list h5{\n\n    width: 90%;\n    \n    line-height: 0.4rem;\n    margin-top: 0.25rem;\n    font-weight: 400;\n    color: rgba(26,26,26,1);\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n   \n    \n}\n");
      template.innerHTML = "\n  \n        <div class=\"image_list\">\n            <div class=\"image_div\">\n            </div>\n            <p>>1940.0\u4E07</p>\n            <h5>".concat(this.getAttribute("thing") || "", "</h5>\n        </div>\n    \n           ");

      this._shadowRoot.appendChild(template.content.cloneNode(true));

      this._shadowRoot.appendChild(style);
    }
  }, {
    key: "render_data",
    value: function render_data(newValue) {
      var _this = this._shadowRoot.querySelector(".image_list");

      _this.children[0].setAttribute("data-src", newValue.cover);

      this.lazy_render(_this.children[0]);
      _this.children[1].innerText = typeof newValue.views == "number" ? ">" + newValue.views + "万" : newValue.views;
    }
  }, {
    key: "lazy_render",
    value: // 懒加载渲染
    function lazy_render(_this) {
      var callback = function callback(entries) {
        if (entries[0].isIntersecting) {
          var target = entries[0].target;
          var data_src = target.getAttribute("data-src");
          target.style.background = "url(".concat(data_src, ") center center no-repeat");
          target.style.backgroundSize = "100% 100%";
          observer.unobserve(target);
        }
      };

      var observer = new IntersectionObserver(callback);
      observer.observe(_this);
    }
  }, {
    key: "render_size",
    value: function render_size(newValue) {
      var image_list = this._shadowRoot.querySelector(".image_list");

      image_list.style.width = newValue[0] + "rem";
      image_list.style.height = newValue[1] + "rem";
    } // 监听属性并且 渲染 图片 模块

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
      // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作
      switch (name) {
        case 'data':
          body.setAttribute("key", key++);

          if (body.getAttribute("key") > 31) {
            return;
          }

          this.render();
          this.render_data(this._data);
          break;

        case 'width_height':
          this.render_size(newValue);
          break;
      }
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(val) {
      this._data = val;
      this.setAttribute("data", true);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['data', "width_height"];
    }
  }]);

  return img_component;
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(HTMLElement)));

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_css_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/css.css */ "./src/css/css.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _font_iconfont_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../font/iconfont.woff */ "./src/font/iconfont.woff");
/* harmony import */ var _font_iconfont_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../font/iconfont.woff2 */ "./src/font/iconfont.woff2");
/* harmony import */ var _lunbo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lunbo.js */ "./src/js/lunbo.js");
/* harmony import */ var _history_component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history_component.js */ "./src/js/history_component.js");
/* harmony import */ var _img_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img_component.js */ "./src/js/img_component.js");
/* harmony import */ var _hot_component_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hot_component.js */ "./src/js/hot_component.js");
/* harmony import */ var _list_component_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list_component.js */ "./src/js/list_component.js.js");
/* harmony import */ var _list_component_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_list_component_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _search_component_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search_component.js */ "./src/js/search_component.js");
/* harmony import */ var _index_data_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index_data.js */ "./src/js/index_data.js");
/* harmony import */ var _search_btn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search_btn */ "./src/js/search_btn.js");
/* harmony import */ var _search_btn__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_search_btn__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");














 // console.log(Sortable);
// 引用 拖动 库

var element = document.querySelector('.rank_list');
var option = {
  animation: 1000,
  onEnd: function onEnd(evt) {
    var arr = sortable.toArray();
    console.log(arr);
  }
}; //初始化

var sortable = sortablejs__WEBPACK_IMPORTED_MODULE_13__["default"].create(element, option);

/***/ }),

/***/ "./src/js/index_data.js":
/*!******************************!*\
  !*** ./src/js/index_data.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_axios.js */ "./src/js/_axios.js");

 // 轮播图组件传值

var swiper = document.querySelectorAll("swiper-card");
(0,_axios_js__WEBPACK_IMPORTED_MODULE_1__.index_get)("/recommendations").then(function (res) {
  swiper[0].data = res.offical;
  swiper[1].data = res.tatsujin;
  swiper[2].data = res.column;
}); // 热榜模块传值

var hot_mod = document.querySelector("hot-card");
(0,_axios_js__WEBPACK_IMPORTED_MODULE_1__.index_get)("/hot").then(function (res) {
  hot_mod.data = res;
}); //模糊搜索模块传值

var search_mod = document.querySelector("search-card"),
    search_btn = document.querySelector(".search_btn"),
    search_something = document.querySelector(".search_something"); //获取热搜模块

var hot = document.querySelector(".hot"); // 热搜模块切换与传值同步 所以写在这里没有放在 search_btn 文件里面
// window.addEventListener("keydown", (e) => {
//         if (e.keyCode === 13 && search_btn == document.activeElement && search_btn.value) {
//             search_get("/search?keyword", search_btn.value).then((res) => {
//                 hot.style.display = "none";
//                 search_something.style.display = "block"
//                 search_mod.data = res;
//             })
//         }
//     }
// );
// 重构后 加入 了防抖板块
// 历史组件函数

function history_data(value) {
  document.querySelector("history-card").data = value;
}

function out(e) {
  if (e.keyCode === 13 && this == document.activeElement && this.value) {
    //  历史搜素组件传值
    history_data(this.value); // 请求数据 给 搜索

    (0,_axios_js__WEBPACK_IMPORTED_MODULE_1__.search_get)("/search?keyword", search_btn.value).then(function (res) {
      hot.style.display = "none";
      search_something.style.display = "block";
      search_mod.data = res;
    });
  }
}

search_btn.addEventListener("keydown", debounce(500, out)()); //防抖函数

function debounce(time, fn) {
  var t = null;
  return function () {
    var rest = Array.prototype.slice.call(arguments);
    return function (e) {
      var _this = this;

      if (t) {
        clearTimeout(t);
      }

      t = setTimeout(function () {
        //任务回调函数
        fn.call(_this, e);
      }, time);
    };
  };
} // 排行榜组件传值  (处理数组  给两个组件都要传值)
//  重构


var img_card = document.querySelectorAll("img-card");
(0,_axios_js__WEBPACK_IMPORTED_MODULE_1__.index_get)("/ranking").then(function (res) {
  res.map(function (item, index) {
    var top_list = document.querySelectorAll(".top_list"),
        strong = top_list[index].querySelectorAll("strong"),
        i = top_list[index].querySelectorAll("i"),
        h5 = top_list[index].querySelector("h5");

    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(strong).forEach(function (e, i) {
      e.innerText = "1." + item.top3[i].title;
    });

    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(i).forEach(function (e, i) {
      e.innerText = "--" + item.top3[i].artist;
    });

    h5.innerText = item.title + "--" + item.update_frequence;
    img_card[index].data = {
      cover: item.cover,
      views: item.views
    };
  });
  return res;
});

/***/ }),

/***/ "./src/js/list_component.js.js":
/*!*************************************!*\
  !*** ./src/js/list_component.js.js ***!
  \*************************************/
/***/ (() => {

// // width: ${this.getAttribute("_width")}
// // height: ${this.getAttribute("_height")}
// import "./img_component.js"
// customElements.define('list-card', class list_component extends HTMLElement {
//     constructor() {
//         super();
//         this._shadowRoot = this.attachShadow({ 'mode': 'open' });
//     }
//     connectedCallback() {
//         this.render();
//     };
//     render() {
//         const template = document.createElement('template');
//         const style = document.createElement("style");
//         style.innerHTML = `
// <style>
// * {
//     text-decoration: none;
//     list-style-type: none;
//     box-sizing: border-box;
// }
// `
//         template.innerHTML = `
//            `;
//         this._shadowRoot.appendChild(template.content.cloneNode(true));
//         this._shadowRoot.appendChild(style);
//     }
//     render_data(newValue) {
//         let h5 = this._shadowRoot.querySelector("h5"),
//             strong = this._shadowRoot.querySelectorAll("strong"),
//             i = this._shadowRoot.querySelectorAll("i")
//         h5.innerText = newValue.title + "--" + newValue.time;
//         newValue.top.map((item, index) => {
//             [...strong][index].innerText = `${index+1}` + "." + item.title;
//             [...i][index].innerText = "--" + item.artist;
//         })
//     };
//     // 监听属性并且 渲染 图片 模块
//     static get observedAttributes() {
//         return ['data'];
//     };
//     attributeChangedCallback(name, oldValue, newValue) {
//         // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
//         switch (name) {
//             case 'data':
//                 this.render_data(this._data)
//                 break;
//         }
//     };
//     render_son(val) {
//         const img_card = document.createElement("img-card");
//         this._shadowRoot.querySelector(".list").appendChild(img_card);
//         this._shadowRoot.querySelector("img-card").data = val
//     }
//     set data(val) {
//         this._data = val;
//         this.setAttribute("data", true);
//     }
//     get data() {
//         return this._data
//     }
//     set img_mod(val) {
//         this.render_son(val)
//     }
//     get img_mod() {
//         return this.querySelector("img-card").getAttribute("data")
//     }
// });

/***/ }),

/***/ "./src/js/lunbo.js":
/*!*************************!*\
  !*** ./src/js/lunbo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// width: ${this.getAttribute("_width")}
// height: ${this.getAttribute("_height")}
customElements.define('swiper-card', /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TodoApp, _HTMLElement);

  var _super = _createSuper(TodoApp);

  function TodoApp() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TodoApp);

    _this = _super.call(this);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleTouchStart", function (e) {
      _this.startX = e.touches[0].clientX;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "touchmoveHandler", function (e) {
      _this.moveX = e.touches[0].clientX;
      _this.distanceX = _this.moveX - _this.startX; // 判断什么时候不准你去滑动了 

      if (Math.abs(Math.abs(_this.distanceX) - _this.scroll_wrapper.clientWidth) <= _this.scroll_wrapper.clientHeight * 3 / 5) return; // 设置节流锁

      if (_this.timer) {
        clearTimeout(_this.timer);
      }

      _this.timer = setTimeout(function () {
        _this.setTranslateX(_this.distanceX);
      }, 5);
    });

    _this._shadowRoot = _this.attachShadow({
      'mode': 'open'
    }); // 轮播元素
    //全局 变量

    _this.timer = null;
    _this.startX = 0;
    _this.moveX = 0;
    _this.distanceX = 0; // this.scroll_wrapper.addEventListener("touchstart", this.handleTouchStart, false);
    // this.scroll_wrapper.addEventListener("touchmove", this.touchmoveHandler, false);
    // this.scroll_wrapper.addEventListener("touchend", this.handleTouchEnd, false);

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TodoApp, [{
    key: "bindEvent",
    value: function bindEvent() {
      this.scroll_wrapper.addEventListener("touchstart", this.handleTouchStart, false);
      this.scroll_wrapper.addEventListener("touchmove", this.touchmoveHandler, false); // this.scroll_wrapper.addEventListener("touchend", this.handleTouchEnd, false);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      this.bindEvent();
    }
  }, {
    key: "render",
    value: function render() {
      var _title = this.getAttribute("_title");

      var template = document.createElement('template');
      var style = document.createElement("style");
      style.innerHTML = "\n<style>\n* {\n    text-decoration: none;\n}\n.swiper {\n    width: 98%;\n    margin: -1.333rem auto;\n    overflow: hidden; \n    margin-top: .8rem;\n}\n\n.swiper ul {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.swiper li {\n    margin-left:.2333rem;\n    text-decoration: none;\n    list-style: none;\n    width: 3.1213rem;\n    height: 3.5747rem;\n}\n\n.swiper li div {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n.swiper li div img {\n    width: 2.9067rem;\n    height: 2.9067rem;\n    border-radius: 0.2rem;\n}\n\n.swiper li div p {\n    bottom: .3603rem;\n    right: .0;\n    font-size: .3467rem;\n    border-radius: 9px;\n    height: 0.4533rem;\n    width: 2rem;\n    background: rgba(0, 0, 0, .4);\n    color: #fff;\n    text-align: center;\n    position: absolute;\n}\n\n.swiper li div h5 {\n    font-weight: 400;\n    font-size: .3467rem;\n    margin-top: -0.003rem;\n    white-space: nowrap;\n}\n\n.swiper .title {\n    width: 100%;\n    height: .8533rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.swiper .title h3 {\n    font-size: .48rem;\n    text-align: center;\n    margin-left:0.8rem;\n}\n\n.swiper .title a {\n    text-decoration: none;\n    font-size: .3733rem;\n    text-align: center;\n    color: rgba(26,26,26,.5);\n}\n</style>\n";
      template.innerHTML = "\n           <div class=\"swiper\">\n           <div class=\"title\">\n               <h3>".concat(this.getAttribute("_title"), "</h3>\n               <a href=\"javascript:void(0);\"> \u66F4\u591A ></a>\n           </div>\n           <ul class=\"scroll_wrapper\">\n     \n           </ul>\n           \n           </div>\n           \n           ");

      this._shadowRoot.appendChild(template.content.cloneNode(true));

      this._shadowRoot.appendChild(style);

      this.scroll_wrapper = this._shadowRoot.querySelector(".scroll_wrapper");
      this.slider_item = this._shadowRoot.querySelector(".slider_item");
      this.swiper = this._shadowRoot.querySelector(".swiper");
      this.item = this._shadowRoot.querySelectorAll(".slider_item");
    }
  }, {
    key: "setTranslateX",
    value: // 滑动函数
    function setTranslateX(transX) {
      this.scroll_wrapper.style.transition = "all ease 0.1s";
      this.scroll_wrapper.style.transform = "translateX(".concat(transX, "px)");
    } // 监听属性并且 渲染 图片 模块

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
      // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作
      switch (name) {
        case '_data':
          this.render_tree();
          this.render_data();
          break;
      }
    }
  }, {
    key: "render_tree",
    value: function render_tree() {
      for (var i = 0; i < this.getAttribute("_data"); i++) {
        var _slider_item = document.createElement("li");

        _slider_item.className = "slider_item";
        this.scroll_wrapper.appendChild(_slider_item);
      }

      var slider_item = this._shadowRoot.querySelectorAll(".slider_item");

      for (var _i = 0; _i < this.getAttribute("_data"); _i++) {
        var img_card = document.createElement("img-card");

        slider_item[_i].appendChild(img_card);
      }
    }
  }, {
    key: "render_data",
    value: function render_data() {
      var _this2 = this;

      var img_cards = this._shadowRoot.querySelectorAll("img-card");

      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(img_cards).forEach(function (item, index) {
        var _data = _this2.data[index];
        item.setAttribute("thing", _data.cover ? _data.title : _data.description);
        item.data = {
          cover: _data.cover ? _data.cover : _data.background,
          views: _data.views ? _data.views : _data.title
        };

        var width_height = _this2.getAttribute("width_height");

        if (width_height) {
          item.setAttribute("width_height", width_height.split(","));

          (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2._shadowRoot.querySelectorAll(".slider_item")).forEach(function (item) {
            item.style.marginRight = width_height.split(",")[0] / 5 + "rem";
          });
        }
      });
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(val) {
      // console.log(val.length);
      // 设置保密信息  加入私有属性 防止外界 窃取
      this._data = val;
      this.setAttribute("_data", val.length);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['_data'];
    }
  }]);

  return TodoApp;
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(HTMLElement)));

/***/ }),

/***/ "./src/js/search_btn.js":
/*!******************************!*\
  !*** ./src/js/search_btn.js ***!
  \******************************/
/***/ (() => {

//   切换 推荐和排行按钮
var sml_title = document.querySelector(".sml_title");
sml_title.addEventListener("click", function (e) {
  var temp = e.target.className;

  if (temp == "active") {
    return;
  }

  if (temp == "no_active") {
    var temp_class = document.querySelector(".sml_title").querySelector(".active");
    e.target.className = "active";
    temp_class.className = "no_active";
  }
}); // 点击搜索框 显示和不显示
// 拿到要操作的按钮

var search_btn = document.querySelector(".search_btn"),
    disappear = document.querySelector(".tab_cont").querySelector(".disappear"),
    search_box = document.querySelector(".search_box"),
    re = document.querySelector(".search_box").querySelector("i"),
    p = document.querySelector(".search_box").querySelector("p"),
    hot_mod = document.querySelector(".hot"),
    search_something = document.querySelector(".search_something"),
    tab_cont = document.querySelector(".tab_cont"),
    footers = document.querySelector(".footers"),
    history = document.querySelector(".history"); // 热榜 操作  把主页 搜索 设置看不见 只看热榜

search_btn.addEventListener("click", function () {
  search_btn.placeholder = "找啥呢,小老弟？";
  p.style.left = 5 + "%";
  disappear.style.display = "none";
  search_something.style.display = "none";
  hot_mod.style.display = "block";
  re.style.display = "block";
  history.style.display = "block";
}); // 返回操作   看回主页

re.addEventListener("click", function (e) {
  search_btn.value = "";
  search_btn.placeholder = "搜索";
  p.style.left = 39 + "%";
  re.style.display = "none";
  hot_mod.style.display = "none";
  search_something.style.display = "none";
  disappear.style.display = "block";
  history.style.display = "none";
}); // 排行榜按钮

var rank_list = document.querySelector(".rank_list");
sml_title.addEventListener("click", function (e) {
  if (e.target.innerText == "排行") {
    tab_cont.style.display = "none";
    rank_list.style.display = "block";
    footers.style.display = "none";
    return;
  }

  if (e.target.innerText == "推荐") {
    tab_cont.style.display = "block";
    rank_list.style.display = "none";
    footers.style.display = "block";
    return;
  }
});

/***/ }),

/***/ "./src/js/search_component.js":
/*!************************************!*\
  !*** ./src/js/search_component.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// width: ${this.getAttribute("_width")}
// height: ${this.getAttribute("_height")}
customElements.define('search-card', /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(search_component, _HTMLElement);

  var _super = _createSuper(search_component);

  function search_component() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, search_component);

    _this = _super.call(this);
    _this._shadowRoot = _this.attachShadow({
      'mode': 'open'
    });
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(search_component, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var template = document.createElement('template');
      var style = document.createElement("style");
      style.innerHTML = "\n<style>\n* {\n    text-decoration: none;\n    list-style-type: none;\n    \n}\n.search_results {\n    width: 90%;\n    height: 89%;\n    margin: .4rem auto;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-evenly;\n    align-items: left;\n}\n\n:host h2 {\n    font-weight: 700;\n    font-size: 17px;\n}\n\n.search_results {\n    font-size: 16px;\n    font-weight: 450;\n    color: rgba(26, 26, 26, 1);\n}\n\n.search_results h3 {\n    font-size: 13px;\n    font-weight: 350;\n    color: rgba(26, 26, 26, .5);\n}\n";
      template.innerHTML = "\n        <h2>\u4F60\u7684\u641C\u7D22:</h2>\n        <div class=\"search_results\">\n\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n            <div>\n                <p>123 (Vol.1)</p>\n                <h3>\"\u66FE\u95FB\u6377\", \"\u6B27\u4E16\u5174\", \"\u9A6C\u6A31\u4EEA\" </h3>\n            </div>\n\n        </div>\n           ";

      this._shadowRoot.appendChild(template.content.cloneNode(true));

      this._shadowRoot.appendChild(style);
    }
  }, {
    key: "render_data",
    value: function render_data(newValue) {
      //选择 正确的 div
      (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._shadowRoot.querySelectorAll(".search_results div")).forEach(function (item, index) {
        item.children[0].innerText = newValue[index].title;
        item.children[1].innerText = newValue[index].artist;
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
      // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作
      switch (name) {
        case 'data':
          this.render_data(this._data);
          break;
      }
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(val) {
      this._data = val;
      this.setAttribute("data", true);
    }
  }], [{
    key: "observedAttributes",
    get: // 监听属性并且 渲染 图片 模块
    function get() {
      return ['data'];
    }
  }]);

  return search_component;
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(HTMLElement)));

/***/ }),

/***/ "./src/css/css.css":
/*!*************************!*\
  !*** ./src/css/css.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/font/iconfont.woff":
/*!********************************!*\
  !*** ./src/font/iconfont.woff ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont.6a1afc.woff";

/***/ }),

/***/ "./src/font/iconfont.woff2":
/*!*********************************!*\
  !*** ./src/font/iconfont.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "font/iconfont.d00170.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkitem"] = self["webpackChunkitem"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/js/flexible.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map