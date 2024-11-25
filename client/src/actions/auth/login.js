import axios from 'axios';
import ApiConfig from '../../config/api-config.js';

const login = async (email, password) => {
    try {
        const res = await axios.post(ApiConfig.LOGIN, { email, password });
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
};

export default login;
