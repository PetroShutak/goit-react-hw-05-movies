import { fetchMovieVideo } from '../../utils/api';
import { useEffect, useState } from 'react';

const MovieVideo = ({ movieId }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  useEffect(() => {
    fetchMovieVideo(movieId).then(setVideo);
  }, [movieId]);

  return (
    <>
      {video.length > 0 && (
        <iframe
          title="trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video[0].key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
    </>
  );
};

export default MovieVideo;
