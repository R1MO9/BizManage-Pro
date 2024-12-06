import axios from 'axios';
import ApiConfig from '../../config/api-config';

const deleteProduct = async (token, productId) => {
    try {
        if (!token) {
            return { status: 'error', message: 'Unauthorized' };
        }

        if (!productId) {
            return { status: 'error', message: 'Product ID not found' };
        }

        const response = await axios.delete(ApiConfig.DELETE_PRODUCT, {
            params: {
                id: productId,
            },
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

export default deleteProduct;