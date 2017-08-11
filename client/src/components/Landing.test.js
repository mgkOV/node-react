import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('Landing tests', () => {
  test('Landing renders correctly', () => {
    const component = shallow(<Landing />);
    expect(component).toMatchSnapshot();
  });
});
