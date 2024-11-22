import AuthService from '../../services/auth-service.js';
import responseHandler from '../../handlers/response-handler.js';
import errorResponseHandler from '../../handlers/error-response-handler.js';

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !password) {
        return errorResponseHandler(
            res,
            400,
            'error',
            'Email and password are required.'
        );
    }

    const user = await AuthService.register(name, email, password);

    if (user.error) {
        return errorResponseHandler(res, 404, 'error', user.error);
    }

    return responseHandler(
        res,
        200,
        'success',
        'Registration successful.',
        {
            user,
            token: user.token
        }
    );
};

export default register;