import ProductRepositories from '../../repositories/product/product-repository.js';

const addProduct = async (product) => {
    try {
        const newProduct = await ProductRepositories.createProduct(product);

        return { message: 'Product created successfully', product: newProduct };
    } catch (error) {
        return { error: error.message };
    }
};

export default addProduct;