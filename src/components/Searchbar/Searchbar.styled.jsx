import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;
