import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default MovieList;
