import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Home from '../home';

const mockStore = configureMockStore();
const store = mockStore({
  home: {
    total: {
      today_confirmed: 90,
      today_deaths: 89,
      today_new_confirmed: 87,
      date: '2022.02.02',
    },
  },
});

it('renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <Home randOpacity={() => ({ opacity: '0.25' })} />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
