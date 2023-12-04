
const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();
const db = require("./db");

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
            value: "UPDATE_EMPLOYEE"
          }, {
            name: "update an employee's manager",
            value: "UPDATE_MANAGER"
          }, {
            name: "remove an employee",
            value: "DELETE_EMPLOYEE"
          }, {
            name: "remove a role",
            value: "DELETE_ROLE"
          }, {
            name: "remove whole department",
            value: "DELETE_DEPARTMENT"
          }, {
            name: "quit",
            value: "yay, one thing works"
          }
        ]
      }
    ])
    .then(data => {

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
          addNewEmployee();
          break;

        case "UPDATE_EMPLOYEE":
          updateEmployeeRole();
          break;

        case "UPDATE_MANAGER":
          updateManager();
          break;

        case "DELETE_EMPLOYEE":
          deleteEmployee();
          break;

        case "DELETE_ROLE":
          deleteRole();
          break;

        case "DELETE_DEPARTMENT":
          deleteDepartment();
          break;

        default:
          quit();

      }
    })
};

init();

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
    name: 'department',
  })
    .then((answer) => {
      db.createDepartment(answer)
    })
    .then(() => init())
}

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
  inquirer.prompt([
    {
      type: 'input',
      message: 'what is your new employees first name?',
      name: 'first_name',
    },
    {
      type: 'input',
      message: 'what is your new employees last name?',
      name: 'last_name',
    },
    {
      type: 'input',
      message: 'enter the employees role ID',
      name: 'role_id',
    },
    {
      type: 'input',
      message: 'enter the employees manager ID?',
      name: 'manager_id',
    },
  ])
    .then((answer) => {
      db.createEmployee(answer)
    })
    .then(() => init())
}


function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'enter the employees new role ID',
      name: 'role_id',
    },
    {
      type: 'input',
      message: 'enter the employees ID',
      name: 'id',
    }
  ])
    .then((answer) => {
      db.changeEmployeeRole(answer)
    })
    .then(() => init())
}

function updateManager() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'enter the employees new manager ID',
      name: 'manager_id',
    },
    {
      type: 'input',
      message: 'enter the employees ID',
      name: 'id',
    }
  ])
    .then((answer) => {
      db.changeManager(answer)
    })
    .then(() => init())
}

function deleteEmployee() {
  inquirer.prompt({
    type: 'input',
    message: 'enter the employees ID?',
    name: 'id',
  })
    .then((answer) => {
      db.removeEmployee(answer)
    })
    .then(() => init())
}

function deleteRole() {
  inquirer.prompt({
    type: 'input',
    message: 'enter the Roles ID?',
    name: 'role_id',
  })
    .then((answer) => {
      db.removeRole(answer)
    })
    .then(() => init())
}

function deleteDepartment() {
  inquirer.prompt({
    type: 'input',
    message: 'enter the Departments ID?',
    name: 'department_id',
  })
    .then((answer) => {
      db.removeDepartment(answer)
    })
    .then(() => init())
}























