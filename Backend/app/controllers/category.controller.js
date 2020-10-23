const Category = require("../models/category.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(401).send({
        message: "Cannot be empty!"
      });
    }
  
    const category = new Category({
      categoryname: req.body.categoryname,
      categorydescription: req.body.categorydescription
    });
  
    Category.create(category, (err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error creating the Category."
        });
      else res.send(data);
    });
  
};

exports.findAll = (req, res) => {
    Category.getAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error retrieving categories."
        });
      else res.send(data);
    });  
  
};

exports.findOne = (req, res) => {
    Category.findById(req.params.categoryId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Category with id ${req.params.categoryId}.`
          });
        } else {
          res.status(501).send({
            message: "Error retrieving Category with id " + req.params.categoryId
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
  
    Category.updateById(
      req.params.categoryId,
      new Category(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(405).send({
              message: `Not found Category with id ${req.params.categoryId}.`
            });
          } else {
            res.status(501).send({
              message: "Error updating Category with id " + req.params.categoryId
            });
          }
        } else res.send(data);
      }
    );  
  
};

exports.delete = (req, res) => {
    Category.remove(req.params.categoryId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Category with id ${req.params.categoryId}.`
          });
        } else {
          res.status(501).send({
            message: "Could not delete Category with id " + req.params.categoryId
          });
        }
      } else res.send({ message: `Category was deleted successfully!` });
    });
  
  
};

exports.deleteAll = (req, res) => {
    Category.removeAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error while removing all categories."
        });
      else res.send({ message: `All categories were deleted successfully!` });
    });
  
  
};