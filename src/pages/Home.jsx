import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'utils/api';
import MovieList from 'components/MovieList/MovieList';

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

  return (
    <>
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
       
      </div>
      <h1>Trending today</h1>
      <div>
        <MovieList movies={movies} />
      </div>
    </>
  );
};

export default Home;
