// Import the model. 
var db = require("../models");

//Require express
var express = require("express");


// ROUTING
module.exports = function(app) {
  
    // Create all our routes and set up logic within those routes where required.
    //GET route to get saved pets from database.
    app.get("/savedpets", function(req, res) {
        db.Pet.findAll({}).then(function(results) {
        console.log(results);
        res.render("savedpets", {
            pets: results,
        });
        }).catch(function(err){
        console.log(err);
        }); 
    }); 

    //POST route to create/add a pet to the database.
    app.post("/api/pets", function(req, res) {
        console.log("Pet Data:");
        console.log(req.body);
        console.log("Pet name: " + req.body.pet_name);
        db.Pet.create({
            pet_name: req.body.pet_name,
            liked: 1
    }).then(function(results) {
        console.log(results);
        //results here would be the newly created pet
        res.end();
    });
    });

    //DELETE route to remove pet from liked pets list.
    app.delete("/api/pets/:id", function(req, res) {
        db.Pet.destroy ({
        where: {
            id: req.params.id
        }
        }).then(function(result){
        res.end();
        });   
    });
}