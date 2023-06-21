import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'utils/api';

const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  useEffect(() => {
    const fetchCast = async () => {
      const cast = await fetchMovieCredits(movieId);
      setCast(cast);
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      {cast.length > 0 ? (
        <ul style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            listStyle: 'none',
        }}>
          {cast.map(actor => (
            <li key={actor.id}>
              <h2>{actor.name}</h2>
              <p>Character: {actor.character}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}` || defaultImg}
                alt={actor.name}
                width={200}
                height={300}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </div>
  );
};

export default Cast;
