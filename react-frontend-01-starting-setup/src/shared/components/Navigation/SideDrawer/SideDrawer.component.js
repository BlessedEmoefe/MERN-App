import React from "react";
import ReactDOM from "react-dom";
import { SideDrawerContainer } from "./SideDrawer.styles";

export const SideDrawer = ({ children }) => {
  const content = <SideDrawerContainer>{children}</SideDrawerContainer>;

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
