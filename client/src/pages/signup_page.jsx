import React, { useState } from 'react';
import signupIllustration from '../assets/images/signup.png';
import Button from '../components/common/button';
import LabeledTextInput from '../components/common/labeled-text-input';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for handling signup goes here
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-4xl w-full transition-colors duration-300">
                {/* Illustration Section */}
                <div className="flex items-center justify-center rounded-l-lg w-full lg:w-1/2 p-6 dark:bg-gray-700">
                    <img src={signupIllustration} alt="Signup Illustration" className="max-w-xs" />
                </div>

                {/* Signup Form Section */}
                <div className="flex flex-col justify-center p-8 w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Sign Up</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <LabeledTextInput
                            id="email"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
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
                            required
                            className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                        />

                        {/* Confirm Password Input */}
                        <LabeledTextInput
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                            className="dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
                            Sign Up
                        </Button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-500 dark:text-blue-400 hover:underline">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
