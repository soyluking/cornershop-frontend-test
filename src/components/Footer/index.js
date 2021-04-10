import Button from '../Button';
import TrashBinIcon from '../Icons/TrashBinIcon';
import OpenIcon from '../Icons/OpenIcon';
import NewIcon from '../Icons/NewIcon';

import { SFooter } from './styles';

const Footer = () => {
  return (
    <SFooter>
      <Button className='SFooter__delete' color='danger' kind='raised'>
        <TrashBinIcon fill='var(--destructive-red)' />
      </Button>
      <Button className='SFooter__share' color='white' kind='raised'>
        <OpenIcon />
      </Button>
      <Button className='SFooter__new'>
        <NewIcon fill='var(--white)' />
      </Button>
    </SFooter>
  );
};

export default Footer;
