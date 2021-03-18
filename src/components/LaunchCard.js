import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';

import defaultImage from '../assets/images/spacex_logo_square.png';


const Card = styled(Link)`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  text-decoration: none;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
`;

const LaunchDate = styled.p`
  color: lightgrey;
  font-size: 14px;
  font-weight: 500;
`;

const MissionDetails = styled.div`
  margin-left: 12px;
`;

const MissionName = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 600;
`;

const Status = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const FailedStatus = styled(Status)`
  color: red;
`;

const SuccessStatus = styled(Status)`
  color: green;
`;

const UpcomingStatus = styled(Status)`
  color: blue;
`;


const LaunchCard = ({ launch }) => {
  const { flight_number, launch_date_local, launch_success, links, mission_name, upcoming } = launch;
  const src = links?.mission_patch_small || defaultImage;

  return (
    <Card to={`/${flight_number}`}>
      <Content>
        <img alt={mission_name} height="56" width="56" src={src} />

        <MissionDetails>
          <MissionName>{mission_name}</MissionName>
          <LaunchDate>{moment(launch_date_local).format('MMM Do YYYY, h:mm:ss a')}</LaunchDate>
        </MissionDetails>
      </Content>
      <div>
        {upcoming && <UpcomingStatus>Upcoming</UpcomingStatus>}
        {launch_success && <SuccessStatus>Successful</SuccessStatus>}
        {!upcoming && !launch_success && <FailedStatus>Failed</FailedStatus>}
      </div>
    </Card>
  );
};

export default LaunchCard;
