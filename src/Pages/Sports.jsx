import React from 'react'
import { HiNewspaper } from 'react-icons/hi';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Sports = () => {
    const activeStyles = {
      fontWeight: "bold",
      textDecoration: " overline ",
      color: "#0f766e",
    };
  return (
    <div className="w-[500px] mx-auto pt-[100px]">
      <button>
        <Link />
      </button>
      <div className="h-[200px]  bg-slate-500">
        <div className="flex gap-7 justify-center pt-3 items-center">
          <div>
            <img src="/sports.jpg" alt="sports" />
          </div>
          <div>
            <h2 className="text-[23px] text-white  font-semibold">
              olympics 2024
            </h2>
          </div>
        </div>
      </div>

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
              Football
            </NavLink>
          </li>
          <li className="flex gap-3 items-center ">
            <HiNewspaper className="block lg:hidden" />
            <NavLink
              to="cricket"
              className="block px-4 py-2 text-[20px]
         
          "
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Cricket
            </NavLink>
          </li>
          <li className="flex gap-3 items-center">
            <HiNewspaper className="block lg:hidden" />
            <NavLink
              to="boxing"
              className="block px-4 py-2 text-[20px]
          
          "
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Boxing
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

export default Sports