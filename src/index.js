import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from '../src/sagas/saga.js'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["persistReducer"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
    
  )
  let persistor = persistStore(store)

sagaMiddleware.run(watcherSaga)

ReactDOM.render(
    <Provider store={store}>
     <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>,
    document.getElementById('root'));
    registerServiceWorker();