import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  border-botoom: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

`;

export const MovieImage = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  cover: fit;
`;

export const MovieInfoContainer = styled.div`
  flex-direction: column;
`;

export const MovieScore = styled.p`
  width: 200px;
`;

export const MovieOverview = styled.p`
  width: 500px;
`;

export const AditionalInfoContainer = styled.div`
margin-top: 20px;
padding: 20px;
border-botoom: 1px solid #000;
border-top: 1px solid #000;
border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;


export const ButtonTrailer = styled.button`
  margin-top: 20px;
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
