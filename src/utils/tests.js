import { render } from '@testing-library/react';
import { Route } from 'wouter';
import { QueryClientProvider, QueryClient } from 'react-query';

import { CountersContextProvider } from '../context/CountersContext';

export function renderWithRouter(ui) {
  return {
    ...render(<Route>{ui}</Route>),
  };
}

export function renderWithReactQueryContextAndRouter(ui) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return {
    ...render(
      <QueryClientProvider client={queryClient}>
        <CountersContextProvider>
          <Route>{ui}</Route>
        </CountersContextProvider>
      </QueryClientProvider>,
    ),
    history,
  };
}
