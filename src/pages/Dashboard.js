import styled from 'styled-components';
import LaunchCard from '../components/LaunchCard';
import useLaunchList from '../hooks/useLaunchList';

const CardList = styled.div`
  border: 1px solid lightgrey;
  margin: auto;
  max-width: 600px;
`;

const Dashboard = () => {
  const launches = useLaunchList();

  return !launches?.length ? 'loading...' : (
    <CardList>
      {launches.map(launch => (
        <LaunchCard launch={launch} />
      ))}
    </CardList>
  );
};

export default Dashboard;
