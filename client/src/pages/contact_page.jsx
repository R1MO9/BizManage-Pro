import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Get in Touch with us...
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have any questions or need assistance? We're here to help!
        </p>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Us</h3>
            <form className="space-y-6">

              <div>
                <label className="block text-gray-600 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
              
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-gray-50 shadow-md rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Reach out to us via the details below or fill out the form to send us a message.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone-alt text-blue-600"></i>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-blue-600"></i>
                <p className="text-gray-600">support@bizmanagepro.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-blue-600"></i>
                <p className="text-gray-600">Barrackpore, North 24 parganas, Kolkata, 700121, West Bengal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
