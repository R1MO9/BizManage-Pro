import ProductService from '../../services/product-service.js';
import responseHandler from '../../handlers/response-handler.js';
import errorResponseHandler from '../../handlers/error-response-handler.js';

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return errorResponseHandler(
            res,
            400,
            'error',
            'Product ID is required.'
        );
    }

    const result = await ProductService.deleteProduct(id);

    if (result.error) {
        return errorResponseHandler(res, 404, 'error', result.error);
    }

    return responseHandler(res, 200, 'success', result.message);
};

export default deleteProduct;