import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { Outlet} from "react-router-dom";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  
      return (
    <div className="">
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="">
        <Outlet context={{isOpen,setIsOpen}} /> 
      </div>
    </div>
  );
};

export default Layout