import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import connectDB from './db/index.js'
import globalErrorHandler from './handlers/global-error-handler.js';
import ProductRoutes from './routes/product-routes.js';
import AuthRoutes from './routes/auth-routes.js';

const app = express();
dotenv.config();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(globalErrorHandler);
app.use('/api/products', ProductRoutes);
app.use('/api/auth', AuthRoutes);

// Listen
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
