import React, { useState, useEffect, useContext } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

//Pages
import Landing from "./pages/dashboard/landing";
import SetUp from "./pages/dashboard/dashboardFeatures/setUp";
import Dashboard from "./pages/dashboard/dashboardFeatures/dashboard";
import GameInstructions from "./pages/dashboard/dashboardFeatures/gameInstructions";
import ThreatSelect from "./pages/dashboard/dashboardFeatures/threatselect";
import TTXGame from "./pages/dashboard/dashboardFeatures/startgame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />
        <Route path="/SetUp" element={<SetUp />} />

        {/* Dashboard Page */}
        <Route path="/Dashboard">
          <Route index element={<Dashboard />} />
          <Route path="GameInstructions" element={<GameInstructions />} />
          <Route path="ThreatSelect" element={<ThreatSelect />} />
        </Route>
        <Route path="/TTXGame" element={<TTXGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
