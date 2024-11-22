import AuthRepository from "../../repositories/auth/auth-repository.js";

const login = async ( email, password ) => {
    try {

        const user = await AuthRepository.findUserByEmail(email);

        if (!user) {
            return { error: 'User not found' };
        }

        const isPasswordValid = await AuthRepository.comparePassword(password, user.password);

        if (!isPasswordValid) {
            return { error: 'Invalid password' };
        }

        const token = await AuthRepository.generateToken(user);

        user.token = token;
        user.expiresIn = Date.now() + parseInt(process.env.JWT_EXPIRES_IN, 10);

        user.save();

        return { message: 'Login successful', user };
    } catch (error) {
        return { error: error.message };
    }
};

export default login;