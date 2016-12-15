import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import gitrospective from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(gitrospective)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
