import React, { useState } from "react";

const MenuHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden z-50">
      <div className="space-y-2" onClick={toggleMenu}>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>
      {isOpen && (
        <div className="bg-gray-600 opacity-50 absolute right-6 p-4 shadow-md rounded">
          {/* Add your menu items here */}
          <a href="#PROJECT" className="block py-2 " onClick={toggleMenu}>
            <span className="text-white"> Project</span>
          </a>
          <a href="#ABOUT" className="block py-2" onClick={toggleMenu}>
            <span className="text-white"> About Me</span>
          </a>
          <a href="#WORK" className="block py-2" onClick={toggleMenu}>
            <span className="text-white"> Work</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default MenuHamburger;
