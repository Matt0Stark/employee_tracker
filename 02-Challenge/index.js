
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
            value: "ADD_DEPARTMENT"
          }, {
            name: "add a role",
            value: "ADD_ROLE"
          }, {
            name: "add an employee",
            value: "ADD_EMPLOYEE"
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

        case "ADD_DEPARTMENT":
          addNewDepartment();
          break;

        case "ADD_ROLE":
          addNewRole();
          break;

        case "ADD_EMPLOYEE":
          addNewEmployee()
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

function addNewDepartment() {
  inquirer.prompt({
    type: 'input',
    message: 'What would you like to name the new department?',
    name: 'departmentname',
  })
    .then((answer) => {
      db.createDepartment(answer)
    })
    .then(() => init())
}

//working line

function addNewRole() {


  inquirer.prompt([
    {
      type: 'input',
      message: 'What would you like to name the new role?',
      name: 'title',
    }, {
      type: 'input',
      message: 'What is the salary for the new role?',
      name: 'salary',
    }, {
      type: 'input',
      message: 'What department does this new role belong to?',
      name: 'department_id',
    }
  ])
    .then((answer) => {
      db.createRole(answer)
    })
    .then(() => init())
}


function addNewEmployee() {
  inquirer.prompt({
    type: 'input',
    message: 'What would you like to name the new employee?',
    name: 'name',
  })
    .then((answer) => {
      db.createEmployee(answer)
    })
    .then(() => init())
}



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




















