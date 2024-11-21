import ProductService from '../../services/product-service.js';
import responseHandler from '../../handlers/response-handler.js';
import errorResponseHandler from '../../handlers/error-response-handler.js';

const addProduct = async (req, res) => {
    // const { id } = req.user;
    const product = req.body;

    if (!product) {
        return errorResponseHandler(
            res,
            400,
            'error',
            'Product details are required.'
        );
    }

    const result = await ProductService.addProduct(product);

    if (result.error) {
        return errorResponseHandler(res, 404, 'error', result.error);
    }

    return responseHandler(res, 200, 'success', result.message, {
        product: result.product,
    });
};

export default addProduct;
