import {createAsyncThunk} from "@reduxjs/toolkit";
import {Extra, CountryApi} from "types";
import {CountriesSlice} from "./countriesSlice";

export const loadCountries = createAsyncThunk<{ data: CountryApi[] }, undefined, { state: { countries: CountriesSlice }, extra: Extra, rejectValue: string }>(
  '@@countries/load-countries',
  async (_, {
    rejectWithValue, extra: {client, api}
  }) => {
    try {
      return await client.get(api.getAllCountries());
    } catch (error) {
      if (error instanceof Error)
        return rejectWithValue(error.message);
      return rejectWithValue('Unknown error');
    }
  },
  {
    condition: (_, {getState}) => {
      const {countries: {status}} = getState();

      if (status === 'loading') {
        return false;
      }
    }
  }
);