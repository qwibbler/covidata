import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Continent from '../details';

const mockStore = configureMockStore();
const store = mockStore({
  home: {
    population: 500,
    data: {
      Pakistan: {
        today_confirmed: 80,
        today_new_confirmed: 87,
        today_deaths: 89,
        today_new_deaths: 87,
        today_open_cases: 89,
        today_new_open_cases: 87,
        today_recovered: 89,
        today_new_recovered: 87,
      },
    },
  },
});
const route = { params: { country: 'Pakistan', countryCode: 'PK' } }

it('renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <Continent route={route} randOpacity={() => ({ opacity: '0.25' })} />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
