import ProductRepositories from '../../repositories/product/product-repository.js';

const editProduct = async (productId, product) => {
    try {
        const updatedProduct = await ProductRepositories.editProduct(productId, product);

        return { message: 'Product updated successfully', product: updatedProduct };
    } catch (error) {
        return { error: error.message };
    }
};

export default editProduct;