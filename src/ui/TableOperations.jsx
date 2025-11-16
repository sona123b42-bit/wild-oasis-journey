import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch; /* makes children full width */
    gap: 1rem;
  }
`;
export default TableOperations;
