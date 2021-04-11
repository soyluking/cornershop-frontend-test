export default function useCountTimes({ counters }) {
  const times =
    counters.length &&
    counters.reduce((previous, current) => previous + current.count, 0);

  const timesLabel = `${times} ${times === 1 ? 'time' : 'times'}`;

  const itemsLabel = `${counters.length} ${
    counters.length === 1 ? 'item' : 'items'
  }`;

  return { timesLabel, itemsLabel };
}
