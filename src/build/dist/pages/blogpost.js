'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/russellsavage/Desktop/ACA/Advanced/advanced-nextjs-express-starter/src/pages/blogpost.js?entry';
// import { bindActionCreators } from 'redux';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _link = require('next/dist/lib/link.js');

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