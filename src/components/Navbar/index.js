import React from "react";
import { Nav, NavbarContainer, NavbarLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to="/">ArbiBoard</NavbarLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
