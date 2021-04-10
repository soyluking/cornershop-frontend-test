import { useState } from 'react';

import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import CountersList from '../../components/CountersList';
import CountersSummary from '../../components/CountersSummary';

import { SCounters, SCountersList } from './styles';

const ErrorMessage = () => (
  <div>
    <Heading
      title='Couldn’t load the counters'
      text='The Internet connection appears to be offline.'
    />
    <Button color='warning' kind='raised'>
      Retry
    </Button>
  </div>
);

const EmptyMessage = () => (
  <div>
    <Heading
      title='No counters yet'
      text='"When I started counting my blessings, my whole life turned around."<br>—Willie Nelson'
    />
  </div>
);

const Counters = () => {
  const [loading, setLoading] = useState(false);
  const [counters, setCounters] = useState([
    { id: 1, title: 'Tazas de cafe', count: 0 },
    { id: 2, title: 'Horas de estudio', count: 5 },
    {
      id: 3,
      title:
        'Number of times I’ve forgotten my mother’s name because I was high on Frugelés.',
      count: 10,
    },
    { id: 4, title: 'Tazas de cafe', count: 0 },
    { id: 5, title: 'Horas de estudio', count: 5 },
    {
      id: 6,
      title:
        'Number of times I’ve forgotten my mother’s name because I was high on Frugelés.',
      count: 10,
    },
    { id: 7, title: 'Tazas de cafe', count: 0 },
  ]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  const handleSetSearch = value => setSearch(value);

  return (
    <SCounters>
      <Search counters={counters} search={search} setSearch={handleSetSearch} />

      {loading && <Loading kind='absolute' />}

      {!loading && error && <ErrorMessage />}

      {!loading && !error && !counters.length && <EmptyMessage />}

      {!loading && counters.length && (
        <>
          <CountersSummary counters={counters} />
          <SCountersList>
            <CountersList counters={counters} />
          </SCountersList>
        </>
      )}

      <Footer></Footer>
    </SCounters>
  );
};

export default Counters;
