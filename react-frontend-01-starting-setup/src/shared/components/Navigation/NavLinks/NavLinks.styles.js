import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinksContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const NavLinksBox = styled.li`
  margin: 1rem;

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }
`;

export const Link = styled(NavLink)`
  border: 1px solid transparent;
  color: #292929;
  text-decoration: none;
  padding: 0.5rem;
  :hover,
  :active,
  &.active {
    background: #f8df00;
    border-color: #292929;
    color: #292929;
  }

  @media (min-width: 768px) {
    color: white;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #292929;
  color: #292929;
  background: transparent;
  padding: 0.5rem;
  font: inherit;

  :focus {
    outline: none;
  }

  :hover,
  :active {
    background: #292929;
    color: white;
  }
  @media (min-width: 768px) {
    border: 1px solid white;
    color: white;
    background: transparent;

    :hover,
    :active {
      background: #f8df00;
      color: #292929;
    }
  }
`;
