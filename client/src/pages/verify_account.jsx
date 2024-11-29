import Button from '../components/common/button';
import OTPInput from '../components/common/otp-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyAccount = () => {
    const [otp, setOtp] = useState(Array(6).fill(''));

    const navigate = useNavigate();

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        const otpValue = otp.join('');

        console.log(otpValue);        
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-white dark:bg-gray-800">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 md:p-10 max-w-md w-full space-y-6 border border-gray-200 dark:border-gray-700">
                <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
                    Verify Your Account
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300">
                    Enter the OTP sent to your email address to verify your account
                </p>
                
                <OTPInput
                    value={otp}
                    setOtp={setOtp}
                    otp={otp}
                    placeholder="Enter the OTP"
                />
                
                <Button 
                    onClick={handleOtpSubmit} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                    Verify OTP
                </Button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Didn't receive the OTP? <a href="#" className="text-blue-600 hover:text-blue-700">Resend OTP</a>
                </p>
            </div>
        </div>
    );
};

export default VerifyAccount;
