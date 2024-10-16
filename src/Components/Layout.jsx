import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from "react-router-dom";

const Layout = () => {

      return (
    <div className="">
      <Sidebar />
      <div className="md:pl-7">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout