import { create } from 'react-test-renderer';
import LaunchCard from '../LaunchCard';

jest.mock('react-router-dom', () => ({ Link: 'Link' }));

describe('LaunchCard', () => {
  it ('renders', () => {
    const component = create(<LaunchCard launch={{ flight_number: 1, launch_date_local: '2020-08-30T19:18:00-04:00' }} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
