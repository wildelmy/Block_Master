import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import Home from './pages/Home.jsx'



ReactDOM.render(
  <Provider store= {store}>
   <Home />
  </Provider>,
  document.getElementById('root')
);
