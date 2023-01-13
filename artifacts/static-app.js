(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Grid");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/IconButton");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@auth0/auth0-react");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(68);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(70);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(32);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(31);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(25);

var _helpers = __webpack_require__(71);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(67)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Box");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/LocalDrinkOutlined");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/LocalDrink");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Button");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(25);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(69)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Visualize = function Visualize() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Visualize"));
};

/* harmony default export */ __webpack_exports__["default"] = (Visualize);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@auth0/auth0-react"
var auth0_react_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(49);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(9);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(3);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(23);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(10);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/graphql/queries.js


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;


var GET_TODOS = Object(client_["gql"])(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n  query GetTodos($id: String) {\n    todos(where: { user_id: { _eq: $id } }) {\n      id\n      task\n      completed\n    }\n  }\n"])));
var GET_TODOS_BY_FREQUENCY = Object(client_["gql"])(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n  query getTodosByFrequency($id: String, $time: String = \"\") {\n    todos(\n      where: { user_id: { _eq: $id }, _and: { frequency: { _eq: $time } } }\n    ) {\n      id\n      task\n      completed\n      due_at\n    }\n  }\n"])));
var ADD_TODO = Object(client_["gql"])(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n  mutation addTodo(\n    $task: String!\n    $id: String!\n    $time: String!\n    $dueDate: date\n  ) {\n    insert_todos_one(\n      object: { task: $task, user_id: $id, frequency: $time, due_at: $dueDate }\n    ) {\n      id\n      task\n      completed\n      user_id\n      frequency\n      due_at\n    }\n  }\n"])));
var TOGGLE_COMPLETED = Object(client_["gql"])(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n  mutation toggleTodoCompleted($id: Int!, $completed: Boolean!) {\n    update_todos_by_pk(\n      pk_columns: { id: $id }\n      _set: { completed: $completed }\n    ) {\n      id\n    }\n  }\n"])));
var REMOVE_TODO = Object(client_["gql"])(_templateObject5 || (_templateObject5 = taggedTemplateLiteral_default()(["\n  mutation removeTodo($id: Int!) {\n    delete_todos_by_pk(id: $id) {\n      id\n    }\n  }\n"])));
var GET_WATER = Object(client_["gql"])(_templateObject6 || (_templateObject6 = taggedTemplateLiteral_default()(["\n  query getWater($date: date, $id: String) {\n    water(\n      where: { created_at: { _eq: $date }, _and: { user_id: { _eq: $id } } }\n    ) {\n      ounces\n    }\n  }\n"])));
var INSERT_WATER = Object(client_["gql"])(_templateObject7 || (_templateObject7 = taggedTemplateLiteral_default()(["\n  mutation insertWater($ounces: Int, $id: String) {\n    insert_water(objects: { ounces: $ounces, user_id: $id }) {\n      returning {\n        ounces\n        created_at\n      }\n    }\n  }\n"])));
var UPDATE_WATER = Object(client_["gql"])(_templateObject8 || (_templateObject8 = taggedTemplateLiteral_default()(["\n  mutation updateWater($id: String, $date: date, $ounces: Int) {\n    update_water(\n      _set: { ounces: $ounces }\n      where: { user_id: { _eq: $id }, _and: { created_at: { _eq: $date } } }\n    ) {\n      returning {\n        ounces\n      }\n    }\n  }\n"])));
// EXTERNAL MODULE: /Users/danajackson/u-space/src/components/todo-list/TodoInput.css
var todo_list_TodoInput = __webpack_require__(78);

// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(50);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(13);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(1);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/todo-list/TodoInput.js










var TodoInput_TodoInput = function TodoInput(_ref) {
  var userId = _ref.userId,
      frequency = _ref.frequency;
  Object(external_react_["useEffect"])(function () {
    calculateDueDate();
  }, [dueDate]);

  var updateCache = function updateCache(cache, _ref2) {
    var data = _ref2.data;
    var existingTodos = cache.readQuery({
      query: GET_TODOS_BY_FREQUENCY,
      variables: {
        id: userId,
        time: frequency
      }
    });
    var newTodo = data.insert_todos_one;
    cache.writeQuery({
      query: GET_TODOS_BY_FREQUENCY,
      variables: {
        id: userId,
        time: frequency
      },
      data: {
        todos: [].concat(toConsumableArray_default()(existingTodos.todos), [newTodo])
      }
    });
  };

  var _useState = Object(external_react_["useState"])(""),
      _useState2 = slicedToArray_default()(_useState, 2),
      task = _useState2[0],
      setTask = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = slicedToArray_default()(_useState3, 2),
      dueDate = _useState4[0],
      setDueDate = _useState4[1];

  var _useMutation = Object(client_["useMutation"])(ADD_TODO, {
    update: updateCache
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 1),
      addTodo = _useMutation2[0];

  var calculateDueDate = function calculateDueDate() {
    var date = new Date();

    switch (frequency) {
      case 'Daily':
        setDueDate(new Date(date.setDate(date.getDate() + 1)));
        break;

      case 'Weekly':
        setDueDate(new Date(date.setDate(date.getDate() + 7)));
        break;

      case 'Monthly':
        setDueDate(new Date(date.setDate(date.getDate() + 30)));
        break;

      default:
        break;
    }
  };

  var submitTask = function submitTask() {
    addTodo({
      variables: {
        task: task,
        id: userId,
        time: frequency,
        dueDate: dueDate
      }
    });
    setTask("");
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    spacing: 3
  }, /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(TextField_default.a, {
    id: "standard-basic",
    label: "Add a new task",
    variant: "standard",
    size: "small",
    value: task,
    onChange: function onChange(e) {
      return setTask(e.target.value);
    },
    onKeyPress: function onKeyPress(e) {
      if (e.key === "Enter") submitTask();
    }
  })), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(Button_default.a, {
    variant: "contained",
    size: "small",
    onClick: submitTask
  }, "Add"))));
};

