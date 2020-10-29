//bringing in express
const express = require("express");

// bringing products from our products.js
const products = require("./data/products");

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

app.listen(5000, console.log("Server running on port 5000"));
