import {addContact, deleteContact} from './app-actions';
import { createReducer } from "@reduxjs/toolkit";

const ContactsReducer = createReducer([], {
    [addContact]:(state, {payload})=> [...state, payload],
    [deleteContact]: (state, {payload}) => state.filter((contact) => contact.id !== payload),
  })

  export {ContactsReducer};


  