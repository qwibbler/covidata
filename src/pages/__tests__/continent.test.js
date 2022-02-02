import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import Continent from '../continent';

it('renders correctly', () => {
  const component = renderer.create(<Continent infoName="Test: " infoNumber={100} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
