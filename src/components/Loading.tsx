import ReactLoading from 'react-loading';
import styled from "styled-components";

const Load = styled(ReactLoading)`
  margin: 2.5rem auto 0;
`;

export const Loading = () => <Load type="spin" color="var(--colors-text)" />;