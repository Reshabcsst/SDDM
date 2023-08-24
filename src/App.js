import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Components/Auth";
import Header from "./Components/Header";
import AddsDetails from "./Components/AddsDetails";
import AddAdvertisement from "./Components/AddAdvertisement";
import Ward from "./Components/Ward";
import Assign from "./Components/Assign";
import RegisteredAgency from "./Components/RegisteredAgency";
import RecentPosts from "./Components/RecentPosts";
import { Grid } from "@mui/material";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <Grid container sx={{ flexGrow: 1 }}>
          <Header />
          <Grid item xs={0} md={2.3} xl={1.7}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9.7} xl={10.3}>
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/addWard" element={<Ward />} />
              <Route path="/assign" element={<Assign />} />
              <Route path="/registerAgancy" element={<RegisteredAgency />} />
              <Route path="/recentPosts" element={<RecentPosts />} />
              <Route path="/addsDetails" element={<AddsDetails />} />
              <Route path="/addsAdvertisement" element={<AddAdvertisement />} />
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;