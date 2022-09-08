const router = require('express').Router();
const { verifyToken } = require('../jwt');

router.get('/authorized', verifyToken, (req, res) => {
  res.send('Welcome USER!!');
});

module.exports = router;
