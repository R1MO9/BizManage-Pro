import Product from '../../models/product-model.js';

const getAllProducts = async (businessId) => {
    return await Product.find({ business: businessId });
};

const getProductById = async (id) => {
    return await Product.findById(id);
};

const createProduct = async (product) => {
    return await Product.create(product);
};

const editProduct = async (id, product) => {
    return await Product.findByIdAndUpdate(id, product, { new: true });
};

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

const getProductByCategory = async (category) => {
    return await Product.find({ category });
};

export default {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
    getProductByCategory,
};