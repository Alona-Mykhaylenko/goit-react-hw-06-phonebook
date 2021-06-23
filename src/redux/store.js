import { configureStore, createReducer, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { combineReducers } from "redux";
// import {ADDCONTACT, HANDLEDELETE, HANDLECHANGE} from './app-actions';
// import actions from './app-actions'
import {addContact, handleDelete, handleChange} from './app-actions';




const middleware = [...getDefaultMiddleware(), logger];

const ContactsReducer = createReducer([], {
  [addContact]:(state, {payload})=> [...state, payload],
  [handleDelete]: (state, {payload}) => state.filter((contact) => contact.id !== payload),
})


// const ContactsReducer = (state = [], { type, payload })=>{
//   switch(type){
//     case ADDCONTACT:
      
//       return [...state, payload];

//       case HANDLEDELETE:
//         return state.filter((contact) => contact.id !== payload);

//       default:
//         return state;
//   }
  
// }

// const FilterReducer = (state = '', { type, payload })=>{
//   switch(type){
//     case 'app/handleChange':
//       return payload;

//            default:
//         return state;
//   }
// }

const FilterReducer = createReducer('', {
  [handleChange]: (_, {payload})=> payload,
})

// const FilterReducer = createReducer([], {
//   [handleChange]: (state, {payload}) => payload,
// })


// const reducer = combineReducers({
//   contacts:ContactsReducer,
//   filter: FilterReducer,

// })

// const store = createStore(reducer, composeWithDevTools());

const store = configureStore({
  reducer:{
    contacts:ContactsReducer,
    filter: FilterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',})


export default store;
