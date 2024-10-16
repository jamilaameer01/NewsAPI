import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiNewspaper } from "react-icons/hi";
import { RiMenuFold2Fill } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";

const Sidebar = ({ isOpen, setIsOpen }) => {
  
  const [showLinks, setShowLinks] = useState(false); // State for showing/hiding links

  // Effect to handle the initial state based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Show the sidebar by default on medium and larger screens
        setShowLinks(true); // Show links by default on medium and larger screens
      } else {
        setIsOpen(false); // Hide the sidebar on small screens
        setShowLinks(false); // Hide links on small screens
      }
    };

    handleResize(); // Call on initial load
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
      setShowLinks(true);
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
      
  };

  const handleClose = () => {
    if (window.innerWidth < 768) {
        setIsOpen(false);
         document.body.style.overflow = "unset";
    } else {
        setShowLinks(!showLinks);
       document.body.style.overflow = "unset";  
    }
    };
     const handleLinkClick = () => {
        if (window.innerWidth < 768) {
          setIsOpen(false); 
         }
        else {
            setShowLinks(false)
         }
    };
    

  return (
    <div>
      <nav className="flex justify-around items-center bg-blue-400 p-9 xs:flex-col xs:w-full xs:overflow-x-hidden xs:p-3">
        <span className="text-[50px] text-black xs:text-[20px] tb:text-[29px]">
          Trendy News
        </span>

        <div className="md:hidden flex items-center">
          <button onClick={handleClick} className="p-2">
            <RiMenuFold2Fill />
          </button>
        </div>
        <ul className="lg:flex hidden">
          <li className="flex gap-3 items-center">
            <HiNewspaper className="block lg:hidden" />
            <Link to="/" className="block px-4 py-2 text-[20px]">
              News App
            </Link>
          </li>
          <li className="flex gap-3 items-center ">
            <HiNewspaper className="block lg:hidden" />
            <Link to="/all-news" className="block px-4 py-2 text-[20px]">
              All News
            </Link>
          </li>
          <li className="flex gap-3 items-center">
            <HiNewspaper className="block lg:hidden" />
            <Link to="/trending" className="block px-4 py-2 text-[20px]">
              Trending
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-[11px] text-[20px] xs:w-full xs:justify-around xs:pt-3">
          <button className="bg-blue-900 border-none rounded-sm text-white xs:py-2 cursor-pointer xs:rounded-lg xs:max-w-[6rem]">
            Logout
          </button>
        </div>
      </nav>
      {/* Sidebar with conditional width */}
      <div
        className={`h-[100vh] bg-white fixed inset-0 z-10 transition-all duration-500 lg:hidden ${
          !isOpen ? "-translate-x-full" : "translate-x-0"
        } ${showLinks ? "w-44" : "w-14"}`} // Adjust width based on showLinks
      >
        <div className="lg:hidden flex items-center">
          <IoIosArrowDropright
            onClick={handleClose}
            className={`absolute right-[-1px] md:right-[-15px] text-[44px] top-80 cursor-pointer transition-transform duration-300 ease-in-out`}
          />
        </div>

        <ul className="xs:gap-3 md:flex md:flex-col md:gap-y-5 pl-3 pt-3">
          <li className="flex gap-3 items-center" onClick={handleLinkClick}>
            <HiNewspaper />
            {showLinks && (
              <Link to="/" className="block px-4 py-2 text-[20px]">
                News App
              </Link>
            )}
          </li>
          <li className="flex gap-3 items-center" onClick={handleLinkClick}>
            <HiNewspaper />
            {showLinks && (
              <Link to="/all-news" className="block px-4 py-2 text-[20px]">
                All News
              </Link>
            )}
          </li>
          <li className="flex gap-3 items-center" onClick={handleLinkClick}>
            <HiNewspaper />
            {showLinks && (
              <Link to="/trending" className="block px-4 py-2 text-[20px]">
                Trending
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
