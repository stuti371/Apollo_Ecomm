module.exports = app => {
    const categories = require("../controllers/category.controller.js");
  
    app.post("/categories", categories.create);
  
    app.get("/categories", categories.findAll);
  
    app.get("/categories/:categoryId", categories.findOne);
  
    app.put("/categories/:categoryId", categories.update);

    app.delete("/categories/:categoryId", categories.delete);
  

    app.delete("/categories", categories.deleteAll);
  };