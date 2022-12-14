import styled from "styled-components";
import Link from "next/link";

interface CountryProps {
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

const Wrapper = styled(Link)`
  max-width: 100%;
  border-radius: var(--radii);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  text-decoration: none;
`;

const Flag = styled.img`
  max-width: 100%;
  height: 150px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const Description = styled.div`
  background-color: var(--colors-elements);
  padding: 0.2rem 1.3rem 1.8rem;
  font-size: var(--fs-big);
  color: var(--colors-text);
  flex: 1;

  & h1 {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: var(--fw-bold);
  }

  & p {
    display: inline;
    font-weight: var(--fw-normal);
  }

  & > div {
    margin-bottom: 0.25rem;
  }
`;

export const Country = (CountryObj: CountryProps) => {
  return (
    <Wrapper href={CountryObj.name.common}>
      <Flag src={CountryObj.flags.svg} />
      <Description>
        <h1>{CountryObj.name.common}</h1>
        <div><p>Population: </p>{CountryObj.population}</div>
        <div><p>Region: </p>{CountryObj.region}</div>
        {CountryObj.capital && <div><p>Capital: </p>{CountryObj.capital.join(', ')}</div>}
      </Description>
    </Wrapper>
  );
};