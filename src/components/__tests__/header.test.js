import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Header from '../header';

const mockStore = configureMockStore();
const store = mockStore({
  home: {
    date: '2020-09-09',
    changeDate: false,
  },
});

it('renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
