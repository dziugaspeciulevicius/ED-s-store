import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import products from './data/products.js';

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

// route to respond with products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// route to respond with a single product with an id
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
