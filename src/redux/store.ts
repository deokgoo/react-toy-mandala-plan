import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import middleware from './middleware';
import rootReducer from './index';

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(middleware));

export default createStore(
  rootReducer,
  enhancer
);
