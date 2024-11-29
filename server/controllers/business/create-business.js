import BusinessService from '../../services/business-service.js';
import responseHandler from '../../handlers/response-handler.js';
import errorResponseHandler from '../../handlers/error-response-handler.js';

const createBusiness = async (req, res) => {
    const { name, email, phone, address, logo, gstin, owner } = req.body;
    
    if (!name || !email || !phone || !address || !gstin || !owner) {
        return errorResponseHandler(
            res,
            400,
            'error',
            'Name, email, phone, address, GSTIN, and owner are required.'
        );
    }

    const business = await BusinessService.createBusiness({
        name,
        email,
        phone,
        address,
        logo,
        gstin,
        owner,
    });

    if (business.error) {
        return errorResponseHandler(res, 404, 'error', business.error);
    }

    return responseHandler(
        res,
        200,
        'success',
        'Business created successfully.',
        {
            business: business.business,
        }
    );
};

export default createBusiness;