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

        <Button>
          <Link to="/business-profile" className="text-gray-50">
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
