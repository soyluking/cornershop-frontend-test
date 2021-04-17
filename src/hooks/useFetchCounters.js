import { useQuery } from 'react-query';

import { getCounters } from '../services/counters';

export default function useFetchCounters() {
  const { data, isLoading, isError, refetch } = useQuery(
    'counters',
    getCounters,
    { data: [{ count: 0, id: 'knjs44no', title: 'Glasses of water' }] },
  );

  return { data, isLoading, isError, refetch };
}
