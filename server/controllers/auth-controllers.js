import login from './auth/login.js';
import register from './auth/register.js';
import verifyUser from './auth/verify-user.js';
import verifyOtp from './auth/verify-otp.js';

export default class AuthController {
    static login = login;
    static register = register;
    static verifyUser = verifyUser;
    static verifyOtp = verifyOtp;
};