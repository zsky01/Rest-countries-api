import styled from "styled-components";
import React from "react";

import {AiOutlineSearch} from 'react-icons/ai';
import {useAppDispatch} from "../redux-hook";
import {addSearch} from "../features/Countries/countriesSlice";

const WrapperSearch = styled.div`
  width: 100%;
  padding: 1rem 1.2rem;
  background: var(--colors-elements);
  border-radius: var(--radii);
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 430px) {
    max-width: 35%;
    padding: 0.7rem 1.2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;

  &::placeholder {
    body[data-theme='light'] & {
      color: hsl(0deg 0% 50%);
    }

    body[data-theme='dark'] & {
      color: var(--colors-text);
    }
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  margin-right: 1rem;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--colors-text);

  body[data-theme='light'] & {
    color: hsl(0deg 0% 50%);
  }

  body[data-theme='dark'] & {
    color: var(--colors-text);
  }
`;

export const Search = () => {
  const dispatch = useAppDispatch();

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addSearch(e.target.value));
  };

  return (
    <WrapperSearch>
      <SearchIcon />
      <Input onChange={handleChanged} type='search' placeholder='Search for a country...' />
    </WrapperSearch>
  );
};