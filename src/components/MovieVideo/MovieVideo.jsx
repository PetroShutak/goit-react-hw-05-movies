import { fetchMovieVideo } from '../../utils/api';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const MovieVideo = ({ movieId }) => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const videoData = await fetchMovieVideo(movieId);
        setVideo(videoData);
      } catch (error) {
        console.log('error', error);
        setVideo([]);
      }
    };

    if (movieId) {
      fetchVideo();
    }
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

MovieVideo.propTypes = {
  movieId: PropTypes.string.isRequired,
};


export default MovieVideo;