/* harmony default export */ var components_todo_list_TodoInput = (TodoInput_TodoInput);
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(15);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(51);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(52);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(53);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);

// EXTERNAL MODULE: external "@mui/icons-material/Delete"
var Delete_ = __webpack_require__(54);
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);

// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(55);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(56);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(4);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(57);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(58);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: /Users/danajackson/u-space/src/components/todo-list/Task.css
var todo_list_Task = __webpack_require__(79);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/todo-list/Task.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var Task_Task = function Task(_ref) {
  var todo = _ref.todo,
      userId = _ref.userId,
      frequency = _ref.frequency;

  var _useMutation = Object(client_["useMutation"])(REMOVE_TODO),
      _useMutation2 = slicedToArray_default()(_useMutation, 1),
      removeTodoMutation = _useMutation2[0];

  var _useMutation3 = Object(client_["useMutation"])(TOGGLE_COMPLETED),
      _useMutation4 = slicedToArray_default()(_useMutation3, 1),
      toggleCompletedMutation = _useMutation4[0];

  var toggleCompleted = function toggleCompleted(_ref2) {
    var id = _ref2.id,
        completed = _ref2.completed;
    toggleCompletedMutation({
      variables: {
        id: id,
        completed: !completed
      },
      optimisticResponse: true,
      update: function update(cache) {
        var existingTodos = cache.readQuery({
          query: GET_TODOS_BY_FREQUENCY,
          variables: {
            id: userId,
            time: frequency
          }
        });
        var updatedTodo = existingTodos.todos.map(function (todo) {
          if (todo.id === id) {
            return _objectSpread(_objectSpread({}, todo), {}, {
              completed: !completed
            });
          } else {
            return todo;
          }
        });
        cache.writeQuery({
          query: GET_TODOS_BY_FREQUENCY,
          variables: {
            id: userId,
            time: frequency
          },
          data: {
            todos: updatedTodo
          }
        });
      }
    });
  };

  var removeTodo = function removeTodo(id) {
    removeTodoMutation({
      variables: {
        id: id
      },
      optimisticResponse: true,
      update: function update(cache) {
        var existingTodos = cache.readQuery({
          query: GET_TODOS_BY_FREQUENCY,
          variables: {
            id: userId,
            time: frequency
          }
        });
        var todos = existingTodos.todos.filter(function (t) {
          return t.id !== id;
        });
        cache.writeQuery({
          query: GET_TODOS_BY_FREQUENCY,
          variables: {
            id: userId,
            time: frequency
          },
          data: {
            todos: todos
          }
        });
      }
    });
  };

  var isOverdue = function isOverdue(dueDate) {
    var now = external_moment_default()();

    if ((dueDate != null || dueDate != ' ') && now.isAfter(dueDate)) {
      return true;
    }
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement(ListItem_default.a, {
    sx: {
      flexGrow: 1
    },
    key: todo.id,
    secondaryAction: /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
      edge: "end",
      "aria-label": "delete",
      onClick: function onClick() {
        return removeTodo(todo.id);
      }
    }, /*#__PURE__*/external_react_default.a.createElement(Delete_default.a, null)),
    disablePadding: true
  }, /*#__PURE__*/external_react_default.a.createElement(ListItemButton_default.a, {
    role: undefined,
    sx: {
      flexGrow: 1
    },
    dense: true
  }, /*#__PURE__*/external_react_default.a.createElement(ListItemIcon_default.a, null, /*#__PURE__*/external_react_default.a.createElement(Checkbox_default.a, {
    edge: "start",
    checked: todo.completed,
    onChange: function onChange() {
      return toggleCompleted(todo);
    },
    tabIndex: -1,
    disableRipple: true,
    inputProps: {
      'aria-labelledby': "checkbox-list-label-".concat(todo.id)
    }
  })), /*#__PURE__*/external_react_default.a.createElement(ListItemText_default.a, {
    sx: [todo.completed && {
      textDecoration: 'line-through'
    }, isOverdue(todo.due_at) && {
      color: 'firebrick'
    }],
    id: todo.is,
    primary: todo.task
  }))), /*#__PURE__*/external_react_default.a.createElement(Divider_default.a, {
    component: "li"
  }));
};

