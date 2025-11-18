import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "regular" &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;

      @media (max-width: 900px) {
        width: 90%;
        max-width: 55rem;
        padding: 2rem;
      }

      @media (max-width: 600px) {
        width: 100vw;
        max-width: none;
        padding: 2rem;
        border-radius: 0;

        min-height: 100vh;
        height: auto;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 1.6rem;

        overflow-y: auto;
      }
    `}

  font-size: 1.4rem;
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
Form.defaultProps = { type: "regular" };

export default Form;
