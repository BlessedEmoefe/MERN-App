import React from 'react';

import { CardWrapperContainer } from "./CardWrapper.style.js";

export const CardWrapper = ({ className,style,children }) => {
  return (
    <CardWrapperContainer
      className={className}
      style={style}
    >
      {children}
    </CardWrapperContainer>
  );
};
