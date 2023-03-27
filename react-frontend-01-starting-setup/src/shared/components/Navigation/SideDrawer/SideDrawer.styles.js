import styled from "styled-components";

export const SideDrawerContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width:70%;
  background:#fff;
  display:none;
  /* box-shadow: 0 ; */

  @media (max-width: 768px) {
      display:flex;
      flex-direction: column;
      align-items:center;
  }
`;
