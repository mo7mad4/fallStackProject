const jwt = require('jsonwebtoken');
require('env2')('.env');

const generateToken = (res, payload) => {
  jwt.sign(payload, process.env.SERCRET_KEY, { algorithm: 'HS256' }, (err, token) => {
    if (err) {
      res.status(401).send('Error');
    } else {
      res.cookie('token', token).send('Token successfully');
    }
  });
};



const verifyToken = (req, res, next) => {
  const recivedToken = req.cookies.token;
  console.log(recivedToken);
  if (!recivedToken) res.status(401).send('Access Denied');
  jwt.verify(recivedToken, process.env.SERCRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).send('Not Authorized');
    } else {
      res.cookie('email', decoded.email);
      next();
    }
  });
};

module.exports = { generateToken, verifyToken };
