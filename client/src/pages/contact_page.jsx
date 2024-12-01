import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className='bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center px-4 md:px-8'
    >

      <h2 className="mt-8 text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
        Get in Touch
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Have questions or need assistance? We're here to help!
      </p>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
        {/* Contact Form */}
        <form
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/2"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Send Us a Message
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-800 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your message"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Contact Information
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Feel free to reach out to us. We are happy to assist you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="material-icons text-blue-500 dark:text-blue-400 mr-4">
                phone:
              </span>
              <p className="text-gray-700 dark:text-gray-300">+91 12345</p>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-blue-500 dark:text-blue-400 mr-4">
                email:
              </span>
              <p className="text-gray-700 dark:text-gray-300">
                bizmanage@gmail.com
              </p>
            </div>
            <div className="flex items-center">
              <span className="material-icons text-blue-500 dark:text-blue-400 mr-4">
                reach us: 
              </span>
              <p className="text-gray-700 dark:text-gray-300">
                Barrackpore, North 24 Parganas, 700121, West Bengal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
