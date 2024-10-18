import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Routes,
  Route,
} from "react-router-dom";
import Trending from "./Pages/Trending";

import Layout from "./Components/Layout";
import Newsapp from "./Pages/Newsapp";
import Category from "./Pages/Category";
import Business from "./Pages/Business";
import Technology from "./Pages/Technology";
import Sports, { loader as sportsPageLoader } from "./Pages/Sports";
import CategoryLayout from "./Components/CategoryLayout";
import SportsDetail, { loader as sportsdetailPageLoader } from "./Pages/SportsDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Newsapp />} />
      <Route path="trending" element={<Trending />} />

      <Route path="category" element={<CategoryLayout />}>
        <Route index element={<Technology />} />
        <Route path="business" element={<Business />} />
        <Route path="sports" element={<Sports />} loader={sportsPageLoader} />
        <Route
          path="sports/:id"
          element={<SportsDetail />}
          loader={sportsdetailPageLoader}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
