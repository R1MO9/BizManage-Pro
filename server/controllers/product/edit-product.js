import ProductService from '../../services/product-service.js';
import responseHandler from '../../handlers/response-handler.js';
import errorResponseHandler from '../../handlers/error-response-handler.js';

const editProduct = async (req, res) => {
    const product = req.body;
    const { id } = req.params;

    if (!id) {
        return errorResponseHandler(
            res,
            400,
            'error',
            'Product ID is required.'
        );
    }

    if (!product) {
        return errorResponseHandler(
            res,
            400,
            'error',
            'Product details are required.'
        );
    }

    const result = await ProductService.editProduct(id, product);

    if (result.error) {
        return errorResponseHandler(res, 404, 'error', result.error);
    }

    return responseHandler(res, 200, 'success', result.message, {
        product: result.product,
    });
};

export default editProduct;