import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './context/AuthProvider';
import { MerchantKycProvider } from './context/MerchantKycProvider';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <MerchantKycProvider>
        <Router>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </Router>
        <ToastContainer autoClose={4000} hideProgressBar icon closeOnClick newestOnTop />
      </MerchantKycProvider>
    </AuthProvider>
  </React.StrictMode>
);
