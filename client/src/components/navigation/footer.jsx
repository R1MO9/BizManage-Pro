import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                <div className="text-2xl font-semibold tracking-tight">
                    <Link to="/" className="text-yellow-400">BizManage Pro</Link>
                </div>

                <div className="text-sm space-x-4">
                    <p className="text-gray-800 dark:text-white">
                        Made with ❤️ by{" "}
                        <Link to="https://www.github.com/r1mo9">Rupankar Das</Link>
                        <span className="mx-1">|</span>
                        <Link to="https://www.github.com/AnanyaRaj14">Ananya Raj</Link>
                    </p>
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
