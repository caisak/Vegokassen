import { NavLink } from "react-router-dom";
import styled from "styled-components";

export function Header() {
  return (
    <MyHeader>
      <StyledHeaderLogo>Vego Kassen</StyledHeaderLogo>
      <nav>
        <StyledNavUl>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="products">Products</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="howitworks">How it works</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="recipies">Recipies</StyledNavLink>
          </li>
        </StyledNavUl>
      </nav>
      <StyledHeaderLogo>Cart</StyledHeaderLogo>
    </MyHeader>
  );
}
//Stylade komponenter

export const MyHeader = styled.header`
  background-color: #1c3529;
  padding: 0.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  & > * {
    /* Apply styles to all direct children */
    margin-right: 2rem;
  }
`;

/*Styled NavLink */
const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  /* add hover effect */
  &:hover {
    color: lightgreen;
  }
`;

export const StyledHeaderLogo = styled.h3`
  color: White;
  margin: 0;
`;
