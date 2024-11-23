import React from 'react';
import img from '../assets/images/login.png'; 

const Home = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 dark:text-white relative w-full h-screen flex flex-col-reverse sm:flex-row items-center justify-evenly px-4 md:px-12 bg-fixed bg-center bg-cover animate-background">
      {/* Text Content */}
      <div className="text-white text-center sm:text-left max-w-lg space-y-4 sm:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Welcome to BizManage Pro
        </h1>
        <p className="text-xl sm:text-2xl">
          Your business, our management solution. Explore the best features for managing and optimizing your business operations.
        </p>
        <button className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-400 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Image Content */}
      <div className="w-full sm:w-1/2">
        <img
          src={img}
          alt="A representation of the BizManage Pro software interface"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>

      {/* Background Animation */}
      <style jsx>{`
        @keyframes gradientBackground {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-background {
          background: linear-gradient(45deg, #2c3e50, #34495e);
          background-size: 400% 400%;
          animation: gradientBackground 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
