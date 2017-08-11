import React from 'react';
import { shallow } from 'enzyme';
import Payments, { Unwrapped as UnwrappedPayments } from './Payments';

describe('Payments component tests', () => {
  test('Payments renders correctly', () => {
    const component = shallow(<UnwrappedPayments />);
    expect(component).toMatchSnapshot();
  });
});
