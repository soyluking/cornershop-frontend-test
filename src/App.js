import React from 'react';
import { Route } from 'wouter';

import Welcome from './pages/Welcome';
import Counters from './pages/Counters';
import Components from './Components';

const App = () => (
  <div className='App'>
    <Route path='/' component={Welcome} />
    <Route path='/counters' component={Counters} />
    <Route path='/components' component={Components} />
  </div>
);

export default App;
