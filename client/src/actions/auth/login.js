import axios from 'axios';
import ApiConfig from '../../config/api-config.js';
import Cookies from 'js-cookie';

const login = async (email, password) => {
    try {
        const res = await axios.post(ApiConfig.LOGIN, { email, password });
        Cookies.set('token', res.data.data.user.token);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
};

export default login;
