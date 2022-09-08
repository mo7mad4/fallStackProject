const bcrypt = require('bcrypt');
const joi = require('joi');
const { postUser, getUser } = require('../database/queries');
const { generateToken }  = require('../jwt');

const hashPassword = (password) => bcrypt.hash(password, 10); // round

const postUsers = (req, res) => {
  console.log(req.body);
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required().min(4),
    email: joi.string().email().required(),
    confirmPassword: joi.ref('password'),
  });

  schema.validateAsync(req.body)
    .then((data) => {
      console.log(data);
      return hashPassword(data.password);
    })
    .then((hashedPassword) => postUser({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    }))
    .then((result) => getUser(req.body.email, req.body.password ))
    .then((userData) => {
      generateToken(res, { email: req.body.email });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
};

module.exports = postUsers;