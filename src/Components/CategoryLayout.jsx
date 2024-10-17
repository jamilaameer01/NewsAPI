import React from "react";
import { HiNewspaper } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";

const CategoryLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: " overline ",
    color: "#0f766e",
  };
  return (
    <div>
      <div className="md:pl-16 ">
        <ul className="flex gap-6 justify-center pt-10">
          <li className="flex gap-3 items-center">
            <HiNewspaper className="block lg:hidden" />
            <NavLink
              to="."
              end
              className="block px-4 py-2 text-[20px]
        
          "
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Technology News
            </NavLink>
          </li>
          <li className="flex gap-3 items-center ">
            <HiNewspaper className="block lg:hidden" />
            <NavLink
              to="business"
              className="block px-4 py-2 text-[20px]
         
          "
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Business News
            </NavLink>
          </li>
          <li className="flex gap-3 items-center">
            <HiNewspaper className="block lg:hidden" />
            <NavLink
              to="sports"
              className="block px-4 py-2 text-[20px]
          
          "
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Sports News
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default CategoryLayout;
