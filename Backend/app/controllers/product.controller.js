const Product = require("../models/product.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(401).send({
        message: "Cannot be empty!"
      });
    }
  
    const product = new Product({
      productprice: req.body.productprice,
      productpattern: req.body.productpattern,
      productcolour: req.body.productcolour,
      productdescription: req.body.productdescription,
      categoryid: req.body.categoryid,
      imageid: req.body.imageid,
      active: req.body.active
    });
  
    Product.create(product, (err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error creating the Product."
        });
      else res.send(data);
    });
  
};

exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error retrieving products."
        });
      else res.send(data);
    });  
  
};

exports.findOne = (req, res) => {
    Product.findById(req.params.productId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Product with id ${req.params.productId}.`
          });
        } else {
          res.status(501).send({
            message: "Error retrieving Product with id " + req.params.productId
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
  
    Product.updateById(
      req.params.productId,
      new Product(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(405).send({
              message: `Not found Product with id ${req.params.productId}.`
            });
          } else {
            res.status(501).send({
              message: "Error updating Product with id " + req.params.productId
            });
          }
        } else res.send(data);
      }
    );  
  
};

exports.delete = (req, res) => {
    Product.remove(req.params.productId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Product with id ${req.params.productId}.`
          });
        } else {
          res.status(501).send({
            message: "Could not delete Product with id " + req.params.productId
          });
        }
      } else res.send({ message: `Product was deleted successfully!` });
    });
  
  
};

exports.deleteAll = (req, res) => {
    Product.removeAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error while removing all products."
        });
      else res.send({ message: `All Products were deleted successfully!` });
    });
  
  
};