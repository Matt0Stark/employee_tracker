const connection = require ("../config/connection");

class DB {

    constructor(connection){
        this.connection = connection
    }

    findAllDepartments(){
        return this.connection.promise().query(
            "SELECT name FROM department"
        );
    }

    findAllRoles(){
        return this.connection.promise().query(
            "SELECT title, salary FROM role"
        );
    }

    findAllEmployees(){
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, '', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id=department.id LEFT JOIN employee manager ON manager.id=employee.manager_id;"
        );
    }

   

    createDepartment(department){
        return this.connection.promise().query(
            "INSERT INTO department SET ?", department
        );
    }

    // working line

    createRole(role){
        console.log(role)
        console.log(role.title)
        console.log(role.salary)
        console.log(role.department_id)
        const sql = "INSERT INTO role (title, salary, department_id ) SET ?";


        return this.connection.promise().query(
            sql, role,
            
            (err, result) => {
                if (err) {
                console.log(err)
                }
              }
        );

    }
    

    createEmployee(employee){
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        );
    }
}

// tutor assist for notes
// DELETE FROM favorite_books WHERE id = ?


module.exports = new DB(connection);