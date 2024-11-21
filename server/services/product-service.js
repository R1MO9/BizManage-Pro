import addProduct from './product/add-product.js';
import editProduct from './product/edit-product.js';
import deleteProduct from './product/delete-product.js';
import getAllProducts from './product/get-all-products.js';
import getProductById from './product/get-product-by-id.js';

export default class ProductService {
    static addProduct = addProduct;
    static editProduct = editProduct;
    static deleteProduct = deleteProduct;
    static getAllProducts = getAllProducts;
    static getProductById = getProductById;
}
