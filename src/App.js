import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Components/Auth";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Adds from "./Components/Adds";
import AddsDetails from "./Components/AddsDetails";

function App() {
  // const loggedin = window.localStorage.getItem("login");
  // const a = JSON.parse(loggedin);
  return (
    <div>
      <Router>
        {/* {a &&  */}
        <Header />
        {/* } */}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/adds" element={<Adds />} />
          <Route path="/addsDetails" element={<AddsDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
