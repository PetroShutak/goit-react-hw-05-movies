import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await fetchMovieDetails(movieId);
      console.log(movieData);
      setMovie(movieData);
    };

    fetchMovieData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>User score: {movie.vote_average}</p>
     
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
      />
      {/* <ul>
        {movie.genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul> */}

      <ul>
        <li>
          <Cast />
       </li>
       <li>
          <Reviews />
       </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
