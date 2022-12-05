require('file-loader?name=[name].[ext]!./index.html'); 
import React from 'react';
import { createRoot } from 'react-dom/client';
import  App  from './pages/app'; // container of the UI structure
import './sass/app.scss'; // root file for SASS

const rootApp = document.getElementById('root');

const root = createRoot(rootApp); // initialization of the App to the client side
root.render(<App />);