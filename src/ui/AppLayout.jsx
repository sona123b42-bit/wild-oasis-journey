import {
  Outlet,
  UNSAFE_getTurboStreamSingleFetchDataStrategy,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";
import { HamburgerButton, LineBurger } from "./Hamburger";
const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  @media (max-width: 1023px) {
    padding: 2.4rem 2rem 3.2rem;
  }

  @media (max-width: 480px) {
    padding: 1.6rem 1.2rem 2.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledAppLayout>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <HamburgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <LineBurger isOpen={isOpen} />
          <LineBurger isOpen={isOpen} />
          <LineBurger isOpen={isOpen} />
        </HamburgerButton>
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
