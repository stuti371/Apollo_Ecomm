module.exports = app => {
    const images = require("../controllers/image.controller.js");
  
    app.post("/images", images.create);
  
    app.get("/images", images.findAll);
  
    app.get("/images/:imageId", images.findOne);
  
    app.put("/images/:imageId", images.update);

    app.delete("/images/:imageId", images.delete);
  

    app.delete("/images", images.deleteAll);
  };