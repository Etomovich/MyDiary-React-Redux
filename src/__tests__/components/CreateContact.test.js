import React from 'react';
import { shallow } from 'enzyme';
import CreateContact from '../../components/CreateContact';

describe('CreateContact tests', () => {
  it('renders CreateContact component', () => {
    const component = shallow(<CreateContact />);
    expect(component).toHaveLength(1);
  });
});

