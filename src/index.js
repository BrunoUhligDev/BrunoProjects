import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import'./styles/globals.css'
import { tsExternalModuleReference } from '@babel/types';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log(teste2)
