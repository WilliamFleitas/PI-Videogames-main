import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import  store  from '../src/redux/store/index.js'
 
import dotenv from "dotenv";
dotenv.config();


axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

//este es mi domvirtual, aca renderizamos las cosas sin afectar al dom real
ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
