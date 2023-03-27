import React from "react";
import { Button } from "../../../shared/components/FormElements/Button/Button.component";
import { CardWrapper } from "../../../shared/components/UIElements/CardWrapper/CardWrapper.component";
import {
  PlaceItemContainer,
  PlaceItemImage,
  Image,
  PlaceItemInfo,
  PlaceItemTitle,
  PlaceItemAddress,
  PlaceItemDescription,
  PlaceItemActions
} from "./PlaceItem.styles";

export const PlaceItem = ({
  key,
  id,
  image,
  title,
  description,
  address,
  creatorId,
  coordinates,
}) => {
  return (
    <PlaceItemContainer>
      <CardWrapper>
        <PlaceItemImage>
          <Image src={image} alt={title} />
        </PlaceItemImage>
        <PlaceItemInfo>
          <PlaceItemTitle>{title}</PlaceItemTitle>
          <PlaceItemAddress>{address}</PlaceItemAddress>
          <PlaceItemDescription>{description}</PlaceItemDescription>
        </PlaceItemInfo>
        <PlaceItemActions>
          <Button inverse >VIEW ON MAP</Button>
          <Button to={`/places/${id}`} >EDIT</Button>
          <Button danger >DELETE</Button>
        </PlaceItemActions>
      </CardWrapper>
    </PlaceItemContainer>
  );
};
