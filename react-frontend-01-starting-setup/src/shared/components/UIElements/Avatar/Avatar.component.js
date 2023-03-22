import React from "react";
import { AvatarContainer, AvatarImage } from "./Avatar.styles";

export const Avatar = ({ image, alt, width, className, style }) => {
  return (
    <AvatarContainer className={className} style={style}>
      <AvatarImage
        src={image}
        alt={alt}
        style={{ width: width, height: width }}
      />
    </AvatarContainer>
  );
};
