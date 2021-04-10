import Input from '../Input';
import Button from '../Button';
import SearchIcon from '../Icons/SearchIcon';

import { SSearch } from './styles';

const Search = ({ search, setSearch }) => (
  <SSearch>
    <SearchIcon fill='var(--grey)' />
    <Input
      value={search}
      placeholder='Search Counters'
      size='big'
      onChange={e => setSearch(e.target.value)}
    />
    {search && (
      <Button color='white' size='big' onClick={() => setSearch('')}>
        Cancel
      </Button>
    )}
  </SSearch>
);

export default Search;
