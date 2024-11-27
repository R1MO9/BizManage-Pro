import ApiConfig from "../../config/api-config.js";
import axios from "axios";
import Cookies from "js-cookie";

const createBusiness = async (businessData) => {
    try {
        const token = Cookies.get('token');
        if (!token) {
            return { status: 'error', message: 'Unauthorized' };
        }
        
        const response = await axios.post(ApiConfig.CREATE_BUSINESS, businessData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('Business created:', response.data);return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export default createBusiness;