import {createStore} from 'redux';
import { propertyReducer } from './services/reducer/propertyReducer';

export const store = createStore(propertyReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());