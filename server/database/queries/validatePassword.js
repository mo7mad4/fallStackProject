const connection = require('../config/connection');
const getPassword = (email) =>{
    const sql = {
        text: 'select password from users where email = $(1)',
        values:[email],
    };
    return connection.query(sql);
};
module.exports = getPassword;