/* harmony default export */ var components_todo_list_Task = (Task_Task);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(59);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: /Users/danajackson/u-space/src/components/todo-list/Tasks.css
var todo_list_Tasks = __webpack_require__(80);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/todo-list/Tasks.js







var Tasks_Tasks = function Tasks(_ref) {
  var userId = _ref.userId,
      frequency = _ref.frequency;

  var _useQuery = Object(client_["useQuery"])(GET_TODOS_BY_FREQUENCY, {
    variables: {
      id: userId,
      time: frequency
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "tasks"
    }, "Loading...");
  }

  if (error) {
    return /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "tasks"
    }, "Error!");
  }

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "tasks"
  }, /*#__PURE__*/external_react_default.a.createElement(List_default.a, {
    sx: {
      width: "100%",
      bgcolor: "background.paper",
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, data.todos.map(function (todo) {
    return /*#__PURE__*/external_react_default.a.createElement(components_todo_list_Task, {
      key: todo.id,
      todo: todo,
      userId: userId,
      frequency: frequency
    });
  })));
};

/* harmony default export */ var components_todo_list_Tasks = (Tasks_Tasks);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(60);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/todo-list/todoList.js






var todoList_TodoList = function TodoList(_ref) {
  var title = _ref.title;

  var _useAuth = Object(auth0_react_["useAuth0"])(),
      user = _useAuth.user;

  return /*#__PURE__*/external_react_default.a.createElement(material_["Card"], {
    variant: "outlined",
    style: {
      flex: 1,
      padding: '10px',
      margin: '10px',
      textAlign: 'center',
      height: '20rem'
    }
  }, /*#__PURE__*/external_react_default.a.createElement("h2", null, title, " To-Do's"), /*#__PURE__*/external_react_default.a.createElement(components_todo_list_TodoInput, {
    userId: user === null || user === void 0 ? void 0 : user.sub,
    frequency: title
  }), /*#__PURE__*/external_react_default.a.createElement(components_todo_list_Tasks, {
    userId: user === null || user === void 0 ? void 0 : user.sub,
    frequency: title
  }));
};

/* harmony default export */ var todoList = (todoList_TodoList);
// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/TodoLists.js



var TodoLists_TodoLists = function TodoLists() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: '10px'
    }
  }, /*#__PURE__*/external_react_default.a.createElement(todoList, {
    title: "Daily"
  }), /*#__PURE__*/external_react_default.a.createElement(todoList, {
    title: "Weekly"
  }), /*#__PURE__*/external_react_default.a.createElement(todoList, {
    title: "Monthly"
  }));
};

/* harmony default export */ var components_TodoLists = (TodoLists_TodoLists);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(81);

// EXTERNAL MODULE: external "@ericz1803/react-google-calendar"
var react_google_calendar_ = __webpack_require__(82);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/Calendar.js



var Calendar_GoogleCal = function GoogleCal() {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("iframe", {
    title: "googleCalendar",
    src: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showDate=0&showNav=0&showPrint=0&showCalendars=0&showTz=0&showTabs=0&src=ZGVlamFjazQ3QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cGRlNGVmYmtybWtrNWhhN2lrczduZjJxM2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NjVmNmlqbTlnM3NjM2ZoN2EwYjIzNm1nc2Z2bTVpcDZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23C0CA33&color=%233F51B5&color=%234285F4&color=%23616161",
    style: {
      borderWidth: 0,
      padding: "20px"
    },
    height: "800px",
    width: "96%"
  }));
};

/* harmony default export */ var Calendar = (Calendar_GoogleCal);
// EXTERNAL MODULE: external "@rumess/react-flip-countdown"
var react_flip_countdown_ = __webpack_require__(61);
var react_flip_countdown_default = /*#__PURE__*/__webpack_require__.n(react_flip_countdown_);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/Counter.js






