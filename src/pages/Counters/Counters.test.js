import { screen, waitFor } from '@testing-library/react';
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

const fetchMockCounters = () =>
  instance.get.mockResolvedValue({ data: mockCounters });

const fetchMockEmptyCounters = () =>
  instance.get.mockResolvedValue({ data: [] });

describe('Counters', () => {
  beforeEach(() => jest.restoreAllMocks());

  test('should render Counters page correctly', () => {
    renderWithReactQueryContextAndRouter(<Counters />);

    const inputSearch = screen.getByLabelText('Search Counters');

    expect(inputSearch).toBeInTheDocument();
    expect(inputSearch).toBeDisabled();
  });

  // test('should display error message when an error occurs while fetching counters', async () => {
  //   // fetchMockError();

  //   renderWithReactQueryContextAndRouter(<Counters />);

  //   // expect.assertions(1);

  //   instance.get.mockRejectedValue(new Error('Some network error'));
  //   let error;

  //   try {
  //     await fetchMockError();
  //   } catch (e) {
  //     error = e;
  //   }

  //   expect(instance.get).toHaveBeenCalledTimes(1);
  //   expect(error).toEqual('Some network error');

  //   // instance.get.mockRejectedValue(new Error('network error'));
  //   // instance.get.mockRejectedValue(new Error('network error'));

  //   // const element = await waitFor(() => screen.getByText('loading-spinne'));

  //   // expect(instance.get).toHaveBeenCalledTimes(1);
  //   // expect(screen.getByText('loading-spinne')).toBeInTheDocument();
  // });

  test('should display loading indicator while waiting for counters to load', async () => {
    fetchMockCounters();

    renderWithReactQueryContextAndRouter(<Counters />);

    await waitFor(() => {
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });
  });

  test('should display empty message when no counters load', async () => {
    fetchMockEmptyCounters();

    renderWithReactQueryContextAndRouter(<Counters />);

    await waitFor(() => {
      expect(screen.getByText('No counters yet')).toBeInTheDocument();
    });
  });

  test('should display counters list when fetching is done', async () => {
    fetchMockCounters();

    renderWithReactQueryContextAndRouter(<Counters />);

    await waitFor(() => {
      expect(screen.getByText(mockCounters[0].title)).toBeInTheDocument();
    });
  });
});
