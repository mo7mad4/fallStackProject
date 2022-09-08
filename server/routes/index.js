const router = require('express').Router();
const getUser = require('./getUser');
const postUser = require('./postUser');
const verifyToken = require('./auth');
const logout = require('./logout');

router.use(getUser ,verifyToken);
router.use(postUser);
router.use(logout);
module.exports = router;