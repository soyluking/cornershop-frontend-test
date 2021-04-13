import { useState, useEffect, useContext } from 'react';

import CountersContext from '../../context/CountersContext';

import CopyButton from '../CopyButton';
import OpenIcon from '../Icons/OpenIcon';
import Papernote from '../Papernote';

import { SShareTitle, STooltip, SButton } from './styles';

const ShareTooltip = ({ children }) => {
  return <STooltip>{children}</STooltip>;
};

const ShareCounter = ({ className }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [textToCopy, setTextToCopy] = useState('');

  const { selected } = useContext(CountersContext);

  useEffect(() => {
    const text = selected
      .map(counter => `${counter.count} x ${counter.title}`)
      .join('\r\n');
    setTextToCopy(text);
  }, [selected]);

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
            <CopyButton color='warning' kind='raised' textToCopy={textToCopy} />
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
