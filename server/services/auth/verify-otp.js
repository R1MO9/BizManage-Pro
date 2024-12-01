import AuthRepository from '../../repositories/auth/auth-repository.js';

const verifyOtp = async (email, otp) => {
    try {
        const isVerifiedUser = await AuthRepository.verifyOTP(email, otp);

        if (isVerifiedUser) {
            return { status: 'success', message: 'OTP verified successfully' };
        } else {
            return { status: 'error', message: 'Invalid OTP' };
        }
    } catch (error) {
        return { status: 'error', message: error.message };   
    }
}

export default verifyOtp;