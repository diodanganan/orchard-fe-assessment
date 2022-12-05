require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import { createRoot } from 'react-dom/client';
import  App  from './app';
import './sass/app.scss';

const rootApp = document.getElementById('root');

const root = createRoot(rootApp); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);