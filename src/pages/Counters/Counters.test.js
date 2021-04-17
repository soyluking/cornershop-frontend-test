import { screen, fireEvent } from '@testing-library/react';
import { renderWithReactQueryContextAndRouter } from '../../utils/tests';

import Counters from '.';

describe('Counters', () => {
  test('should render Counters page correctly', () => {
    renderWithReactQueryContextAndRouter(<Counters />);

    const inputSearch = screen.getByLabelText('Search Counters');

    expect(inputSearch).toBeInTheDocument();
    expect(inputSearch).toBeDisabled();
  });

  test.todo('should start fetching counters');

  test.todo(
    'should display loading indicator while waiting for counters to load',
  );

  test.todo(
    'should display error message when an error occurs while fetching counters',
  );

  test.todo('should display empty message when no counters load');

  test.todo('should display counters list when fetching is done');
});
