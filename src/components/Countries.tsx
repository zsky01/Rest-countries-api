import {Country} from "./Country";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../redux-hook";
import {useEffect} from "react";
import {loadCountries} from "../features/Countries/countriesAsyncActions";
import {getCountriesStatus, getFilteredCountries} from "../features/Countries/countriesSlice";
import {Loading} from "./Loading";
import Custom404 from "../pages/404";

const Wrapper = styled.div`
  max-width: 85%;
  margin: 2rem auto 2rem;
  display: grid;
  gap: 2rem;

  @media (min-width: 500px) {
    max-width: 100%;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    gap: 2rem 1rem;
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 3rem 2rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 5rem 4rem;
  }
`;

export const Countries = () => {
  const dispatch = useAppDispatch();

  const CountriesList = useAppSelector(getFilteredCountries);
  const Status = useAppSelector(getCountriesStatus);

  useEffect(() => {
    if (CountriesList.length < 1) {
      dispatch(loadCountries());
    }
  }, [CountriesList.length, dispatch]);

  return (
    <>
      {Status === 'loading' && <Loading />}
      {Status === 'error' && <Custom404 />}
      {Status === 'finished' && <Wrapper>
        {CountriesList.map((item, index) => <Country key={index} {...item} />)}
      </Wrapper>
      }
    </>
  )
};