import styled from "styled-components";
import {useRouter} from "next/router";

const Text = styled.div`
  padding-top: 3rem;
  font-weight: var(--fw-bold);
  font-size: 2.5rem;
  text-align: center;
`;

export default function Custom404() {
  return <Text>Data not found!</Text>
}