import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from './styles/styles';
import Provider from './application/provider';

ReactDOM.render(
  <React.StrictMode>

    <Provider>
      <GlobalStyle />
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
