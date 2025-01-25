import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portfolio } from './portfolio';
import {BrowserRouter as Router} from 'react-router-dom'; 

import './Styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/Portfolio-FedericoIsa">
      <Portfolio/>
    </Router>
  </React.StrictMode>,
);