var Counter_Counter = function Counter() {
  var _useState = Object(external_react_["useState"])(new Date()),
      _useState2 = slicedToArray_default()(_useState, 2),
      endTime = _useState2[0],
      setEndTime = _useState2[1];

  var addMinutesToDate = function addMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  };

  var formatDate = function formatDate(date) {
    var days = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = year + "-" + month + "-" + days + " " + hours + ":" + minutes + ":" + seconds;
    return strTime;
  };

  var addTime = function addTime(minutes) {
    var today = new Date();
    var newTime = addMinutesToDate(today, minutes);
    setEndTime(formatDate(newTime));
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      border: "1px solid rgba(0,0,0,0.12)",
      borderRadius: "4px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("center", null, " ", /*#__PURE__*/external_react_default.a.createElement("h2", null, "Time Block")), /*#__PURE__*/external_react_default.a.createElement(react_flip_countdown_default.a, {
    hideYear: true,
    hideMonth: true,
    hideDay: true,
    hideHour: true,
    endAtZero: true,
    minuteTitle: " ",
    secondTitle: " ",
    endAt: endTime // Date/Time

  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    spacing: 3,
    style: {
      padding: "5px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(Button_default.a, {
    variant: "outlined",
    size: "small",
    onClick: function onClick() {
      return addTime(15);
    }
  }, "15 Minutes")), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(Button_default.a, {
    variant: "outlined",
    size: "small",
    onClick: function onClick() {
      return addTime(15);
    }
  }, "30 Minutes")), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(Button_default.a, {
    variant: "outlined",
    size: "small",
    onClick: function onClick() {
      return addTime(15);
    }
  }, "60 Minutes"))));
};

/* harmony default export */ var components_Counter = (Counter_Counter);
// EXTERNAL MODULE: external "@mui/icons-material/LocalDrinkOutlined"
var LocalDrinkOutlined_ = __webpack_require__(11);
var LocalDrinkOutlined_default = /*#__PURE__*/__webpack_require__.n(LocalDrinkOutlined_);

// EXTERNAL MODULE: external "@mui/icons-material/LocalDrink"
var LocalDrink_ = __webpack_require__(12);
var LocalDrink_default = /*#__PURE__*/__webpack_require__.n(LocalDrink_);

// EXTERNAL MODULE: /Users/danajackson/u-space/src/components/WaterTracker.css
var components_WaterTracker = __webpack_require__(83);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/WaterTracker.js




function WaterTracker_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function WaterTracker_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? WaterTracker_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : WaterTracker_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










