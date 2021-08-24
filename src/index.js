import React from 'react';
import ReactDOM from 'react-dom';

//Styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
   <BrowserRouter> 
        <App />
        </BrowserRouter>
    , document.getElementById('root'));
