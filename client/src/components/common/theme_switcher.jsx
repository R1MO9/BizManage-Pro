import React, { useState, useEffect } from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
      className={`relative p-2 rounded transition duration-300 focus:outline-none ${theme === 'light' ? 'text-black' : 'text-white'}`}
    >
      <span
        className={`absolute inset-0 rounded-full transition duration-300 
          ${theme === 'light' ? 'shadow-lg shadow-yellow-500 opacity-50 hover:opacity-100' : 'shadow-lg shadow-blue-500 opacity-50 hover:opacity-100'}`}
      />
      <div className={`relative z-10`}>
        {theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
