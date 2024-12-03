import React from "react";
import { motion } from "framer-motion";
import Button from "../components/common/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center px-8 py-16 md:px-16 md:py-20 lg:px-32 lg:py-28 transition-colors duration-300">
      {/* Page Header */}
      <motion.header
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          About BizManage Pro
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          BizManage Pro is a powerful, all-in-one solution designed for small to medium-sized businesses to manage operations, track inventory, and improve customer relationships—all from an intuitive and sleek dashboard.
        </motion.p>
      </motion.header>

      {/* Features Section */}
      <motion.section
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Feature 1 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Secure Authentication
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Protect your business with role-based access control and robust authentication features.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Inventory Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Keep track of your inventory in real-time with automatic stock updates and low inventory alerts.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Reporting & Analytics
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Generate detailed reports and visualize key business metrics to make data-driven decisions.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            CRM Tools
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Streamline customer interactions and improve relationships with easy-to-use CRM tools.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Multi-Location Support
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and scale your operations effortlessly across multiple locations with seamless synchronization.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Cloud Backup
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Automatically back up your data to the cloud, ensuring that your business information is always safe.
          </p>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="mt-20 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          How BizManage Pro Works
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          BizManage Pro simplifies your entire workflow with an easy-to-use dashboard. Whether you're managing inventory, customer relations, or tracking financial performance, everything is at your fingertips. Our solution is flexible and grows with your business.
        </p>
      </motion.section>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Join thousands of SMEs already benefiting from BizManage Pro's comprehensive suite of tools.
        </p>

        <Button className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-md text-lg font-semibold hover:bg-yellow-400 transition duration-300" onClick={() => window.location.href = '/login'}>
            Get Started
        </Button>
      </div>


      {/* <div className="absolute inset-0 pointer-events-none">
          <div className="animate-floating-objects">
            <div className="floating-object bg-red-400 dark:bg-gray-400"></div>
            <div className="floating-object bg-yellow-300 dark:bg-yellow-500"></div>
            <div className="floating-object bg-blue-400 dark:bg-blue-500"></div>
            <div className="floating-object bg-green-300 dark:bg-green-500"></div>
          </div>
        </div> */}


        {/* <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateX(0) translateY(0) scale(1);
          }
          25% {
            transform: translateX(30px) translateY(20px) scale(1.1);
          }
          50% {
            transform: translateX(-30px) translateY(-20px) scale(0.9);
          }
          75% {
            transform: translateX(50px) translateY(40px) scale(1.05);
          }
          100% {
            transform: translateX(0) translateY(0) scale(1);
          }
        }

        .animate-floating-objects {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 10;
          pointer-events: none;
        }

        .floating-object {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          animation: floating 10s ease-in-out infinite;
        }

        .floating-object:nth-child(1) {
          width: 120px;
          height: 120px;
          animation-duration: 12s;
          top: 10%;
          left: 30%;
          animation-delay: -3s;
        }

        .floating-object:nth-child(2) {
          width: 100px;
          height: 100px;
          animation-duration: 8s;
          top: 30%;
          left: 60%;
          animation-delay: -2s;
        }

        .floating-object:nth-child(3) {
          width: 140px;
          height: 140px;
          animation-duration: 15s;
          top: 60%;
          left: 40%;
          animation-delay: -1s;
        }

        .floating-object:nth-child(4) {
          width: 110px;
          height: 110px;
          animation-duration: 10s;
          top: 80%;
          left: 80%;
          animation-delay: -4s;
        }
      `}</style> */}
    </div>
  );
};

export default AboutPage;
