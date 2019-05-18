import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes/index';

describe('Routes tests', () => {
  it('renders Routes component', () => {
    const component = shallow(<Routes />);
    expect(component).toHaveLength(1);
  });
});
