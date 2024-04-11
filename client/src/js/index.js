
import React from 'react';
import { createRoot } from 'react-dom';
import Router from './router/router';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './global.css';

createRoot(document.querySelector('#app')).render(
  <HelmetProvider >
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </HelmetProvider>
);