import axios from "axios";
import ApiConfig from "../../config/api-config.js";

const getProducts = async (token, businessId) => {
    try {
        if (!token) {
            return { status: 'error', message: 'Unauthorized' };
        }

        if (!businessId) {
            return { status: 'error', message: 'Business ID not found' };
        }

        const response = await axios.get(ApiConfig.GET_PRODUCTS, {
            params: { businessId },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return error.response.data;
    }
};

export default getProducts;