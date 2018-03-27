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


    //GET route to get pet quiz results from database.
    app.get("/api/matches", function(req, res) {
        db.Match.findAll({}).then(function(matchResults) {
        console.log(matchResults);
        res.json(matchResults);
        }); 
    }); 
    
    //POST route to add match results to the database.
    app.post("/api/matches", function(req, res) {
        console.log("Match Data:");
        console.log(req.body);
        console.log("Pet match: " + req.body.pet_match);
        db.Match.create({
            pet_match: req.body.pet_match,
            pet_rating: req.body.pet_rating
    }).then(function(matchResults) {
        console.log(matchResults);
        //results here would be the newly created pet
        res.json(matchResults);
    });
    });

    //POST route to create/add a pet to the database.
    app.post("/api/pets", function(req, res) {
        console.log("Pet Data:");
        console.log(req.body);
        console.log("Pet name: " + req.body.pet_name);
        db.Pet.create({
            pet_name: req.body.pet_name,
            pet_shelter: req.body.pet_shelter,
            pet_email: req.body.pet_email,
            liked: 1,
            pet_photo: req.body.pet_photo
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

       //DELETE route to remove all of the user's pet quiz results from the saved pets page.
       app.delete("/api/matches/", function(req, res) {
        db.Match.destroy ({
            where: {
                // criteria
            }
        }).then(function(result){
        res.end();
        });   
    });
}