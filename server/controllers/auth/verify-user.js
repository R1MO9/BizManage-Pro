import AuthService from '../../services/auth-service.js';
import responseHandler from '../../handlers/response-handler.js';
import errorResponseHandler from '../../handlers/error-response-handler.js';

const verifyUser = async (req, res) => {
    const { email, otp } = req.body;

    if (!email) {
        return errorResponseHandler(res, 400, 'error', 'Email is required.');
    }

    if (!otp) {
        return errorResponseHandler(res, 400, 'error', 'OTP is required.');
    }

    const user = await AuthService.verifyUser(id, otp);

    if (user.status === 'error') {
        return errorResponseHandler(res, 404, 'error', user.message);
    }

    return responseHandler(
        res,
        200,
        'success',
        'User verified successfully.'
    );
};

export default verifyUser;