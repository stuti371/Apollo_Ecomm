const Image = require("../models/image.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(401).send({
        message: "Cannot be empty!"
      });
    }
  
    const image = new Image({
      theimage: req.body.theimage,
    });
  
    Image.create(image, (err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error creating the Image."
        });
      else res.send(data);
    });
  
};

exports.findAll = (req, res) => {
    Image.getAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error retrieving images."
        });
      else res.send(data);
    });  
  
};

exports.findOne = (req, res) => {
    Image.findById(req.params.imageId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Image with id ${req.params.imageId}.`
          });
        } else {
          res.status(501).send({
            message: "Error retrieving Image with id " + req.params.imageId
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
  
    Image.updateById(
      req.params.imageId,
      new Image(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(405).send({
              message: `Not found Image with id ${req.params.imageId}.`
            });
          } else {
            res.status(501).send({
              message: "Error updating Image with id " + req.params.imageId
            });
          }
        } else res.send(data);
      }
    );  
  
};

exports.delete = (req, res) => {
    Image.remove(req.params.imageId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(405).send({
            message: `Not found Image with id ${req.params.imageId}.`
          });
        } else {
          res.status(501).send({
            message: "Could not delete Image with id " + req.params.imageId
          });
        }
      } else res.send({ message: `Image was deleted successfully!` });
    });
  
  
};

exports.deleteAll = (req, res) => {
    Image.removeAll((err, data) => {
      if (err)
        res.status(501).send({
          message:
            err.message || "Error while removing all images."
        });
      else res.send({ message: `All images were deleted successfully!` });
    });
  
  
};