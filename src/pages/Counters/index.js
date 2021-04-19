import { useState, useEffect } from 'react';

import useFetchCounters from '../../hooks/useFetchCounters';

import Loading from '../../components/Loading';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import CountersList from '../../components/CountersList';
import CountersSummary from '../../components/CountersSummary';
import EmptyMessage from '../../components/EmptyMessage';
import ErrorMessage from '../../components/ErrorMessage';

import {
  SCounters,
  SCountersContent,
  SCountersCover,
  SCountersList,
} from './styles';

const Counters = () => {
  const { data, isLoading, isError, refetch } = useFetchCounters();

  const [counters, setCounters] = useState([]);
  const [search, setSearch] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);

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
      <Search
        search={search}
        setSearch={handleSetSearch}
        setFocus={() => setSearchFocus(!searchFocus)}
        disabled={isLoading || isError || !counters.length}
      />

      {searchFocus && !search && <SCountersCover />}

      {isLoading && <Loading />}

      {!isLoading && isError && <ErrorMessage refetchQuery={() => refetch()} />}

      {!isLoading && !isError && !searchCounters.length && (
        <EmptyMessage isSearching={search} />
      )}

      {!isLoading && !isError && !!searchCounters.length && (
        <SCountersContent>
          <CountersSummary counters={searchCounters} />
          <SCountersList>
            <CountersList counters={searchCounters} />
          </SCountersList>
        </SCountersContent>
      )}

      <Footer />
    </SCounters>
  );
};

export default Counters;
