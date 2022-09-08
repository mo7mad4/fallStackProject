const router = require("express").Router();
const { getUser } = require("../controllers");


router.post("/logged", getUser);

module.exports = router;
