import React, { useState } from "react";
import { MainHeader } from "../MainHeader/MainHeader.component";
import { NavLinks } from "../NavLinks/NavLinks.component";
import { SideDrawer } from "../SideDrawer/SideDrawer.component";
import {DrawerNav, MenuIcon, HeaderWrapper, H1, Nav } from "./MainNavigation.styles";

export const MainNavigation = ({ children }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useStateate(false)
  return (
    <React.Fragment>
      <SideDrawer>
        <DrawerNav>
          <NavLinks />
        </DrawerNav>
      </SideDrawer>
      <MainHeader>
        <MenuIcon fontSize={"1.2rem"} color="#fff" />
        <HeaderWrapper to="/">
          <H1>Your Places</H1>
        </HeaderWrapper>
        <Nav>
          <NavLinks />
        </Nav>
      </MainHeader>
    </React.Fragment>
  );
};
