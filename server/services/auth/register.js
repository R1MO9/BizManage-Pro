import authRepository from "../../repositories/auth/auth-repository.js";

const register = async ( name, email, password ) => {

    const userExists = await authRepository.findUserByEmail(email);

    if (userExists) {
        return { error: 'User already exists' };
    };

    const hashedPassword = await authRepository.hashPassword(password);

    const user = await authRepository.register(name, email, hashedPassword);
    
    if (user.error) {
        return { error: user.error };
    }

    return { message: 'User created successfully', user };
};

export default register;