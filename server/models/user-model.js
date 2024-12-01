import mongoose from 'mongoose';

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
        otp: {
            type: Number,
            default: null
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        isVerified: {
            type: Boolean,
            required: [true, 'Email verification is required'],
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
