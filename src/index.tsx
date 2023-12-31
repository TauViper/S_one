import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Global } from 'src/Global.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
