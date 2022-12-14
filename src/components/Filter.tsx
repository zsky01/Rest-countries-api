import styled from "styled-components";
import React from "react";

interface FilterProps {
  children: React.ReactNode
}

const Wrapper = styled.div`
  margin-top: 2rem;

  @media(min-width: 430px) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export const Filter = ({children}: FilterProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};