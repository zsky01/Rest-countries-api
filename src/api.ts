const BASE_URL = "https://restcountries.com/v3.1/";

export const getAllCountries = () => BASE_URL + "all";

export const getCountryByName = (name: string) => BASE_URL + "name/" + name;

export const getCountriesByCodes = (codes: string[]) => BASE_URL + "alpha/?codes=" + codes.join(',');