import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListContainer = styled.div`
  margin-top: 20px;
`;

export const MovieListUl = styled.ul`
  list-style: none;
`;

export const MovieListItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;
