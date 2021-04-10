import { useState } from 'react';

import Button from './../Button';
import IncrementIcon from '../Icons/IncrementIcon';
import DecrementIcon from '../Icons/DecrementIcon';

import {
  SCounter,
  SCounterTitle,
  SCounterActions,
  SCounterLabel,
} from './styles';

const Counter = ({ id, title, count }) => {
  const [selected, setSelected] = useState(false);

  const handleSetSelected = () => setSelected(!selected);

  return (
    <SCounter selected={selected}>
      <SCounterTitle onClick={handleSetSelected}>{title}</SCounterTitle>

      <SCounterActions>
        <Button
          kind='text'
          disabled={count < 1}
          onClick={() => console.log('-1')}>
          <DecrementIcon
            fill={count < 1 ? 'var(--silver)' : 'var(--app-tint)'}
          />
        </Button>

        <SCounterLabel disabled={count < 1}>{count}</SCounterLabel>

        <Button kind='text' onClick={() => console.log('+1')}>
          <IncrementIcon fill='var(--app-tint)' />
        </Button>
      </SCounterActions>
    </SCounter>
  );
};

export default Counter;
