import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/App.jsx';
import { fetchArticles } from './actions/index';

const store = configureStore();
store.dispatch(fetchArticles());
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
