const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.render("home");
});
router.get("/contactus", (req, res) => {
  res.render("pages/contactus");
});
router.get("/aboutus", (req, res) => {
  res.render("pages/aboutus");
});

router.get("/services", (req, res) => {
  res.render("pages/services");
});

router.get("/soft_dev", (req, res) => {
  res.render("pages/software_page");
});
router.get("/rpa", (req, res) => {
  res.render("pages/rpa");
});
router.get("/courses", (req, res) => {
  res.render("pages/courses");
});
router.get("/business", (req, res) => {
  res.render("pages/business");
});
router.get("/email_temp", (req, res) => {
  res.render("pages/email_template", { layout: false });
});

router.get("/contact_form", (req, res) => {
  res.render("pages/contact_form", { layout: false });
});
router.get("/bemail_temp", (req, res) => {
  res.render("pages/business_temp_email", { layout: false });
});
router.get("/modal", (req, res) => {
  res.render("pages/modal_tst", { layout: false });
});

module.exports = router;