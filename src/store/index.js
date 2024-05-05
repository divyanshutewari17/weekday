// src/store/index.js
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

export default store;
