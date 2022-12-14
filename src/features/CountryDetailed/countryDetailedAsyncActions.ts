import {createAsyncThunk} from "@reduxjs/toolkit";
import {CountryDetailedData, Extra} from "types";
import {CountryDetailedSlice} from "./countryDetailedSlice";
import {AxiosResponse} from "axios";

export const loadCountryDetail = createAsyncThunk<{ data: CountryDetailedData[] }, string, { state: { countryDetailed: CountryDetailedSlice }, extra: Extra, rejectValue: string }>(
  '@@country-detailed/load-detailed',
  async (titleCountry, {
    rejectWithValue, extra: {client, api}
  }) => {
    try {
      let countryData = await client.get(api.getCountryByName(titleCountry));

      if (countryData.data[0].borders) {
        const bordersData: AxiosResponse<CountryDetailedData[]> = await client.get(api.getCountriesByCodes(countryData.data[0].borders));
        const borders: string[] = [];

        for(let i = 0; i < bordersData.data.length; i++) {
          borders.push(bordersData.data[i].name.common);
        }

        countryData.data[0].borders = borders;
      }

      return countryData;
    } catch (error) {
      if (error instanceof Error)
        return rejectWithValue(error.message);
      return rejectWithValue('Unknown error');
    }
  },
  {
    condition: (_, {getState}) => {
      const {countryDetailed: {status}} = getState();

      if (status === 'loading') {
        return false;
      }
    }
  }
);