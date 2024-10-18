import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending";

import Layout from "./Components/Layout";
import Newsapp from "./Pages/Newsapp";
import Category from "./Pages/Category";
import Business from "./Pages/Business";
import Technology from "./Pages/Technology";
import Sports from "./Pages/Sports";
import CategoryLayout from "./Components/CategoryLayout";
import Football from "./Pages/Football";
import Cricket from "./Pages/Cricket";
import Boxing from "./Pages/Boxing";
import SportsDetail from "./Pages/SportsDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Newsapp />} />
          <Route path="trending" element={<Trending />} />

          <Route path="category" element={<CategoryLayout />}>
            <Route index element={<Technology />} />
            <Route path="business" element={<Business />} />
            <Route path="sports" element={<Sports />} />
            <Route path="sports/:id" element={<SportsDetail />} />
            
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
