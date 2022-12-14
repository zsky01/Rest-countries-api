import {combineReducers, configureStore} from "@reduxjs/toolkit";
import axios from "axios";
import * as api from './api';
import {themeReducer} from "./features/Theme/themeSlice";
import {countriesReducer} from "./features/Countries/countriesSlice";
import {countryDetailedReducer} from "./features/CountryDetailed/countryDetailedSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  countryDetailed: countryDetailedReducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api
        }
      },
      serializableCheck: false
    })
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;