import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit" onSubmit={handleSearchSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
