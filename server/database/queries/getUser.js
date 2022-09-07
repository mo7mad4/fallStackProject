const connection = require("../config/connection");
const getUser = (email, password) => {
    const sql = {
        text : 'select * from users where email = ($1) and password = ($2)',
        values: [email, password],
    }
    return connection.query(sql)
}
  
module.exports = getUser;
