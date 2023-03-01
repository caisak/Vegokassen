import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../CartContex";
import { OpenButton } from "./HamburgerButton.ts";

interface MobileBurgerNavProps {
  extendNavBar: boolean;
}

export function TheHeader() {
  const [extendNavBar, setExtendNavbar] = useState(false);
  const { cartList } = useContext(CartContext);


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setExtendNavbar(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Header>
      <MyHeader>
        <FlexDiv>
        <OpenButton
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {extendNavBar ? <>&#10005;</> : <>&#8801;</>}
        </OpenButton>
          <StyledLogo src="src/Images/vegokassenlogo1.png" alt="" />
        </FlexDiv>
        <StyledNav>
          <StyledNavUl>
            <li>
              <StyledNavLink to="/">Hem</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="produkter">Produkter</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="safunkardet">Så funkar det</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="recept">Recept</StyledNavLink>
            </li>
          </StyledNavUl>
        </StyledNav>
        <Link to="cart"><StyledHeaderLogo>
          {cartList.length}
          <br/>
          <FontAwesomeIcon icon={faCartShopping} size="lg" color="white" beat />
        </StyledHeaderLogo></Link>
      </MyHeader>
      <MobileBurgerNav extendNavBar={extendNavBar}>
        <StyledMobileNavNav>
          <StyledMobileNavUl>
            <li>
              <StyledMobileNavLink
                to="/"
                onClick={() => setExtendNavbar(false)}
              >
                Hem
              </StyledMobileNavLink>
            </li>
            <li>
              <StyledMobileNavLink
                to="produkter"
                onClick={() => setExtendNavbar(false)}
              >
                Produkter
              </StyledMobileNavLink>
            </li>
            <li>
              <StyledMobileNavLink
                to="safunkardet"
                onClick={() => setExtendNavbar(false)}
              >
                Så funkar det
              </StyledMobileNavLink>
            </li>
            <li>
              <StyledMobileNavLink
                to="recept"
                onClick={() => setExtendNavbar(false)}
              >
                Recept
              </StyledMobileNavLink>
            </li>
          </StyledMobileNavUl>
        </StyledMobileNavNav>
      </MobileBurgerNav>
    </Header>
  );
}
//Stylade komponenter

const FlexDiv = styled.div `
display: flex;`

const StyledLogo = styled.img`
height: 3rem;

@media (max-width: 725px) {
  height: 2.5rem;

  }
`

const Header = styled.header``;
export const MyHeader = styled.div`
  position: fixed;
  width: 100%;
  background-color: #1c3529;
  padding: 0.5rem;
  height: 3.5rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-family: "Titillium Web", sans-serif;
`;

const MobileBurgerNav = styled.div<MobileBurgerNavProps>`
  font-family: "Titillium Web", sans-serif;
  z-index: 10;
  width: 100%;
  height: ${(props) => (props.extendNavBar ? "100vh" : "0vh")};
  background-color: #1c3529;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: height 0.2s ease-in-out;
`;

const StyledNav = styled.nav `
margin-right: 11%;

`

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

export const StyledHeaderLogo = styled.h3`
  color: White;
  margin: 0;
  white-space: nowrap;
  
`;

/*Styled NavLink */
const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  /* add hover effect */
  &:hover {
    color: lightgreen;
  }
  @media (max-width: 700px) {
    display: none;
  }
  /* Active link style */
  &.active {
    /* border-bottom: 2px solid white; */
    background-color: #f8e1a6;
    padding: 7px;
    border-radius: 10px;
    color: #1c3429;
  }
`;



/*Mobile Nav Styling */
export const StyledMobileNavNav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledMobileNavUl = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    /* Apply styles to all direct children */
    margin-bottom: 10vh;
    text-align: center;
  }
`;

/*Styled NavLink */
const StyledMobileNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;