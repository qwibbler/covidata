import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import homeReducer from '../pages/home';

const reducer = combineReducers({
  home: homeReducer
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
