import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/main.css';
import './css/home.css';

ReactDOM.render(
  <React.StrictMode>
    <App className="dark"/>
  </React.StrictMode>,
  document.getElementById('root')
);