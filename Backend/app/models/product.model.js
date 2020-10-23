const sql = require("./db.js");

const Product = function(product) {
  this.productprice = product.productprice;
  this.productpattern = product.productpattern;
  this.productcolour = product.productcolour;
  this.productdescription = product.productdescription;
  this.categoryid = product.categoryid;
  this.imageid = product.imageid;
  this.active = product.active;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created product: ", { productid: res.insertId, ...newProduct });
    result(null, { productid: res.insertId, ...newProduct });
  });
};

Product.findById = (productId, result) => {
  sql.query(`SELECT * FROM products WHERE productid = ${productId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Product.getAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Product.updateById = (productid, product, result) => {
  sql.query(
    "UPDATE products SET productprice = ?, productpattern = ?, productcolour = ?, active = ?, productdescription = ?, categoryid = ?, imageid = ? WHERE productid = ?",
    [product.productprice, product.productpattern, product.productcolour, product.active, product.productdescription, product.categoryid, product.imageid, productid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { productid: productid, ...product });
      result(null, { productid: productid, ...product });
    }
  );
};

Product.remove = (productid, result) => {
  sql.query("DELETE FROM products WHERE productid = ?", productid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted product with id: ", productid);
    result(null, res);
  });
};

Product.removeAll = result => {
  sql.query("DELETE FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} products`);
    result(null, res);
  });
};

module.exports = Product;