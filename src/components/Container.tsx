import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 430px) {
    padding: 0 4rem;
    max-width: 1440px;
  }
`;