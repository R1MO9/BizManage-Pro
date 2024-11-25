export default class ApiConfig {
    static BASE_URL = 'https://biz-manage-pro-7t58.vercel.app';

    // Auth routes
    static LOGIN = `${this.BASE_URL}/api/auth/login`;
    static REGISTER = `${this.BASE_URL}/api/auth/register`;
};