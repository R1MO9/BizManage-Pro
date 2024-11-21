import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './db/index.js'
import globalErrorHandler from './handlers/global-error-handler.js';
import ProductService from './services/product-service.js';
import ProductRoutes from './routes/product-routes.js';

const app = express();
dotenv.config();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(globalErrorHandler);
app.use('/api/products', ProductRoutes);

// Listen
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
