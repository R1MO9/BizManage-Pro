import React, { useState, useEffect } from 'react';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import ThemeSwitcher from '../common/theme_switcher';
import Button from '../common/button';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import image from '../../assets/images/User.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null); // State to hold the token value

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Check if token is present in cookies
    const userToken = Cookies.get('token');
    setToken(userToken);

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-gray-100 dark:bg-gray-900 dark:text-white shadow-lg z-30">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight">
          <Link to="/" className="text-yellow-400">BizManage Pro</Link>
        </div>

        {/* Navbar Links */}
        <nav className={`md:flex md:flex-row md:space-x-8 md:items-center md:gap-6 transition-all duration-300 md:static hidden md:p-0 space-y-4 md:space-y-0`}>
          <Link to="#home" className="text-lg text-gray-800 dark:text-white hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <Link to="#about" className="text-lg text-gray-800 dark:text-white hover:text-yellow-400 transition-colors duration-300">About</Link>
          <Link to="#services" className="text-lg text-gray-800 dark:text-white hover:text-yellow-400 transition-colors duration-300">Services</Link>
          <Link to="#contact" className="text-lg text-gray-800 dark:text-white hover:text-yellow-400 transition-colors duration-300">Contact</Link>

          {/* Conditionally render Button or User Logo */}
        </nav>

        {/* Theme Switcher */}
        <div className='flex items-center space-x-4'>
          <ThemeSwitcher />
          {token ? (
            <div className="items-center justify-center hidden md:flex">
              <img
                src={image}
                alt="User Logo"
                className="h-8 w-8 rounded-full border-2 border-black dark:border-yellow-400"
              />
            </div>
          ) : (
            <Button className="hidden md:block dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white" onClick={() => window.location.href = '/login'}>
              Get Started
            </Button>
          )}
        </div>

        {/* Mobile menu toggle button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl text-black dark:text-white focus:outline-none">
          {isOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-85 z-20 flex flex-col items-center justify-center">
          <div className="flex justify-end pt-4 pr-4 w-full">
            <button onClick={toggleMenu} className="text-white text-3xl">
              <MdOutlineClose />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 py-auto h-full">
            <Link to="#home" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">Home</Link>
            <Link to="#about" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">About</Link>
            <Link to="#services" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">Services</Link>
            <Link to="#contact" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">Contact</Link>

            {/* Conditionally render Button or User Logo */}
            {token ? (
              <div className="flex items-center justify-center border-2 border-black dark:border-yellow-400">
                <img
                  src={image}
                  alt="User Logo"
                  className="h-8 w-8 rounded-full"
                />
              </div>
            ) : (
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-white" onClick={() => window.location.href = '/login'}>
                Get Started
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
