import { memo, useContext } from 'react';

import CountersContext from '../../context/CountersContext';

import Button from '../Button';
import AddCounter from '../AddCounter';
import TrashBinIcon from '../Icons/TrashBinIcon';
import OpenIcon from '../Icons/OpenIcon';

import { SFooter } from './styles';

const Footer = memo(() => {
  const { selected } = useContext(CountersContext);

  return (
    <SFooter>
      {!!selected.length && (
        <>
          <Button className='SFooter__delete' color='danger' kind='raised'>
            <TrashBinIcon fill='var(--destructive-red)' />
          </Button>
          <Button className='SFooter__share' color='white' kind='raised'>
            <OpenIcon />
          </Button>
        </>
      )}
      <AddCounter className='SFooter__new' />
    </SFooter>
  );
});

export default Footer;
