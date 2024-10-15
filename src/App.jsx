import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllNews from "./Pages/AllNews";
import Trending from "./Pages/Trending";
import Newsapp from "./Components/Newsapp";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Newsapp />} /> 
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
