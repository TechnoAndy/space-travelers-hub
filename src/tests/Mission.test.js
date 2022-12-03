import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
// import Mission from '../components/Mission';
import store from '../redux/configureStore';

jest.setTimeout(10000);
describe('Missions', () => {
  it('Expected to match the snapshot', () => {
    const Mission = render(
      <>
        <Provider store={store}>
          <Mission />
        </Provider>
      </>,
    );
    expect(Mission).toMatchSnapshot();
  });
});
