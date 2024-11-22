import User from '../../models/user-model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const findUserByEmail = async (email) => {
    return User.findOne({ email });
};

const register = async (name, email, password) => {
    return User.create({ name, email, password });
}

const hashPassword = async (password) => {
    return bcrypt.hash(password, 12);
};

const comparePassword = async (password, userPassword) => {
    return bcrypt.compare(password, userPassword);
};

const generateToken = async (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

const verifyToken = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

const decodeToken = async (token) => {
    return jwt.decode(token);
};

export default {
    findUserByEmail,
    register,
    hashPassword,
    comparePassword,
    generateToken,
    verifyToken,
    decodeToken,
};