const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./config/connection');
const viewDepartment = require('./actions/viewDepartment');
const viewEmployees = require('./actions/viewEmployees');
const viewRoles = require('./actions/viewRoles');
const addDepartment = require('./actions/addDepartment');
const addEmployee = require('./actions/addEmployee');
const addRole = require('./actions/addRole')
const updateEmployee = require('./actions/updateEmployee')

function start() {
    return inquirer.prompt([
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
    ]).then(async function (answer) {
        switch (answer.firstOptions) {
            case "View Departments":
                viewDepartment();
                break;
            case "View Roles":
                await viewRoles();
                break;
            case "View Employees":
                await viewEmployees();
                break;
            case "Add Department":
                await addDepartment();
                break;
            case "Add Role":
                await addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                await updateEmployee();
                break;
            case "Exit Application":
                db.end();
                break;
        }
    })
}

function init () {
    start();
}
init();