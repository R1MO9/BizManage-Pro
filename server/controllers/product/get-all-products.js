import ProductService from '../../services/product-service.js';
import responseHandler from '../../handlers/response-handler.js';
import errorResponseHandler from '../../handlers/error-response-handler.js';

const getAllProducts = async (req, res) => {
    const result = await ProductService.getAllProducts();

    if (result.error) {
        return errorResponseHandler(res, 404, 'error', result.error);
    }

    return responseHandler(res, 200, 'success', result.message, {
        products: result.products,
    });
};

export default getAllProducts;