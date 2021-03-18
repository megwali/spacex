import { create } from 'react-test-renderer';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  it ('renders', () => {
    const component = create(<Dashboard />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
