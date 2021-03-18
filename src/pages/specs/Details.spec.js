import { create } from 'react-test-renderer';
import Details from '../Details';

describe('Details', () => {
  it ('renders', () => {
    const component = create(<Details />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
