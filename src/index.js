import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to use 'react-dom/client' for React 18+
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Performance measuring function
reportWebVitals();
