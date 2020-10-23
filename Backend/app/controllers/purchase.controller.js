const Purchase = require("../models/purchase.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(401).send({
        message: "Cannot be empty!"
      });
    }
  
    const purchase = new Purchase({
      companyname: req.body.companyname,
      productid: req.body.productid,

    });
  
    Purchase.create(purchase, (err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error creating the Purchase."
        });
      else res.send(data);
    });
  
};

exports.findAll = (req, res) => {
    Purchase.getAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error retrieving purchases."
        });
      else res.send(data);
    });  
  
};

exports.findOne = (req, res) => {
    Purchase.findById(req.params.purchaseId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Purchase with id ${req.params.purchaseId}.`
          });
        } else {
          res.status(501).send({
            message: "Error retrieving Purchase with id " + req.params.purchaseId
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
  
    Purchase.updateById(
      req.params.purchaseId,
      new Purchase(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(405).send({
              message: `Not found Purchase with id ${req.params.purchaseId}.`
            });
          } else {
            res.status(501).send({
              message: "Error updating Purchase with id " + req.params.purchaseId
            });
          }
        } else res.send(data);
      }
    );  
  
};

exports.delete = (req, res) => {
    Purchase.remove(req.params.purchaseId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Purchase with id ${req.params.purchaseId}.`
          });
        } else {
          res.status(501).send({
            message: "Could not delete Purchase with id " + req.params.purchaseId
          });
        }
      } else res.send({ message: `Purchase was deleted successfully!` });
    });
  
  
};

exports.deleteAll = (req, res) => {
    Purchase.removeAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error while removing all purchases."
        });
      else res.send({ message: `All purchases were deleted successfully!` });
    });
  
  
};