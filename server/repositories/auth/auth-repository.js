import User from '../../models/user-model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default class AuthRepository {
    static async findUserByEmail(email) {
        return await User.findOne({ email });
    }

    static async register(name, email, password, otp) {
        return await User.create({ name, email, password, otp });
    }

    static async verifyUser(id) {
        return await User.findByIdAndUpdate(id, { otp: null, isVarified: true });
    }

    static async generateOtp() {
        return await Math.floor(100000 + Math.random() * 900000);
    }

    static async hashPassword(password) {
        return bcrypt.hash(password, 12);
    }

    static async comparePassword(password, userPassword) {
        return bcrypt.compare(password, userPassword);
    }

    static async generateToken(user) {
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    }

    static async decodeToken(token) {
        return jwt.decode(token);
    }
}