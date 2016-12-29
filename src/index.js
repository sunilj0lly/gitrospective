import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas/rootSaga'
import reducers from './reducers/rootReducer'
import { getCodeFromQueryParam } from './utils'

import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

function init() {
  sagaMiddleware.run(sagas);
  let githubAuthCode = getCodeFromQueryParam();
  if (githubAuthCode) {
    store.dispatch({ type: 'FETCH_GITHUB_AUTH', code: githubAuthCode });
  }
}

init();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
