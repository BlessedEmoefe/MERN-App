import React from "react";
import { PlaceList } from "../../components/PlaceList/PlaceList.component";
import { useParams } from "react-router-dom";

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: "1",
      title: "Wall St",
      description: "The Business world of the ambitious",
      imageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipOBq9BN3psjBD3_nYYdZaaFDgDpOXUQdFXZzmJF=w408-h306-k-no",
      address: "New York, NY, USA",
      creator: "u1",
      location: {
        lat: 40.7060361,
        lng: -74.0110143,
      },
    },
    {
      id: "2",
      title: "Wall St",
      description: "The Business world of the ambitious",
      imageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipOBq9BN3psjBD3_nYYdZaaFDgDpOXUQdFXZzmJF=w408-h306-k-no",
      address: "New York, NY, USA",
      creator: "u2",
      location: {
        lat: 40.7060361,
        lng: -74.0110143,
      },
    },
    {
      id: "3",
      title: "Wall St",
      description: "The Business world of the ambitious",
      imageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipOBq9BN3psjBD3_nYYdZaaFDgDpOXUQdFXZzmJF=w408-h306-k-no",
      address: "New York, NY, USA",
      creator: "u3",
      location: {
        lat: 40.7060361,
        lng: -74.0110143,
      },
    },
  ];

  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
