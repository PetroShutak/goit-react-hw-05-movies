import ButtonBack from 'components/ButtonBack/ButtonBack';
import MovieVideo from 'components/MovieVideo/MovieVideo';
import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await fetchMovieDetails(movieId);
      console.log(movieData);
      setMovie(movieData);
    };

    fetchMovieData();
  }, [movieId]);

  const handleWatchTrailer = () => {
    setShowTrailer(true);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ButtonBack location={locationRef.current} />
      <h1>{movie.title}</h1>
      <p>User score: {movie.vote_average}</p>
      <p>{movie.overview}</p>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
      />
      <h2>Trailer</h2>
      {!showTrailer ? (
        <button onClick={handleWatchTrailer} type="butoon">
          Watch Trailer
        </button>
      ) : (
        <MovieVideo movieId={movieId} />
      )}

      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
