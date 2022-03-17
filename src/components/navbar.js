import React from 'react';
import { NavContainer, NavLogo, Nav, Link, NavPhoneEmail, NavPhoneButton, NavEmailButton } from '../CSS/navbarStyles';
import { FaDotCircle, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
export const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <NavLogo />
        <Link to='/'>HOME</Link>
        <FaDotCircle style={{'fontSize': '0.5rem'}} />
        <Link to='/about'>ABOUT US</Link>
        <FaDotCircle style={{'fontSize': '0.5rem'}} />
        <Link to='/contact'>CONTACT</Link>
        <FaDotCircle style={{'fontSize': '0.5rem'}} />
        <Link to='/photo'>PHOTO GALLERY</Link>
        <NavPhoneEmail>
          <NavPhoneButton>
            <FaPhoneAlt style={{'color': '#35f731', 'margin': '0rem 1rem', 'fontSize': '1.5rem'}} />
          </NavPhoneButton>
          <NavEmailButton>
            <HiOutlineMail style={{'color': '#195AE5', 'margin': '0rem 1rem', 'fontSize': '2rem'}} />
          </NavEmailButton>     
        </NavPhoneEmail>
      </Nav>
    </NavContainer>
  )
}

export default Navbar
