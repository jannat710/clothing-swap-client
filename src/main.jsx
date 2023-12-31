import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './components/Routes/PublicRoute.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';


//tanstack query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-screen-xl mx-auto font-display">
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
)
