import React from "react";
import { NavLinksContainer, NavLinksBox, Link } from "./NavLinks.styles";

export const NavLinks = () => {
  return (
    <NavLinksContainer>
      <NavLinksBox>
        <Link to="/" exact>All Users</Link>
      </NavLinksBox>
      <NavLinksBox>
        <Link to="/u1/places">My Places</Link>
      </NavLinksBox>
      <NavLinksBox>
        <Link to="/places/new">Add Places</Link>
      </NavLinksBox>
      <NavLinksBox>
        <Link to="/auth">Authenticate</Link>
      </NavLinksBox>
    </NavLinksContainer>
  );
};
