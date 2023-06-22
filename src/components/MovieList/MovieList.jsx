import PropTypes from 'prop-types';
import { MovieListContainer, MovieListUl, MovieListItem, MovieLink } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListContainer>
      <MovieListUl>
        {movies.map(movie => (
          <MovieListItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </MovieLink>
          </MovieListItem>
        ))}
      </MovieListUl>
    </MovieListContainer>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
