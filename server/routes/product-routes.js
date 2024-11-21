import express from 'express';
import ProductController from '../controllers/product-controllers.js';

const router = express.Router();

router.post('/add', ProductController.addProduct);
router.put('/edit/:id', ProductController.editProduct);
router.delete('/delete/:id', ProductController.deleteProduct);
router.get('/get', ProductController.getAllProducts);
router.get('/get/:id', ProductController.getProductById);

export default router;