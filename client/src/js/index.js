import React from 'react';
import { createRoot } from 'react-dom/client'

// css
import "../global.css"

// Components
import Router from './router/Router.js'


const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);