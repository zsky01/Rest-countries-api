import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CountryDetailedData} from "types";
import {loadCountryDetail} from "./countryDetailedAsyncActions";
import {RootState} from "../../store";

export type CountryDetailedSlice = {
  status: 'idle' | 'loading' | 'finished' | 'error';
  data: CountryDetailedData | null;
  error: null | string;
}

const initialState: CountryDetailedSlice = {
  status: 'idle',
  data: null,
  error: null
}

const CountryDetailedSlice = createSlice({
  name: '@@country-detailed',
  initialState,
  reducers: {
    clearCountryDetailed: (state, action: PayloadAction) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCountryDetail.pending, (state) => {
      state.error = null;
      state.status = 'loading';
    });
    builder.addCase(loadCountryDetail.fulfilled, (state, action) => {
      state.status = 'finished';
      state.error = null;
      if (action.payload.data.length > 0) {
        state.data = action.payload.data[0];
      }
    });
    builder.addCase(loadCountryDetail.rejected, (state, action) => {
      state.status = 'error';
      state.data = null;
      state.error = action.payload || action.error.message || 'Cannot load data';
    })
  }
});

export const {clearCountryDetailed} = CountryDetailedSlice.actions;
export const countryDetailedReducer = CountryDetailedSlice.reducer;

// Selectors

export const getCountryDetailed = (state: RootState) => state.countryDetailed;