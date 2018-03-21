var express = require("express");
var bodyParser = require("body-parser");

//Requiring models
var db = require("./models");
var myPet = [];
var newMan = [];
var counter = 0;
var absoluteArray = [];
var compatable = [];
var newGuy = [],
  dummy = [],
  c = dummy.map(function (v, i) { return Math.abs(v - newGuy[i]); });
//Define port to listen on.
var PORT = process.env.PORT || 3000;

//App is using express.
var app = express();


var animal = [
  {
    routeName: "cat",
    name: "cat",
    role: "greatest friend",
    compatability: 0,
    ChildFriendly: 1,
    Excr: 2,
    Loyalty: 1,
    Emotional: 1,
    Cuddly: 1,
    Backyard: 2,
    Size: 1,
    Energetic: 2,
    Clean: 1,
    catorDog: 1
  },
  {
    routeName: "dobberman",
    name: "dobberman",
    role: "best friend",
    compatability: 0,
    ChildFriendly: 1,
    Excr: 1,
    Loyalty: 1,
    Emotional: 1,
    Cuddly: 1,
    Backyard: 1,
    Size: 3,
    Energetic: 1,
    Clean: 2,
    catorDog: 1
  },
  {
    routeName: "snake",
    name: "Anaconda",
    role: "not a friend",
    compatability: 0,
    ChildFriendly: 1,
    Excr: 1,
    Loyalty: 1,
    Emotional: 2,
    Cuddly: 2,
    Backyard: 1,
    Size: 3,
    Energetic: 2,
    Clean: 2,
    catorDog: 2
  }
];
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
require("./controllers/appController.js")(app);

app.get("/api", function (req, res) {
  // console.log("TESTER!!!!" + myPet[0] + myPet[1]);
  res.json(myPet);
});

app.post("/api/new", function (req, res) {

  var userQuizValues = req.body;
console.log("here is your scores array " + JSON.stringify(userQuizValues));
  pushTolist(userQuizValues);

});

function grabInfo() {
  if (counter <= 2) {
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

  if (counter <= 2) {
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

//App is listening...
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
});

