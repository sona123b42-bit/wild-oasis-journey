import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { Uploader } from "../data/Uploader";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  /* DEFAULT: Mobile/iPad Mini/iPad Air behavior */
  position: fixed;
  left: 0;
  top: 0;
  width: 22rem;
  height: 100vh;
  z-index: 50;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  /* DESKTOP + iPad Pro (≥ 1024px) */
  @media (min-width: 1024px) {
    position: static;
    width: 26rem;
    height: auto;
    transform: none;
    transition: none;
  }
`;

function Sidebar({ isOpen }) {
  return (
    <StyledSidebar isOpen={isOpen}>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
