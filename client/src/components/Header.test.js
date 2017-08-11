import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'redux';
import store from '../store';
import Header, { Unwrapped as UnwrappedHeader } from './Header';

describe('Header tests', () => {
  test('Header renders correctly', () => {
    const component = shallow(<UnwrappedHeader auth={{ credit: 5 }} />);
    expect(component).toMatchSnapshot();
  });
});
