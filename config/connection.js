var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host:'e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'lnj80fwxmqcnp83m',
    password:'m66mzxrlw59vu3w9',
    database : "m7josfhxnrnn1k6y"
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
