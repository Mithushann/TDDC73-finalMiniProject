// write on test to test the cartcomp component
import renderer from 'react-test-renderer';
import CartComp from '../sdk/CartComp';
it('renders correctly', () => {
    const tree = renderer.create(<CartComp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
