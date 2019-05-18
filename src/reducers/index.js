import {
    GET_ALL_CONTACTS,
    UPDATE_CONTACTS,
    GET_CONTACT,
    CREATE_CONTACT,
} from "../actions/action-types";

const initialState = {
  contacts: [],
  contactHasNext: 1,
  aContact: {},
};

function rootReducer(state = initialState, action){
  switch (action.type){
    case GET_ALL_CONTACTS:
      return {
        ...state,
        contacts: action.payload.data,
        contactHasNext: action.payload.hasNext,
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.concat(action.payload.data),
        contactHasNext: action.payload.hasNext,
      };
    case GET_CONTACT:
      return {
        ...state,
        aContact: action.payload,
      };
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.push(action.payload.data),
      };
    default:
      return state;
  }
}
  
  export default rootReducer;