// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './containers/App';
import {initialiseStore} from './redux/Store';

initialiseStore();

const appRoot = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    appRoot
);
