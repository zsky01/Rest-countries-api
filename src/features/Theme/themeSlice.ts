import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";

export type ThemeSlice = 'dark' | 'light';

const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'light',
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeSlice>): ThemeSlice | void => {
      return action.payload;
    }
  }
});

export const {setTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

//Selectors
export const selectTheme = (state: RootState) => state.theme;