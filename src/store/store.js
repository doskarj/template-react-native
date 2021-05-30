import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import basicReducer from './basicStore/reducer';

const rootReducer = combineReducers({ basicStore: basicReducer });
const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));

export default configureStore;
