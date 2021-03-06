import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';
import './assets/default.scss';
import store from './redux/store';
import App from './app';

render(
  <Provider store={store}>
    <App />
    <ToastContainer
      transition={Flip}
      position="top-center"
      autoClose={5000}
    />
  </Provider>,
  document.getElementById('app')
);
