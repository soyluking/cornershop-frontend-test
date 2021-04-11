import { memo, useContext } from 'react';

import CountersContext from '../../context/CountersContext';

import Button from '../Button';
import CreateCounter from '../CreateCounter';
import DeleteCounter from '../DeleteCounter';
import OpenIcon from '../Icons/OpenIcon';

import { SFooter } from './styles';

const Footer = memo(() => {
  const { selected } = useContext(CountersContext);

  return (
    <SFooter>
      {!!selected.length && (
        <>
          <DeleteCounter className='SFooter__delete' />
          <Button className='SFooter__share' color='white' kind='raised'>
            <OpenIcon />
          </Button>
        </>
      )}
      <CreateCounter className='SFooter__new' />
    </SFooter>
  );
});

export default Footer;
