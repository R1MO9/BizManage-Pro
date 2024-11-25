import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import Business from './business-model.js';

// Define the user schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
            lowercase: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        business: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Business',
        },
        token: {
            type: String,
        },
        expiresIn: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
export default User;
