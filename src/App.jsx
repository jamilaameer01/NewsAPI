import { lazy, Suspense, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Trending from "./Pages/Trending";

import Layout from "./Components/Layout";
import Newsapp from "./Pages/Newsapp";
import Category from "./Pages/Category";
import Business from "./Pages/Business";
import Technology from "./Pages/Technology";
import Sports, { loader as sportsPageLoader } from "./Pages/Sports";
import CategoryLayout from "./Components/CategoryLayout";
import SportsDetail, {
  loader as sportsdetailPageLoader,
} from "./Pages/SportsDetail";
import Error from "./Components/Error";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const Newsappone = lazy(() => import("./Pages/Newsapp"));
const Sportstwo = lazy(() => import("./Pages/Sports"));
const SportsDetailtwo = lazy(() => import("./Pages/SportsDetail"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route
        index
        element={
          <Suspense
            fallback={<div className="text-red-800">Loading News App...</div>}
          >
            <Newsapp />
          </Suspense>
        }
        loader={async () => {
          return null;
        }}
      />
      <Route path="trending" element={<Trending />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />

      <Route
        path="category"
        element={<CategoryLayout />}
       
      >
        <Route index element={<Technology />} />
        <Route path="business" element={<Business />} />
        <Route
          path="sports"
          element={
            <Suspense fallback={<div>Loading Sports...</div>}>
              <Sports />
            </Suspense>
          }
          loader={sportsPageLoader}
        />
        <Route
          path="sports/:id"
          element={
            <Suspense fallback={<div>Loading Sports Detail...</div>}>
              <SportsDetail />
            </Suspense>
          }
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
