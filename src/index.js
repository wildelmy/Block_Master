import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import Login from './pages/auth/Login'



ReactDOM.render(
  <Provider store= {store}>
   <Login />
  </Provider>,
  document.getElementById('root')
);
