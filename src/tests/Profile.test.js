import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from '../components/Profile';
import store from '../redux/configureStore';

jest.setTimeout(10000);
describe('Profile NavLink', () => {
  it('Should render a list', () => {
    const profileLink = render(
      <>
        <Provider store={store}>
          <Profile />
        </Provider>
      </>,
    );
    expect(profileLink).toMatchSnapshot();
  });
});
