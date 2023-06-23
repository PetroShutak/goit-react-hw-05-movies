import { Suspense } from 'react';

import ButtonBack from 'components/ButtonBack/ButtonBack';
import MovieVideo from 'components/MovieVideo/MovieVideo';
import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/api';
// import Loader from 'components/Loader/Loader';
import {
  MovieDetailsContainer,
  MovieImage,
  MovieInfoContainer,
  MovieScore,
  MovieOverview,
  ButtonTrailer,
  AditionalInfoContainer,
} from '.././components/MovieDetailsComponent/MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const defaultImage =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log('error', error);
        setMovie(null);
      }
    };

    fetchMovieData();
  }, [movieId]);

  const handleWatchTrailer = () => {
    setShowTrailer(true);
  };

  if (!movie) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <ButtonBack location={locationRef.current} />
      <div>
        <MovieDetailsContainer>
          <MovieImage
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
          />
          <MovieInfoContainer>
            <h1>
              {movie.title}({movie.release_date.slice(0, 4)})
            </h1>
            <MovieScore>
              User score: {(movie.vote_average * 10).toFixed(0)}%
            </MovieScore>
            <h2>Overview</h2>
            <MovieOverview>{movie.overview}</MovieOverview>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
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
      <AditionalInfoContainer>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AditionalInfoContainer>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
