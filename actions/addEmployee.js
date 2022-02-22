const inquirer = require('inquirer');
const db = require("../config/connection");


function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Enter Employee's first name"
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter Employee's last name"
        },
        {
            type: "input",
            name: "emp_role_id",
            message: "Enter ID"
        }
    ])
    .then(({first_name, last_name, emp_role_id} ) => {
        const home = require('./home');
        let query = 'INSERT INTO employee (first_name, last_name, emp_role_id) VALUES (?,?,?)';
        db.query(query, [first_name, last_name, emp_role_id], (err, results) =>{
            err ? console.log(err) : console.log('Added new employee')
        }) 
        home();
    }).catch (err => {
        console.log(err);
    })
}

module.exports = addEmployee;