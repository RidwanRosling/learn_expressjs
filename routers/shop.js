const express = require("express");
const path = require("path");
// const app = express();
const router = express.Router();
const productsController = require("../controllers/products");

// app.get("/", (req, res, next) => {
//   console.log("In another middleware");
//   res.send("<h1>Hello from Express!</h1>");
// });
router.get("/", productsController.getProducts)

module.exports = router;
