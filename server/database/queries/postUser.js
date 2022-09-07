const connection = require("../config/connection");

const postUser = ({username, email, password}) =>{
  const sql = {
    text : 'insert into users (username, email, password) values ($1,$2,$3)',
    values: [username, email, password],
}
return connection.query(sql)
}

module.exports = postUser;
