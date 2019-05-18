import axios from 'axios';
import { toast } from 'react-toastify';
import { allContacts } from './backendUrls';
import {
  GET_ALL_CONTACTS,
  UPDATE_CONTACTS,
  GET_CONTACT,
  CREATE_CONTACT,
} from "../actions/action-types";

export const fetchAllContacts = () => dispatch => axios
  .get(allContacts, { headers: { 'content-type': 'application/json' } })
  .then((res) => {
    let nextValue = -1;
    if(res.data.page < res.data.total_pages){
      nextValue = res.data.page + 1;
    }
    const payload = {
      data: res.data.data,
      hasNext: nextValue,
    };
   dispatch({ type: GET_ALL_CONTACTS, payload });

  })
  .catch(() => {
    toast.error('Something went wrong when getting your contacts');
  });

export const fetchMoreContacts = nextPage => dispatch => axios
  .get(allContacts.concat(`?page=${nextPage}`),{ headers: { 'content-type': 'application/json' } })
  .then((res) => {
    let nextValue = -1;
    if(res.data.page < res.data.total_pages){
      nextValue = res.data.page + 1;
    }
    const payload = {
      data: res.data.data,
      hasNext: nextValue,
    };
  dispatch({ type: UPDATE_CONTACTS, payload });

  })
  .catch(() => {
    toast.error('Something went wrong when getting your contacts');
  });

  export const fetchAContact = userId => dispatch => axios
  .get(allContacts.concat(`/${userId}`),{ headers: { 'content-type': 'application/json' } })
  .then((res) => {
    const payload = res.data.data;
    dispatch({ type: GET_CONTACT, payload });
  })
  .catch(() => {
    toast.error('Something went wrong when getting your contact');
  });
