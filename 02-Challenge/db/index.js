const connection = require("../config/connection");

class DB {

    constructor(connection) {
        this.connection = connection
    }

    findAllDepartments() {
        return this.connection.promise().query(
            "SELECT name FROM department"
        );
    }

    findAllRoles() {
        return this.connection.promise().query(
            "SELECT title, salary FROM role"
        );
    }

    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, '', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id=department.id LEFT JOIN employee manager ON manager.id=employee.manager_id;"
        );
    }


    createDepartment(department) {
        console.log(department.department)
        return this.connection.promise().query(
            `INSERT INTO department VALUES (0 , '${department.department}' )`
        );
    }



    createRole(role) {
        return this.connection.promise().query(
            `INSERT INTO role (title, salary, department_id) VALUES ("${role.title}", "${role.salary}", "${role.department_id}" )`
        );
    }


    createEmployee(employee) {
        console.log(employee)
        return this.connection.promise().query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("${employee.first_name}", "${employee.last_name}", "${employee.role_id}", "${employee.manager_id}")`
        );
    }

    changeEmployeeRole(employee) {

        return this.connection.promise().query(
            `UPDATE employee SET role_id=${employee.role_id} 
            WHERE employee.id =${employee.id}`
        );
    }

    changeManager(employee) {
        console.log(employee)

        return this.connection.promise().query(
            `UPDATE employee SET manager_id=${employee.manager_id} 
            WHERE employee.id =${employee.id}`
        );
    }

   removeEmployee(employee) {
        console.log(employee)
        return this.connection.promise().query(
            `DELETE FROM employee WHERE employee.id=${employee.id}`
        );
    }

   removeRole(role) {
        return this.connection.promise().query(
            `DELETE FROM role WHERE role.id=${role.role_id}`
        );
    }

   removeDepartment(department) {
        return this.connection.promise().query(
            `DELETE FROM department WHERE department.id=${department.department_id}`
        );
    }




}
// tutor assist for notes

module.exports = new DB(connection);