import React from "react";

const Testimonials = ({ id, name, position, feedback, image }) => {
  return (
    <div
      key={id}
      className="max-w-xs bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
    >
      <div className="flex justify-center mb-6">
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-indigo-500 dark:border-indigo-400 shadow-lg"
        />
      </div>
      
      <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 italic text-center">
        "{feedback}"
      </p>
      
      <div className="mt-4 text-center text-gray-500 dark:text-gray-400 text-xs">
        <p>&#8212; {name}, {position}</p>
      </div>
    </div>
  );
};

export default Testimonials;
