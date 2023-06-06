import React from 'react';
import { AppRouter } from './routes';
import { useRedirect } from './hooks';

function App() {
  useRedirect();

  return <AppRouter />;
}

export default App;
