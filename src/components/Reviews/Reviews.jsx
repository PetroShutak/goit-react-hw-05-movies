import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'utils/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await fetchMovieReviews(movieId);
      setReviews(reviews);
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;

// const { movieId } = useParams();
// useEffect(() => {
// if (!movieId) return;
// }, [movieId]);
