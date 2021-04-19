import Input from '../Input';
import Button from '../Button';
import SearchIcon from '../Icons/SearchIcon';

import { SSearch } from './styles';

const Search = ({ search, setSearch, setFocus, disabled }) => (
  <SSearch>
    <SearchIcon fill='var(--grey)' />
    <label htmlFor='search-input' className='sr-only'>
      Search Counters
    </label>
    <Input
      id='search-input'
      value={search}
      placeholder='Search Counters'
      disabled={disabled}
      size='big'
      autoComplete='off'
      onChange={e => setSearch(e.target.value)}
      onFocus={setFocus}
      onBlur={setFocus}
    />
    {search && (
      <Button color='white' size='big' onClick={() => setSearch('')}>
        Cancel
      </Button>
    )}
  </SSearch>
);

export default Search;
