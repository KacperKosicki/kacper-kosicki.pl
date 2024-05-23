import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/global.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);