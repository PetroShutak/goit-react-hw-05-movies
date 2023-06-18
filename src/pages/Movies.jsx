import Searchbar from 'components/Searchbar/Searchbar';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import MovieDetails from './MovieDetails';

const Movies = () => {
  return (
    <div>
      <Searchbar />
      <h1>Movies</h1>
      <MovieDetails />
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

export default Movies;
