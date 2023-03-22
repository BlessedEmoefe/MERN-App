import React from "react";
import { UserItem } from "../UserItem/UserItem.component";
import { UserListContainer } from "./UsersList.styles";

export const UsersList = ({ items }) => {
  if (items.length === 0) {
    return <UserListContainer className="noUser">No Users Found</UserListContainer>;
  }

  return (
    <UserListContainer>
      {items.map(({ id, name, image, places }) => (
        <UserItem key={id} id={id} name={name} image={image} places={places} />
      ))}
    </UserListContainer>
  );
};
