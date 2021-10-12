import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../reducers/index'
import {persistStore} from 'redux-persist';


const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [thunk, logger]

export const store = createStore(rootReducer, initialState,composeEnhancers(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

