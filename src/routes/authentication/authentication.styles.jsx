import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5rem;
  width: 65vw;
  margin: 2em auto;

  @media (min-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
