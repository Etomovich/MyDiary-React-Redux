import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header tests', () => {
  it('renders Header component', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });
});