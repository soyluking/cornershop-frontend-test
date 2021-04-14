import { waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { renderWithClient } from './utils';
import { server } from '../setupTests';
import { Counters } from '../pages/Counters';

describe('query component', () => {
  test('successful query component', async () => {
    const result = renderWithClient(<Counters />);

    await waitFor(() => result.getByText(/name/));

    expect(result.getByText(/name/)).toHaveTextContent('mocked-react-query');
  });

  // test('failure query component', async () => {
  //   server.use(
  //     rest.get('*', (_req, res, ctx) => {
  //       return res(ctx.status(500));
  //     }),
  //   );

  //   const result = renderWithClient(<Counters />);

  //   await waitFor(() => result.getByText(/error/));

  //   expect(result.getByText(/error/)).toHaveTextContent(
  //     'An error has occurred',
  //   );
  // });
});
