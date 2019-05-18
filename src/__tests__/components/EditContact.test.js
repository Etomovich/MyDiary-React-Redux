import React from 'react';
import { shallow } from 'enzyme';
import EditContact from '../../components/EditContact';

describe('EditContact tests', () => {
  it('renders EditContact component', () => {
    const component = shallow(<EditContact />);
    expect(component).toHaveLength(1);
  });
});
