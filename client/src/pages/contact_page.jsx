import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing React Icons
import Button from '../components/common/button';
import LabeledTextInput from '../components/common/labeled-text-input';

const ContactPage = () => {
  return (
    <section className="bg-white text-black dark:bg-gray-950 dark:text-white py-16 px-6 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 sm:text-4xl">
          Get in Touch with us...
        </h2>
        <p className="text-center text-gray-600 mb-12 sm:text-lg dark:text-gray-300">
          Have any questions or need assistance? We're here to help!
        </p>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Contact Us</h3>
            <form className="space-y-6">

              <LabeledTextInput
                label="Full Name"
                type="text"
                id="name"
                placeholder="Enter your name"
              />

              <LabeledTextInput
                label="Email Address"
                type="email"
                id="email"
                placeholder="Enter your email address"
              />

              <LabeledTextInput
                label="Subject"
                type="text"
                id="subject"
                placeholder="Enter the subject"
              />

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-200">
                Send Message
              </Button>
              
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Reach out to us via the details below or fill out the form to send us a message.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                <p className="text-gray-600 dark:text-gray-300">+123 456 7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                <p className="text-gray-600 dark:text-gray-300">support@bizmanagepro.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                <p className="text-gray-600 dark:text-gray-300">Barrackpore, North 24 Parganas, Kolkata, 700121, West Bengal</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
