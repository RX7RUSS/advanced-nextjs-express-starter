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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Header from '../cmoponents/Header';
var IndexPage = function (_Component) {
  (0, _inherits3.default)(IndexPage, _Component);

  function IndexPage() {
    (0, _classCallCheck3.default)(this, IndexPage);
    return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'Hello World'), _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', null, 'About')), _react2.default.createElement('br', null), _react2.default.createElement(_link2.default, { href: '/blogpost' }, _react2.default.createElement('a', null, 'Blog')));
    }
  }]);
  return IndexPage;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(IndexPage);