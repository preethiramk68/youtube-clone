import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppThemeProvider from './themes/AppThemeProvider';
import CssBaseline from "@mui/material/CssBaseline";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline/>
    <AppThemeProvider><App /></AppThemeProvider>
    
  </React.StrictMode>
);

