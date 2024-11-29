import express from 'express';
import ProductController from '../controllers/product-controllers.js';
import checkAuth from '../middlewares/auth-middleware.js';
const router = express.Router();

router.post('/add', checkAuth, ProductController.addProduct);
router.put('/edit/:id', checkAuth, ProductController.editProduct);
router.delete('/delete/:id', checkAuth, ProductController.deleteProduct);
router.get('/get', ProductController.getAllProducts);
router.get('/get/:id', ProductController.getProductById);

export default router;