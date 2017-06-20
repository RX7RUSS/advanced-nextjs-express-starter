
          window.__NEXT_REGISTER_PAGE('/blogpost', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 572:
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

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(572);


/***/ })

},[607]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9ibG9ncG9zdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2Jsb2dwb3N0LmpzPzBiNDU2YjQiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanM/MGI0NTZiNCIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz8wYjQ1NmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgQmxvZ3Bvc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIC8vIC8vICAgcmV0dXJuIHsgaXNTZXJ2ZXIgfTtcbiAgLy8gLy8gfVxuICAvL1xuICAvLyBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gIC8vXG4gIC8vIH1cbiAgLy9cbiAgLy8gY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+XG4gICAgICAgICAgQmxvZyBQb3N0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+QmFjayB0byBob21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8cD5UaXRsZTwvcD5cbiAgICAgICAgPGlucHV0IHNpemU9XCIzMFwiIC8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxwPkJvZHk8L3A+XG4gICAgICAgIDxpbnB1dCBzaXplPVwiMzBcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoQmxvZ3Bvc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYmxvZ3Bvc3QuanM/ZW50cnkiLCJjb25zdCByb290cmVkdWNlciA9IChzdGF0ZSA9IDApID0+IHtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdHJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgcm9vdHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuY29uc3QgZXhhbXBsZUluaXRpYWxTdGF0ZSA9IHt9O1xuXG4vLyBleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4vLyAgIEFERDogJ0FERCcsXG4vLyAgIFRJQ0s6ICdUSUNLJ1xuLy8gfTtcblxuLy8gUkVEVUNFUlNcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZXhhbXBsZUluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gc3RhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IGV4YW1wbGVJbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFGQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUhBOzs7Ozs7O0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        