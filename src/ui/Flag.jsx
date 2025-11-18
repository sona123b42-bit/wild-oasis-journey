import styled from "styled-components";

export const Flag = styled.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);

  @media (max-width: 1023px) {
    max-width: 2.4rem;
  }

  @media (max-width: 600px) {
    max-width: 1.8rem;
  }

  @media (max-width: 400px) {
    max-width: 1.4rem;
  }
`;
