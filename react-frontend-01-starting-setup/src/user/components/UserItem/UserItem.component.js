import React from "react";
import { Avatar } from "../../../shared/components/UIElements/Avatar/Avatar.component";
import { CardWrapper } from "../../../shared/components/UIElements/CardWrapper/CardWrapper.component";
import {
  UserItemContainer,
  UserItemLinkWrapper,
  UserItemImage,
  UserItemInfo,
  UserName,
  UserPlaceCount,
} from "./UserItem.styles";

export const UserItem = ({ id, name, image, places }) => {
  return (
    <UserItemContainer>
      <CardWrapper>
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
      </CardWrapper>
    </UserItemContainer>
  );
};
