
          window.__NEXT_REGISTER_PAGE('/blogpost', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var rootreducer = function rootreducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return state;
};

exports.default = rootreducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/russellsavage/Desktop/ACA/Advanced/advanced-nextjs-express-starter/src/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/russellsavage/Desktop/ACA/Advanced/advanced-nextjs-express-starter/src/reducers/index.js"); } } })();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.reducer = undefined;

var _redux = __webpack_require__(563);

var _reduxDevtoolsExtension = __webpack_require__(599);

var _reduxThunk = __webpack_require__(600);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(587);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var exampleInitialState = {};

// export const actionTypes = {
//   ADD: 'ADD',
//   TICK: 'TICK'
// };

// REDUCERS
var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return state;
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/russellsavage/Desktop/ACA/Advanced/advanced-nextjs-express-starter/src/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/russellsavage/Desktop/ACA/Advanced/advanced-nextjs-express-starter/src/store.js"); } } })();

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/russellsavage/Desktop/ACA/Advanced/advanced-nextjs-express-starter/src/pages/blogpost.js?entry';
// import { bindActionCreators } from 'redux';

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(588);

var _nextReduxWrapper = __webpack_require__(585);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _link = __webpack_require__(586);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Blogpost = function (_Component) {
  (0, _inherits3.default)(Blogpost, _Component);

  function Blogpost() {
    (0, _classCallCheck3.default)(this, Blogpost);
    return (0, _possibleConstructorReturn3.default)(this, (Blogpost.__proto__ || (0, _getPrototypeOf2.default)(Blogpost)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blogpost, [{
    key: 'render',

    // //   return { isServer };
    // // }
    //
    // componentDidMount () {
    //
    // }
    //
    // componentWillUnmount () {
    // }

    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Blog Post'), _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Back to home')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_link2.default, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, 'About')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Title'), _react2.default.createElement('input', { size: '30', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Body'), _react2.default.createElement('input', { size: '30', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }));
    }
  }]);
  return Blogpost;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(Blogpost);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/russellsavage/Desktop/ACA/Advanced/advanced-nextjs-express-starter/src/pages/blogpost.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/russellsavage/Desktop/ACA/Advanced/advanced-nextjs-express-starter/src/pages/blogpost.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/blogpost")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(608);


/***/ })

},[609]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9ibG9ncG9zdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzRkY2MzYTUiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/NGRjYzNhNSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9ncG9zdC5qcz80ZGNjM2E1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvb3RyZWR1Y2VyID0gKHN0YXRlID0gMCkgPT4ge1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb290cmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByb290cmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5jb25zdCBleGFtcGxlSW5pdGlhbFN0YXRlID0ge307XG5cbi8vIGV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbi8vICAgQUREOiAnQUREJyxcbi8vICAgVElDSzogJ1RJQ0snXG4vLyB9O1xuXG4vLyBSRURVQ0VSU1xuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBleGFtcGxlSW5pdGlhbFN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIEJsb2dwb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAvLyAvLyAgIHJldHVybiB7IGlzU2VydmVyIH07XG4gIC8vIC8vIH1cbiAgLy9cbiAgLy8gY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAvL1xuICAvLyB9XG4gIC8vXG4gIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIEJsb2cgUG9zdFxuICAgICAgICA8L2gxPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkJhY2sgdG8gaG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHA+VGl0bGU8L3A+XG4gICAgICAgIDxpbnB1dCBzaXplPVwiMzBcIiAvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8cD5Cb2R5PC9wPlxuICAgICAgICA8aW5wdXQgc2l6ZT1cIjMwXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKEJsb2dwb3N0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2Jsb2dwb3N0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUZBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBSEE7Ozs7Ozs7QUFRQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        