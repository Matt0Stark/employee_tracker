
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();
// const DB = require("./db/index")

const db = require("./db");


// per tutor, no need to express for mvp?
function quit() {
  process.exit()
}

function init() {
  inquirer.prompt(

    [
      {
        type: "list",
        message: "what would you like to do?",
        name: "optionChoice",
        choices: [
          {
            name: "view all departments",
            value: "VIEW_DEPARTMENTS"
          }, {
            name: "view all roles",
            value: "VIEW_ROLES"
          }, {
            name: "view all employees",
            value: "VIEW_EMPLOYEES"
          }, {
            name: "add a department",
            value: "xxx"
          }, {
            name: "add a role",
            value: "xxx"
          }, {
            name: "add an employee",
            value: "xxx"
          }, {

            name: "update an employee's role",
            value: "xxx"
          }, {
            name: "quit",
            value: "yay, one thing works"
          }
        ]
      }
    ])
    .then(data => {
      console.log(data.optionChoice)
      // if (data.optionChoice === "quit") return process.exit()
      switch (data.optionChoice) {

        case "VIEW_DEPARTMENTS":
          viewDepartments();
          break;

        case "VIEW_ROLES":
          viewRoles();
          break;

        case "VIEW_EMPLOYEES":
          viewEmployees();
          break;

        case "add a department":
          addNewDepartment;
          break;

        case "add a role":
          // day = "Thursday";
          break;

        case "add an employee":
          // day = "Friday";
          break;

        case "update an employee's role":
          // day = "Saturday";
          break;

        default:
          quit()

      }
    })
};

init();

// find all departments nor defined. 
function viewDepartments() {
  db.findAllDepartments()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles)
    })
    .then(() => init())
}

function viewRoles() {
  db.findAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles)
    })
    .then(() => init())

}

function viewEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees)
    })
    .then(() => init())
}

//working line

function addNewDepartment(){
  db.addDepartment()
  .then(([rows]) => {
    let employees = rows;
    console.table(employees)
  })
  .then(() => init())
}



// function start(){
//   // present initial list of menu options
//   inquirer.prompt(listOfOptions).then(

//   )
// }

// function viewAllEmployees(){

// }

// function displayTable(array){

// }




// // outside file for organizing


// const mysql = require('mysql2');
// const connection = require('./config')

// const db = mysql.createConnection(connection)

// function getAllEmployees(){
//   /return\ db.query('...', (err, data) => {
//     return data
//   })
// }

// module.exports = {
//   getAllEmployees
// }

// *** You can join a table to itself, this will be used for one of the queries

// make folder 'config' -> make connection.js -> require in mysql2 -> fill in the info (process.env not entirely necessary) -> module.exports = db -> just const db = require('./config/connection.js) -> db.query(allTheThings)



/*
potential

class Collection{
  constructer(name, table, columns){
    this.name = name,
    this.table = table,
    this.columns = columns,
    this.rows = rows
  }

  getAll(){
    db.query(`SELECT * FROM ${this.table}`)
  }

  getOne(id){
    db.query(`SELECT * FROM ${this.table} WHERE id - ${id}`)
  }

  addOne(data){
    db.query(`INSERT INTO ${this.table}`)
  }
}

const employees = new Collection('employees', 'employees', ['id', 'name', 'salary', 'role', 'department', 'manager'])

employees, managers, role, departments
*/




















