var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});