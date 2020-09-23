import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactActions';
import defContacts from '../../assets/defContacts.json';

const setDefContact = () => {
  const localContacts = localStorage.getItem('contacts');
  if (localContacts === null) {
    localStorage.setItem('contacts', JSON.stringify(defContacts));
    return defContacts;
  } else {
    return JSON.parse(localContacts);
  }
};

const addContact = (state, action) => {
  return state.some(el => {
    return el.name === action.payload.name;
  })
    ? state
    : [action.payload.contact, ...state];
};

const removeContact = (state, action) =>
  state.filter(el => el.id !== action.payload);

const changeFilter = (state, action) => action.payload;

const items = createReducer(setDefContact(), {
  [contactActions.addContact]: addContact,
  [contactActions.removeContact]: removeContact,
});

const filter = createReducer('', {
  [contactActions.changeFilter]: changeFilter,
});

export default combineReducers({
  items,
  filter,
});
