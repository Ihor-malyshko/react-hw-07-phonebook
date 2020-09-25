import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactActions';
import defContacts from '../../assets/defContacts.json';

// const setDefContact = () => {
//   const localContacts = localStorage.getItem('contacts');
//   if (localContacts === null) {
//     localStorage.setItem('contacts', JSON.stringify(defContacts));
//     return defContacts;
//   } else {
//     return JSON.parse(localContacts);
//   }
// };

// const addContact = (state, action) => {
//   return state.some(el => {
//     return el.name === action.payload.name;
//   })
//     ? state
//     : [action.payload.contact, ...state];
// };

const removeContact = (state, action) =>
  state.filter(el => el.id !== action.payload);

const changeFilter = (state, action) => action.payload;

const items = createReducer([], {
  [contactActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactActions.removeContactSuccess]: removeContact,
  [contactActions.fetchContactsSuccess]: (state, action) => action.payload,
});

const filter = createReducer('', {
  [contactActions.changeFilter]: changeFilter,
});

const loadingReducer = createReducer(false, {
  [contactActions.addContactRequest]: () => true,
  [contactActions.addContactSuccess]: () => false,
  [contactActions.addContactError]: () => false,
  [contactActions.fetchContactsRequest]: () => true,
  [contactActions.fetchContactsSuccess]: () => false,
  [contactActions.fetchContactsError]: () => false,
  [contactActions.removeContactRequest]: () => true,
  [contactActions.removeContactsSuccess]: () => false,
  [contactActions.removeContactsError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loadingReducer,
});
