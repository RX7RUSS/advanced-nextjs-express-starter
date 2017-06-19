'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function AboutPage() {
  return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'About page'), _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, 'Back to home')), _react2.default.createElement('br', null), _react2.default.createElement(_link2.default, { href: '/blogpost' }, _react2.default.createElement('a', null, 'Blog')));
}

exports.default = AboutPage;