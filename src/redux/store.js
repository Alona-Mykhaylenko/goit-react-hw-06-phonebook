import { createStore, combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {ADDCONTACT, HANDLEDELETE, HANDLECHANGE} from './app-actions';

// const InitialState = {
//   contacts: [],
//   filter: ""
// }



const ContactsReducer = (state = [], { type, payload })=>{
  switch(type){
    case ADDCONTACT:
      
      return [...state, payload];

      case HANDLEDELETE:
        return state.filter((contact) => contact.id !== payload);

      default:
        return state;
  }
  
}

const FilterReducer = (state = '', { type, payload })=>{
  switch(type){
    case HANDLECHANGE:
      return payload;

           default:
        return state;
  }
}

const reducer = combineReducers({
  contacts:ContactsReducer,
  filter: FilterReducer,

})

const store = createStore(reducer, composeWithDevTools());

export default store;
