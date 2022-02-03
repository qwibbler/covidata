import React from 'react';
import renderer from 'react-test-renderer';
import DetailShow from '../detail-show';

it('renders correctly', () => {
  const component = renderer.create(
    <DetailShow infoName="Test: " infoNumber={100} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
