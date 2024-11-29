import BusinessService from '../../services/business-service.js';
import responseHandler from '../../handlers/response-handler.js';
import errorResponseHandler from '../../handlers/error-response-handler.js';

const deleteBusiness = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return errorResponseHandler(res, 400, 'error', 'Business ID is required.');
    }

    const business = await BusinessService.deleteBusiness(id);

    if (business.error) {
        return errorResponseHandler(res, 404, 'error', business.error);
    }

    return responseHandler(
        res,
        200,
        'success',
        'Business deleted successfully.',
        {
            business: business.business,
        }
    );
};

export default deleteBusiness;