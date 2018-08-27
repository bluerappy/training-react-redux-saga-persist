import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'

import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from '../src/sagas/saga.js'
import { watcherSagaById } from '../src/sagas/byIdSaga.js'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(watcherSaga)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));
    registerServiceWorker();
