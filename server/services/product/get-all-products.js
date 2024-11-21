import productRepository from "../../repositories/product/product-repository.js";

const getAllProducts = async () => {
    try {
        const products = await productRepository.getAllProducts();

        return { message: 'Products fetched successfully', products: products };
    } catch (error) {
        return { error: error.message };
    }
};

export default getAllProducts;