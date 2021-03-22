import useLaunchList from '../hooks/useLaunchList';
import { Card, Error, Loader, RocketDetails, RocketName } from './styledComponents';


const Details = ({ id }) => {
  const { error, launches, loading } = useLaunchList(id);

  const [launch] = launches;
  const { fairings, rocket_name, rocket_type } = launch?.rocket || {};

  return (
    <Card>
      {error && <Error>An error occurred</Error>}

      {loading && !launch && (
        <Loader>Loading...</Loader>
      )}

      <RocketName>Rocket name: {rocket_name}</RocketName>
      <RocketDetails>Rocket type: {rocket_type}</RocketDetails>
      <RocketDetails>Reused: {fairings?.reused ? 'Yes' : 'No'}</RocketDetails>
    </Card>
  );
};

export default Details;
