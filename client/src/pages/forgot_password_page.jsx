import React, { useState } from 'react';
import forgotPasswordIllustration from '../assets/images/forgot_password.png';
import Button from '../components/common/button';
import LabeledTextInput from '../components/common/labeled-text-input';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate password retrieval (replace with actual logic)
        console.log('Password recovery email sent to:', email);
        setMessage(`A password recovery link has been sent to ${email}.`);
        setEmail(''); // Clear the input field after submitting
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
            <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-4xl w-full transition-colors duration-300">
                {/* Illustration Section */}
                <div className="flex items-center justify-center rounded-l-lg w-full lg:w-1/2 p-6 dark:bg-gray-700">
                    <img src={forgotPasswordIllustration} alt="Forgot Password Illustration" className="max-w-xs" />
                </div>

                {/* Forgot Password Form Section */}
                <div className="flex flex-col justify-center p-8 w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Forgot Password</h2>

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

                        {/* Submit Button */}
                        <Button type="submit" className="w-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
                            Send Password Recovery Link
                        </Button>
                    </form>

                    {/* Message Display */}
                    {message && (
                        <div className="mt-4 text-green-500 dark:text-green-400 text-center">
                            {message}
                        </div>
                    )}

                    {/* Back to Login Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Remember your password?{' '}
                            <Link to="/login" className="text-blue-500 dark:text-yellow-400 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
