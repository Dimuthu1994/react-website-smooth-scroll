import React from "react";
import {
  SideContainer,
  Icon,
  CloseIcon,
  SideWrapper,
  SideMenu,
  SideLink,
  SideBtnWrap,
  SideRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SideContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideWrapper>
        <SideMenu>
          <SideLink to="about" onClick={toggle}>
            About
          </SideLink>
          <SideLink to="discover" onClick={toggle}>
            Discover
          </SideLink>
          <SideLink to="services" onClick={toggle}>
            Services
          </SideLink>
          <SideLink to="signup" onClick={toggle}>
            Sign Up
          </SideLink>
        </SideMenu>

        <SideBtnWrap>
          <SideRoute to="/signin">Sign In</SideRoute>
        </SideBtnWrap>
      </SideWrapper>
    </SideContainer>
  );
}

export default Sidebar;
