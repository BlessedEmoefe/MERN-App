import React from "react";
import { UsersList } from "../components/UsersList/UsersList.component";
import Places1 from "../../assets/place1.jpg"

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Blemo Onoriode",
      image: Places1,
      places: 2,
    },
  ];
  return <UsersList items={USERS}/>
};

export default User;
