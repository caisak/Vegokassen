import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MyContext, MyContextValue } from "./MyProvider";

export function Header() {
  
  const { CartAmount } = useContext<MyContextValue>(MyContext);
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
      <StyledHeaderLogo>
      {CartAmount}
      <br/>
        <FontAwesomeIcon icon={faCartShopping} size="lg" color="white" beat />
      </StyledHeaderLogo>
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
  font-family: 'Titillium Web', sans-serif;
  text-align: center;
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
