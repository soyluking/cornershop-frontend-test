import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { getCounters } from '../../services/counters';

import Loading from '../../components/Loading';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import CountersList from '../../components/CountersList';
import CountersSummary from '../../components/CountersSummary';
import EmptyMessage from '../../components/EmptyMessage';
import ErrorMessage from '../../components/ErrorMessage';

import { SCounters, SCountersList } from './styles';

const Counters = () => {
  const { data, isLoading, isError } = useQuery('counters', getCounters);

  const [counters, setCounters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!isLoading) setCounters(data);
  }, [isLoading, data]);

  const handleSetSearch = value => setSearch(value);

  return (
    <SCounters>
      <Search counters={counters} search={search} setSearch={handleSetSearch} />

      {isLoading && <Loading kind='absolute' />}

      {!isLoading && isError && <ErrorMessage />}

      {!isLoading && !isError && !counters.length && <EmptyMessage />}

      {!isLoading && !isError && counters.length && (
        <div style={{ paddingBottom: '4rem' }}>
          <CountersSummary counters={counters} />
          <SCountersList>
            <CountersList counters={counters} />
          </SCountersList>
        </div>
      )}

      <Footer></Footer>
    </SCounters>
  );
};

export default Counters;
