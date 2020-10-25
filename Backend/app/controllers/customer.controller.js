const Customer = require("../models/customer.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Cannot be empty!"
      });
    }
  
    const customer = new Customer({
      customeremail: req.body.customeremail,
      customername: req.body.customername,
      active: req.body.active,
      customerpassword: req.body.customerpassword,
      customeraddress: req.body.customeraddress,
      productid: req.body.productid,
      categoryid: req.body.categoryid
    });
  
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error creating the Customer."
        });
      else res.send(data);
    });
  
};

exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error retrieving customers."
        });
      else res.send(data);
    });  
  
};

exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    });  
  
};

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Cannot be empty!"
      });
    }
  
    Customer.updateById(
      req.params.customerId,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.customerId
            });
          }
        } else res.send(data);
      }
    );  
  
};

exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.customerId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  
  
};

exports.deleteAll = (req, res) => {
    Customer.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error while removing all customers."
        });
      else res.send({ message: `All Customers were deleted successfully!` });
    });
  
  
};