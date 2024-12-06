import productRepository from "../../repositories/product/product-repository.js";

const getAllProducts = async (businessId) => {
    try {
        const products = await productRepository.getAllProducts(businessId);

        return { message: 'Products fetched successfully', products: products };
    } catch (error) {
        return { error: error.message };
    }
};

export default getAllProducts;