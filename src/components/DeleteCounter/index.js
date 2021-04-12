import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import CountersContext from '../../context/CountersContext';

import { deleteCounter } from '../../services/counters';

import Alert, { useAlert } from '../Alert';
import Button from '../Button';
import Loading from '../Loading';
import TrashBinIcon from '../Icons/TrashBinIcon';

const DeleteCounter = ({ className }) => {
  const { selected, concatSelected } = useContext(CountersContext);

  const { isVisible: isAlertVisible, hideAlert, showAlert } = useAlert();

  const queryClient = useQueryClient();

  const deleteCountersMutation = useMutation(deleteCounter, {
    onSuccess: data => {
      concatSelected({ id: data });
      queryClient.invalidateQueries('counters');
    },
  });

  const deleteCounters = () =>
    selected.map(counter => deleteCountersMutation.mutate(counter.id));

  const selectedTotal = selected.length;

  const counterTitle =
    selectedTotal === 1
      ? '“' + selected[0].title + '” counter'
      : selectedTotal + ' counters';

  const alertTitle = deleteCountersMutation.isError
    ? `Couldn’t delete ${counterTitle}`
    : `Delete ${counterTitle}?`;

  const alertText = deleteCountersMutation.isError
    ? 'The Internet connection appears to be offline.'
    : 'This cannot be undone.';

  return (
    <>
      <Button
        className={className}
        color='danger'
        kind='raised'
        onClick={showAlert}>
        <TrashBinIcon fill='var(--destructive-red)' />
      </Button>

      {false && <Loading />}

      <Alert isVisible={isAlertVisible && deleteCountersMutation.isIdle}>
        <Alert.Title>{alertTitle}</Alert.Title>
        <Alert.Message>{alertText}</Alert.Message>
        <Alert.Actions>
          <Button kind='raised' onClick={hideAlert}>
            Cancel
          </Button>
          <Button kind='raised' color='danger' onClick={deleteCounters}>
            Delete
          </Button>
        </Alert.Actions>
      </Alert>

      <Alert
        isVisible={isAlertVisible && deleteCountersMutation.isError}
        onClose={() => deleteCountersMutation.reset()}>
        <Alert.Title>{alertTitle}</Alert.Title>
        <Alert.Message>
          The Internet connection appears to be offline.
        </Alert.Message>
        <Alert.Actions>
          <Button kind='raised' onClick={deleteCounters}>
            Retry
          </Button>
          <Button kind='raised' color='warning' onClick={hideAlert}>
            Dismiss
          </Button>
        </Alert.Actions>
      </Alert>
    </>
  );
};

export default DeleteCounter;
