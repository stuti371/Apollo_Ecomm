const mysql = require("mysql");
const dbConfig = require("../configure/database.configure.js");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect(error => {
  if (error) throw error;
  console.log("Connection to the database was successful");
});

module.exports = connection;