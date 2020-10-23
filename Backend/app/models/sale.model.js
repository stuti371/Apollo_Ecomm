const sql = require("./db.js");

const Sale = function(sale) {
  this.customerid = sale.customerid;
  this.productid = sale.productid;
  this.employeeid = sale.employeeid;
  this.dosale = sale.dosale;
};

Sale.create = (newSale, result) => {
  sql.query("INSERT INTO sales SET ?", newSale, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created sale: ", { saleid: res.insertId, ...newSale });
    result(null, { saleid: res.insertId, ...newSale });
  });
};

Sale.findById = (saleId, result) => {
  sql.query(`SELECT * FROM sales WHERE saleid = ${saleId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found sale: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Sale.getAll = result => {
  sql.query("SELECT * FROM sales", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sales: ", res);
    result(null, res);
  });
};

Sale.updateById = (saleid, sale, result) => {
  sql.query(
    "UPDATE sales SET customerid = ?, productid = ?, employeeid = ?, dosale =? WHERE saleid = ?",
    [sale.customerid, sale.productid, sale.employeeid, sale.dosale, saleid],
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

      console.log("updated sale: ", { saleid: saleid, ...sale });
      result(null, { saleid: saleid, ...sale });
    }
  );
};

Sale.remove = (saleid, result) => {
  sql.query("DELETE FROM sales WHERE saleid = ?", saleid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted category with id: ", saleid);
    result(null, res);
  });
};

Sale.removeAll = result => {
  sql.query("DELETE FROM sales", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} sales`);
    result(null, res);
  });
};

module.exports = Sale;