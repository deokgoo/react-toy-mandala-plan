import { createStore, applyMiddleware } from 'redux';
import middleware from './middleware';
import rootReducer from './index';

export default createStore(rootReducer, applyMiddleware(middleware));
