import Heading from '../../components/Heading';
import Button from '../../components/Button';

import { SErrorMessage } from './styles';

const ErrorMessage = ({ refetchQuery }) => (
  <SErrorMessage>
    <Heading
      title='Couldn’t load the counters'
      text='The Internet connection appears to be offline.'
    />
    <Button color='warning' kind='raised' onClick={refetchQuery}>
      Retry
    </Button>
  </SErrorMessage>
);

export default ErrorMessage;
