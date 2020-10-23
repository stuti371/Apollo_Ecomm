const sql = require("./db.js");

const Image = function(image) {
  this.theimage = image.theimage;
};

Image.create = (newImage, result) => {
  sql.query("INSERT INTO images SET ?", newImage, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created image: ", { imageid: res.insertId, ...newImage });
    result(null, { imageid: res.insertId, ...newImage });
  });
};

Image.findById = (imageId, result) => {
  sql.query(`SELECT * FROM images WHERE imageid = ${imageId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found image: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Image.getAll = result => {
  sql.query("SELECT * FROM images", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("images: ", res);
    result(null, res);
  });
};

Image.updateById = (imageid, image, result) => {
  sql.query(
    "UPDATE images SET theimage = ? WHERE imageid = ?",
    [image.theimage, imageid],
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

      console.log("updated image: ", { imageid: imageid, ...image });
      result(null, { imageid: imageid, ...image });
    }
  );
};

Image.remove = (imageid, result) => {
  sql.query("DELETE FROM images WHERE imageid = ?", imageid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted image with id: ", imageid);
    result(null, res);
  });
};

Image.removeAll = result => {
  sql.query("DELETE FROM images", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} images`);
    result(null, res);
  });
};

module.exports = Image;