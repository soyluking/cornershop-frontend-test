import { memo, useContext } from 'react';

import CountersContext from '../../context/CountersContext';

import Button from './../Button';
import IncrementIcon from '../Icons/IncrementIcon';
import DecrementIcon from '../Icons/DecrementIcon';

import {
  SCounter,
  SCounterTitle,
  SCounterActions,
  SCounterLabel,
} from './styles';

const Counter = memo(({ id, title, count }) => {
  const { selected, concatSelected } = useContext(CountersContext);

  const counterIsSelected = () =>
    selected.filter(counter => counter.id === id).length ? 'selected' : '';
  const handleSetSelected = () => concatSelected({ id, title, count });

  return (
    <SCounter id={`counter-${id}`} className={counterIsSelected()}>
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
});

export default Counter;
