import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';

const MockApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

describe('App', () => {
  render(<MockApp />);

  it('renders without crashing', async () => {
    expect(render(<MockApp />)).toMatchSnapshot();
    expect(true).toBeTruthy();
  });
});
