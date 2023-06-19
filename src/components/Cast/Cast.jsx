import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'utils/api';

const Cast = () => {
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await fetchMovieCredits(movieId);
      console.log(movieData);
    };

    fetchMovieData();
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>{' '}
    </div>
  );
};

export default Cast;

// const { movieId } = useParams();
// useEffect(() => {
// if (!movieId) return;
// }, [movieId]);
