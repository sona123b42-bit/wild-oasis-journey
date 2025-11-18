import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 600px) {
    width: 100vw;
    max-width: 100%;
    padding: 1.6rem;
    border-radius: 0;

    display: flex;
    flex-direction: column;

    /* 🔥 Reduced min-height to reduce gap above buttons */
    min-height: 26vh;

    & div {
      margin-top: auto;
      justify-content: flex-end;
      gap: 1rem;
    }
  }
`;

function ConfirmDelete({ resource, onConfirm, disabled, closeModal }) {
  // function handleConfirmClick() {

  // }

  return (
    <StyledConfirmDelete>
      <Heading type="h3">Delete {resource}</Heading>
      <p>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div>
        <Button variation="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button variation="danger" onClick={onConfirm} disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
