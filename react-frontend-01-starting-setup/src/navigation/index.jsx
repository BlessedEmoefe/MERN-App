import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPlace from "../places/pages/NewPlace/NewPlace.page";
import UserPlaces from "../places/pages/UserPlaces/UserPlaces.page";
import { MainNavigation } from "../shared/components/Navigation/MainNavigation/MainNavigation.component";
import User from "../user/pages/User.page";
// import

const Router = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main style={{ marginTop: "5rem" }}>
        <Routes>
          <Route path="/" exact element={<User />} />
          <Route path="/:userId/places" exact element={<UserPlaces />} />
          <Route path="/places/new" exact element={<NewPlace />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's No Page like this!!!</p>
              </main>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