var WaterTracker_WaterTracker = function WaterTracker(_ref) {
  var user = _ref.user;
  //const [newWater, setNewWater] = useState(0);
  var today = new Date().toISOString().split("T")[0];

  var _useQuery = Object(client_["useQuery"])(GET_WATER, {
    variables: {
      id: user,
      date: today
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var ounces = data !== null && data !== void 0 && data.water[0] ? data.water[0].ounces : 0;

  var updateAddCache = function updateAddCache(cache, _ref2) {
    var data = _ref2.data;
    var existingWater = cache.readQuery({
      query: GET_WATER,
      variables: {
        id: user,
        date: today
      }
    });
    var newWater = data.insert_water;
    cache.writeQuery({
      query: GET_WATER,
      variables: {
        id: user,
        date: today
      },
      data: {
        water: [].concat(toConsumableArray_default()(existingWater.water), [newWater])
      }
    });
  };

  var updateCache = function updateCache(cache, _ref3) {
    var data = _ref3.data;
    var existingWater = cache.readQuery({
      query: GET_WATER,
      variables: {
        id: user,
        date: today
      }
    });
    var updatedWater = existingWater.water.map(function (water) {
      return WaterTracker_objectSpread(WaterTracker_objectSpread({}, water), {}, {
        ounces: data.update_water.returning[0].ounces
      });
    });
    cache.writeQuery({
      query: GET_WATER,
      variables: {
        id: user,
        date: today
      },
      data: {
        water: updatedWater
      }
    });
  };

  var _useMutation = Object(client_["useMutation"])(INSERT_WATER, {
    update: updateAddCache
  }),
      _useMutation2 = slicedToArray_default()(_useMutation, 1),
      insertWaterMutation = _useMutation2[0];

  var _useMutation3 = Object(client_["useMutation"])(UPDATE_WATER, {
    update: updateCache
  }),
      _useMutation4 = slicedToArray_default()(_useMutation3, 1),
      updateWaterMutation = _useMutation4[0];

  var firstDrink = function firstDrink() {
    if (ounces === 8) {
      updateWaterMutation({
        variables: {
          id: user,
          ounces: 0,
          date: today
        }
      });
    } else {
      insertWaterMutation({
        variables: {
          id: user,
          ounces: 8
        }
      });
    }
  };

  var toggleWaters = function toggleWaters(newOunces) {
    if (ounces === newOunces) {
      updateWaterMutation({
        variables: {
          id: user,
          ounces: newOunces - 8,
          date: today
        }
      });
    } else {
      updateWaterMutation({
        variables: {
          id: user,
          ounces: newOunces,
          date: today
        }
      });
    }
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      border: "1px solid rgba(0,0,0,0.12)",
      borderRadius: "4px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("center", null, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Water Tracker")), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
    "aria-label": "water",
    disabled: ounces > 8,
    onClick: firstDrink
  }, ounces >= 8 ? /*#__PURE__*/external_react_default.a.createElement(LocalDrink_default.a, null) : /*#__PURE__*/external_react_default.a.createElement(LocalDrinkOutlined_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
    "aria-label": "water",
    disabled: ounces > 16 || ounces < 8,
    onClick: function onClick() {
      return toggleWaters(16);
    }
  }, ounces >= 16 ? /*#__PURE__*/external_react_default.a.createElement(LocalDrink_default.a, null) : /*#__PURE__*/external_react_default.a.createElement(LocalDrinkOutlined_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
    "aria-label": "water",
    disabled: ounces > 24 || ounces < 16,
    onClick: function onClick() {
      return toggleWaters(24);
    }
  }, ounces >= 24 ? /*#__PURE__*/external_react_default.a.createElement(LocalDrink_default.a, null) : /*#__PURE__*/external_react_default.a.createElement(LocalDrinkOutlined_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
    "aria-label": "water",
    disabled: ounces > 32 || ounces < 24,
    onClick: function onClick() {
      return toggleWaters(32);
    }
  }, ounces >= 32 ? /*#__PURE__*/external_react_default.a.createElement(LocalDrink_default.a, null) : /*#__PURE__*/external_react_default.a.createElement(LocalDrinkOutlined_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
    "aria-label": "water",
    disabled: ounces > 40 || ounces < 32,
    onClick: function onClick() {
      return toggleWaters(40);
    }
  }, ounces >= 40 ? /*#__PURE__*/external_react_default.a.createElement(LocalDrink_default.a, null) : /*#__PURE__*/external_react_default.a.createElement(LocalDrinkOutlined_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
    "aria-label": "water",
    disabled: ounces > 48 || ounces < 40,
    onClick: function onClick() {
      return toggleWaters(48);
    }
  }, ounces >= 48 ? /*#__PURE__*/external_react_default.a.createElement(LocalDrink_default.a, null) : /*#__PURE__*/external_react_default.a.createElement(LocalDrinkOutlined_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
    "aria-label": "water",
    disabled: ounces > 56 || ounces < 48,
    onClick: function onClick() {
      return toggleWaters(56);
    }
  }, ounces >= 56 ? /*#__PURE__*/external_react_default.a.createElement(LocalDrink_default.a, null) : /*#__PURE__*/external_react_default.a.createElement(LocalDrinkOutlined_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true
  }, /*#__PURE__*/external_react_default.a.createElement(IconButton_default.a, {
    "aria-label": "water",
    disabled: ounces > 64 || ounces < 56,
    onClick: function onClick() {
      return toggleWaters(64);
    }
  }, ounces >= 64 ? /*#__PURE__*/external_react_default.a.createElement(LocalDrink_default.a, null) : /*#__PURE__*/external_react_default.a.createElement(LocalDrinkOutlined_default.a, null)))));
};

/* harmony default export */ var src_components_WaterTracker = (WaterTracker_WaterTracker);
// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/WorkoutTracker.js



var WorkoutTracker_WorkoutTracker = function WorkoutTracker() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      border: "1px solid rgba(0,0,0,0.12)",
      borderRadius: "4px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("center", null, /*#__PURE__*/external_react_default.a.createElement("h2", null, "Workout Tracker")), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    container: true,
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
  }));
};

/* harmony default export */ var components_WorkoutTracker = (WorkoutTracker_WorkoutTracker);
// CONCATENATED MODULE: /Users/danajackson/u-space/src/pages/Manifest.js












