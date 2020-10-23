const e = require("express");
const sql = require("./db.js");

const Employee = function(employee) {
  this.employeename = employee.employeename;
  this.employeeemail = employee.employeeemail;
  this.employeecontact = employee.employeecontact;
  this.employeeaddress = employee.employeeaddress;
  this.employeedob = employee.employeedob;
  this.employeedoj = employee.employeedoj;
  this.employeesex = employee.employeesex;
  this.employeesalary = employee.employeesalary;
};

Employee.create = (newEmployee, result) => {
  sql.query("INSERT INTO employees SET ?", newEmployee, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created employee: ", { employeeid: res.insertId, ...newEmployee });
    result(null, { employeeid: res.insertId, ...newEmployee });
  });
};

Employee.findById = (employeeId, result) => {
  sql.query(`SELECT * FROM employees WHERE employeeid = ${employeeId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found employee: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Employee.getAll = result => {
  sql.query("SELECT * FROM employees", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("employees: ", res);
    result(null, res);
  });
};

Employee.updateById = (employeeid, employee, result) => {
  sql.query(
    "UPDATE employees SET employeename = ?, employeeemail = ?, employeecontact = ?, employeeaddress = ?, employeedob = ?, employeedoj = ?, employeesex = ?, employeesalary = ?  WHERE employeeid = ?",
    [employee.employeename, employee.employeeemail, employee.employeecontact, employee.employeeaddress, employee.employeedob, employee.employeedoj, employee.employeesex, employee.employeesalary,  employeeid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated employee: ", { employeeid: employeeid, ...employee });
      result(null, { employeeid: employeeid, ...employee });
    }
  );
};

Employee.remove = (employeeid, result) => {
  sql.query("DELETE FROM employees WHERE employeeid = ?", employeeid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted employee with id: ", employeeid);
    result(null, res);
  });
};

Employee.removeAll = result => {
  sql.query("DELETE FROM employees", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} employees`);
    result(null, res);
  });
};

module.exports = Employee;