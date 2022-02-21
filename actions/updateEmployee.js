const db = require("../config/connection");
const cTable = require('console.table');
const inquirer = require('inquirer');

const updateEmployeeRole = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Enter first_name of updated Employee'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Enter last_name of updated Employee'
    },
    {
        type: 'input',
        name: 'newRole',
        message: 'Enter new role of updated Employee'
    }
]

function updateEmployee() {
    const home = require('./home');
    inquirer.prompt(updateEmployeeRole).then(answer => {
        let query = `UPDATE employee SET employee.emp_role_id = ${answer.newRole} WHERE employee.first_name = ? AND employee.last_name = ?`;
        db.query(query, [answer.first_name, answer.last_name, answer.newRole], (err, results) => {
            err ? console.log(err) : console.log(`\n\n${answer.first_name} ${answer.last_name}'s Role as been updated\n`); console.log(results);
        })
        home();
    })
}

module.exports = updateEmployee;