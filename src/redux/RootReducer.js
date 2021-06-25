import { ContactsReducer } from "./ContactsReducer";
import { FilterReducer } from "./FilterReducer";
import { combineReducers} from "@reduxjs/toolkit";


const rootReducer = combineReducers ({
    contacts:ContactsReducer,
    filter: FilterReducer,
  })

  export {rootReducer};