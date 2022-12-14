import styled, {css} from "styled-components";
import {BsArrowLeft} from 'react-icons/bs';
import {HTMLProps} from "react";
import { useRouter } from 'next/router';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type: 'back' | 'country',
  borderCountries?: string[]
}

const WrapperBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;

  @media(min-width: 767px) {
    align-items: center;
    max-width: 340px;
  }
`;

const Btn = styled.button<{ typeBtn: string }>`
  background-color: var(--colors-elements);
  border: none;
  outline: none;
  padding: 0.7rem 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  cursor: pointer;

  ${props => props.typeBtn === 'country' && css`
    @media(min-width: 767px) {
      padding: 0.4rem 1.2rem;
    }
  `};

  ${props => props.typeBtn === 'back' && css`
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > svg {
      margin-right: 0.3rem;
    }
  `};
`;

export const Button = ({borderCountries, type}: ButtonProps) => {
  const router = useRouter();

  if (borderCountries && type === 'country') {
    return (
      <WrapperBtn>
        {borderCountries.map((item, index) => <Btn onClick={() => router.push('/' + item)} key={index} typeBtn='country'>{item}</Btn>)}
      </WrapperBtn>
    );
  }

  return (
    <Btn onClick={() => router.back()} typeBtn='back'><BsArrowLeft />Back</Btn>
  );
};