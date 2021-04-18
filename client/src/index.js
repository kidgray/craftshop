import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/styles.scss';
import { App } from './App.jsx';

ReactDOM.render(
<BrowserRouter> 
    <App />
</BrowserRouter>, 
document.getElementById('root'));