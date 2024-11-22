import React, { useState } from 'react';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import ThemeSwitcher from '../common/theme_switcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-lg">
      <div className="text-xl font-bold">BizManage Pro</div>
      
      {/* Navbar links (hidden on small screens, shown on larger ones) */}
      <nav className={`flex-col items-center space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-6 transition-all duration-300 absolute md:relative top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#services" className="hover:text-yellow-400">Services</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>
      
      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Mobile menu toggle */}
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {isOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
      </button>
    </header>
  );
};

export default Navbar;
