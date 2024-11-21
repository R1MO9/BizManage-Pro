// src/components/NotFound.js
import React, { useState, useEffect } from "react";

const NotFound = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    // Toggle dark/light mode
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("theme", !darkMode ? "dark" : "light");
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div
            className={`min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900 transition-all duration-300`}
        >
            {/* Dark/Light Mode Toggle */}
            <button
                onClick={toggleTheme}
                className="absolute top-6 right-6 p-3 rounded-full text-2xl transition-all transform hover:scale-110 dark:text-yellow-400 text-blue-500 dark:bg-gray-800 bg-white dark:hover:bg-gray-600 hover:bg-blue-200 dark:hover:bg-gray-700"
            >
                🌙 / 🌞
            </button>

            {/* Main 404 Section */}
            <div className="space-y-8 flex flex-col items-center justify-center">
                {/* Large 404 Text with Scaling Animation */}
                <h1 className="text-9xl sm:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-fadeInScale">
                    404
                </h1>

                {/* Error Message */}
                <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-6 animate-fadeInUp">
                    Oops! Page Not Found.
                </p>

                {/* Bounce Animation */}
                <div className="relative animate-bounce-slow mb-8">
                    <svg
                        className="w-24 h-24 sm:w-36 sm:h-36 text-blue-500 dark:text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12h3m-3 0l-3 3m3-3l-3-3M5 12h3m-3 0l3 3m-3-3l3-3"
                        />
                    </svg>
                </div>

                {/* Back Home Link */}
                <a
                    href="/"
                    className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-yellow-400 hover:underline transition-all transform hover:scale-110"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
