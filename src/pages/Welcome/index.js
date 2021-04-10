import { ReactComponent as Logo } from '../../logo.svg';
import { Button } from '../../ui/Button';

import './index.css';

const Welcome = () => {
  return (
    <div className='Welcome'>
      <Logo />

      <h1>Welcome to Counters</h1>

      <p className='welcome-text'>
        Capture cups of lattes, frapuccinos, or anything else that can be
        counted.
      </p>

      <Button kind='raised' href='/counters'>
        Get started
      </Button>
    </div>
  );
};

export default Welcome;
