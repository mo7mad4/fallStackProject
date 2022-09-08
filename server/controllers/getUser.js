const bcrypt = require('bcrypt');
const joi = require('joi');
const { generateToken } = require('../jwt');
const { getUser, validatePassword } = require('../database/queries');

const schema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(4).required(),
});

const getUsers = (req, res) => {
  schema.validate(req.body, { abortEarly: false });
  const { email, password } = req.body;
  console.log(req.body);
  getUser(email, password)
    .then((user) => {
      // console.log(user);
      if (user.rows.length < 0) { throw new Error('not found'); } else return user;
    })
    .then((data) => {
      // console.log(data.rows[0].email, '55555555555555555');
      validatePassword(data.rows[0].email).then((pass) =>
      // console.log(pass);
        bcrypt.compare(password, pass.rows[0].password)
          .then((compare) => {
            // console.log(compare);
            if (!compare) {
              return res.status(401).json({ ERROR: 'Incorrect Password!' });
            }
            generateToken(res, { email: req.body.email });
          }));
    })
    .catch((err) => res.status(401).json({ ERROR: 'Internal server error' }));
};
module.exports = getUsers;