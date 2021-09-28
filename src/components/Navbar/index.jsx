import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

function Navbar({ toggle }) {
  const [scrolNav, setscrolNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscrolNav(true);
    } else {
      setscrolNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrolNav={scrolNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}>
            dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="signup">Sign Up</NavLink>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navbar;
