/*

const inquirer = require('inquirer')

function start(){
  // present initial list of menu options
  inquirer.prompt(listOfOptions).then(

  )
}

function viewAllEmployees(){

}

function displayTable(array){

}

function getAllDepartments(){
  const allDepartments = getDepartments();
  inquirer.prompt([
   {
    type: 'list',
    message: 'Which department?',
    name: 'department_id',
    choices: function(){
        allDepartments.map(department => {
          return {
            id: department.id,
            value: department.department_name
          }
        })
      }
    }
  ]).then(response => {
    // response.department_id
  })
}

*/


// outside file for organizing
/*

const mysql = require('mysql2');
const connection = require('./config')

const db = mysql.createConnection(connection)

function getAllEmployees(){
  /return\ db.query('...', (err, data) => {
    return data
  })
}

module.exports = {
  getAllEmployees
}
*/

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



