var Manifest_Manifest = function Manifest() {
  var _useAuth = Object(auth0_react_["useAuth0"])(),
      user = _useAuth.user;

  var today = new Date();
  return /*#__PURE__*/external_react_default.a.createElement("div", null, user ? /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 4
  }, /*#__PURE__*/external_react_default.a.createElement("hr", {
    style: {
      marginTop: "10%"
    }
  })), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 4
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    style: {
      textAlign: "center"
    }
  }, today.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }))), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 4
  }, /*#__PURE__*/external_react_default.a.createElement("hr", {
    style: {
      marginTop: "10%"
    }
  })), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 3,
    style: {
      height: "100vh"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(components_Counter, null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(src_components_WaterTracker, {
    user: user === null || user === void 0 ? void 0 : user.sub
  }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(components_WorkoutTracker, null)), /*#__PURE__*/external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 9
  }, /*#__PURE__*/external_react_default.a.createElement(components_TodoLists, null), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement(Calendar, null)))) : /*#__PURE__*/external_react_default.a.createElement(Box_default.a, {
    sx: {
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      pt: "25rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/external_react_default.a.createElement(CircularProgress_default.a, null)));
};

/* harmony default export */ var pages_Manifest = __webpack_exports__["default"] = (Manifest_Manifest);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@auth0/auth0-react"
var auth0_react_ = __webpack_require__(7);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/LoginButton.js



var LoginButton_LoginButton = function LoginButton() {
  var _useAuth = Object(auth0_react_["useAuth0"])(),
      loginWithRedirect = _useAuth.loginWithRedirect;

  return /*#__PURE__*/external_react_default.a.createElement("button", {
    onClick: function onClick() {
      return loginWithRedirect();
    }
  }, "Log In");
};

/* harmony default export */ var components_LoginButton = (LoginButton_LoginButton);
// CONCATENATED MODULE: /Users/danajackson/u-space/src/pages/Login.js



var Login_Login = function Login() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    alt: "USpace Logo",
    src: __webpack_require__(84),
    width: "500px",
    height: "500px"
  }), /*#__PURE__*/external_react_default.a.createElement(components_LoginButton, null));
};

/* harmony default export */ var pages_Login = __webpack_exports__["default"] = (Login_Login);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(17);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/styles");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Menu");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/MenuItem");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("/Users/danajackson/u-space/node_modules/react-static/lib/browser");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/transparent-logo.439e21c3.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/white-logo.66fb3db7.png";

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Post; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(19);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/Router.js

// CONCATENATED MODULE: /Users/danajackson/u-space/src/containers/Post.js

 //


function Post() {
  var _useRouteData = Object(external_react_static_["useRouteData"])(),
      post = _useRouteData.post;

  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/blog/"
  }, '<', " Back"), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("h3", null, post.title), /*#__PURE__*/external_react_default.a.createElement("p", null, post.body));
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(14);

var _router = __webpack_require__(19);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/AppBar");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Toolbar");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Menu");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Container");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Avatar");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Tooltip");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/context");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/CircularProgress");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/TextField");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/ListItem");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/ListItemButton");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Delete");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/ListItemText");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Checkbox");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Divider");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@mui/material/List");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@mui/material");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@rumess/react-flip-countdown");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(65);
module.exports = __webpack_require__(72);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(64)["default"];

var _require = __webpack_require__(29),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(29),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(66),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);














Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/About.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/About */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/About.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/About";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/About.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Login.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Login.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Login";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/Login.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Manifest.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Manifest.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Manifest";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/Manifest.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/Visualize.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/Visualize.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/Visualize";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/Visualize.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/containers/Post */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/containers/Post";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/About.js': t_1,
  '__react_static_root__/src/pages/Login.js': t_2,
  '__react_static_root__/src/pages/Manifest.js': t_3,
  '__react_static_root__/src/pages/Visualize.js': t_4,
  '__react_static_root__/src/containers/Post': t_5
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(25);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 17,
	"./": 17,
	"./index": 17,
	"./index.js": 17
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 69;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(24);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(31);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(32);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(33);

var _interopRequireWildcard = __webpack_require__(34);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(73);

var _Suspense = _interopRequireDefault(__webpack_require__(74));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(85)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("/Users/danajackson/u-space/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(34);

var _interopRequireDefault = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(75));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(76));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise&family=Didact+Gothic);", ""]);

// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'Didact Gothic';\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\nh1, h2, h3, h4, h5{\n  font-family: 'Waiting for the Sunrise';\n}\n\na {\n  text-decoration: none;\n  color: #6be405;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n\n.App {\n  text-align: center;\n  text-align: -webkit-center;\n}", ""]);



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Module
exports.push([module.i, ".taskInput {\n    min-width: 300px;\n    margin-right: 10px;\n  }", ""]);



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Module
exports.push([module.i, ".task {\n    margin: 5px;\n    border: 1px solid #282c34;\n    height: 30px;\n    max-width: 40vw;\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    padding: 5px 10px;\n    justify-content: space-between;\n  }\n", ""]);



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Module
exports.push([module.i, ".tasks {\n    margin-top: 30px;\n  }\n\n", ""]);



