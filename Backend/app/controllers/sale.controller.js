const Sale = require("../models/sale.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(401).send({
        message: "Cannot be empty!"
      });
    }
  
    const sale = new Sale({
      customerid: req.body.customerid,
      productid: req.body.productid,
      employeeid: req.body.employeeid,
      dosale: req.body.dosale,

    });
  
    Sale.create(sale, (err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error creating the Sale."
        });
      else res.send(data);
    });
  
};

exports.findAll = (req, res) => {
    Sale.getAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error retrieving sales."
        });
      else res.send(data);
    });  
  
};

exports.findOne = (req, res) => {
    Sale.findById(req.params.saleId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Sale with id ${req.params.saleId}.`
          });
        } else {
          res.status(501).send({
            message: "Error retrieving Sale with id " + req.params.saleId
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
  
    Sale.updateById(
      req.params.saleId,
      new Sale(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(405).send({
              message: `Not found Sale with id ${req.params.saleId}.`
            });
          } else {
            res.status(501).send({
              message: "Error updating Sale with id " + req.params.saleId
            });
          }
        } else res.send(data);
      }
    );  
  
};

exports.delete = (req, res) => {
    Sale.remove(req.params.saleId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Sale with id ${req.params.saleId}.`
          });
        } else {
          res.status(501).send({
            message: "Could not delete Sale with id " + req.params.saleId
          });
        }
      } else res.send({ message: `Sale was deleted successfully!` });
    });
  
  
};

exports.deleteAll = (req, res) => {
    Sale.removeAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error while removing all sales."
        });
      else res.send({ message: `All sales were deleted successfully!` });
    });
  
  
};