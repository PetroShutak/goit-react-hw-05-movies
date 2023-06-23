import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  CastContainer,
  CastList,
  CastItem,
  CastImage,
  CastName,
  CastCharacter,
} from './Cast.styled';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'utils/api';

const defaultImage =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      const cast = await fetchMovieCredits(movieId);
      setCast(cast);
    };
    fetchCast();
  }, [movieId]);

  return (
    <CastContainer>
      {cast.length > 0 ? (
        <CastList>
          {cast.map(actor => (
            <CastItem key={actor.id}>
              <CastImage
                src={
                  `https://image.tmdb.org/t/p/w500${actor.profile_path}` ||
                  defaultImage
                }
                alt={actor.name}
                onError={e => {
                  e.target.src = defaultImage;
                }}
              />
              <CastName>{actor.name}</CastName>
              <CastCharacter>Character: {actor.character}</CastCharacter>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </CastContainer>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
