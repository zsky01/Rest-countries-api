import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CountriesData} from "types";
import {loadCountries} from "./countriesAsyncActions";
import {RootState} from "../../store";

export type CountriesSlice = {
  status: 'idle' | 'loading' | 'finished' | 'error';
  error: string | null;
  list: CountriesData[];
  filter: {
    search: string,
    region: string
  }
}

const initialState: CountriesSlice = {
  status: 'idle',
  error: null,
  list: [],
  filter: {
    search: '',
    region: ''
  }
}

const CountriesSlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {
    clearFilter: (state, action: PayloadAction) => {
      state.filter = initialState.filter;
    },
    addSearch: (state, action: PayloadAction<CountriesSlice['filter']['search']>) => {
      state.filter.search = action.payload
    },
    addRegion: (state, action: PayloadAction<CountriesSlice['filter']['region']>) => {
      state.filter.region = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadCountries.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(loadCountries.fulfilled, (state, action) => {
      state.error = null;
      state.status = 'finished';
      state.list = action.payload.data;
    });
    builder.addCase(loadCountries.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload || action.error.message || 'Cannot load data';
    })
  }
});

export const {addSearch, addRegion, clearFilter} = CountriesSlice.actions;
export const countriesReducer = CountriesSlice.reducer;

// Selectors

export const getCountriesStatus = (state: RootState) => state.countries.status;
export const getAllCountries = (state: RootState) => state.countries.list;
export const getFilteredCountries = (state: RootState) => state.countries.list.filter(item => item.name.common.toLowerCase().includes(state.countries.filter.search.toLowerCase()) && item.region.toLowerCase().includes(state.countries.filter.region.toLowerCase()));