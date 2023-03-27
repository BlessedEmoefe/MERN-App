import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { SideDrawerContainer } from "./SideDrawer.styles";

export const SideDrawer = ({ children, show, onClick }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <SideDrawerContainer onClick={onClick}>{children}</SideDrawerContainer>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
