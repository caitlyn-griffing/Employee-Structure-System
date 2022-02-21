const db = require("../config/connection");
const cTable = require('console.table');
// const start = require('../server')

function viewDepartment() {
    const home = require('./home')
    db.query(
        "SELECT * FROM department",
        (err, results) => {
            err ? console.log(err): console.log(results) 
        } 
    )
    home();
}

module.exports = viewDepartment;