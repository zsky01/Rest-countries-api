import styled from 'styled-components';
import {ThemeSwitcher} from "../features/Theme/ThemeSwitcher";
import Link from "next/link";
import {useAppDispatch} from "../redux-hook";
import {clearFilter} from "../features/Countries/countriesSlice";

const ContainerHeader = styled.div`
  width: 100%;
  box-shadow: 0 0 15px -8px black;
  padding: 1.5rem 1rem;
  background-color: var(--colors-elements);
  
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  @media(min-width: 430px) {
    & > div {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 4rem;
    }
  }
`;

const Logo = styled.span`
  font-weight: var(--fw-bold);
  font-size: var(--fs-big);
`;

export const Header = () => {
  const HandleClickLogo = () => {
    const dispatch = useAppDispatch();
    return () => dispatch(clearFilter());
  };

  return (
    <ContainerHeader>
      <div>
        <Logo><Link onClick={HandleClickLogo()} href='/'>Where in the world?</Link></Logo>
        <ThemeSwitcher />
      </div>
    </ContainerHeader>
  );
};