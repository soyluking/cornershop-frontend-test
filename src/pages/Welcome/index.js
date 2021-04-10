import { ReactComponent as Logo } from '../../logo.svg';
import { Button } from '../../ui/Button';
import Heading from '../../components/Heading';

import { SWelcome, SWelcomeHeading } from './styles';

const Welcome = () => {
  return (
    <SWelcome>
      <Logo />

      <SWelcomeHeading>
        <Heading
          title='Welcome to Counters'
          text='Capture cups of lattes, frapuccinos, or anything else that can be counted.'
        />
      </SWelcomeHeading>

      <Button kind='raised' href='/counters'>
        Get started
      </Button>
    </SWelcome>
  );
};

export default Welcome;
