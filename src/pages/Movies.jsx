import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieSearch } from 'utils/api';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const { movieId } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movieId) return;
      try {
        const results = await fetchMovieSearch(movieId);
        setSearchResults(results);
      } catch (error) {
        console.log('error', error);
        setSearchResults([]);
      }
    };

    fetchMovies();
  }, [movieId]);

  const handleSearchSubmit = async query => {
    try {
      const results = await fetchMovieSearch(query);
      setSearchResults(results);
    } catch (error) {
      console.log('error', error);
      setSearchResults([]);
    }
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <h1>Movies</h1>
      <MovieList movies={searchResults} />
    </div>
  );
};

export default Movies;
