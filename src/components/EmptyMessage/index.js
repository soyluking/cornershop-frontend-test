import Heading from '../../components/Heading';

import { SEmptyMessage } from './styles';

const EmptyMessage = () => (
  <SEmptyMessage>
    <Heading
      title='No counters yet'
      text='"When I started counting my blessings, my whole life turned around."<br>—Willie Nelson'
    />
  </SEmptyMessage>
);

export default EmptyMessage;
