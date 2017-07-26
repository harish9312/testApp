import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux';
import { rootReducer } from './reducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store = {store} >
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
