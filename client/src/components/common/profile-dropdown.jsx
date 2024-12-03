import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaBriefcase, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserImg from '../../assets/images/User.png';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10">
      <button
        ref={buttonRef}
        className="flex items-center justify-center h-10 w-10 rounded-full border-2 border-black dark:border-yellow-400"
        onClick={toggleDropdown}
        aria-label="Profile"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
      >
        <img
          src={UserImg}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 rounded-lg shadow-lg"
        >
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FaUser className="mr-2" />
            Profile
          </Link>
          <Link
            to="/business"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FaBriefcase className="mr-2" />
            Business
          </Link>
          <Link
            to="/logout"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
