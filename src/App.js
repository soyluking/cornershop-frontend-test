import React from 'react';
import { Route } from 'wouter';
import { QueryClientProvider, QueryClient } from 'react-query';

import { CountersContextProvider } from './context/CountersContext';

import Welcome from './pages/Welcome';
import Counters from './pages/Counters';

const queryClient = new QueryClient();

const App = () => (
  <div className='App'>
    <Route path='/' component={Welcome} />
    <QueryClientProvider client={queryClient}>
      <CountersContextProvider>
        <Route path='/counters' component={Counters} />
      </CountersContextProvider>
    </QueryClientProvider>
  </div>
);

export default App;
