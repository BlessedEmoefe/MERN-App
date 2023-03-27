import React from 'react';
import ReactDOM from "react-dom";
import { BackDrop } from "./Backdrop.styles";

export const Backdrop = ({onClick}) => {
  return ReactDOM.createPortal(
    <BackDrop onClick={onClick}></BackDrop>,document.getElementById('backdrop-hook')
  ) 
}
