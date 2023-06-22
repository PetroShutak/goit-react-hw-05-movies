import ButtonBack from 'components/ButtonBack/ButtonBack';
import MovieVideo from 'components/MovieVideo/MovieVideo';
import Proptypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/api';

import {
  MovieDetailsContainer,
  MovieImage,
  MovieInfoContainer,
  MovieScore,
  MovieOverview,
  ButtonTrailer,
} from '.././components/MovieDetailsComponent/MovieDetails.styled';

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
      <div>
        <MovieDetailsContainer>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieInfoContainer>
            <MovieScore>User score: {movie.vote_average}</MovieScore>
            <MovieOverview>{movie.overview}</MovieOverview>
          </MovieInfoContainer>
        </MovieDetailsContainer>
      </div>

     
      {!showTrailer ? (
        <ButtonTrailer onClick={handleWatchTrailer} type="butoon">
          Watch Trailer
        </ButtonTrailer>
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

MovieDetails.propTypes = {
  movieId: Proptypes.string.isRequired,
};

export default MovieDetails;
