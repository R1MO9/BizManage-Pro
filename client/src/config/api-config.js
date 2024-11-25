export default class ApiConfig {
    static BASE_URL = 'http://localhost:3000/api';

    // Auth routes
    static LOGIN = `${this.BASE_URL}/auth/login`;
    static REGISTER = `${this.BASE_URL}/auth/register`;
};