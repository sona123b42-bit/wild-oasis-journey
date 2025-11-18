import styled from "styled-components";
export const HamburgerButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;

  position: fixed;
  top: 18px;
  left: ${({ isOpen }) => (isOpen ? "calc(22rem - 3.6rem)" : "29px")};
  transition: left 0.3s ease;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  z-index: 999;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  @media (max-width: 1023px) {
    display: block;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const LineBurger = styled.span`
  position: absolute;
  right: 0;
  width: 100%;
  height: 3px;

  /* Closed = brand-700, Open = brand-600 */
  background-color: ${({ isOpen }) =>
    isOpen ? "var(--color-brand-600)" : "var(--color-brand-700)"};

  transition: all 0.3s ease;
  border-radius: 10px;

  &:nth-child(1) {
    top: 0;
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(45deg) translateY(9px) translateX(3px)" : "none"};
  }

  &:nth-child(2) {
    top: 9px;
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    top: 18px;
    transform: ${({ isOpen }) =>
      isOpen ? "rotate(-45deg) translateY(-9px) translateX(4px)" : "none"};
  }
`;
