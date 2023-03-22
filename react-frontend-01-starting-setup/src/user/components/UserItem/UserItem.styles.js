import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserItemContainer = styled.li`
  margin: 1rem;
  width: calc(45% - 2rem);
  min-width: 17.5rem;
  :hover,
  :active {
    .cardText {
      color: #292929;
    }
  }
`;
export const UserItemContent = styled.div`
  position: relative;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  /* padding: 1rem; */
  overflow: hidden;
  background: white;
`;
export const UserItemLinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 1rem;
  color: white;
  background: #292929;

  :hover,
  :active {
    background: #ffd900;
  }
`;

export const UserItemImage = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;
export const UserItemInfo = styled.div``;
export const UserName = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  color: #ffd900;
`;
export const UserPlaceCount = styled.h3`
  margin: 0;
`;
// export const UserItemContainer = styled.div``;
