// Import the model. 
var db = require("../models");

//Require express
var express = require("express");

// LOAD DATA
// We are linking our routes to a "data" source.
// This data source holds an array of information on pet compatibility data.
var animal = require('../data/animals.js');
var myName = "";
var myPet = [];
var newMan = [];
var counter = 0;
var absoluteArray = [];
var compatable = [];
var newGuy = [],
  dummy = [],
  c = dummy.map(function (v, i) { return Math.abs(v - newGuy[i]); });

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

    //HTML route for authentication screen.
    app.get("/login", function(req, res) {
        res.render("authentication");
        });
    
    //HTML route for pet search page.
    app.get("/petsearch", function(req, res) {
        res.render("search");
        });  
        
    app.get("/api", function (req, res) {
        // console.log("TESTER!!!!" + myPet[0] + myPet[1]);
        res.json(myPet[0]);
        });
        
        app.post("/api/new", function (req, res) {       
        var userQuizValues = req.body;
        console.log("here is your scores array " + JSON.stringify(userQuizValues));
        pushTolist(userQuizValues);    
        });
 
        function grabInfo() {
            if (counter <= 19) {
                myPet = [];
                absoluteArray = [];
                dummy = [];
                dummy.push(animal[counter].ChildFriendly, animal[counter].Excr, animal[counter].Loyalty, animal[counter].Emotional, animal[counter].Cuddly, animal[counter].Backyard, animal[counter].Size, animal[counter].Energetic, animal[counter].Clean, animal[counter].catorDog)
                // console.log("this is the dummy array "+dummy); 
                getAbsolute();     
            }
            
            else {
                console.log("this is the end");
                counter = 0;
            }       
        }
        
        function getAbsolute() {       
            c = dummy.map(function (v, i) { return Math.abs(v - newGuy[i]); });
            
            absoluteArray.push(c);
            console.log("this is the absolute array: " + c);
            additup(c);
            
            counter++
            
            if (counter <= 19) {
                grabInfo();
            }
            else {
                return false;
            }
        }
        
        function additup() {        
            for (var i = 0, sum = 0; i < absoluteArray[0].length; sum += absoluteArray[0][i++])
            ;
                
            animal[counter].compatability = sum;
            console.log(animal[counter].name + " has a compatability level of: " + animal[counter].compatability);
            compatable.push(animal[counter].compatability);       
        }
        
        function grabCompatable() {
            var min = Math.min.apply(Math, compatable)
            console.log(min)
            myPet = [];
            for (f = 0; f < animal.length; f++) {
                if (animal[f].compatability === min) {
            
                myPet.push(animal[f].name);
                if (myPet > 1) {
                    console.log(myPet);
                }
                console.log(myPet[0] + ", is the most compatable animal :)")
                }
            }  
        }
        
        function pushTolist(userQuizValues) {
            newMan = [];
            newGuy = [];
            newMan.push(userQuizValues);
            
            // console.log("THIS IS YOUR OTHER DATA BUDDY   " + userQuizValues.question1);
            newGuy.push(userQuizValues.question1, userQuizValues.question2, userQuizValues.question3, userQuizValues.question4, userQuizValues.question5, userQuizValues.question6, userQuizValues.question7, userQuizValues.question8, userQuizValues.question9, userQuizValues.question10)
            console.log("THIS IS YOUR USERQUIZVALUES   " + newGuy);
            grabInfo();
            grabCompatable();
        
            console.log("this works in here!!!!!" + myPet);
            console.log("The counter is at: " + counter);
            counter = 0;
            console.log("new counter has been set to " + counter);
        
        }
        console.log("THIS IS YOUR USERQUIZVALUES   " + newGuy);
        
}
