import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchInput, SearchButton } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
