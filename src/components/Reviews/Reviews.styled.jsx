import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  h1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

export const ReviewList = styled.ul`
  list-style-type: none;
`;

export const ReviewItem = styled.li`
  margin-bottom: 20px;
`;

export const ReviewAuthor = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const ReviewContent = styled.p`
  font-size: 1rem;
  color: #555;
`;
