import {Axios} from 'axios';
import * as API from 'api';

export type Extra = {
  client: Axios,
  api: typeof API,
};

export interface CountriesData {
  name: {
    common: string,
    official: string
  },
  region: string,
  population: number,
  flags: {
    png: string,
    svg: string
  },
  capital: string[]
}

export interface CountryDetailedData {
  name:         Name;
  tld:          string[];
  currencies:   Currencies;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  borders:      string[];
  population:   number;
  flags:        Flags;
}

export interface Currencies {
  [key: string]: {
    name: string
  };
}

export interface Ars {
  name:   string;
  symbol: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Languages {
  [key: string]: string;
}

export interface Name {
  common:     string;
  nativeName: NativeName;
}

export interface NativeName {
  [key: string]: {
    common: string
  };
}

export interface Grn {
  official: string;
  common:   string;
}

export interface CountryApi {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc:         string;
  independent:  boolean;
  status:       string;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders:      string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini:         Gini;
  fifa:         string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  string;
  capitalInfo:  CapitalInfo;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Mru {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Gini {
  "2014": number;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  ara: Translation;
}

export interface Translation {
  official: string;
  common:   string;
}