import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'utils/api';
import PropTypes from 'prop-types';
import {
  ReviewsContainer,
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent
} from './Reviews.styled';

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
    <ReviewsContainer>
      <h1>Reviews</h1>
      {reviews.length > 0 ? (
        <ReviewList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewAuthor>Author: {review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ReviewsContainer>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};


export default Reviews;
