import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchInput, SearchButton } from './Searchbar.styled';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.warn('Please enter a search query', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    onSubmit(query);
    
    
    setQuery('');
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <ToastContainer />
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
