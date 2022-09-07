const router = require("express").Router();
const { postUser } = require("../controllers");
router.post("/signed", postUser);

module.exports = router;
