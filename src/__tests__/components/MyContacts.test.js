import React from 'react';
import { shallow } from 'enzyme';
import { MyContacts, mapStateToProps, mapDispatchToProps } from '../../components/MyContacts';

const testData =[
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg'
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg'
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg'
  }
];

const props = {
  contactList: testData,
  nextContact: 0,
  getContacts: jest.fn(),
  getAllContacts: jest.fn(),
}

describe('MyContacts tests', () => {
  it('renders MyContacts component', () => {
    const component = shallow(<MyContacts data={props} {...props}/>);
    component.setProps({
      nextContact: 0,
      contactList: testData
    });
    component.setState({
      nextPage: false,
    });
    expect(component).toHaveLength(1);
  });
  it('test changeNextPage method when it has no next page', () => {
    const component = shallow(<MyContacts data={props} {...props}/>);
    component.setProps({
      nextContact: 0,
      contactList: testData,
    });
    component.setState({
      nextPage: false,
    });
    const wrapperInstance = component.instance();
    wrapperInstance.changeNextPage();
    expect(wrapperInstance.state.nextPage).toEqual(false);
  });
  it('test changeNextPage method it has a next page', () => {
    const component = shallow(<MyContacts data={props} {...props}/>);
    component.setProps({
      nextContact: 1,
      contactList: testData,
    });
    component.setState({
      nextPage: false,
    });
    const wrapperInstance = component.instance();
    wrapperInstance.changeNextPage();
    expect(wrapperInstance.state.nextPage).toEqual(true);
  });
  it('test updateContactList method when there is a next', () => {
    const component = shallow(<MyContacts data={props} {...props}/>);
    component.setProps({
      nextContact: 1,
      getContacts: jest.fn(),
    });
    component.setState({
      nextPage: true,
    });
    const wrapperInstance = component.instance();
    wrapperInstance.updateContactList();
    expect(wrapperInstance.state.nextPage).toEqual(true);
  });
  it('test updateContactList method when there is no next', () => {
    const component = shallow(<MyContacts data={props} {...props}/>);
    component.setProps({
      nextContact: 0,
      getContacts: jest.fn(),
    });
    component.setState({
      nextPage: true,
    });
    const wrapperInstance = component.instance();
    wrapperInstance.updateContactList();
    expect(wrapperInstance.state.nextPage).toEqual(false);
  });
});

describe('MapStateToProps', () => { 
  const state = {
    contacts: [],
    contactHasNext: false
  };
  const props ={contactList: [], nextContact: false}
  it('returns the comments state', () => {
    expect(mapStateToProps(state)).toEqual(props)
  });
});

describe('MapDispatchToProps', () => { 
  const dispatch = jest.fn()
  it('should dispatch getAllContacts', () => {
    mapDispatchToProps(dispatch).getAllContacts();
    expect(dispatch).toHaveBeenCalled();
  });
  it('should dispatch getContacts', () => {
    mapDispatchToProps(dispatch).getContacts();
    expect(dispatch).toHaveBeenCalled();
  });
});

