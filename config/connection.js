var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host:'e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'zpn7tx1jxooiz2iz',
    password:'ncdn83ex88wlersu',
    Port:3306,
    database : "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
