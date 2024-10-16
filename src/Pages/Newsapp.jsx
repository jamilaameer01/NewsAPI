import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { RiMenuFold2Fill } from "react-icons/ri";
import axios from "axios";
import { SlBadge } from "react-icons/sl";
import { IoIosArrowDropright } from "react-icons/io";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // Controls sidebar collapse state
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Controls sidebar visibility for mobile

  const API_KEY = "7842e68e59fa40b2b8ecb4c11e8dbef5";

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.data;
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to toggle sidebar collapse for different screen sizes
  const handleCollapse = () => {
    if (window.innerWidth < 768) {
      setIsSidebarVisible(false); // Hide sidebar on small screens when arrow is clicked
    } else {
      setIsCollapsed((prev) => !prev); // Collapse the sidebar for medium screens and above
    }
  };

  // Function to toggle sidebar visibility for mobile devices
  const toggleMenu = () => {
    setIsSidebarVisible((prev) => !prev); // Toggle sidebar visibility for mobile
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
  };

  // Handle screen resize to reset the sidebar states for mobile and tablet
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(false); // Reset collapsed state on small screens
        setIsSidebarVisible(false); // Ensure sidebar is hidden on small screens
      } else {
        setIsSidebarVisible(true); // Sidebar is visible on tablet and larger by default
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="relative">

      {/* Category Buttons */}
      <div className="flex gap-6 justify-center pt-10 overflow-x-scroll hide-scrollbar">
        <button
          onClick={userInput}
          value="sports"
          className="bg-yellow-500 rounded-full"
        >
          Sports
        </button>
        <button
          onClick={userInput}
          value="politics"
          className="bg-red-500 rounded-full"
        >
          Politics
        </button>
        <button
          onClick={userInput}
          value="entertainment"
          className="bg-green-500 rounded-full"
        >
          Entertainment
        </button>
        <button
          onClick={userInput}
          value="health"
          className="bg-pink-500 rounded-full"
        >
          Health
        </button>
        <button
          onClick={userInput}
          value="fitness"
          className="bg-purple-500 rounded-full"
        >
          Fitness
        </button>
      </div>

      {/* Loading Spinner or Cards */}
      {loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-600">
            <p className="ml-4"></p>
          </div>
        </div>
      ) : (
        newsData && <Card data={newsData} />
      )}
    </div>


  );
};

export default Newsapp;
