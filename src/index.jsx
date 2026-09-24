import React from 'react';
import { createRoot } from 'react-dom/client';
import { DataProvider } from './context';
import App from './App';

createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>
);
