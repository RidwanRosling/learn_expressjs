const express = require("express");
// const app = express();
const router = express.Router();

// app.get("/", (req, res, next) => {
//   console.log("In another middleware");
//   res.send("<h1>Hello from Express!</h1>");
// });
router.get("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

module.exports = app;
