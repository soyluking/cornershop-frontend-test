import React from 'react';
import { Route } from 'wouter';
import { QueryClientProvider, QueryClient } from 'react-query';

import Welcome from './pages/Welcome';
import Counters from './pages/Counters';

const queryClient = new QueryClient();

const App = () => (
  <div className='App'>
    <Route path='/' component={Welcome} />
    <QueryClientProvider client={queryClient}>
      <Route path='/counters' component={Counters} />
    </QueryClientProvider>
  </div>
);

export default App;
