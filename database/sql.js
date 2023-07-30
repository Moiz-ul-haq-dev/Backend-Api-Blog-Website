const mysql = require('mysql').mysql;

const {connection} = mysql.createConnection({
    host: 'blv8vwbr2ucpnyk8genj-mysql.services.clever-cloud.com',
    user: 'uqfdsleekawces3f',
    password: 'Hk8e0zMeMB3hwsBVEWWW',
    database:'blv8vwbr2ucpnyk8genj',
    port : 3306
});


connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = connection;