import React, { useEffect } from 'react';
import Button from '../components/common/button';
import logout from '../actions/auth/logout';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LogoutPage = () => {
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        await logout();
        navigate('/');
    };

    useEffect(() => {
        Cookies.get('token') ? null : (navigate('/login'));
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-500 ease-in-out">
                <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">
                    Are you sure you want to log out?
                </h1>
                <div className="space-y-4">
                    <p className="text-center text-lg text-gray-600 dark:text-gray-300">
                        Logging out will end your current session. You can always log back in later.
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                        <Button
                            className="w-32 py-2 px-4 bg-green-300 hover:bg-green-400 text-gray-800 font-medium rounded-lg transition duration-300"
                            onClick={() => window.history.back()}
                        >
                            Cancel
                        </Button>

                        <Button
                            onClick={handleLogout}
                            className="w-32 py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105"
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoutPage;
