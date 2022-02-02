import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Continent from '../continent';

const mockStore = configureMockStore();
const store = mockStore({
  home: {
    countries: [
      { name: 'United States', href: 'http://US/' },
      { name: 'India', href: 'http://IN/' },
      { name: 'Pakistan', href: 'http://PK/' },
    ],
    data: {
      US: {},
      Pakistan: {},
    },
  },
});

it('renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <Continent randOpacity={() => ({ opacity: '0.25' })} />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
