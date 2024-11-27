import authRepository from "../../repositories/auth/auth-repository.js";
import sendOTP from "../../helpers/send-email.js";

const register = async (name, email, password) => {
    const userExists = await authRepository.findUserByEmail(email);

    if (userExists) {
        return { error: 'User already exists' };
    };

    const hashedPassword = await authRepository.hashPassword(password);

    const otp = await authRepository.generateOtp(email);

    const user = await authRepository.register(name, email, hashedPassword, otp);
    
    if (user.error) {
        return { error: user.error };
    }

    const res = await sendOTP(email, otp);

    console.log(res);
    return { message: 'User created successfully', user };
};

export default register;