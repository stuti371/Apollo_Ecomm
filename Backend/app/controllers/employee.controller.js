const Employee = require("../models/employee.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(401).send({
        message: "Cannot be empty!"
      });
    }
  
    const employee = new Employee({
        employeename: req.body.employeename,
        employeeemail: req.body.employeeemail,
        employeecontact: req.body.employeecontact,
        employeeaddress: req.body.employeeaddress,
        employeedob: req.body.employeedob,
        employeedoj: req.body.employeedoj,
        employeesex: req.body.employeesex,
        employeesalary: req.body.employeesalary
    });
  
    Employee.create(employee, (err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error creating the Employee."
        });
      else res.send(data);
    });
  
};

exports.findAll = (req, res) => {
    Employee.getAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error retrieving employees."
        });
      else res.send(data);
    });  
  
};

exports.findOne = (req, res) => {
    Employee.findById(req.params.employeeId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Employee with id ${req.params.employeeId}.`
          });
        } else {
          res.status(501).send({
            message: "Error retrieving Employee with id " + req.params.employeeId
          });
        }
      } else res.send(data);
    });  
  
};

exports.update = (req, res) => {
    if (!req.body) {
      res.status(401).send({
        message: "Cannot be empty!"
      });
    }
  
    Employee.updateById(
      req.params.employeeId,
      new Employee(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(405).send({
              message: `Not found Employee with id ${req.params.employeeId}.`
            });
          } else {
            res.status(501).send({
              message: "Error updating Employee with id " + req.params.employeeId
            });
          }
        } else res.send(data);
      }
    );  
  
};

exports.delete = (req, res) => {
    Employee.remove(req.params.employeeId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Employee with id ${req.params.employeeId}.`
          });
        } else {
          res.status(501).send({
            message: "Could not delete Employee with id " + req.params.employeeId
          });
        }
      } else res.send({ message: `Employee was deleted successfully!` });
    });
  
  
};

exports.deleteAll = (req, res) => {
    Employee.removeAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error while removing all employees."
        });
      else res.send({ message: `All employees were deleted successfully!` });
    });
  
  
};