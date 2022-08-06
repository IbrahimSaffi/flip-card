import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`

background-color:#424651;
height :5vh;
display:flex;
justify-content:flex-end;
align-items:center;
gap:10px;
padding:10px;
`;

const NavbarItem = styled.a`
color:white;
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
