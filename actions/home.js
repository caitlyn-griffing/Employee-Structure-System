const inquirer = require('inquirer');
const db = require("../config/connection")
const viewDepartment = require('./viewDepartment');
const viewEmployees = require('./viewEmployees');
const viewRoles = require('./viewRoles');
const addDepartment = require('./addDepartment');
const addEmployee = require('./addEmployee');
const addRole = require('./addRole');
const updateEmployee = require('./updateEmployee')

const home = () => {
    // console.log(home);
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
    ]).then(async function (answer) {
        switch (answer.firstOptions) {
            case "View Departments":
                await viewDepartment();
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
                await addEmployee();
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
// home();

module.exports = home;