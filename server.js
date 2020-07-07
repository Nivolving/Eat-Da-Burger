var express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgersController")

//Create the Server
var app = express();

//Define the Port
var PORT = process.env.PORT || 8080;

//Use the public directory to serve the static files
app.use(express.static("public"));

//Add data processing middleware.
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

//Configure Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Include Routes
app.use(routes);

//Open listener to begin listening to requests
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  