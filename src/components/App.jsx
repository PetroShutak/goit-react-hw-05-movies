import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'utils/api';
// import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);
  

  return (
    <>
    {/* <Searchbar /> */}
      <h1>Trending today</h1>
      <div>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework 05 - Movies App - Loading...
      </div>
    </>
  );
};


