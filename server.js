const mysql = require('mysql2');
const inquirer = requirer('inquier');
const cTable = require('console.table');

function start() {
    inquirer.prompt([
        {
            name: "firstOptions",
            type: "list",
            choices: [
                "View Department",
                "View Roles",
                "View Employees",
                "Add Department",
                "Add Roles",
                "Add Employee",
                "Update Employee Role"
            ],
            message: "Choose an option"
        }
    ]).then(answers => {
        
    })
}



function init () {

}