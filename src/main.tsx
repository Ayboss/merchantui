import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthProvider';
import { MerchantKycProvider } from './context/MerchantKycProvider';
import App from './App';
import { PopupContextProvider } from './context/PopupContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <MerchantKycProvider>
        <PopupContextProvider>
          <Router>
            <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </Router>
        </PopupContextProvider>
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 3000
          }}
        />
      </MerchantKycProvider>
    </AuthProvider>
  </React.StrictMode>
);

export { queryClient };
