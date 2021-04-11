import Heading from '../../components/Heading';

import { SEmptyMessage } from './styles';

const EmptyMessage = ({ isSearching }) => {
  const title = !isSearching ? 'No counters yet' : 'No results';
  const text = !isSearching
    ? '"When I started counting my blessings, my whole life turned around."<br>—Willie Nelson'
    : '';

  return (
    <SEmptyMessage>
      <Heading title={title} text={text} />
    </SEmptyMessage>
  );
};

export default EmptyMessage;
