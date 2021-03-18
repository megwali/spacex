import { create } from 'react-test-renderer';
import Container from '../Container';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
  Route: 'Route',
  Switch: 'Switch',
  useLocation: () => ({ pathname: '/1' }),
}));
jest.mock('../../hooks/useLaunchList', () => () => ({
  launches: [{ flight_number: 1, launch_date_local: '2020-08-30T19:18:00-04:00' }]
}));
jest.mock('../../pages', () => ({ Dashboard: 'Dashboard', Details: 'Details' }));

describe('Container', () => {
  it ('renders', () => {
    const component = create(<Container />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
