// we need this for the mysql -u root -p?
//yes 
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"employeeTracker_db"
});

connection.connect( function (err) {
    if (err) throw err;
})

module.exports=connection;