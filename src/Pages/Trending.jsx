import React from "react";
import {useOutletContext} from "react-router-dom"
const Trending = () => {
  const { isOpen, setIsOpen } = useOutletContext();
  
  return (
    <div className="md:pl-16">
      <h1>Trending</h1>
      {/* Add your content here */}
    </div>
  );
};

export default Trending;
