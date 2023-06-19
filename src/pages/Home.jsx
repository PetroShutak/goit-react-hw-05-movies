import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'utils/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

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
        <ul style={{ listStyle: 'none' }}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
