const connection = require("../config/connection");
const getUser = (email) => {
    const sql = {
        text : 'select email from users where email = ($1)',
        values: [email],
    }
    return connection.query(sql)
}
  
module.exports = getUser;
