import React from 'react';
import { FaBars } from 'react-icons/fa';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from './NavBar.styles';

export const Navbar = ({ toggle }) => (
  <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">dolla</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/signup">Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  </>
);
