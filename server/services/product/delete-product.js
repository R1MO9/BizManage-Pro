import productRepository from "../../repositories/product/product-repository.js";

const deleteProduct = async (productId) => {
    try {
        const product = await productRepository.deleteProduct(productId);

        return { message: 'Product deleted successfully', product: product };
    } catch (error) {
        return { error: error.message };
    }
};

export default deleteProduct;