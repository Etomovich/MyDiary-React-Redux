import {
  GET_ALL_CONTACTS,
  UPDATE_CONTACTS,
  GET_CONTACT,
  CREATE_CONTACT,
} from "../../actions/action-types";

import rootReducer from '../../reducers/index';

const initialState = {
  contacts: [],
  contactHasNext: 1,
  aContact: {},
};

const getContacts = {contactHasNext: 2, contacts: []};
const updateContacts = {aContact: {}, contactHasNext: 2, contacts: []}
const getAContact = {aContact: {data: [], hasNext: 2}}

describe('root reducer tests', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
  it('should change state on action type GET_SEARCH_RESULTS', () => {
    expect(
      rootReducer({}, {
        type: GET_ALL_CONTACTS,
        payload:{
          data: [],
          hasNext: 2,
        },
      })
    ).toEqual(getContacts)
  })
  it('should change state on action type UPDATE_CONTACTS', () => {
    expect(
      rootReducer( initialState , {
        type: UPDATE_CONTACTS,
        payload:{
          data: [],
          hasNext: 2,
        },
      })
    ).toEqual(updateContacts)
  })
  it('should change state on action type GET_CONTACT', () => {
    expect(
      rootReducer( {}, {
        type: GET_CONTACT,
        payload:{
          data: [],
          hasNext: 2,
        },
      })
    ).toEqual(getAContact)
  })
});
