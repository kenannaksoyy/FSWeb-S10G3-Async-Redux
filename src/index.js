import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import combReducer from './reducers';
import { createStore } from 'redux';
import { BrowserRouter} from 'react-router-dom';

const store = createStore(combReducer);
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);