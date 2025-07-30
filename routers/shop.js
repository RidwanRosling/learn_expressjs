const express = require("express");
const path = require("path");
// const app = express();
const router = express.Router();

// app.get("/", (req, res, next) => {
//   console.log("In another middleware");
//   res.send("<h1>Hello from Express!</h1>");
// });
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
