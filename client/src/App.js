import React, { useState } from "react";
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
  const [admin, setAdmin] = useState(true);
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<PageOne />} />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/pagedual" exact element={<PageDual />} />
          <Route path="/pagetwo" exact element={<PageTwo />} />
          <Route path="/profile" exact element={<ProfilePage />} />
          <Route
            path="/admin"
            exact
            element={admin ? <AdminPage /> : <Navigate replace to="/" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
