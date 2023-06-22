import styled from 'styled-components';

export const CastContainer = styled.div`
  margin-top: 20px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
`;

export const CastItem = styled.li`
  width: 200px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CastImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CastName = styled.h2`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
`;

export const CastCharacter = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;
