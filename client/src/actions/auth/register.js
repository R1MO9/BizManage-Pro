import axios from "axios";
import ApiConfig from "../../config/api-config.js";

const register = async (name, email, password) => {
    try {
        const res = await axios.post(ApiConfig.REGISTER, { name, email, password });
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
};

export default register;