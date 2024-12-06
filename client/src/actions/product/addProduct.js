import ApiConfig from "../../config/api-config.js";
import axios from "axios";

const addProduct = async (token, productData) => {
    try {
        const response = await axios.post(
            ApiConfig.ADD_PRODUCT,
            productData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);        
        return error.response.data;
    }
};

export default addProduct;