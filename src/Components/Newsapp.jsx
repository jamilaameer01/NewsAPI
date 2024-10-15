import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { RiMenuFold2Fill } from "react-icons/ri";
import axios from "axios";
import { SlBadge } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";


const Newsapp = () => {
 const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(false);
     const [isCollapsed, setIsCollapsed] = useState(false);

     const handleCollapse = () => {
       setIsCollapsed(!isCollapsed);
     };
   
 const API_KEY = "9c3ed8ee95884dec979460a60f96675b";
    const getData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
          );
          const jsonData = await response.data;
          console.log(jsonData.articles);

          setNewsData(jsonData.articles);
        } catch (error) {
          console.error("Error fetching data", error);
        } finally {
          setLoading(false); 
        }
 };
 
 const handleInput = (e) => {
   console.log(e.target.value);
   setSearch(e.target.value);
 };
 const userInput = (event) => {
     setSearch(event.target.value);
     
    };
    useEffect(() => {
      getData();
    }, [search]);
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
   setIsMenuOpen((prev) => !prev);
 };

  return (
    <div className="relative">
      <nav className="flex justify-around items-center bg-blue-400 p-9 xs:flex-col xs:w-full xs:overflow-x-hidden xs:p-3 ">
        <span className="text-[50px] text-black xs:text-[20px] ">
          Trendy News
        </span>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2">
            <RiMenuFold2Fill />
          </button>
        </div>
      <ul
      className={`fixed left-0 top-0 h-full bg-white shadow-md flex flex-col gap-y-7 transform transition-transform duration-300 ease-in-out 
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden 
        ${isCollapsed ? "w-16" : "w-3/4"}`} 
    >
      <SlArrowRight 
        onClick={handleCollapse} 
        className="absolute right-[-5px] text-[23px] top-80 cursor-pointer lg:hidden" 
      />
      <li className="flex pl-2 items-center ">
        <SlBadge className="lg:hidden" />
        {!isCollapsed && (
          <Link to="/all-news" className="block px-4 py-2 ">
            All News
          </Link>
        )}
      </li>
      <li className="flex pl-2 items-center">
        <SlBadge className="lg:hidden" />
        {!isCollapsed && (
          <Link to="/trending" className="block px-4 py-2">
            Trending
          </Link>
        )}
      </li>
      <li className="flex pl-2 items-center">
        <SlBadge className="lg:hidden" />
        {!isCollapsed && (
          <Link to="/trending" className="block px-4 py-2">
            Trending
          </Link>
        )}
      </li>
      <li className="flex pl-2 items-center">
        <SlBadge className="lg:hidden" />
        {!isCollapsed && (
          <Link to="/trending" className="block px-4 py-2">
            Trending
          </Link>
        )}
      </li>
      <li className="flex pl-2 items-center">
        <SlBadge className="lg:hidden" />
        {!isCollapsed && (
          <Link to="/trending" className="block px-4 py-2">
            Trending
          </Link>
        )}
      </li>
    </ul>

        <div className="flex items-center gap-[11px] text-[20px] xs:w-full xs:justify-around xs:pt-3">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            className="h-[20px] p-9  border-none  text-left xs:p-6 xs:rounded-lg xs:max-w-[12rem]"
            onChange={handleInput}
          />
          <button
            onClick={getData}
            className="  bg-blue-900 border-none rounded-sm text-white xs:py-2 cursor-pointer xs:rounded-lg xs:max-w-[6rem]"
          >
            Search
          </button>
        </div>
      </nav>

      <div className="flex gap-6 justify-center pt-10 overflow-x-scroll hide-scrollbar">
        <button
          onClick={userInput}
          value="sports"
          className="bg-yellow-500 rounded-full "
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
;
export default Newsapp;


