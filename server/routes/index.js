const router = require("express").Router();
const getUser = require("./getUser");
const postUser = require("./postUser");

router.use(getUser);
router.use(postUser);

module.exports = router;
