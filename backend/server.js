import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

//bringing in dotenv config
dotenv.config();

//should connect to database now
connectDB()

// initialize express
const app = express();

// if we get a GET request to '/' then we want to run a function that takes in req and res object, and then we want to take res and send to the client a message
app.get("/", (req, res) => {
  res.send("API is running");
});

// mounting productRoutes.js
app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
