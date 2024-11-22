import login from './auth/login.js';
import register from './auth/register.js';

export default class AuthController {
    static login = login;
    static register = register;
};