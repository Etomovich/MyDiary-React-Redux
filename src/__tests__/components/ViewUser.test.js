import React from 'react';
import { shallow } from 'enzyme';
import { ViewUser, mapStateToProps } from '../../components/ViewUser';

const oneContact = {
  id: 10,
  email: 'byron.fields@reqres.in',
  first_name: 'Byron',
  last_name: 'Fields',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg'
}

const props = {
  aContact: oneContact,
  match: {
    params: {
      slug: 10,
    }
  }
}

describe('ViewUser tests', () => {
  it('renders ViewUsercomponent', () => {
    const component = shallow(<ViewUser data={props} {...props}/>);
    component.setProps(props);
    expect(component).toHaveLength(1);
  });
});

describe('MapStateToProps', () => { 
  const state = {
    aContact: oneContact,
  };
  const props ={ aContact: oneContact }
  it('returns the comments state', () => {
    expect(mapStateToProps(state)).toEqual(props)
  });
});