/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("@mui/system");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("@ericz1803/react-google-calendar");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// Module
exports.push([module.i, "svg {\n    font-size: 2rem !important;\n}", ""]);



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/full-logo.cd11db20.png";

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(41);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "@auth0/auth0-react"
var auth0_react_ = __webpack_require__(7);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(26);

// EXTERNAL MODULE: /Users/danajackson/u-space/src/app.css
var app = __webpack_require__(77);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(3);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(42);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(9);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(43);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(4);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(27);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var icons_material_Menu_ = __webpack_require__(44);
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_);

// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(45);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(46);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(13);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(47);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(28);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/components/AppBar.js














var pages = [{
  title: 'Manifest',
  link: '/manifest'
}, {
  title: 'Visualize',
  link: '/visualize'
}];
var settings = ['Account', 'Logout'];

var AppBar_ResponsiveAppBar = function ResponsiveAppBar() {
  var _React$useState = external_react_["useState"](null),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      anchorElNav = _React$useState2[0],
      setAnchorElNav = _React$useState2[1];

  var _React$useState3 = external_react_["useState"](null),
      _React$useState4 = slicedToArray_default()(_React$useState3, 2),
      anchorElUser = _React$useState4[0],
      setAnchorElUser = _React$useState4[1];

  var _useAuth = Object(auth0_react_["useAuth0"])(),
      user = _useAuth.user,
      isAuthenticated = _useAuth.isAuthenticated,
      isLoading = _useAuth.isLoading,
      logout = _useAuth.logout;

  var handleOpenNavMenu = function handleOpenNavMenu(event) {
    setAnchorElNav(event.currentTarget);
  };

  var handleOpenUserMenu = function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
  };

  var handleCloseNavMenu = function handleCloseNavMenu() {
    setAnchorElNav(null);
  };

  var handleCloseUserMenu = function handleCloseUserMenu() {
    setAnchorElUser(null);
  };

  var handleLogout = function handleLogout() {
    logout({
      returnTo: window.location.origin
    });
    handleCloseUserMenu();
  };

  return isAuthenticated && /*#__PURE__*/external_react_["createElement"](AppBar_default.a, {
    position: "static"
  }, /*#__PURE__*/external_react_["createElement"](Container_default.a, {
    maxWidth: "xl"
  }, /*#__PURE__*/external_react_["createElement"](Toolbar_default.a, {
    disableGutters: true
  }, /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      display: {
        xs: 'none',
        md: 'flex'
      },
      mr: 1
    }
  }, /*#__PURE__*/external_react_["createElement"]("img", {
    src: __webpack_require__(35),
    height: "50px",
    width: "50px"
  })), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      display: {
        xs: 'none',
        md: 'flex'
      },
      mr: 1
    }
  }, /*#__PURE__*/external_react_["createElement"]("img", {
    src: __webpack_require__(36),
    height: "50px",
    width: "140px"
  })), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      flexGrow: 1,
      display: {
        xs: 'flex',
        md: 'none'
      }
    }
  }, /*#__PURE__*/external_react_["createElement"](IconButton_default.a, {
    size: "large",
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, /*#__PURE__*/external_react_["createElement"](icons_material_Menu_default.a, null)), /*#__PURE__*/external_react_["createElement"](Menu_default.a, {
    id: "menu-appbar",
    anchorEl: anchorElNav,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    open: Boolean(anchorElNav),
    onClose: handleCloseNavMenu,
    sx: {
      display: {
        xs: 'block',
        md: 'none'
      }
    }
  }, pages.map(function (page) {
    return /*#__PURE__*/external_react_["createElement"](MenuItem_default.a, {
      key: page.title,
      onClick: handleCloseNavMenu,
      href: page.link
    }, /*#__PURE__*/external_react_["createElement"]("span", {
      textAlign: "center"
    }, page.title));
  }))), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    nowrap: "true",
    component: "a",
    href: "",
    sx: {
      mr: 2,
      display: {
        xs: 'flex',
        md: 'none'
      },
      flexGrow: 1
    }
  }, /*#__PURE__*/external_react_["createElement"]("img", {
    src: __webpack_require__(35),
    height: "50px",
    width: "50px"
  }), /*#__PURE__*/external_react_["createElement"]("img", {
    src: __webpack_require__(36),
    height: "50px",
    width: "140px"
  })), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      flexGrow: 1,
      display: {
        xs: 'none',
        md: 'flex'
      }
    }
  }, pages.map(function (page) {
    return /*#__PURE__*/external_react_["createElement"](Button_default.a, {
      key: page.title,
      onClick: handleCloseNavMenu,
      href: page.link,
      sx: {
        my: 2,
        color: 'white',
        display: 'block',
        fontFamily: "sans-serif"
      }
    }, page.title);
  })), /*#__PURE__*/external_react_["createElement"](Box_default.a, {
    sx: {
      flexGrow: 0
    }
  }, /*#__PURE__*/external_react_["createElement"](Tooltip_default.a, {
    title: "Open settings"
  }, /*#__PURE__*/external_react_["createElement"](IconButton_default.a, {
    onClick: handleOpenUserMenu,
    sx: {
      p: 0
    }
  }, /*#__PURE__*/external_react_["createElement"](Avatar_default.a, {
    alt: user.nickname,
    src: user.picture
  }))), /*#__PURE__*/external_react_["createElement"](Menu_default.a, {
    sx: {
      mt: '45px'
    },
    id: "menu-appbar",
    anchorEl: anchorElUser,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: Boolean(anchorElUser),
    onClose: handleCloseUserMenu
  }, /*#__PURE__*/external_react_["createElement"](MenuItem_default.a, {
    key: "logout",
    onClick: handleLogout
  }, /*#__PURE__*/external_react_["createElement"]("span", {
    textAlign: "center"
  }, "Logout")))))));
};

