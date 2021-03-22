import { create } from 'react-test-renderer';
import Dashboard from '../Dashboard';


jest.mock('react-router-dom', () => ({ Link: 'Link' }));
jest.mock('../styledComponents', () => ({ CardList: 'CardList', Error: 'Error', Loader: 'Loader' }));
jest.mock('../../components/LaunchCard', () => 'LaunchCard');
jest.mock('../../hooks/useLaunchList', () => () => ({
  launches: [{ flight_number: 1, launch_date_local: '2020-08-30T19:18:00-04:00' }],
  loading: false,
}));

describe('Dashboard', () => {
  it ('renders', () => {
    const component = create(<Dashboard />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
