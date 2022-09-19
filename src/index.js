import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.scss';
import App from './App/App';
import { store } from './App/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById("root");

const app = <Router>
  <Provider store={store}>
    <App />
  </Provider>
</Router>;

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
};