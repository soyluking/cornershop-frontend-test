import Loading from '..//Loading';
import Button from '../Button';
import Input from '../Input';
import Modal, { useModal } from '../Modal';
import NewIcon from '../Icons/NewIcon';
import CloseIcon from '../Icons/CloseIcon';
import { useState } from 'react';

const AddCounter = ({ className }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const { isVisible: isModalVisible, hideModal, showModal } = useModal();

  return (
    <>
      <Button className={className} onClick={showModal}>
        <NewIcon fill='var(--white)' />
      </Button>

      <Modal
        isVisible={isModalVisible}
        onClose={() => console.log('Modal was closed')}
        onOpen={() => console.log('Modal was opened')}>
        <Modal.Header>
          <Button
            className='close'
            color='grey'
            kind='flat'
            onClick={hideModal}>
            <CloseIcon fill='var(--white)' />
          </Button>
          <Modal.Title>Create Counter</Modal.Title>
          <Button kind='raised' disabled>
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
          {loading && <Loading kind='absolute' />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCounter;
