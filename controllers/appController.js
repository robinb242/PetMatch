// Import the model. 
var db = require("../models");

//Require express
var express = require("express");

// ROUTING
module.exports = function(app) {
    //HTML route for home page.
    app.get("/", function(req, res) {
        res.render("index");
      });

    //HTML route for quiz page.
    app.get("/quiz", function(req, res) {
        res.render("quiz");
        });
    
    //HTML route for pet search page.
    app.get("/petsearch", function(req, res) {
        res.render("search");
        });    

    app.get("/savedpets", function(req, res) {
        res.render("savedpets");
        });

        
}
