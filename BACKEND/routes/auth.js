const express = require("express");
const User = require("../models/User.js");
const router = express.Router();

// create a User using: POST "/api/auth". Doesn't require Auth
router.get("/", (req, res) => {
  const user = User(req.body);
  user.save();
  res.send(req.body);
});

module.exports = router;
