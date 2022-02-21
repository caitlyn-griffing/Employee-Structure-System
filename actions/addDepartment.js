const inquirer = require('inquirer');
const db = require("../config/connection");

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "addDepo",
            message: "Enter Department"
        }    
    ]).then(answer => {
        const home = require('./home');
        let query = 'INSERT INTO department(name) VALUES (?)';
        db.query(query, [answer.addDepo], (err, results) =>{
            err ? console.log(err) : console.log('Added new department')
        }) 
        home();
    }).catch(err => {
        console.log(err);
    })
}

module.exports = addDepartment;