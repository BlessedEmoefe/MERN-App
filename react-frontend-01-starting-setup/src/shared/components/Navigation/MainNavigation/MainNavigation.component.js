import React, { useState } from "react";
import { MainHeader } from "../MainHeader/MainHeader.component";
import { NavLinks } from "../NavLinks/NavLinks.component";
import { SideDrawer } from "../SideDrawer/SideDrawer.component";
import {
  DrawerNav,
  MenuIcon,
  HeaderWrapper,
  H1,
  Nav,
} from "./MainNavigation.styles";
import {Backdrop} from "../../UIElements/Backdrop/Backdrop.component";

export const MainNavigation = ({ children }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const handleOpenDrawer = () => {
    setDrawerIsOpen(true);
  };
  const handleCloseDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={handleCloseDrawer} />}

      <SideDrawer show={drawerIsOpen} onClick={handleCloseDrawer}>
        <DrawerNav>
          <NavLinks />
        </DrawerNav>
      </SideDrawer>

      <MainHeader>
        <MenuIcon fontSize={"1.2rem"} color="#fff" onClick={handleOpenDrawer} />
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
