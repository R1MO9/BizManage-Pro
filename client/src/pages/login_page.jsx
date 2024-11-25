import React, { useState } from 'react';
import loginIllustration from '../assets/images/login.png';
import Button from '../components/common/button';
import LabeledTextInput from '../components/common/labeled-text-input';
import { Link } from 'react-router-dom';
import login from '../actions/auth/login.js';
import notify from '../components/common/notify';
import Notification from '../components/common/notification';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            notify('Email and password are required', 'error');
            return;
        }
        const res = await login(email, password);
        
        if (res.status === 'error') {
            notify(res.message, 'error');
        } else {
            notify('Login successful', 'success');

            setTimeout(() => {
                navigate('/');
            }, 1500);
        }

        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-4xl w-full transition-colors duration-300">
                {/* Illustration Section */}
                <div className="flex items-center justify-center rounded-l-lg w-full lg:w-1/2 p-6 dark:bg-gray-700">
                    <img src={loginIllustration} alt="Login Illustration" className="max-w-xs" />
                </div>

                {/* Login Form Section */}
                <div className="flex flex-col justify-center p-8 w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Login</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <LabeledTextInput
                            id="email"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                        />

                        {/* Password Input */}
                        <LabeledTextInput
                            id="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
                            Login
                        </Button>
                    </form>

                    {/* Forgot Password & Sign Up Links */}
                    <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-blue-500 dark:text-blue-400 hover:underline">Forgot your password?</Link>
                    </div>
                    <div className="mt-2 text-center">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-500 dark:text-blue-400 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Notification />
        </div>
    );
};

export default LoginPage;
