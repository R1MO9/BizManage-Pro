import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center px-6 md:px-12 lg:px-20 transition-colors duration-300">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-12">
        About BizManage Pro
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-4 text-center max-w-2xl">
        BizManage Pro is an all-in-one business management solution tailored
        for small to medium-sized enterprises (SMEs). It empowers businesses to
        streamline operations, manage inventory, and improve customer
        relationships through a sleek, user-friendly interface.
      </p>

      {/* Features Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {/* Feature 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Secure Authentication
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Role-based access control ensures your data is secure.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Inventory Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Real-time stock tracking and automated alerts for low inventory.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Reporting & Analytics
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Visualize key metrics with customizable dashboards.
          </p>
        </div>
        {/* Feature 4 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            CRM Tools
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage customer relationships with ease.
          </p>
        </div>
        {/* Feature 5 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Multi-Location Support
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage operations across multiple locations seamlessly.
          </p>
        </div>
        {/* Feature 6 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Cloud Backup
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Automatic cloud backups ensure no data is lost.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Ready to Revolutionize Your Business?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Join thousands of SMEs who trust BizManage Pro to streamline their
          operations.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
