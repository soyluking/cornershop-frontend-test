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

  const searchCounters = !search
    ? counters
    : counters.filter(counter =>
        counter.title.toLowerCase().includes(search.toLowerCase()),
      );

  return (
    <SCounters>
      <Search search={search} setSearch={handleSetSearch} />

      {isLoading && <Loading kind='absolute' />}

      {!isLoading && isError && <ErrorMessage />}

      {!isLoading && !isError && !searchCounters.length && (
        <EmptyMessage isSearching={search} />
      )}

      {!isLoading && !isError && searchCounters.length && (
        <div style={{ paddingBottom: '4rem' }}>
          <CountersSummary counters={searchCounters} />
          <SCountersList>
            <CountersList counters={searchCounters} />
          </SCountersList>
        </div>
      )}

      <Footer />
    </SCounters>
  );
};

export default Counters;
