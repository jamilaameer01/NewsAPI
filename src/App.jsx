import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllNews from "./Pages/AllNews";
import Trending from "./Pages/Trending";

import Layout from "./Components/Layout";
import Newsapp from "./Pages/Newsapp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Newsapp />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/trending" element={<Trending />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
