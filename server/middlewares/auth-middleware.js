import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
    // Extract the token from the Authorization header (Bearer <token>)
    const token = req.headers.authorization?.split(' ')[1]; // Safe extraction

    // Check if the token is provided
    if (!token) {
        return res.status(401).json({ status: 'error', message: 'Unauthorized' });
    }

    // Try to verify the token
    try {
        // Decode the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach decoded user data to the request object
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle specific JWT errors
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ status: 'error', message: 'Invalid token' });
        }

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ status: 'error', message: 'Token expired' });
        }

        // Generic error message for other types of errors
        return res.status(401).json({ status: 'error', message: 'Unauthorized' });
    }
};

export default checkAuth;