/* harmony default export */ var AppBar = (AppBar_ResponsiveAppBar);
// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(15);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@apollo/client/link/context"
var context_ = __webpack_require__(48);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/connection.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var authLink = Object(context_["setContext"])(function (_, _ref) {
  var headers = _ref.headers;
  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      'x-hasura-admin-secret': 'Mz1DOAmn1pjKQNl3m1VsXRo1YAQFzmVGxUErGoPu39NyWjRDRylwquAv2Xn5tQPO'
    })
  };
}); //instantiate ApolloClient

var httpLink = Object(client_["createHttpLink"])({
  uri: 'https://u-space.hasura.app/v1/graphql'
});
/* harmony default export */ var connection = (new client_["ApolloClient"]({
  link: authLink.concat(httpLink),
  cache: new client_["InMemoryCache"]()
}));
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(16);

// EXTERNAL MODULE: /Users/danajackson/u-space/src/pages/Manifest.js + 10 modules
var Manifest = __webpack_require__(21);

// EXTERNAL MODULE: /Users/danajackson/u-space/src/pages/Visualize.js
var Visualize = __webpack_require__(20);

// EXTERNAL MODULE: /Users/danajackson/u-space/src/pages/Login.js + 1 modules
var Login = __webpack_require__(22);

// CONCATENATED MODULE: /Users/danajackson/u-space/src/App.js











 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);
var theme = Object(styles_["createTheme"])({
  palette: {
    type: 'light',
    primary: {
      main: '#78909c',
      contrastText: '#dde1e4'
    },
    secondary: {
      main: '#6be405'
    }
  }
});

function App() {
  var _useAuth = Object(auth0_react_["useAuth0"])(),
      isAuthenticated = _useAuth.isAuthenticated;

  return /*#__PURE__*/external_react_default.a.createElement(client_["ApolloProvider"], {
    client: connection
  }, /*#__PURE__*/external_react_default.a.createElement(styles_["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, isAuthenticated && /*#__PURE__*/external_react_default.a.createElement(AppBar, null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["BrowserRouter"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Routes"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: "/visualize",
    element: /*#__PURE__*/external_react_default.a.createElement(Visualize["default"], null)
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: "/manifest",
    element: /*#__PURE__*/external_react_default.a.createElement(Manifest["default"], null)
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: "/",
    element: /*#__PURE__*/external_react_default.a.createElement(Login["default"], null)
  }))))))));
}

/* harmony default export */ var src_App = (App);
// CONCATENATED MODULE: /Users/danajackson/u-space/src/index.js


 // Your top level component

 // Render your app

if (typeof document !== 'undefined') {
  external_react_dom_default.a.render( /*#__PURE__*/external_react_default.a.createElement(auth0_react_["Auth0Provider"], {
    domain: "dev-ljt58geth7fbohns.us.auth0.com",
    clientId: "7wTQ0WWpyNx5072pctCWf0bbIS1SWycf",
    redirectUri: window.location.origin + '/manifest'
  }, /*#__PURE__*/external_react_default.a.createElement(src_App, null)), document.getElementById("root"));
}

/***/ })
/******/ ]);
});