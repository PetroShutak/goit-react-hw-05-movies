import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  
  return (
    <div>
      <Searchbar />
      <h1>Movies</h1>
    </div>
  );
};

export default Movies;

// const { movieId } = useParams();
// useEffect(() => {
// if (!movieId) return;
// }, [movieId]);
