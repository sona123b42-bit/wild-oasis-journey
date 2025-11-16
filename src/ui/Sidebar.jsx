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

  /* Desktop + tablet placement */
  grid-row: 2;
  grid-column: 1;

  @media (min-width: 768px) {
    position: static;
    width: 26rem;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 22rem;
    height: 100vh;
    z-index: 50;

    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
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
