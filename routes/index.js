const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/contactus", (req, res) => {
  res.render("pages/contactus");
});
router.get("/email_temp", (req, res) => {
  res.render("pages/email_template", { layout: false });
});
router.get("/services", (req, res) => {
  res.render("pages/services");
});

router.get("/bemail_temp", (req, res) => {
  res.render("pages/business_temp_email", { layout: false });
});
router.get("/modal", (req, res) => {
  res.render("pages/modal_tst", { layout: false });
});

module.exports = router;