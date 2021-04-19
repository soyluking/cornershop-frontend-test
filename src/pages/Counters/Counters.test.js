import { screen } from '@testing-library/react';

import { renderWithReactQueryContextAndRouter } from '../../utils/tests';
import instance from '../../services/axios';

import Counters from '.';

jest.mock('../../services/axios');

const mockCounters = [
  {
    count: 0,
    id: 'knmckeu0',
    title: 'Glasses of water',
  },
];

const fetchMockCounters = data => instance.get.mockResolvedValue({ data });

describe('<Counters />', () => {
  beforeEach(() => jest.restoreAllMocks());

  test('should render Counters page correctly', () => {
    renderWithReactQueryContextAndRouter(<Counters />);

    const inputSearch = screen.getByLabelText('Search Counters');

    expect(inputSearch).toBeInTheDocument();
    expect(inputSearch).toBeDisabled();
  });

  test('should display loading indicator while waiting for counters to load', () => {
    fetchMockCounters(mockCounters);

    renderWithReactQueryContextAndRouter(<Counters />);

    const loading = screen.getByTestId('loading-spinner');
    expect(loading).toBeInTheDocument();
  });

  test('should display empty message when no counters load', async () => {
    fetchMockCounters([]);

    renderWithReactQueryContextAndRouter(<Counters />);

    const emptyTitle = await screen.findByText('No counters yet');
    expect(emptyTitle).toBeInTheDocument();
  });

  test('should display counters list when fetching is done', async () => {
    fetchMockCounters(mockCounters);

    renderWithReactQueryContextAndRouter(<Counters />);

    const counterTitle = await screen.findByText(mockCounters[0].title);
    expect(counterTitle).toBeInTheDocument();
  });

  test('should display error message when an error occurs while fetching counters', async () => {
    instance.get.mockRejectedValueOnce(new Error('Error fetching counters'));

    renderWithReactQueryContextAndRouter(<Counters />);

    const errorTitle = await screen.findByText('Couldn’t load the counters');
    expect(errorTitle).toBeInTheDocument();
  });
});
