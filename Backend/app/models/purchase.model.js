const sql = require("./db.js");

const Purchase = function(purchase) {
  this.companyname = purchase.companyname;
  this.productid = purchase.productid;
  this.dopurchase = purchase.dopurchase;
};

Purchase.create = (newPurchase, result) => {
  sql.query("INSERT INTO purchases SET ?", newPurchase, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created purchase: ", { purchaseid: res.insertId, ...newPurchase });
    result(null, { purchaseid: res.insertId, ...newPurchase });
  });
};

Purchase.findById = (purchaseId, result) => {
  sql.query(`SELECT * FROM purchases WHERE purchaseid = ${purchaseId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found purchase: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Purchase.getAll = result => {
  sql.query("SELECT * FROM purchases", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("purchases: ", res);
    result(null, res);
  });
};

Purchase.updateById = (purchaseid, purchase, result) => {
  sql.query(
    "UPDATE purchases SET purchasename = ?, productid = ?, dopurchase = ? WHERE purchaseid = ?",
    [purchase.companyname, purchase.productid, purchase.dopurchase, purchaseid],
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

      console.log("updated purchase: ", { purchaseid: purchaseid, ...purchase });
      result(null, { purchaseid: purchaseid, ...purchase });
    }
  );
};

Purchase.remove = (purchaseid, result) => {
  sql.query("DELETE FROM purchases WHERE purchaseid = ?", purchaseid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted purchase with id: ", purchaseid);
    result(null, res);
  });
};

Purchase.removeAll = result => {
  sql.query("DELETE FROM purchases", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} purchases`);
    result(null, res);
  });
};

module.exports = Purchase;