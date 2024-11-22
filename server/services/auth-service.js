import login from "./auth/login.js";
import register from "./auth/register.js";

export default class AuthService {
    static login = login;
    static register = register;
};