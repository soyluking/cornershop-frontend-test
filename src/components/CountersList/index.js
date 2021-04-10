import Counter from '../Counter';

const CountersList = ({ counters }) => (
  <div>
    {counters.map(counter => (
      <Counter
        key={counter.id}
        id={counter.id}
        title={counter.title}
        count={counter.count}
      />
    ))}
  </div>
);

export default CountersList;
