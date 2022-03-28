import LaunchCard from '../components/LaunchCard';
import useLaunchList from '../hooks/useLaunchList';
import { CardList, Error, Loader } from './styledComponents';


const Dashboard = () => {
  const { error, launches, loading } = useLaunchList();

  return (
    <CardList>
      {error && <Error>An error occurred</Error>}

      {loading && !launches?.length && (
        <Loader>Loading...</Loader>
      )}

      {launches.map((launch, index) => (
        <LaunchCard key={`${launch.flight_number}-${index}`} launch={launch} />
      ))}
    </CardList>
  );
};

export default Dashboard;
