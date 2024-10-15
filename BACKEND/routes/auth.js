const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  obj = {
    name: "Swscho",
    Relationship: "Someone special",
  };
  res.json(obj);
});

module.exports = router;