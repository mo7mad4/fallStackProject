const bcrypt = require("bcrypt");
const joi = require("joi");
const { postUser, getUser } = require("../database/queries");

// const postUsers = (req, res) => {
//   const { username, email, password } = req.body;
//   console.log(username, email, password);
//   postUser(username, email, password)
//     .then((data) => {
//       console.log(data);
//       res.json(data.rows);
//     }).catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: 'server error' });
//     });
// };
// #########################################################

const hashPassword = (password) => bcrypt.hash(password, 10); // round

const postUsers = (req, res) => {
  console.log(req.body);
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required().min(4),
    email: joi.string().email().required(),
    confirmPassword: joi.ref("password"),
  });

  schema
    .validateAsync(req.body)
    .then((data) => {
      console.log(data);
      return hashPassword(data.password);
    })
    .then((hashedPassword) =>
      postUser({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      })
    )
    .then((result) => getUser(req.body.email, req.body.password))
    // .then((userData) => {
    //   console.log(userData);
    // //   // generateToken(res, { username: req.body.username, id: userData.rows[0].id });
    // })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "server error" });
    });
};
// #########################################################

module.exports = postUsers;
