const db = require("../config/connection");
const cTable = require('console.table');

function viewEmployee() {
    db.query(
        "SELECT * FROM employee",
        (err, results) => {
            err ? console.log(err): console.log(results) 
        } 
    )
}

module.exports = viewEmployee;
