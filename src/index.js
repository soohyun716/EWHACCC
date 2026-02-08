import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // public/index.html에 있는 루트 요소
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// reportWebVitals(console.log)
reportWebVitals();
