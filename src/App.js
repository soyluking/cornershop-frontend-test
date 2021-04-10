import React from 'react';
import { Route } from 'wouter';

import Welcome from './pages/Welcome';
import Counters from './pages/Counters';

const App = () => {
  return (
    <div className='App'>
      <Route path='/' component={Welcome} />
      <Route path='/counters' component={Counters} />
    </div>
  );
};

export default App;
