import React from 'react';
import { createRoot } from 'react-dom';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/yummy-app-front/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);