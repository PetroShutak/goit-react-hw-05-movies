import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: orange;
  }
  &.active {
    color: orange;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  list-style: none;
  box-shadow: 10px 0px 10px 10px rgba(0, 0, 0, 0.75);
  border-bottom: 1px solid black;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
