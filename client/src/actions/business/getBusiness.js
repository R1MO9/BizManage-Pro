import axios from 'axios';
import ApiConfig from "../../config/api-config.js";

const getBusiness = async (token) => {
    try {
        if (!token) {
            return { status: 'error', message: 'Unauthorized' };
        }

        const response = await axios.get(ApiConfig.GET_BUSINESS, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        return error.response.data;
    }
};

export default getBusiness;