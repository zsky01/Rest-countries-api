import ReactSelect, {ActionMeta} from 'react-select';
import styled from "styled-components";
import {useAppDispatch} from "../redux-hook";
import React from "react";
import {addRegion} from "../features/Countries/countriesSlice";

const ReactSelectCss = styled(ReactSelect)`
  margin-top: 2rem;

  @media (min-width: 430px) {
    margin-top: 0;
  }
`;

export const Select = () => {
  const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'Americas', label: 'Americas'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'}
  ];

  const dispatch = useAppDispatch();

  type SelectOption = {label?: string, value?: string};

  const handleChanged = (option: SelectOption | null | any, actionMeta: ActionMeta<unknown>) => {
    if (option === null) {
      return dispatch(addRegion(''));
    }

    if (option && option.hasOwnProperty('value')) {
      dispatch(addRegion(option.value));
    }
  }

  return <ReactSelectCss
    onChange={handleChanged}
    options={options}
    isSearchable={false}
    isClearable={true}
    placeholder='Filter by Region'
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,
        fontWeight: 'var(--fw-normal)',
        borderColor: 'var(--colors-elements)',
        backgroundColor: 'var(--colors-elements)',
        borderRadius: 'var(--radii)',
        color: 'var(--colors-text)',
        border: 'none',
        outline: 'none',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0 7px 29px 0',
        padding: '0.7rem 1.2rem',
        cursor: 'pointer'
      }),
      indicatorSeparator: (baseStyles, state) => ({
        display: 'none'
      }),
      placeholder: (baseStyles, state) => ({
        ...baseStyles,
        color: 'var(--colors-text)'
      }),
      singleValue: (baseStyles, state) => ({
        ...baseStyles,
        color: 'var(--colors-text)'
      }),
      option: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: 'none',
        color: 'var(--colors-text)',
        fontWeight: 'var(--fw-normal)',
        cursor: 'pointer',
        paddingLeft: '1.3rem',
        paddingRight: '1.3rem',
        ":active": {backgroundColor: 'none'}
      }),
      dropdownIndicator: (baseStyles, state) => ({
        ...baseStyles,
        color: 'var(--colors-text)'
      }),
      clearIndicator: (baseStyles, state) => ({
        ...baseStyles,
        color: 'var(--colors-text)'
      }),
      menuList: (baseStyles, state) => ({
        ...baseStyles,
        border: 'none',
        borderRadius: 'var(--radii)',
        backgroundColor: 'var(--colors-elements)',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0 7px 29px 0',
      }),
      menu: (baseStyles, state) => ({
        ...baseStyles,
        boxShadow: 'none',
        backgroundColor: 'var(--colors-elements)',
        border: 'none'
      }),
    }}
  />;
}