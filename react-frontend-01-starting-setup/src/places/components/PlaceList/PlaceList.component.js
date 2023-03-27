import React from "react";
import { CardWrapper } from "../../../shared/components/UIElements/CardWrapper/CardWrapper.component";
import { PlaceItem } from "../PlaceItem/PlaceItem.component";
import {
  PlaceListEmptyContainer,
  H2,Button,
  PlaceListContainer,
} from "./PlaceList.styles";

export const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <PlaceListEmptyContainer className="center">
        <CardWrapper>
        <H2>No Places found. Maybe create one?</H2>
        <Button>Share Place</Button>
          </CardWrapper>
      </PlaceListEmptyContainer>
    );
  }

  return (
    <PlaceListContainer>
      {items.map(
        ({ id, imageUrl, title, description, address, creator, location }) => (
          <PlaceItem
            key={id}
            id={id}
            image={imageUrl}
            title={title}
            description={description}
            address={address}
            creatorId={creator}
            coordinates={location}
          />
        )
      )}
    </PlaceListContainer>
  );
};
