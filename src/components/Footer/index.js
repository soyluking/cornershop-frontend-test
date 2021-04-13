import { memo, useContext } from 'react';

import CountersContext from '../../context/CountersContext';

import CreateCounter from '../CreateCounter';
import DeleteCounter from '../DeleteCounter';
import ShareCounter from '../ShareCounter';

import { SFooter } from './styles';

const Footer = memo(() => {
  const { selected } = useContext(CountersContext);

  return (
    <SFooter>
      {!!selected.length && (
        <>
          <DeleteCounter className='SFooter__delete' />
          <ShareCounter className='SFooter__share' />
        </>
      )}
      <CreateCounter className='SFooter__new' />
    </SFooter>
  );
});

export default Footer;
