const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./config/connection');
const viewDepartment = require('./actions/viewDepartment');
const viewEmployees = require('./actions/viewEmployees');
const viewRoles = require('./actions/viewRoles');

function start() {
    inquirer.prompt([
        {
            name: "firstOptions",
            type: "list",
            choices: [
                "View Departments",
                "View Roles",
                "View Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update Employee Role",
                "Exit Application"
            ],
            message: "Choose an option"
        }
    ]).then(function (answer) {
        switch (answer.firstOptions) {
            case "View Departments":
                viewDepartment();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Exit Application":
                db.end();
                break;
        }
    })
}

db.connect(function (err) {
    if (err) { throw err; }
    else { 
        console.log(`Connection Success`)
        start();
    }
})



function init () {

}