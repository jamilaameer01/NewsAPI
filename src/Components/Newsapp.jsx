import React, { useEffect, useState } from "react";
import Card from "./Card";
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
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Controls sidebar visibility for mobile

  const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

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
      // For small screens, completely hide the sidebar
      setIsSidebarVisible((prev) => !prev);
    } else {
      // For medium screens and above, collapse the sidebar (hide the text)
      setIsCollapsed((prev) => !prev);
    }
  };

  // Function to toggle sidebar visibility for mobile devices
  const toggleMenu = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className="relative">
      <nav className="flex justify-around items-center bg-blue-400 p-9 xs:flex-col xs:w-full xs:overflow-x-hidden xs:p-3">
        <span className="text-[50px] text-black xs:text-[20px] tb:text-[29px]">
          Trendy News
        </span>

        {/* Desktop */}
        <ul className="hidden lg:flex">
          <Link to="/all-news" className="block px-4 py-2">
            All News
          </Link>
          <Link to="/trending" className="block px-4 py-2">
            Trending
          </Link>
        </ul>

        {/* Menu icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2">
            <RiMenuFold2Fill />
          </button>
        </div>

        {/* Sidebar */}
        <ul
          className={`fixed left-0 top-0 h-full bg-white lg:hidden sm:hidden pt-6 shadow-md flex flex-col gap-y-7 transform transition-transform duration-300 ease-in-out
            ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"} 
            ${isCollapsed ? "md:w-16" : "md:w-64"} md:flex md:translate-x-0`}
        >
          {/* Arrow to collapse and hide the sidebar */}
          <IoIosArrowDropright
            onClick={handleCollapse}
            className={`absolute right-[-1px] md:right-[-15px] text-[44px]  top-80 cursor-pointer transition-transform duration-300 ease-in-out
          ${isCollapsed ? "rotate-180" : ""} transform`}
          />

          <li className="flex pl-2 items-center">
            <SlBadge />
            {/* Links are hidden if collapsed */}
            {!isCollapsed && (
              <Link to="/all-news" className="block px-4 py-2">
                All News
              </Link>
            )}
          </li>
          <li className="flex pl-2 items-center">
            <SlBadge />
            {!isCollapsed && (
              <Link to="/trending" className="block px-4 py-2">
                Trending
              </Link>
            )}
          </li>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center gap-[11px] text-[20px] xs:w-full xs:justify-around xs:pt-3">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            className="h-[20px] p-9 border-none text-left xs:p-6 xs:rounded-lg xs:max-w-[12rem]"
            onChange={handleInput}
          />
          <button
            onClick={getData}
            className="bg-blue-900 border-none rounded-sm text-white xs:py-2 cursor-pointer xs:rounded-lg xs:max-w-[6rem]"
          >
            Search
          </button>
        </div>
      </nav>

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
