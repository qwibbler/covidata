import React from 'react';
import renderer from 'react-test-renderer';
import DetailInfo from '../detail-info';

it('renders correctly', () => {
  const component = renderer.create(
    <DetailInfo infoName="Test: " infoNumber={100} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
