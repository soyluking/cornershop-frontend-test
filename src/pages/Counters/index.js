import { useState } from 'react';

import Heading from '../../components/Heading';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';
import SearchIcon from '../../components/Icons/SearchIcon';
import CountersList from '../../components/CountersList';

import { SCounters } from './styles';

const Search = ({ search, setSearch }) => (
  <div>
    <SearchIcon />
    <Input
      placeholder='Search Counters'
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
    <Button color='white' onClick={() => setSearch('')}>
      Cancel
    </Button>
  </div>
);

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
  ]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  const handleSetSearch = value => setSearch(value);

  return (
    <SCounters>
      <Search
        counters={counters}
        search={search}
        setSearch={handleSetSearch}></Search>

      {loading && <Loading kind='absolute' />}

      {!loading && error && <ErrorMessage />}

      {!loading && !error && !counters.length && <EmptyMessage />}

      {!loading && counters.length && <CountersList counters={counters} />}

      <Footer></Footer>
    </SCounters>
  );
};

export default Counters;
