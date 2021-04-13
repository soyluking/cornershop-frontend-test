import Button from '../Button';
import Modal, { useModal } from '../Modal';
import CloseIcon from '../Icons/CloseIcon';

import { SExamplesGroup, SExamplesList, SExamplesTitle } from './styles';

const examplesData = [
  {
    title: 'Drinks',
    list: ['Cups of coffee', 'Glasses of water', 'Martinis', 'Beers'],
  },
  {
    title: 'Food',
    list: ['Hot-dogs', 'Cupcakes eaten', 'Chicken wings', 'Pizzas', 'Apples'],
  },
  {
    title: 'Misc',
    list: ['Times sneezed', 'Naps', 'Day dreaming'],
  },
];

const CounterExamples = ({ setExample }) => {
  const { isVisible: isModalVisible, hideModal, showModal } = useModal();

  const sendSelectedExample = example => {
    hideModal();
    setExample(example);
  };

  return (
    <>
      <p className='helper-text'>
        Give it a name. Creative block? See <a onClick={showModal}>examples</a>.
      </p>

      <Modal isVisible={isModalVisible}>
        <Modal.Header>
          <Button
            className='close'
            color='grey'
            kind='flat'
            type='button'
            onClick={hideModal}>
            <CloseIcon fill='var(--white)' />
          </Button>
          <Modal.Title>Examples</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='helper-text'>
            Select an example to add it to your counters.
          </p>
          {examplesData.map(examples => (
            <SExamplesGroup key={examples.title}>
              <SExamplesTitle>{examples.title}</SExamplesTitle>
              <SExamplesList>
                {examples.list.map(example => (
                  <Button
                    key={example}
                    kind='example'
                    onClick={() => sendSelectedExample(example)}>
                    {example}
                  </Button>
                ))}
                &nbsp;
              </SExamplesList>
            </SExamplesGroup>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CounterExamples;
