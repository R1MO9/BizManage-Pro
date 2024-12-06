import axios from "axios";
import ApiConfig from "../../config/api-config.js";

const updateProduct = async (productId, productData) => {
    try {
        const response = await axios.put(
            ApiConfig.UPDATE_PRODUCT(productId),
            productData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export default updateProduct;