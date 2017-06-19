'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.reducer = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('./reducers/index');

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