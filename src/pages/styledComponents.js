import styled from 'styled-components';

export const CardList = styled.div`
  border: 1px solid lightgrey;
  margin: auto;
  max-width: 600px;
  min-height: 60px;
`;

export const Card = styled(CardList)`
  padding: 10px;
`;

export const Error = styled.p`
  color: red;
`;

export const Loader = styled.p`
  text-align: center;
`;

export const RocketDetails = styled.p`
  color: lightgrey;
  font-size: 14px;
  font-weight: 500;
`;

export const RocketName = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 600;
`;
