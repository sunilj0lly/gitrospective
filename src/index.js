import React from 'react';
import { render } from 'react-dom';
import App from './App';
import gitrospective from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { storeOAuthToken } from './actions/actions'
import { getJSON, getCodeFromQueryParam } from './utils'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/rootSaga'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

const GITHUB_AUTH_URL = 'http://localhost:9999/authenticate/';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  gitrospective,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas)

getGitHubToken();

function getGitHubToken() {
  var code = getCodeFromQueryParam();
  if (code) {
    getJSON(GITHUB_AUTH_URL + code)
    .then(function(data) {
      store.dispatch(storeOAuthToken(data.token));
    })
    .catch(function(error) {
      alert('Wasn\'t able to autenticate with GitHub');
    })
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
