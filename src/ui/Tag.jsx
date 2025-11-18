import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 50px;

  /* 🔥 Desktop default */
  font-size: 1rem;
  padding: 0.3rem 1rem;

  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);

  @media (max-width: 1023px) {
    font-size: 1.15rem;
    padding: 0.35rem 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 0.25rem 0.7rem;
  }

  @media (max-width: 400px) {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
`;

export default Tag;
