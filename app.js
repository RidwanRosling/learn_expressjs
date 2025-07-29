// const http = require("http");

const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' placeholder='Product Title'><button type='submit'>Add Product</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/products");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
