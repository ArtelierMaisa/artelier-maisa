import './index.css';
import 'react-medium-image-zoom/dist/styles.css';
import './services/firebase.ts';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
