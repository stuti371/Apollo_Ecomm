module.exports = app => {
    const purchases = require("../controllers/purchase.controller.js");
  
    app.post("/purchases", purchases.create);
  
    app.get("/purchases", purchases.findAll);
  
    app.get("/purchases/:purchaseId", purchases.findOne);
  
    app.put("/purchases/:purchaseId", purchases.update);

    app.delete("/purchases/:purchaseId", purchases.delete);
  

    app.delete("/purchases", purchases.deleteAll);
  };