import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './components/Routes/PublicRoute.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto font-display">
  <React.StrictMode>
  <AuthProvider>
  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </AuthProvider>
  </React.StrictMode>
  </div>
)
