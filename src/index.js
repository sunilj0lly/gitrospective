import React from 'react';
import { render } from 'react-dom';
import App from './App';
import gitrospective from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

let store = createStore(gitrospective)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
