import productRepository from "../../repositories/product/product-repository.js";

const getProductById = async (id) => {
    try {
        const product = await productRepository.getProductById(id);

        return { message: 'Product fetched successfully', product: product };
    } catch (error) {
        return { error: error.message };
    }
};

export default getProductById;