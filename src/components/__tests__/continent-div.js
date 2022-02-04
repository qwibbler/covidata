import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import ContinentDiv from '../continent-div';

it('renders correctly', () => {
  const component = renderer.create(
    <Router>
      <ContinentDiv country={{ name: 'Pakistan', href: 'http://PK/' }} population={100} confirmed={9} />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
