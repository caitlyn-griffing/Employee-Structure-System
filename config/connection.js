const mysql = require('mysql2');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'asdf',
    database : 'employee_structure_system'
});

module.exports = db;