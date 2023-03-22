import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiThMenu as Icon } from "react-icons/ti";

export const MenuIcon = styled(Icon)`
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
    font-size: 1rem;
  }
`;

export const HeaderWrapper = styled(Link)`
  text-decoration: none;
  color: white;
`;
export const H1 = styled.h1`
  color: white;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Nav = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
export const DrawerNav = styled.nav`
  height: 100%;
  @media (min-width: 768px) {
  }
`;
