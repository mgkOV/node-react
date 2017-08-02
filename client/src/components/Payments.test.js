import React from 'react';
import { shallow } from 'enzyme';
import Payments from './Payments';

test('Payments renders correctly', () => {
  const component = shallow(<Payments />);
  expect(component).toMatchSnapshot();
});
