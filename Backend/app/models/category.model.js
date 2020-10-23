const sql = require("./db.js");

const Category = function(category) {
  this.categoryname = category.categoryname;
  this.categorydescription = category.categorydescription;
};

Category.create = (newCategory, result) => {
  sql.query("INSERT INTO categories SET ?", newCategory, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created category: ", { categoryid: res.insertId, ...newCategory });
    result(null, { categoryid: res.insertId, ...newCategory });
  });
};

Category.findById = (categoryId, result) => {
  sql.query(`SELECT * FROM categories WHERE categoryid = ${categoryId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found category: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Category.getAll = result => {
  sql.query("SELECT * FROM categories", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("categories: ", res);
    result(null, res);
  });
};

Category.updateById = (categoryid, category, result) => {
  sql.query(
    "UPDATE categories SET categoryname = ?, categorydescription = ? WHERE categoryid = ?",
    [category.categoryname, category.categorydescription, categoryid],
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

      console.log("updated category: ", { categoryid: categoryid, ...category });
      result(null, { categoryid: categoryid, ...category });
    }
  );
};

Category.remove = (categoryid, result) => {
  sql.query("DELETE FROM categories WHERE categoryid = ?", categoryid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted category with id: ", categoryid);
    result(null, res);
  });
};

Category.removeAll = result => {
  sql.query("DELETE FROM categories", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} categories`);
    result(null, res);
  });
};

module.exports = Category;