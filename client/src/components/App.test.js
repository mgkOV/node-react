import React from 'react';
import { shallow } from 'enzyme';
import { Unwrapped as UnwrappedApp } from './App';

test('App should render correctly', () => {
  const component = shallow(<UnwrappedApp />);
  expect(component).toMatchSnapshot();
});
