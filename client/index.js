import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import reducer from './reducers/index.js';

const store = createStore(reducer);

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
