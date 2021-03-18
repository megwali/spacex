import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Card = styled(Link)`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  text-decoration: none;
  &:last-child {
    border-bottom: none;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
`;

export const LaunchDate = styled.p`
  color: lightgrey;
  font-size: 14px;
  font-weight: 500;
`;

export const MissionDetails = styled.div`
  margin-left: 12px;
`;

export const MissionName = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 600;
`;

const Status = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const FailedStatus = styled(Status)`
  color: red;
`;

export const SuccessStatus = styled(Status)`
  color: green;
`;

export const UpcomingStatus = styled(Status)`
  color: blue;
`;
