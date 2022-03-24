import React from 'react';
import { NavContainer, NavLogo, Nav, Link, LinkSpacer, NavPhoneEmail, NavPhoneButton, NavEmailButton, DropdownBars } from '../CSS/navbarStyles';
import { FaDotCircle, FaPhoneAlt, FaBars } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
export const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <NavLogo />
        <Link to='/'>HOME</Link>
        <LinkSpacer>
          <FaDotCircle/>
        </LinkSpacer>
        <Link to='/about'>ABOUT US</Link>
        <LinkSpacer>
          <FaDotCircle/>
        </LinkSpacer>
        <Link to='/contact'>CONTACT</Link>
        <LinkSpacer>
          <FaDotCircle/>
        </LinkSpacer>
        <Link to='/photo'>PHOTO GALLERY</Link>
        <NavPhoneEmail>
          <NavPhoneButton>
            <FaPhoneAlt style={{'color': '#35f731', 'margin': '0rem 1rem', 'fontSize': '1.5rem'}} />
          </NavPhoneButton>
          <NavEmailButton>
            <HiOutlineMail style={{'color': '#195AE5', 'margin': '0rem 1rem', 'fontSize': '2rem'}} />
          </NavEmailButton>     
        </NavPhoneEmail>
        <DropdownBars>
          <FaBars />
        </DropdownBars>
      </Nav>
    </NavContainer>
  )
}

export default Navbar
