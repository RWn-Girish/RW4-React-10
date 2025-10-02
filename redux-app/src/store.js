import { applyMiddleware, compose, createStore } from 'redux';
import { propertyReducer } from './services/reducer/propertyReducer';
import { thunk } from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(propertyReducer, composeEnhancers(applyMiddleware(thunk)));