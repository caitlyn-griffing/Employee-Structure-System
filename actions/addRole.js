const inquirer = require('inquirer');
const db = require("../config/connection");

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter Role Title'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter Role Salary'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter Role ID'
        },
    ]).then(({title, salary, department_id}) => {
        const home = require('./home');
        let query = 'INSERT INTO emp_role (title, salary, department_id) VALUES (?,?,?)';
        db.query(query, [title, salary, department_id], (err, results) => {
            err ? console.log(err) : console.log('Added new role')
        })
        home();
    }).catch(err => {
        console.log(err);
    })
}

module.exports = addRole;