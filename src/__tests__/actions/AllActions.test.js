import expect from 'expect';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/AllActons';
import { allContacts } from '../../actions/backendUrls';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('test all actions', () => {
  beforeEach(() => {
      moxios.install();
      
    });
    afterEach(() => {
      moxios.uninstall();
    });
    it('it dispatches GET_CONTACT on fetchAContact fail', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
        });
      });
      const expectedActions = [];
      // configure Mock store
      const store = mockStore({});
  
      return store.dispatch(actions.fetchAContact(allContacts.concat(`?page=${1}`))).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
  
        expect(actionTypes).toEqual(expectedActions);
      },);
    });

    it('it dispatches UPDATE_CONTACTS on fetchMoreContacts fail', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
        });
      });
      const expectedActions = [];
      // configure Mock store
      const store = mockStore({});
  
      return store.dispatch(actions.fetchMoreContacts(allContacts.concat(`?page=${1}`))).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
  
        expect(actionTypes).toEqual(expectedActions);
      },);
    });
    it('it dispatches GET_ALL_CONTACTS on fetchAllContacts fail', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
        });
      });
      const expectedActions = [];
      // configure Mock store
      const store = mockStore({});
  
      return store.dispatch(actions.fetchAllContacts()).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
  
        expect(actionTypes).toEqual(expectedActions);
      },);
    });
  });
