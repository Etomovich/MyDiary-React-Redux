import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer tests', () => {
  it('renders Footer component', () => {
    const component = shallow(<Footer />);
    expect(component).toHaveLength(1);
  });
});
