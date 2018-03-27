// Read and set environment variables
require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");

//Requiring models
var db = require("./models");

//Define port to listen on.
var PORT = process.env.PORT || 3000;

//App is using express.
var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/petMatchController.js")(app);
require("./controllers/savedPetsController.js")(app);


//App is listening...
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
});

