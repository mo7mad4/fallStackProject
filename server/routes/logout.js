const router = require("express").Router();

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.clearCookie("email");
  res.redirect("/");
});

module.exports = router;
