import { memo, useContext } from 'react';
import { useQueryClient, useMutation } from 'react-query';

import CountersContext from '../../context/CountersContext';

import { incrementCounter, decrementCounter } from '../../services/counters';

import Alert, { useAlert } from '../Alert';
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

  const { hideAlert } = useAlert();

  const counterIsSelected = () =>
    selected.filter(counter => counter.id === id).length ? 'selected' : '';

  const handleSetSelected = () => concatSelected({ id, title, count });

  const queryClient = useQueryClient();

  const counterMutation = {
    onSuccess: () => queryClient.invalidateQueries('counters'),
  };

  const incrementCounterMutation = useMutation(
    incrementCounter,
    counterMutation,
  );
  const decrementCounterMutation = useMutation(
    decrementCounter,
    counterMutation,
  );

  const resetMutations = () => {
    incrementCounterMutation.reset();
    decrementCounterMutation.reset();
  };

  const expectedCount = incrementCounterMutation.isError
    ? count + 1
    : count - 1;

  return (
    <SCounter id={`counter-${id}`} className={counterIsSelected()}>
      <SCounterTitle onClick={handleSetSelected}>{title}</SCounterTitle>

      <SCounterActions>
        <Button
          kind='text'
          disabled={count < 1}
          onClick={() => decrementCounterMutation.mutate(id)}>
          <DecrementIcon
            fill={count < 1 ? 'var(--silver)' : 'var(--app-tint)'}
          />
        </Button>

        <SCounterLabel disabled={count < 1}>{count}</SCounterLabel>

        <Button kind='text' onClick={() => incrementCounterMutation.mutate(id)}>
          <IncrementIcon fill='var(--app-tint)' />
        </Button>
      </SCounterActions>

      {(incrementCounterMutation.isError ||
        decrementCounterMutation.isError) && (
        <Alert isVisible={true}>
          <Alert.Title>
            Couldn’t update “{title}” to {expectedCount}
          </Alert.Title>
          <Alert.Message>
            The Internet connection appears to be offline.
          </Alert.Message>
          <Alert.Actions>
            <Button
              kind='raised'
              onClick={() =>
                incrementCounterMutation.isError
                  ? incrementCounterMutation.mutate(id)
                  : decrementCounterMutation.mutate(id)
              }>
              Retry
            </Button>
            <Button kind='raised' color='warning' onClick={resetMutations}>
              Dismiss
            </Button>
          </Alert.Actions>
        </Alert>
      )}
    </SCounter>
  );
});

export default Counter;
