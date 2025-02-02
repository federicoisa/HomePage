import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portfolio } from './Portfolio';
import {BrowserRouter as Router} from 'react-router-dom'; 

import './Styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Portfolio/>
    </Router>
  </React.StrictMode>,
);


