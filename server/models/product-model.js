import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],
            min: [1, 'Price must be at least 1'],
        },
        description: {
            type: String,
            required: [true, 'Product description is required'],
        },
        image: {
            type: String,
        },
        // category: {
        //     type: String,
        //     required: [true, 'Product category is required'],
        // },
        supplierId: {
            type: String,
            required: [true, 'Supplier ID is required'],
        },
        countInStock: {
            type: Number,
            required: [true, 'Product count in stock is required'],
            min: [0, 'Count in stock must be at least 0'],
        },
        business: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: [true, 'Business is required'],
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);
export default Product;