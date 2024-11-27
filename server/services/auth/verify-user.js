import AuthRepository from "../../repositories/auth/auth-repository.js";

const verifyUser = async (email, otp) => {
    const user = await AuthRepository.findUserByEmail(email);
    if (!user) {
        return { status: 'error', message: 'User not found' };
    }

    if (user.otp !== otp) {
        return { status: 'error', message: 'Invalid OTP' };
    }

    await AuthRepository.verifyUser(id);

    return { status: 'success', message: 'User verified successfully' };
};

export default verifyUser;