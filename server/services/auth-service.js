import login from "./auth/login.js";
import register from "./auth/register.js";
import verifyUser from "./auth/verify-user.js";

export default class AuthService {
    static login = login;
    static register = register;
    static verifyUser = verifyUser;
};