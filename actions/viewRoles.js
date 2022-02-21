const db = require("../config/connection");
const cTable = require('console.table');

function viewRoles() {
    const home = require('./home')
    db.query(
        "SELECT * FROM emp_role",
        (err, results) => {
            err ? console.log(err): console.log(results) 
        } 
    )
    home();
}

module.exports = viewRoles;