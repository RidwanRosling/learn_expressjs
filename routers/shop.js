const express = require("express");
const path = require("path");
// const app = express();
const router = express.Router();
const rootDir = require("../util/path");
const adminData = require("./admin");

// app.get("/", (req, res, next) => {
//   console.log("In another middleware");
//   res.send("<h1>Hello from Express!</h1>");
// });
router.get("/", (req, res, next) => {
  // console.log("shop", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // app.render("shop");

  const products = adminData.products;

  // res.render() selalu menerima 2 argumen -> 1. Nama file view (tanpa ekstensi) & 2. Data yang akan dikirim ke view tersebut

  res.render("shop", { prods: products, docTitle: "Shop" });
});

module.exports = router;
