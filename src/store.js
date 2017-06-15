import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { rootreducer } from './reducers/index';

const exampleInitialState = {};

// export const actionTypes = {
//   ADD: 'ADD',
//   TICK: 'TICK'
// };

// REDUCERS
export const reducer = (state = exampleInitialState) => {
  return state;
};

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
