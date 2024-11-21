import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: [true, 'Order ID is required'],
            unique: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: [true, 'Customer is required'],
        },
        items: [
            {
                itemName: { type: String, required: true },
                quantity: { type: Number, required: true, min: 1 },
                price: { type: Number, required: true },
            }
        ],
        totalAmount: {
            type: Number,
            required: true,
            default: 0,
        },
        paymentMethod: {
            type: String,
            enum: ['cash', 'card', 'online'],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;
