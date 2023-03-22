import React from "react";
import { Avatar } from "../../../shared/components/UIElements/Avatar/Avatar.component";
import {
  UserItemContainer,
  UserItemContent,
  UserItemLinkWrapper,
  UserItemImage,
  UserItemInfo,
  UserName,
  UserPlaceCount,
} from "./UserItem.styles";

export const UserItem = ({ id, name, image, places }) => {
  return (
    <UserItemContainer>
      <UserItemContent>
        <UserItemLinkWrapper to={`/${id}/places`}>
          <UserItemImage>
            <Avatar image={image} alt={name} />
          </UserItemImage>
          <UserItemInfo>
            <UserName className="cardText">{name}</UserName>
            <UserPlaceCount className="cardText">
              {places} {places === 1 ? "Place" : "Places"}
            </UserPlaceCount>
          </UserItemInfo>
        </UserItemLinkWrapper>
      </UserItemContent>
    </UserItemContainer>
  );
};
