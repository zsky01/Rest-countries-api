import styled from "styled-components";
import {useEffect} from "react";
import {selectTheme, setTheme} from "./themeSlice";

import {useAppDispatch, useAppSelector} from "../../redux-hook";

import {BsMoon, BsSun} from 'react-icons/bs';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const WrapperText = styled.p`
  display: inline-block;
  margin: 0 0 0 0.3rem;
  font-weight: var(--fw-normal);
  font-size: var(--fs-low);
`;

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? (
        <><BsMoon /><WrapperText>Dark Mode</WrapperText></>
      ) : (
        <><BsSun /><WrapperText>Light Mode</WrapperText></>
      )}
    </ModeSwitcher>
  );
}

export {ThemeSwitcher};