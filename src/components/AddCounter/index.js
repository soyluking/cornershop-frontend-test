import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { addCounter } from '../../services/counters';

import Alert from '../Alert';
import Button from '../Button';
import Input from '../Input';
import Loading from '../Loading';
import Modal, { useModal } from '../Modal';
import NewIcon from '../Icons/NewIcon';
import CloseIcon from '../Icons/CloseIcon';

const AddCounter = ({ className }) => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState('');

  const { isVisible: isModalVisible, hideModal, showModal } = useModal();

  const addCounterMutation = useMutation(addCounter, {
    onSuccess: () => {
      setTitle('');
      queryClient.invalidateQueries('counters');
    },
  });

  const handleAddCounter = e => {
    e.preventDefault();
    addCounterMutation.mutate(title);
  };

  return (
    <>
      <Button className={className} onClick={showModal}>
        <NewIcon fill='var(--white)' />
      </Button>

      <Modal
        isVisible={isModalVisible}
        onClose={() => console.log('Modal was closed')}
        onOpen={() => console.log('Modal was opened')}>
        <form onSubmit={handleAddCounter} autoComplete='off'>
          <Modal.Header>
            <Button
              className='close'
              color='grey'
              kind='flat'
              onClick={hideModal}>
              <CloseIcon fill='var(--white)' />
            </Button>
            <Modal.Title>Create Counter</Modal.Title>
            <Button kind='raised' disabled={!title}>
              Save
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Input
              label='Name'
              value={title}
              placeholder='Days doing excersices'
              onChange={e => setTitle(e.target.value)}
            />

            <p className='helper-text'>
              Give it a name. Creative block? See <a href=''>examples</a>.
            </p>

            {addCounterMutation.isLoading && <Loading kind='absolute' />}
          </Modal.Body>
        </form>

        {addCounterMutation.isError && (
          <Alert
            isVisible={true}
            onClose={() => console.log('Alert was closed')}
            onOpen={() => console.log('Alert was opened')}>
            <Alert.Title>Couldn’t create counter</Alert.Title>
            <Alert.Message>
              The Internet connection appears to be offline.
            </Alert.Message>
            <Alert.Actions>
              <Button kind='raised' onClick={() => addCounterMutation.reset()}>
                Dismiss
              </Button>
            </Alert.Actions>
          </Alert>
        )}
      </Modal>
    </>
  );
};

export default AddCounter;
