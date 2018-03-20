// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Add a chirp
  // Get all books of a specific genre
  app.get("/api/petMatchResults", function(req, res) {
    if (req.params.animal) {
      .findAll({
        where: {
          animal: req.params.animal
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

