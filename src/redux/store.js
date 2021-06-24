import { combineReducers, configureStore, createReducer, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {addContact, handleDelete, handleChange} from './app-actions';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'hello',
  storage,
};

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
}), logger];

const ContactsReducer = createReducer([], {
  [addContact]:(state, {payload})=> [...state, payload],
  [handleDelete]: (state, {payload}) => state.filter((contact) => contact.id !== payload),
})


const FilterReducer = createReducer('', {
  [handleChange]: (_, {payload})=> payload,
})

const rootReducer = combineReducers ({
  contacts:ContactsReducer,
  filter: FilterReducer,
})



  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  

    
  })

    const persistor = persistStore(store);

export default {store, persistor};
