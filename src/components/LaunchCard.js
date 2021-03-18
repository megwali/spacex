import moment from 'moment';

import defaultImage from '../assets/images/spacex_logo_square.png';
import {
  Card,
  Content,
  FailedStatus,
  LaunchDate,
  MissionDetails,
  MissionName,
  SuccessStatus,
  UpcomingStatus
} from './styledComponents';


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
