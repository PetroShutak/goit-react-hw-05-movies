import styled from 'styled-components';

export const BackButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 700;

  &:hover {
    background-color: #e0e0e0;
    color: #d32f2f;
  }
`;