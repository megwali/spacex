import styled from 'styled-components';
import useLaunchList from '../hooks/useLaunchList';

const Card = styled.div`
  border: 1px solid lightgrey;
  padding: 10px;
`;

const RocketDetails = styled.p`
  color: lightgrey;
  font-size: 14px;
  font-weight: 500;
`;

const RocketName = styled.p`
  color: black;
  font-size: 18px;
  font-weight: 600;
`;

const Details = ({ id }) => {
  const [launch] = useLaunchList(id);
  const { fairings, rocket_name, rocket_type } = launch?.rocket || {};

  return !launch ? 'loading' : (
    <Card>
      <RocketName>Rocket name: {rocket_name}</RocketName>
      <RocketDetails>Rocket type: {rocket_type}</RocketDetails>
      <RocketDetails>Reused: {fairings?.reused ? 'Yes' : 'No'}</RocketDetails>
    </Card>
  );
};

export default Details;
