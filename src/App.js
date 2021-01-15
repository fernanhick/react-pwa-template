import React, { useState, useEffect } from "react";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Dashboard,
  DashboardItem,
} from "./components/dashboard/DashboardElements";
import { Cards } from "./components/dashboard/widgets/Cards";

const App = () => {
  return (
    <Router>
      {" "}
      <Navbar />
      <div className="main-container"></div>
    </Router>
  );
};

export default App;
