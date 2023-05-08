import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageDual from "./Pages/PageDual/PageDual";
import PageOne from "./Pages/PageOne/PageOne";
import PageTwo from "./Pages/PageTwo/PageTwo";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import Auth from "./Pages/Auth/Auth";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const profileData = JSON.parse(localStorage.getItem("profile"));
  console.log("profileData");
  console.log(profileData);

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        {profileData ? <Navbar /> : ""}
        <Routes>
          <Route
            path="/"
            exact
            element={
              profileData ? <PageOne /> : <Navigate replace to="/auth" />
            }
          />
          <Route path="/auth" exact element={<Auth />} />
          <Route
            path="/pagedual"
            exact
            element={
              profileData ? <PageDual /> : <Navigate replace to="/auth" />
            }
          />
          <Route
            path="/pagetwo"
            exact
            element={
              profileData ? <PageTwo /> : <Navigate replace to="/auth" />
            }
          />
          <Route
            path="/profile"
            exact
            element={
              profileData ? <ProfilePage /> : <Navigate replace to="/auth" />
            }
          />
          <Route
            path="/admin"
            exact
            element={
              profileData ? <AdminPage /> : <Navigate replace to="/auth" />
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
