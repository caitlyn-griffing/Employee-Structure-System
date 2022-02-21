const db = require("../config/connection");
const cTable = require('console.table');

function viewEmployee() {
    const home = require('./home')
    db.query(
        "SELECT * FROM employee",
        (err, results) => {
            err ? console.log(err): console.log(results) 
        } 
    )
    home();
}

module.exports = viewEmployee;
