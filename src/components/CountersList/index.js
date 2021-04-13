import Counter from '../Counter';

const CountersList = ({ counters = [] }) => (
  <>
    {counters.map(counter => (
      <Counter
        key={counter.id}
        id={counter.id}
        title={counter.title}
        count={counter.count}
      />
    ))}
  </>
);

export default CountersList;
