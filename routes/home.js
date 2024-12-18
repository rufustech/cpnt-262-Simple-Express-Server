const express = require("express");
const path = require("path");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// About route
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "about.html"));
});

module.exports = router;
