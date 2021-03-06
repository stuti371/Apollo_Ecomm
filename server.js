const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Apollo Team Webpage" });
});

require("./Backend/app/routes/customer.routes.js")(app);
require("./Backend/app/routes/product.routes.js")(app);
require("./Backend/app/routes/category.routes.js")(app);
require("./Backend/app/routes/image.routes.js")(app);
require("./Backend/app/routes/employee.routes.js")(app);
require("./Backend/app/routes/purchase.routes.js")(app);
require("./Backend/app/routes/sale.routes.js")(app);

app.listen(2400, () => {
  console.log("Server has started at http://localhost:2400");
});