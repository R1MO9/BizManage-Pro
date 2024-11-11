import React, { useState } from 'react';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">MyLogo</div>
      <nav className={`flex-col items-center space-y-4 md:flex md:flex-row md:space-y-0 ${isOpen ? 'flex' : 'hidden'}`}>
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#services" className="hover:text-yellow-400">Services</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>
        <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
        </button>
    </header>
  );
};

export default Navbar;
