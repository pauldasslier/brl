import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/ErrorBoundry';
import store from './store';
import App from './components/App';

render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);