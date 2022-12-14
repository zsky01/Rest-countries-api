import { useRouter } from 'next/router';
import styled from "styled-components";
import {Button} from "../components/Button";
import {CountryDetailed} from "../components/CountryDetailed";

const Wrapper = styled.div`
  padding: 2rem 0;
`;

export default function Country() {
  const router = useRouter();
  const { country } = router.query;

  return (
    <Wrapper>
      <Button type='back' />
      {country && <CountryDetailed country={country.toString()} />}
    </Wrapper>
  )
}