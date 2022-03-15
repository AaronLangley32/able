import React from 'react';
import { NavContainer, NavLogo, Nav, Link } from '../CSS/navbarStyles';

export const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo />
      <Nav>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/contact'>CONTACT</Link>
      </Nav>
    </NavContainer>    
  )
}

export default Navbar
