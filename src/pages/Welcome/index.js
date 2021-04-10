import { ReactComponent as Logo } from '../../logo.svg';
import { Button } from '../../ui/Button';
import Title from '../../components/Title';
import Text from '../../components/Text';

import { SWelcome, SWelcomeHeader } from './styles';

const Welcome = () => {
  return (
    <SWelcome>
      <Logo />

      <SWelcomeHeader>
        <Title>Welcome to Counters</Title>
        <Text>
          Capture cups of lattes, frapuccinos, or anything else that can be
          counted.
        </Text>
      </SWelcomeHeader>

      <Button kind='raised' href='/counters'>
        Get started
      </Button>
    </SWelcome>
  );
};

export default Welcome;
