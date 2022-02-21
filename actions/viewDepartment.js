const db = require("../config/connection");
const cTable = require('console.table');

function viewDepartment() {
    db.query(
        "SELECT * FROM department",
        (err, results) => {
            err ? console.log(err): console.log(results) 
        } 
    )
}

module.exports = viewDepartment;