import { useState, useEffect } from 'react';
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
        React homework 05 - Movies App - Loading...
      </div>
      <h1>Trending today</h1>
      <div>
        <ul style={{ listStyle: 'none' }}
        >
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
      
    </>
  );
};

export default Home;