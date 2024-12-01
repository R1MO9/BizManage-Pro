export default class ApiConfig {
    static BASE_URL = 'http://localhost:3000/api';
    static Server_URL = 'https://biz-manage-pro-7t58.vercel.app';

    // Auth routes
    static LOGIN = `${this.BASE_URL}/auth/login`;
    static REGISTER = `${this.BASE_URL}/auth/register`;

    // Business routes
    static CREATE_BUSINESS = `${this.BASE_URL}/business/create`;
    static GET_BUSINESS = `${this.BASE_URL}/business/get`;
};