import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                {/* Logo or Company Name */}
                <div className="text-lg font-semibold">
                    <Link to="/" className="hover:text-blue-400">BizManage Pro</Link> {/* Replace with your project name */}
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                    <Link to="/about" className="hover:text-blue-400">About</Link>
                    <Link to="/contact" className="hover:text-blue-400">Contact</Link>
                    <Link to="/services" className="hover:text-blue-400">Services</Link>
                </div>

                {/* Copyright */}
                <div className="text-sm">
                    © {new Date().getFullYear()} BizManage Pro. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
