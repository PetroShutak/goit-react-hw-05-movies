import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'utils/api';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.log('error', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  if (!movies.length) {
    return <div>
      <Loader />
      {/* Loading... */}
      </div>;
  }

  return (
    <>
      <h1>Trending today</h1>
      <div>
        <MovieList movies={movies} />
      </div>
    </>
  );
};

export default Home;
