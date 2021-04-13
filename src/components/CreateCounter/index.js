import { useState, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { createCounter } from '../../services/counters';

import CounterExamples from '../CounterExamples';
import Alert from '../Alert';
import Button from '../Button';
import Input from '../Input';
import Loading from '../Loading';
import Modal, { useModal } from '../Modal';
import NewIcon from '../Icons/NewIcon';
import CloseIcon from '../Icons/CloseIcon';

const CreateCounter = ({ className }) => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState('');

  const titleInput = useRef(null);

  const { isVisible: isModalVisible, hideModal, showModal } = useModal();

  const createCounterMutation = useMutation(createCounter, {
    onSuccess: () => {
      setTitle('');
      hideModal();
      queryClient.invalidateQueries('counters');
    },
  });

  const handleCreateCounter = e => {
    e.preventDefault();
    createCounterMutation.mutate(title);
  };

  const handleSetExample = value => {
    setTitle(value);
  };

  return (
    <>
      <Button className={className} onClick={showModal}>
        <NewIcon fill='var(--white)' />
      </Button>

      <Modal
        isVisible={isModalVisible}
        onOpen={() => titleInput.current.focus()}>
        <form onSubmit={handleCreateCounter} autoComplete='off'>
          <Modal.Header>
            <Button
              className='close'
              color='grey'
              kind='flat'
              type='button'
              onClick={hideModal}>
              <CloseIcon fill='var(--white)' />
            </Button>
            <Modal.Title>Create Counter</Modal.Title>
            <Button kind='raised' disabled={!title} type='submit'>
              Save
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Input
              label='Name'
              value={title}
              placeholder='Days doing excersices'
              autoComplete='off'
              ref={titleInput}
              onChange={e => setTitle(e.target.value)}
            />

            <CounterExamples setExample={handleSetExample} />
          </Modal.Body>
        </form>

        {createCounterMutation.isLoading && <Loading />}

        {createCounterMutation.isError && (
          <Alert isVisible={true}>
            <Alert.Title>Couldn’t create counter</Alert.Title>
            <Alert.Message>
              The Internet connection appears to be offline.
            </Alert.Message>
            <Alert.Actions>
              <Button
                kind='raised'
                onClick={() => createCounterMutation.reset()}>
                Dismiss
              </Button>
            </Alert.Actions>
          </Alert>
        )}
      </Modal>
    </>
  );
};

export default CreateCounter;
