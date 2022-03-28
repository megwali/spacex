import { create } from 'react-test-renderer';
import Details from '../Details';


jest.mock('react-router-dom', () => ({ Link: 'Link' }));
jest.mock('../styledComponents', () => ({ Card: 'Card', RocketDetails: 'RocketDetails', RocketName: 'RocketName' }));
jest.mock('../../hooks/useLaunchList', () => () => ({
  launches: [{ flight_number: 1, launch_date_local: '2020-08-30T19:18:00-04:00' }],
  loading: false,
}));

describe('Details', () => {
  it ('renders', () => {
    const component = create(<Details />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
