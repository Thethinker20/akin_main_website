const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/contactus", (req, res) => {
  res.render("pages/contactus");
});


module.exports = router;