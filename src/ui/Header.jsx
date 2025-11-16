import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  grid-column: 1 / -1; /* 🔥 THIS makes it full-width */
  width: 100%;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;

  justify-content: end;
  gap: 2.4rem;
  align-items: center;
  @media (max-width: 768px) {
    padding-right: 5px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
