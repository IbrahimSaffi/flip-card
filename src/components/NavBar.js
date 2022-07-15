import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;

const NavbarItem = styled.a`
`;

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>About</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </Wrapper>
  );
};

export default Navbar;
