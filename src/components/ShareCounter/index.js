import { useState, useContext } from 'react';

import CountersContext from '../../context/CountersContext';

import Button from '../Button';
import OpenIcon from '../Icons/OpenIcon';
import Papernote from '../Papernote';

import { SShareTitle, STooltip, SButton } from './styles';

const ShareTooltip = ({ children }) => {
  return <STooltip>{children}</STooltip>;
};

const ShareCounter = ({ className }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const { selected } = useContext(CountersContext);

  return (
    <>
      <SButton
        className={className}
        color='white'
        kind='raised'
        onClick={() => setShowTooltip(!showTooltip)}>
        <OpenIcon />
      </SButton>

      {showTooltip && (
        <ShareTooltip>
          <div>
            <SShareTitle>
              Share{' '}
              {selected.length === 1
                ? '1 counter'
                : `${selected.length} counters`}
            </SShareTitle>
            <Button color='warning' kind='raised'>
              Copy
            </Button>
          </div>
          <div>
            <Papernote>
              {selected.map(counter => (
                <p key={counter.id} style={{ margin: '5px' }}>
                  {counter.count} x {counter.title}
                </p>
              ))}
            </Papernote>
          </div>
        </ShareTooltip>
      )}
    </>
  );
};

export default ShareCounter;
