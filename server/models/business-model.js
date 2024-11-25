import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Business name is required'],
        },
        email: {
            type: String,
            required: [true, 'Business email is required'],
            unique: true,
            match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
        },
        phone: {
            type: String,
            required: [true, 'Business phone is required'],
            match: [/^\+?\d{10,15}$/, 'Please enter a valid phone number'],
        },
        address: {
            type: String,
            required: [true, 'Business address is required'],
        },
        logo: {
            type: String,
        },
        gstin: {
            type: String,
            required: [true, 'Business GSTIN is required'],
            match: [/^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[0-9]{1}[A-Za-z]{1}[0-9]{1}$/, 'Please enter a valid GSTIN'],
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Business = mongoose.model('Business', businessSchema);
export default Business;
