import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app';
import Normalize from 'react-normalize';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
