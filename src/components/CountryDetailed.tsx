import {useAppDispatch, useAppSelector} from "../redux-hook";
import {clearCountryDetailed, getCountryDetailed} from "../features/CountryDetailed/countryDetailedSlice";
import {useEffect} from "react";
import {loadCountryDetail} from "../features/CountryDetailed/countryDetailedAsyncActions";
import styled from "styled-components";
import {Button} from "./Button";
import Custom404 from "../pages/404";
import {Loading} from "./Loading";

interface CountryDetailedProps {
  country: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  
  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
    
    & > img {
      max-width: 500px;
    }
    
    & > div {
      max-width: 45%;
    }
  }
`;

const Flag = styled.img`
  max-width: 100%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media(min-width: 767px) {
    margin-top: 0;
  }
`;

const WrapperProps = styled.div`
  @media(min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    & > div:first-child {
      margin-right: 2rem;
    }
  }
`;

const Prop = styled.p`
  font-size: 1.1rem;
  margin: 0.9rem 0 0 0;
  color: var(--colors-text);

  @media(min-width: 767px) {
    font-size: 0.9rem;
    margin: 0.5rem 0 0 0;
  }

  & > p {
    margin: 0 0.5rem 0 0;
    display: inline-block;
    font-weight: var(--fw-normal);
  }
`;

const BorderCountries = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 767px) {
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
  }
`;

const H2 = styled.h2`
  font-size: 1.25rem;
  margin-top: 2.5rem;

  @media (min-width: 767px) {
    margin: 0 0.5rem 0 0;
    flex-shrink: 0;
  }
`;


export const CountryDetailed = ({country}: CountryDetailedProps) => {
  const dispatch = useAppDispatch();
  const CountryDetailed = useAppSelector(getCountryDetailed);

  useEffect(() => {
    dispatch(loadCountryDetail(country));

    return () => {
      dispatch(clearCountryDetailed());
    };
  }, [country, dispatch]);

  const currencies: string[] = [];
  for (let key in CountryDetailed.data?.currencies) {
    if (CountryDetailed.data?.currencies[key].name)
      currencies.push(CountryDetailed.data?.currencies[key].name);
  }

  const nativeName: string[] = [];
  for (let key in CountryDetailed.data?.name.nativeName) {
    const currentName = CountryDetailed.data?.name.nativeName[key].common;
    if (currentName && nativeName.indexOf(currentName) < 0)
      nativeName.push(currentName);
  }

  const languages: string[] = [];
  for (let key in CountryDetailed.data?.languages) {
    const currentLanguage = CountryDetailed.data?.languages[key];
    if (currentLanguage)
      languages.push(currentLanguage);
  }

  const divideNumberByPieces = (x: number, delimiter: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || " ");
  };

  return (
    <>
      {CountryDetailed.status === 'loading' && <Loading />}
      {CountryDetailed.status === 'error' && <Custom404 />}
      {CountryDetailed.status === 'finished' && <Wrapper>
        <Flag src={CountryDetailed.data?.flags.svg} />
        <div>
          <Title>{CountryDetailed.data?.name.common}</Title>
          <WrapperProps>
            <div>
              {nativeName && <Prop><p>Native Name:</p>{nativeName.join(', ')}</Prop>}
              {CountryDetailed.data?.population &&
                <Prop><p>Population:</p>{divideNumberByPieces(CountryDetailed.data?.population, ',')}</Prop>}
              {CountryDetailed.data?.region && <Prop><p>Region:</p>{CountryDetailed.data?.region}</Prop>}
              {CountryDetailed.data?.subregion && <Prop><p>Sub Region:</p>{CountryDetailed.data?.subregion}</Prop>}
              {CountryDetailed.data?.capital && <Prop><p>Capital:</p>{CountryDetailed.data?.capital.join(', ')}</Prop>}
            </div>
            <div>
              {CountryDetailed.data?.tld && <Prop><p>Top Level Domain:</p>{CountryDetailed.data?.tld.join(', ')}</Prop>}
              {currencies && <Prop><p>Currencies:</p>{currencies.join(', ')}</Prop>}
              {languages && <Prop><p>Languages:</p>{languages.join(', ')}</Prop>}
            </div>
          </WrapperProps>
          {CountryDetailed.data?.borders && <BorderCountries><H2>Border Countries:</H2><Button
            borderCountries={CountryDetailed.data?.borders} type='country' /></BorderCountries>}
        </div>
      </Wrapper>
      }
    </>
  )
}