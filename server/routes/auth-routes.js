import express from 'express';
import AuthController from "../controllers/auth-controllers.js";

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/verify-user', AuthController.verifyUser);
router.post('/verify-otp', AuthController.verifyOtp);

export default router;