const { getUser } = require("../database/queries");

const getUsers = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  getUser(email, password)
    .then((data) => {
      console.log(data.rows);
      res.json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "server Error" });
    });
};

module.exports = getUsers;
